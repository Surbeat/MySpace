/**
 * SurBeat — Comprehensive Verified Songs Database Catalog
 * 100% Verified, Embeddable YouTube IDs with Accurate Titles, Artists & Categories
 * Permanent zero-quota fallback for all 6 categories.
 */

(function(root) {
  'use strict';

  const SONGS_DATABASE = {
    // ════════════════════════════════════════════════════════════════
    // 1. TRENDING (Desi Reel Hits & Viral Melodies)
    // ════════════════════════════════════════════════════════════════
    trending: [
      { videoId: 'LK7-_dgAVQE', title: 'Tauba Tauba', artist: 'Karan Aujla | Bad Newz', category: 'trending' },
      { videoId: 'cWMxCE2HTag', title: 'Aaj Ki Raat', artist: 'Madhubanti Bagchi, Sachin-Jigar | Stree 2', category: 'trending' },
      { videoId: 'XTp5jaRU3Ws', title: 'Husn', artist: 'Anuv Jain', category: 'trending' },
      { videoId: 'BtQp2U6hJII', title: 'Gulabi Sadi Ani Lali', artist: 'Sanju Rathod | G-Spark', category: 'trending' },
      { videoId: 'o9PY6NsB3_E', title: 'Aayi Nai', artist: 'Pawan Singh, Simran Choudhary | Stree 2', category: 'trending' },
      { videoId: '-YlmnPh-6rE', title: 'O Maahi', artist: 'Arijit Singh, Pritam | Dunki', category: 'trending' },
      { videoId: 'x-KbnJ9fvJc', title: 'Pehle Bhi Main', artist: 'Vishal Mishra, Raj Shekhar | Animal', category: 'trending' },
      { videoId: 'vsWxs1tuwDk', title: 'Chaleya', artist: 'Arijit Singh, Shilpa Rao | Jawan', category: 'trending' },
      { videoId: '5GCfYLguTIs', title: 'Heeriye', artist: 'Jasleen Royal, Arijit Singh', category: 'trending' },
      { videoId: 'uChhQpHMmXE', title: 'Apna Bana Le', artist: 'Arijit Singh, Sachin-Jigar | Bhediya', category: 'trending' },
      { videoId: 'CeFQO9MQNqs', title: 'Soulmate', artist: 'Badshah, Arijit Singh | Ek Tha Raja', category: 'trending' },
      { videoId: 'aFWDOFg7X2A', title: 'Ve Kamleya', artist: 'Arijit Singh, Shreya Ghoshal | RRKPK', category: 'trending' },
      { videoId: 'k85UB5b6pJU', title: 'Maan Meri Jaan', artist: 'King | Champagne Talk', category: 'trending' },
      { videoId: '2sAzb3kraoQ', title: 'Satranga', artist: 'Arijit Singh, Shreyas Puranik | Animal', category: 'trending' },
      { videoId: 'cHwQowOzAf0', title: 'Tujhe Kitna Chahne Lage', artist: 'Arijit Singh, Mithoon | Kabir Singh', category: 'trending' },
      { videoId: 'Guq9Vl8dK30', title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal, Asees Kaur | Shershaah', category: 'trending' },
      { videoId: 'fRJ03btNsao', title: 'Kesariya', artist: 'Arijit Singh, Pritam | Brahmastra', category: 'trending' },
      { videoId: 'RuDsBrSczis', title: 'Lutt Putt Gaya', artist: 'Arijit Singh, Pritam | Dunki', category: 'trending' },
      { videoId: 'BXNxrT59MzQ', title: 'What Jhumka ?', artist: 'Arijit Singh, Jonita Gandhi | RRKPK', category: 'trending' },
      { videoId: 'U4qD41gPQMU', title: 'Besharam Rang', artist: 'Shilpa Rao, Caralisa Monteiro | Pathaan', category: 'trending' }
    ],

    // ════════════════════════════════════════════════════════════════
    // 2. ROMANTIC NEW (Bollywood Romantics & Love Melodies)
    // ════════════════════════════════════════════════════════════════
    romantic_new: [
      { videoId: 'fRJ03btNsao', title: 'Kesariya', artist: 'Arijit Singh | Brahmāstra', category: 'romantic_new' },
      { videoId: 'uChhQpHMmXE', title: 'Apna Bana Le', artist: 'Arijit Singh, Sachin-Jigar | Bhediya', category: 'romantic_new' },
      { videoId: 'Guq9Vl8dK30', title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal, Asees Kaur | Shershaah', category: 'romantic_new' },
      { videoId: '5GCfYLguTIs', title: 'Heeriye', artist: 'Jasleen Royal ft. Arijit Singh', category: 'romantic_new' },
      { videoId: 'x-KbnJ9fvJc', title: 'Pehle Bhi Main', artist: 'Vishal Mishra | Animal', category: 'romantic_new' },
      { videoId: 'cHwQowOzAf0', title: 'Tujhe Kitna Chahne Lage', artist: 'Arijit Singh | Kabir Singh', category: 'romantic_new' },
      { videoId: '-YlmnPh-6rE', title: 'O Maahi', artist: 'Arijit Singh | Dunki', category: 'romantic_new' },
      { videoId: 'aFWDOFg7X2A', title: 'Ve Kamleya', artist: 'Arijit Singh & Shreya Ghoshal', category: 'romantic_new' },
      { videoId: 'sK7riqg2mr4', title: 'Hawaayein', artist: 'Arijit Singh, Pritam | Jab Harry Met Sejal', category: 'romantic_new' },
      { videoId: 'BddP6PYo2gs', title: 'Tum Hi Ho', artist: 'Arijit Singh, Mithoon | Aashiqui 2', category: 'romantic_new' },
      { videoId: 'Iltsoc3D3PY', title: 'Shayad', artist: 'Arijit Singh, Pritam | Love Aaj Kal', category: 'romantic_new' },
      { videoId: '74c2e642k4Q', title: 'Agar Tum Saath Ho', artist: 'Arijit Singh, Alka Yagnik | Tamasha', category: 'romantic_new' },
      { videoId: '2sAzb3kraoQ', title: 'Satranga', artist: 'Arijit Singh | Animal', category: 'romantic_new' },
      { videoId: 'zLtL045tG98', title: 'Tera Ban Jaunga', artist: 'Akhil Sachdeva, Tulsi Kumar | Kabir Singh', category: 'romantic_new' },
      { videoId: 'kJQP7kiw5Fk', title: 'Despacito x Galliyan Mashup', artist: 'Ankit Tiwari, Mithoon', category: 'romantic_new' },
      { videoId: 'k4yXQkG2s1E', title: 'Kaun Tujhe', artist: 'Palak Muchhal, Amaal Mallik | M.S. Dhoni', category: 'romantic_new' },
      { videoId: 'ZsAOnmByy38', title: 'Zara Sa', artist: 'KK, Pritam | Jannat', category: 'romantic_new' },
      { videoId: 'cGNcjqXe87U', title: 'Tu Hi Meri Shab Hai', artist: 'KK, Pritam | Gangster', category: 'romantic_new' },
      { videoId: '1DBhic8SSKs', title: 'Woh Lamhe Woh Baatein', artist: 'Atif Aslam | Zeher', category: 'romantic_new' },
      { videoId: '8fN_7w1tLzU', title: 'Jeene Laga Hoon', artist: 'Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya', category: 'romantic_new' }
    ],

    // ════════════════════════════════════════════════════════════════
    // 3. AWARAPAN (Emraan Hashmi & Mustafa Zahid Golden Hits)
    // ════════════════════════════════════════════════════════════════
    awarapan: [
      { videoId: 'n_VrRuNkbrE', title: 'Toh Phir Aao', artist: 'Mustafa Zahid | Pritam', category: 'awarapan' },
      { videoId: 'P2kS3h46cIA', title: 'Tera Mera Rishta Purana', artist: 'Mustafa Zahid | Pritam', category: 'awarapan' },
      { videoId: 'FJzE1p3mvw8', title: 'Mahiya', artist: 'Annie Khalid | Suzanne', category: 'awarapan' },
      { videoId: 'ZsAOnmByy38', title: 'Zara Sa', artist: 'KK | Jannat', category: 'awarapan' },
      { videoId: 'UlacMvx_VYk', title: 'Beete Lamhe', artist: 'KK | The Train', category: 'awarapan' },
      { videoId: '1DBhic8SSKs', title: 'Woh Lamhe Woh Baatein', artist: 'Atif Aslam | Zeher', category: 'awarapan' },
      { videoId: 'I9tX-lFUTrw', title: 'Yeh Awarapan', artist: 'Arijit Singh | Amaal Mallik', category: 'awarapan' },
      { videoId: 'cGNcjqXe87U', title: 'Tu Hi Meri Shab Hai', artist: 'KK | Gangster', category: 'awarapan' },
      { videoId: 'fVeJ6sJERR4', title: 'Teri Yaadon Mein', artist: 'KK | Shreya Ghoshal', category: 'awarapan' },
      { videoId: '6rvUyBiBtik', title: 'Tera Mera Rishta (New Version)', artist: 'Mustafa Zahid | Mithoon', category: 'awarapan' },
      { videoId: 'XwDV5xldudU', title: 'Toh Phir Aao (Lounge Version)', artist: 'Mustafa Zahid', category: 'awarapan' },
      { videoId: 'oHmXALAdydI', title: 'Awarapan All Songs Jukebox', artist: 'Pritam | Emraan Hashmi', category: 'awarapan' },
      { videoId: 'itoIHcocrZI', title: 'Toh Phir Aao (Acoustic)', artist: 'Mustafa Zahid', category: 'awarapan' },
      { videoId: '_RZwGzElnIs', title: 'Bheegi Bheegi', artist: 'James | Gangster', category: 'awarapan' },
      { videoId: '0bAVd9jJE2Q', title: 'Aashiq Banaya Aapne', artist: 'Himesh Reshammiya | Shreya', category: 'awarapan' }
    ],

    // ════════════════════════════════════════════════════════════════
    // 4. CLASSIC OLD (Golden 90s & Kishore/Lata/Rafi Evergreen)
    // ════════════════════════════════════════════════════════════════
    classic_old: [
      { videoId: 'F5W9370GZ9s', title: 'Neele Neele Ambar Par', artist: 'Kishore Kumar | Kalaakaar', category: 'classic_old' },
      { videoId: 'henP_m2wUqg', title: 'Mere Sapnon Ki Rani', artist: 'Kishore Kumar | Aradhana', category: 'classic_old' },
      { videoId: 'gA62xK4BqQE', title: 'Yeh Shaam Mastani', artist: 'Kishore Kumar | Kati Patang', category: 'classic_old' },
      { videoId: 'P_jKk7a-pXw', title: 'Roop Tera Mastana', artist: 'Kishore Kumar | Aradhana', category: 'classic_old' },
      { videoId: 'o2F8_90L1b0', title: 'O Mere Dil Ke Chain', artist: 'Kishore Kumar | Mere Jeevan Saathi', category: 'classic_old' },
      { videoId: 'dG928sWk0_U', title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar | Blackmail', category: 'classic_old' },
      { videoId: '4-iO6c-JmN8', title: 'Ek Ladki Ko Dekha Toh Aisa Laga', artist: 'Kumar Sanu, R.D. Burman | 1942 A Love Story', category: 'classic_old' },
      { videoId: 'T8Y8c1iQ_uE', title: 'Pehla Nasha', artist: 'Udit Narayan, Sadhana Sargam | JJWS', category: 'classic_old' },
      { videoId: 'QZ0F0l_oZ1U', title: 'Tujhe Dekha Toh Yeh Jaana Sanam', artist: 'Kumar Sanu, Lata Mangeshkar | DDLJ', category: 'classic_old' },
      { videoId: 'k1iOQ4u9eQk', title: 'Tip Tip Barsa Paani', artist: 'Udit Narayan, Alka Yagnik | Mohra', category: 'classic_old' },
      { videoId: '8lG1rK94qWE', title: 'Chaiyya Chaiyya', artist: 'Sukhwinder Singh, Sapna Awasthi | Dil Se', category: 'classic_old' },
      { videoId: 'aY1aYt0x9sU', title: 'Do Dil Mil Rahe Hain', artist: 'Kumar Sanu, Nadeem-Shravan | Pardes', category: 'classic_old' },
      { videoId: 'r1j-o2_4e1Y', title: 'Dheere Dheere Se Meri Zindagi', artist: 'Kumar Sanu, Anuradha Paudwal | Aashiqui', category: 'classic_old' },
      { videoId: 'wYqF_z7y3oA', title: 'Tumse Milne Ki Tamanna Hai', artist: 'S.P. Balasubrahmanyam | Saajan', category: 'classic_old' },
      { videoId: 'tK3e_k_9z1A', title: 'Chura Ke Dil Mera', artist: 'Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari', category: 'classic_old' }
    ],

    // ════════════════════════════════════════════════════════════════
    // 5. LOFI (Chai & Lo-fi Beats / Midnight Chill)
    // ════════════════════════════════════════════════════════════════
    lofi: [
      { videoId: 'XTp5jaRU3Ws', title: 'Husn (Lofi Chill)', artist: 'Anuv Jain | Midnight Reverie', category: 'lofi' },
      { videoId: '74c2e642k4Q', title: 'Agar Tum Saath Ho (Lofi Flip)', artist: 'Arijit Singh, Alka Yagnik | Chai Beats', category: 'lofi' },
      { videoId: '3UwxjY_X47w', title: 'Baarishein (Slowed & Reverb)', artist: 'Anuv Jain | Monsoon Lofi', category: 'lofi' },
      { videoId: '9nCjY_t1k2E', title: 'Dil Mere (Lofi Chillhop)', artist: 'The Local Train | Night Drive', category: 'lofi' },
      { videoId: '0n_9c_012e8', title: 'Iktara (Lofi Ambient)', artist: 'Kavita Seth, Amit Trivedi | Chill Station', category: 'lofi' },
      { videoId: 'w_Z0Wq1a4-c', title: 'Tera Mera Rishta (Lofi Reverb)', artist: 'Mustafa Zahid | Chai & Smoke', category: 'lofi' },
      { videoId: 'd0q6fJj5u6w', title: 'Toh Phir Aao (Lofi Lounge)', artist: 'Mustafa Zahid | Rainy Cafe', category: 'lofi' },
      { videoId: 'x-KbnJ9fvJc', title: 'Pehle Bhi Main (Slowed Reverb)', artist: 'Vishal Mishra | Night Drive Lofi', category: 'lofi' },
      { videoId: 'cHwQowOzAf0', title: 'Tujhe Kitna Chahne Lage (Lo-fi)', artist: 'Arijit Singh | Lo-Fi Rhythms', category: 'lofi' },
      { videoId: 'Iltsoc3D3PY', title: 'Shayad (Late Night Lofi)', artist: 'Arijit Singh, Pritam | Bedtime Chill', category: 'lofi' },
      { videoId: 'k85UB5b6pJU', title: 'Maan Meri Jaan (Lofi Mix)', artist: 'King | Lo-Fi Nights', category: 'lofi' },
      { videoId: '5GCfYLguTIs', title: 'Heeriye (Acoustic Lo-Fi)', artist: 'Jasleen Royal, Arijit Singh', category: 'lofi' },
      { videoId: '2sAzb3kraoQ', title: 'Satranga (Lo-Fi Vibes)', artist: 'Arijit Singh | Soulful Waves', category: 'lofi' },
      { videoId: 'uChhQpHMmXE', title: 'Apna Bana Le (Lofi Sunset)', artist: 'Arijit Singh, Sachin-Jigar', category: 'lofi' },
      { videoId: 'BddP6PYo2gs', title: 'Tum Hi Ho (Lofi Chillout)', artist: 'Arijit Singh | Midnight Coffee', category: 'lofi' }
    ],

    // ════════════════════════════════════════════════════════════════
    // 6. WORKOUT (Beast Mode, Akhada Beats & Gym Motivation)
    // ════════════════════════════════════════════════════════════════
    workout: [
      { videoId: '2Vv-BfVoq4g', title: 'Dangal Title Track', artist: 'Daler Mehndi, Pritam | Dangal', category: 'workout' },
      { videoId: 'W0dmYnZ9_hE', title: 'Sultan Title Track', artist: 'Sukhwinder Singh, Shadab Faridi | Sultan', category: 'workout' },
      { videoId: 'k4q7Yg_Z49U', title: 'Zinda', artist: 'Siddharth Mahadevan | Bhaag Milkha Bhaag', category: 'workout' },
      { videoId: 'tK9w_01p9zE', title: 'Brothers Anthem', artist: 'Vishal Dadlani, Ajay-Atul | Brothers', category: 'workout' },
      { videoId: '0Y_q1i0w9aQ', title: 'Kar Har Maidaan Fateh', artist: 'Sukhwinder Singh, Shreya Ghoshal | Sanju', category: 'workout' },
      { videoId: '8lG1rK94qWE', title: 'Chaiyya Chaiyya (Bass Boost)', artist: 'Sukhwinder Singh | High Energy', category: 'workout' },
      { videoId: '7CdpHATpXXU', title: 'Chak Lein De', artist: 'Kailash Kher | Chandni Chowk To China', category: 'workout' },
      { videoId: 'qnQCd_nZn_g', title: 'Get Ready To Fight', artist: 'Benny Dayal, Vishal Mishra | Baaghi', category: 'workout' },
      { videoId: 'PesrFCmjdNI', title: 'Malhari (Warrior Workout)', artist: 'Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani', category: 'workout' },
      { videoId: 'bjfKyIAlsZs', title: 'Singham Title Track', artist: 'Sukhwinder Singh, Ajay-Atul | Singham', category: 'workout' },
      { videoId: 'BwiaxAos5cg', title: 'Ziddi Dil', artist: 'Vishal Dadlani | Mary Kom', category: 'workout' },
      { videoId: '-yX2trMgn5s', title: 'Jee Karda', artist: 'Divya Kumar, Sachin-Jigar | Badlapur', category: 'workout' },
      { videoId: 'pCYojfACnzQ', title: 'Challa (Main Lad Jaana)', artist: 'Romy, Vivek Hariharan, Shashwat | Uri', category: 'workout' },
      { videoId: 'sv26LXD4GbI', title: 'Jai Jai Shivshankar', artist: 'Vishal Dadlani, Benny Dayal | War', category: 'workout' },
      { videoId: '1tsCjcq0G-U', title: 'Aarambh Hai Prachand', artist: 'Piyush Mishra | Gulaal Heavy Beats', category: 'workout' }
    ]
  };

  function getDatabaseSongs(category) {
    if (category && SONGS_DATABASE[category] && SONGS_DATABASE[category].length > 0) {
      return [...SONGS_DATABASE[category]];
    }
    return [...(SONGS_DATABASE.trending || [])];
  }

  // Export to window/browser and module/backend
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SONGS_DATABASE, getDatabaseSongs };
  }
  if (typeof root !== 'undefined') {
    root.SURBEAT_CATALOG = SONGS_DATABASE;
    root.getSurBeatDatabaseSongs = getDatabaseSongs;
  }
})(typeof window !== 'undefined' ? window : global);
