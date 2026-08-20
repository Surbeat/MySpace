/**
 * SurBeat 3D Vinyl Engine
 * Three.js powered turntable: rotating vinyl record, tonearm,
 * orbit rings, floating particles, mouse parallax.
 * Works as a plain <script> loaded AFTER Three.js CDN.
 */

(function () {
  'use strict';

  // ── Config ────────────────────────────────────────────────────────────────
  const CFG = {
    particleCount: 180,
    particleCountMobile: 60,
    recordRadius: 2.6,
    recordThickness: 0.12,
    grooveCount: 22,
    labelRadius: 0.85,
    vinylRPM: 33.3,
    tonearmRestAngle: -0.52,   // radians (resting position off the record)
    tonearmPlayAngle: -0.28,   // radians (playing position, needle on groove)
    cameraZ: 7.5,
    mouseLerpFactor: 0.04,
    glowColor: 0xffaa00,
    cyanColor: 0x00e5ff,
    grooveColor: 0x1a0a14,
    vinylDarkColor: 0x0d0208,
    vinylShineColor: 0x251020,
    labelBgColor: 0x200a18,
    labelGoldColor: 0xffaa00,
  };

  // Mobile detection
  const isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent) ||
    window.innerWidth < 768;

  // State
  let scene, camera, renderer, animId;
  let vinylGroup, recordMesh, tonearmGroup, labelMesh;
  let orbitRings = [];
  let particles, particlePositions;
  let isPlaying = false;
  let vinylRotY = 0;
  let tonearmCurrentAngle = CFG.tonearmRestAngle;
  let tonearmTargetAngle = CFG.tonearmRestAngle;
  let mouseTarget = { x: 0, y: 0 };
  let mouseCurrent = { x: 0, y: 0 };
  let isWebGLAvailable = false;
  let lastTime = 0;
  let categoryColors = {
    trending: 0xffaa00,
    workout: 0xff4444,
    awarapan: 0xff6b9d,
    romantic_new: 0xff6eb4,
    classic_old: 0xffd700,
    lofi: 0x00e5ff,
  };
  let currentGlowColor = CFG.glowColor;

  // ── WebGL Check ──────────────────────────────────────────────────────────
  function checkWebGL() {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  function init() {
    const container = document.getElementById('vinyl-canvas-container');
    if (!container) return;

    isWebGLAvailable = checkWebGL();

    if (!isWebGLAvailable || typeof THREE === 'undefined') {
      console.warn('SurBeat: WebGL/Three.js not available, using CSS 3D fallback');
      container.classList.add('css-fallback');
      return;
    }

    // Scene
    scene = new THREE.Scene();

    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 2.2, CFG.cameraZ);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    buildLighting();

    // Objects
    buildVinylRecord();
    buildTonearm();
    buildOrbitRings();
    buildParticles();

    // Events
    window.addEventListener('resize', onResize);
    if (!isMobile) {
      document.addEventListener('mousemove', onMouseMove, { passive: true });
    } else {
      document.addEventListener('touchmove', onTouchMove, { passive: true });
    }

    // Start loop
    animate(0);
  }

  // ── Lighting ─────────────────────────────────────────────────────────────
  function buildLighting() {
    const ambient = new THREE.AmbientLight(0x2a1020, 0.6);
    scene.add(ambient);

    // Key light — warm gold from upper-left
    const keyLight = new THREE.DirectionalLight(0xffaa00, 1.2);
    keyLight.position.set(-3, 5, 4);
    if (!isMobile) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(512, 512);
    }
    scene.add(keyLight);

    // Fill light — cool cyan from lower right
    const fillLight = new THREE.DirectionalLight(0x00e5ff, 0.35);
    fillLight.position.set(4, -2, 3);
    scene.add(fillLight);

    // Back rim light
    const rimLight = new THREE.DirectionalLight(0xff3388, 0.25);
    rimLight.position.set(0, -3, -4);
    scene.add(rimLight);

    // Point glow under record
    const underGlow = new THREE.PointLight(0xffaa00, 1.5, 8);
    underGlow.position.set(0, -1.5, 0);
    scene.add(underGlow);
  }

  // ── Vinyl Record ─────────────────────────────────────────────────────────
  function buildVinylRecord() {
    vinylGroup = new THREE.Group();
    vinylGroup.rotation.x = Math.PI * 0.12; // slight tilt toward camera

    // — Outer record body —
    const recordGeo = new THREE.CylinderGeometry(
      CFG.recordRadius, CFG.recordRadius, CFG.recordThickness, 80, 1, false
    );
    const recordMat = new THREE.MeshStandardMaterial({
      color: CFG.vinylDarkColor,
      roughness: 0.08,
      metalness: 0.85,
      envMapIntensity: 1.2,
    });
    recordMesh = new THREE.Mesh(recordGeo, recordMat);
    recordMesh.receiveShadow = !isMobile;
    recordMesh.castShadow = !isMobile;
    vinylGroup.add(recordMesh);

    // — Grooves (concentric rings) —
    buildGrooves();

    // — Center label —
    buildCenterLabel();

    // — Edge highlight ring —
    const edgeGeo = new THREE.TorusGeometry(CFG.recordRadius, 0.025, 8, 80);
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.9,
    });
    const edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
    edgeMesh.rotation.x = Math.PI / 2;
    vinylGroup.add(edgeMesh);

    scene.add(vinylGroup);
  }

  function buildGrooves() {
    const grooveMat = new THREE.MeshStandardMaterial({
      color: CFG.grooveColor,
      roughness: 0.9,
      metalness: 0.1,
    });

    for (let i = 0; i < CFG.grooveCount; i++) {
      const t = i / CFG.grooveCount;
      const r = CFG.labelRadius + 0.2 + t * (CFG.recordRadius - CFG.labelRadius - 0.25);
      const grooveGeo = new THREE.TorusGeometry(r, 0.008, 4, 80);
      const groove = new THREE.Mesh(grooveGeo, grooveMat);
      groove.rotation.x = Math.PI / 2;
      groove.position.y = CFG.recordThickness / 2 + 0.001;
      vinylGroup.add(groove);
    }

    // Shiny reflection stripe
    const stripeMat = new THREE.MeshStandardMaterial({
      color: CFG.vinylShineColor,
      roughness: 0.02,
      metalness: 1.0,
    });
    const stripeR = CFG.labelRadius + 0.5;
    const stripeGeo = new THREE.TorusGeometry(stripeR, 0.04, 6, 80);
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.rotation.x = Math.PI / 2;
    stripe.position.y = CFG.recordThickness / 2 + 0.002;
    vinylGroup.add(stripe);
  }

  function buildCenterLabel() {
    // Label disc
    const labelGeo = new THREE.CylinderGeometry(
      CFG.labelRadius, CFG.labelRadius, CFG.recordThickness + 0.01, 60
    );
    const labelMat = new THREE.MeshStandardMaterial({
      color: CFG.labelBgColor,
      roughness: 0.4,
      metalness: 0.3,
      emissive: 0x110008,
      emissiveIntensity: 0.5,
    });
    labelMesh = new THREE.Mesh(labelGeo, labelMat);
    vinylGroup.add(labelMesh);

    // Gold ring around label
    const ringGeo = new THREE.TorusGeometry(CFG.labelRadius, 0.02, 6, 60);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 1.0,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = CFG.recordThickness / 2 + 0.012;
    vinylGroup.add(ring);

    // Center spindle hole
    const spindleGeo = new THREE.CylinderGeometry(0.05, 0.05, CFG.recordThickness + 0.05, 16);
    const spindleMat = new THREE.MeshStandardMaterial({
      color: 0x050002,
      roughness: 0.5,
      metalness: 0.2,
    });
    const spindle = new THREE.Mesh(spindleGeo, spindleMat);
    vinylGroup.add(spindle);

    // Emissive label glow disc (top face only)
    const glowGeo = new THREE.CircleGeometry(CFG.labelRadius - 0.05, 60);
    const glowMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 0.15,
      roughness: 1.0,
      metalness: 0,
      transparent: true,
      opacity: 0.25,
    });
    const glowDisc = new THREE.Mesh(glowGeo, glowMat);
    glowDisc.rotation.x = -Math.PI / 2;
    glowDisc.position.y = CFG.recordThickness / 2 + 0.013;
    vinylGroup.add(glowDisc);
  }

  // ── Tonearm ───────────────────────────────────────────────────────────────
  function buildTonearm() {
    tonearmGroup = new THREE.Group();
    tonearmGroup.position.set(3.2, 0.5, 0.5);

    // Pivot base
    const pivotGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const pivotMat = new THREE.MeshStandardMaterial({
      color: 0x8a7060,
      roughness: 0.2,
      metalness: 0.9,
    });
    const pivot = new THREE.Mesh(pivotGeo, pivotMat);
    tonearmGroup.add(pivot);

    // Arm body
    const armGeo = new THREE.CylinderGeometry(0.04, 0.025, 3.2, 12);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0xb09070,
      roughness: 0.15,
      metalness: 0.95,
    });
    const arm = new THREE.Mesh(armGeo, armMat);
    arm.rotation.z = Math.PI / 2;
    arm.position.x = -1.6;
    arm.position.y = 0.05;
    tonearmGroup.add(arm);

    // Headshell (cartridge holder)
    const headGeo = new THREE.BoxGeometry(0.35, 0.06, 0.18);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x1a1218,
      roughness: 0.3,
      metalness: 0.8,
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(-3.1, 0.05, 0);
    tonearmGroup.add(head);

    // Needle/stylus
    const needleGeo = new THREE.CylinderGeometry(0.01, 0.005, 0.22, 8);
    const needleMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 1.0,
    });
    const needle = new THREE.Mesh(needleGeo, needleMat);
    needle.position.set(-3.1, -0.14, 0);
    tonearmGroup.add(needle);

    // Counterweight (back end)
    const counterGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.22, 14);
    const counterMat = new THREE.MeshStandardMaterial({
      color: 0x606060,
      roughness: 0.1,
      metalness: 1.0,
    });
    const counter = new THREE.Mesh(counterGeo, counterMat);
    counter.rotation.z = Math.PI / 2;
    counter.position.set(0.55, 0.05, 0);
    tonearmGroup.add(counter);

    tonearmGroup.rotation.y = CFG.tonearmRestAngle;
    scene.add(tonearmGroup);
  }

  // ── Orbit Rings ──────────────────────────────────────────────────────────
  function buildOrbitRings() {
    const ringDefs = [
      { r: 3.4, thickness: 0.012, color: 0xffaa00, emissiveI: 0.4, opacity: 0.35 },
      { r: 4.0, thickness: 0.008, color: 0x00e5ff, emissiveI: 0.3, opacity: 0.22 },
      { r: 4.7, thickness: 0.006, color: 0xffaa00, emissiveI: 0.2, opacity: 0.14 },
    ];

    ringDefs.forEach((def, i) => {
      const geo = new THREE.TorusGeometry(def.r, def.thickness, 8, 120);
      const mat = new THREE.MeshStandardMaterial({
        color: def.color,
        emissive: def.color,
        emissiveIntensity: def.emissiveI,
        roughness: 0.0,
        metalness: 1.0,
        transparent: true,
        opacity: def.opacity,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = Math.PI / 2;
      ring.userData.baseOpacity = def.opacity;
      ring.userData.phase = i * 1.2;
      orbitRings.push(ring);
      scene.add(ring);
    });
  }

  // ── Particles ─────────────────────────────────────────────────────────────
  function buildParticles() {
    const count = isMobile ? CFG.particleCountMobile : CFG.particleCount;
    const geo = new THREE.BufferGeometry();
    particlePositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.5;

      particlePositions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * 0.6;
      particlePositions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);

      // Alternate gold / cyan / white
      const type = Math.random();
      if (type < 0.5) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.67; colors[i * 3 + 2] = 0.0; // gold
      } else if (type < 0.75) {
        colors[i * 3] = 0.0; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 1.0; // cyan
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 0.9; // warm white
      }
      sizes[i] = 0.025 + Math.random() * 0.045;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    particles = new THREE.Points(geo, mat);
    scene.add(particles);
  }

  // ── Animation Loop ────────────────────────────────────────────────────────
  function animate(time) {
    animId = requestAnimationFrame(animate);
    const dt = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;
    const t = time * 0.001;

    // Vinyl rotation
    if (isPlaying) {
      vinylRotY += (CFG.vinylRPM / 60) * Math.PI * 2 * dt;
    } else {
      // slow deceleration
      vinylRotY += (CFG.vinylRPM / 60) * Math.PI * 2 * dt * 0.04;
    }
    if (vinylGroup) vinylGroup.rotation.y = vinylRotY;

    // Tonearm easing
    tonearmCurrentAngle += (tonearmTargetAngle - tonearmCurrentAngle) * 0.025;
    if (tonearmGroup) tonearmGroup.rotation.y = tonearmCurrentAngle;

    // Mouse parallax — smooth camera shift
    mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * CFG.mouseLerpFactor;
    mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * CFG.mouseLerpFactor;
    if (camera) {
      camera.position.x = mouseCurrent.x * 1.4;
      camera.position.y = 2.2 + mouseCurrent.y * 0.8;
      camera.lookAt(0, 0, 0);
    }

    // Orbit rings breathing
    orbitRings.forEach((ring, i) => {
      const pulse = isPlaying
        ? 0.5 + Math.sin(t * 2.5 + ring.userData.phase) * 0.5
        : 0.3 + Math.sin(t * 0.8 + ring.userData.phase) * 0.15;
      ring.material.opacity = ring.userData.baseOpacity * pulse;
      ring.rotation.z = t * 0.08 * (i % 2 === 0 ? 1 : -1);
    });

    // Particles drift
    if (particles && particlePositions) {
      const pos = particles.geometry.attributes.position.array;
      const count = pos.length / 3;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        pos[idx + 1] += Math.sin(t + i * 0.7) * 0.0008;
        pos[idx] += Math.cos(t * 0.6 + i * 0.5) * 0.0005;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = t * 0.025;
      particles.material.opacity = isPlaying ? 0.75 : 0.45;
    }

    // Label emissive pulse
    if (labelMesh && isPlaying) {
      labelMesh.material.emissiveIntensity = 0.3 + Math.sin(t * 3) * 0.15;
    }

    renderer.render(scene, camera);
  }

  // ── Event Handlers ────────────────────────────────────────────────────────
  function onMouseMove(e) {
    mouseTarget.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseTarget.y = -(e.clientY / window.innerHeight - 0.5) * 1.5;
  }

  function onTouchMove(e) {
    if (!e.touches[0]) return;
    mouseTarget.x = (e.touches[0].clientX / window.innerWidth - 0.5) * 1.5;
    mouseTarget.y = -(e.touches[0].clientY / window.innerHeight - 0.5) * 1.0;
  }

  function onResize() {
    const container = document.getElementById('vinyl-canvas-container');
    if (!container || !camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  // ── Public API ────────────────────────────────────────────────────────────
  window.setVinylPlaying = function (playing) {
    isPlaying = playing;
    tonearmTargetAngle = playing ? CFG.tonearmPlayAngle : CFG.tonearmRestAngle;

    // Also update the CSS fallback disc
    const cssDisc = document.getElementById('discCore');
    if (cssDisc) {
      if (playing) cssDisc.classList.add('playing');
      else cssDisc.classList.remove('playing');
    }
    const cssTonearm = document.getElementById('tonearm');
    if (cssTonearm) {
      if (playing) cssTonearm.classList.add('playing');
      else cssTonearm.classList.remove('playing');
    }
  };

  window.setVinylCategory = function (category) {
    const targetHex = categoryColors[category] || 0xffaa00;
    currentGlowColor = targetHex;
    // Update orbit ring colors
    if (orbitRings[0]) {
      orbitRings[0].material.color.setHex(targetHex);
      orbitRings[0].material.emissive.setHex(targetHex);
    }
  };

  // ── Boot ──────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      // Wait for Three.js to load
      if (typeof THREE !== 'undefined') {
        init();
      } else {
        // Poll for THREE
        let tries = 0;
        const poll = setInterval(function () {
          tries++;
          if (typeof THREE !== 'undefined') {
            clearInterval(poll);
            init();
          } else if (tries > 40) {
            clearInterval(poll);
            console.warn('SurBeat: Three.js not loaded, using CSS fallback');
          }
        }, 100);
      }
    });
  } else {
    // DOM already loaded
    if (typeof THREE !== 'undefined') {
      init();
    } else {
      let tries = 0;
      const poll = setInterval(function () {
        tries++;
        if (typeof THREE !== 'undefined') {
          clearInterval(poll);
          init();
        } else if (tries > 40) {
          clearInterval(poll);
          console.warn('SurBeat: Three.js not loaded, using CSS fallback');
        }
      }, 100);
    }
  }
})();
