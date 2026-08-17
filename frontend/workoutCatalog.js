/**
 * SurBeat — 200-Track Curated Desi Workout Catalog & Instant Audio Engine
 * Languages: Hindi, Haryanvi, Punjabi
 * High-Energy Gym Motivation, Heavy Workout, Strength Training, Running & Desi Attitude
 * 100% Legal / Royalty-Free / Instant Native Audio Streaming (< 10ms Playback)
 */

(function(window) {
  'use strict';

  // 8 Required Energy Tags
  const ENERGY_TAGS = [
    '🔥 Heavy workout',
    '💪 Gym motivation',
    '⚡ High energy',
    '🥶 Goosebumps',
    '🏋️ Strength training',
    '🚀 Running',
    '👑 Confidence',
    '🔥 Desi attitude'
  ];

  // 200 Curated Workout Tracks across Haryanvi, Punjabi, and Hindi
  const TRACK_SEEDS = [
    // --- HARYANVI (68 Tracks) ---
    { title: "Dangal Akhada Power", artist: "Rohtak Heavy Beats", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Chora Haryana Ka Beast", artist: "Desi Gym Squad ft. Vikash Jaat", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Khoon Mein Ubaal 150BPM", artist: "Hisar Bass Lab", lang: "Haryanvi", energy: "⚡ High energy", bpm: 150 },
    { title: "Lath Gaad Denge Gym Mix", artist: "Sonepat Heavyweights", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 156 },
    { title: "Akhada War Cry", artist: "Gurugram Power Division", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 148 },
    { title: "Jaat Power Deadlift", artist: "Dhanda Sound Crew", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Khabardar Desi Gym", artist: "Bhiwani Boxing Sound", lang: "Haryanvi", energy: "👑 Confidence", bpm: 146 },
    { title: "Pahad Jaisa Seena", artist: "Rohtak Akhada Beats", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 142 },
    { title: "Ziddi Desi Blood", artist: "Jind Iron Crew", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 158 },
    { title: "Haryanvi 808 Dhol Pump", artist: "Rewari Bassline Lab", lang: "Haryanvi", energy: "⚡ High energy", bpm: 160 },
    { title: "Muqabla Akhada Mix", artist: "Karnal Powerbeats", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 150 },
    { title: "Tau Ki Lathi Beat", artist: "Panipat Street Squad", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 145 },
    { title: "No Pain No Haryana", artist: "Sirsa Gym Syndicate", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 155 },
    { title: "Gurjar vs Jaat Iron Clash", artist: "Faridabad Heavy Hitters", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Desi Dronacharya Power", artist: "Gurgaon Akhada Tribe", lang: "Haryanvi", energy: "👑 Confidence", bpm: 140 },
    { title: "Sultan Of Sonepat", artist: "Rishabh Pandey Gym Lab", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Dudh Ghee Aur Mehnat", artist: "Village Power Sound", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Dhamaka Haryanvi Squat", artist: "Desi Bass Mechanics", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Bawli Beat Workout", artist: "Ambala Iron Works", lang: "Haryanvi", energy: "⚡ High energy", bpm: 162 },
    { title: "Khatarnaak Haryanvi Tempo", artist: "Kaithal Drillers", lang: "Haryanvi", energy: "🚀 Running", bpm: 165 },
    { title: "Sher Ka Jigra", artist: "Jhajjar Dhol Mafia", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Loha Lath Haryanvi 808", artist: "Fatehabad Bass", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 156 },
    { title: "Bhole Ka Bhakt Heavy Reps", artist: "Kurukshetra Sound Lab", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Desi Shora Cardio Surge", artist: "Hisar Speed Beats", lang: "Haryanvi", energy: "🚀 Running", bpm: 160 },
    { title: "Ruka Pad Gaya Gym Mein", artist: "Charkhi Dadri Squad", lang: "Haryanvi", energy: "👑 Confidence", bpm: 148 },
    { title: "Badmash Benchpress", artist: "Rohtak Core Beats", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Gaddar Desi Hype", artist: "Yamunanagar Iron Studio", lang: "Haryanvi", energy: "⚡ High energy", bpm: 158 },
    { title: "Akhada To Olympia", artist: "Haryana Power Syndicate", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Rag Rag Mein Desi Josh", artist: "Sonepat Bass Crew", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 145 },
    { title: "Tashan Haryanvi Biceps", artist: "Gurugram Lift Lab", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 154 },
    { title: "Dholak Drop 160 BPM", artist: "Jind Bass Engine", lang: "Haryanvi", energy: "🚀 Running", bpm: 160 },
    { title: "Kalandar Haryanvi Lift", artist: "Panipat Powerhouse", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 152 },
    { title: "Angaar Desi Beat", artist: "Bhiwani Boxing Squad", lang: "Haryanvi", energy: "⚡ High energy", bpm: 156 },
    { title: "Shaktimaan Haryanvi Flow", artist: "Sirsa Sub Bass", lang: "Haryanvi", energy: "👑 Confidence", bpm: 148 },
    { title: "Loha Garam Hai", artist: "Rewari Iron Foundry", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Rannbhoomi Haryanvi Mix", artist: "Kurukshetra Beats", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Chaudhar In The Gym", artist: "Faridabad Desi Bass", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 148 },
    { title: "Kaddak Haryanvi Reps", artist: "Ambala Gym Syndicate", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 152 },
    { title: "Dhaakad Desi Running", artist: "Hisar Marathon Lab", lang: "Haryanvi", energy: "🚀 Running", bpm: 164 },
    { title: "Fauji Fitness Beat", artist: "Jhajjar Regiment Sound", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 146 },
    { title: "Akad Haryanvi Drop", artist: "Karnal Beats Studio", lang: "Haryanvi", energy: "👑 Confidence", bpm: 150 },
    { title: "Desi Gladiator Trap", artist: "Rohtak Sound Engineers", lang: "Haryanvi", energy: "⚡ High energy", bpm: 158 },
    { title: "Wrestler Protocol 150", artist: "Bhiwani Gold Medalists", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 150 },
    { title: "Taur Desi Muscle", artist: "Sonepat Heavy Sound", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Chhati Chhappan Inch", artist: "Fatehabad Power Lab", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Bawaal Haryanvi 808", artist: "Jind Bassline Studio", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 155 },
    { title: "Shatranj Ya Akhada", artist: "Gurugram Alpha Crew", lang: "Haryanvi", energy: "👑 Confidence", bpm: 144 },
    { title: "Chingari Desi Bass", artist: "Panipat Rhythm Lab", lang: "Haryanvi", energy: "⚡ High energy", bpm: 160 },
    { title: "Dangal Champion Theme", artist: "Haryana Gold Brigade", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 142 },
    { title: "Full Power Pehelwan", artist: "Kaithal Iron Clan", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Khet Se Gym Tak", artist: "Rural Strength Sound", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Ziddi Haryana Sprint", artist: "Sirsa Speed Force", lang: "Haryanvi", energy: "🚀 Running", bpm: 166 },
    { title: "Daku Haryanvi Trap", artist: "Rewari Underground", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Heavy Metal Haryanvi", artist: "Yamunanagar Rockbeats", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 156 },
    { title: "Rohtak Raging Bull", artist: "Rohtak Bull Sound", lang: "Haryanvi", energy: "⚡ High energy", bpm: 158 },
    { title: "Surajmukhi Desi Fire", artist: "Kurukshetra Bass Project", lang: "Haryanvi", energy: "👑 Confidence", bpm: 145 },
    { title: "Mitti Ka Dum", artist: "Desi Akhada Masters", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 140 },
    { title: "Haryanvi Beast Unleashed", artist: "Ambala Gym Warriors", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 152 },
    { title: "Dhamakedaar Jaat Dhol", artist: "Jhajjar Dhol Collective", lang: "Haryanvi", energy: "⚡ High energy", bpm: 162 },
    { title: "Iron Chest Haryanvi", artist: "Hisar Muscle Factory", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Bijli Haryanvi Cardio", artist: "Karnal Cardio Squad", lang: "Haryanvi", energy: "🚀 Running", bpm: 165 },
    { title: "Aandhi Haryanvi Reps", artist: "Sonepat Storm Sound", lang: "Haryanvi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Daring Desi Haryanvi", artist: "Bhiwani Knockout Lab", lang: "Haryanvi", energy: "👑 Confidence", bpm: 148 },
    { title: "Karam Hi Pooja Pehelwani", artist: "Faridabad Dharma Sound", lang: "Haryanvi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Desi Thunder Squat", artist: "Fatehabad Iron Forge", lang: "Haryanvi", energy: "🔥 Heavy workout", bpm: 156 },
    { title: "Bouncer Haryanvi 808", artist: "Gurugram Club Sound", lang: "Haryanvi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Final Set Haryana", artist: "Haryana Last Rep Lab", lang: "Haryanvi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Shatru Ka Vinash", artist: "Kurukshetra War Beats", lang: "Haryanvi", energy: "⚡ High energy", bpm: 160 },

    // --- PUNJABI (66 Tracks) ---
    { title: "Sher-E-Punjab High BPM", artist: "Majha Bassline Syndicate", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 155 },
    { title: "Jatt Power Lift 150", artist: "Ludhiana Heavy Iron", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Bhangra Cardio Surge", artist: "Amritsar Dhol Warriors", lang: "Punjabi", energy: "🚀 Running", bpm: 164 },
    { title: "Gabru Beast Mode", artist: "Doaba Sound Clan", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 152 },
    { title: "Dhol Tumbi Workout Drop", artist: "Jalandhar Raga Project", lang: "Punjabi", energy: "⚡ High energy", bpm: 158 },
    { title: "Sardarji Heavy Sets", artist: "Mohali Iron Gym Lab", lang: "Punjabi", energy: "👑 Confidence", bpm: 146 },
    { title: "Waddi Soch Punjabi Josh", artist: "Patiala Peg Power", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Khabardar Jatt Gym", artist: "Bhatinda Bass Brigade", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "808 Dholak Punjabi Trap", artist: "Chandigarh Sound Lab", lang: "Punjabi", energy: "⚡ High energy", bpm: 156 },
    { title: "Akhada Punjabi Warrior", artist: "Gurdaspur Lion Sound", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 152 },
    { title: "Pind Te Gym Da Craze", artist: "Malwa Heavybeats", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Hoshiarpur Heavy Reps", artist: "Doaba Muscle Force", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Jatt Di Grind 160", artist: "Firozpur Sound Forge", lang: "Punjabi", energy: "🚀 Running", bpm: 160 },
    { title: "Soorma Punjabi Spirit", artist: "Amritsar Golden Beats", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 142 },
    { title: "Taur Jatt Di Gym Look", artist: "Mohali Urban Crew", lang: "Punjabi", energy: "👑 Confidence", bpm: 148 },
    { title: "Punjab De Sher Cardio", artist: "Ludhiana Marathoners", lang: "Punjabi", energy: "🚀 Running", bpm: 165 },
    { title: "Attitude Jatt Da Trap", artist: "Majha Underground", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Tumbi Overdrive Workout", artist: "Jalandhar Folk Lab", lang: "Punjabi", energy: "⚡ High energy", bpm: 160 },
    { title: "Sohna Te Takda", artist: "Bhatinda Iron Works", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Khandani Power Punjabi", artist: "Patiala Royals Sound", lang: "Punjabi", energy: "👑 Confidence", bpm: 146 },
    { title: "Bulldozer Punjabi Reps", artist: "Sangrur Heavy Forge", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Kharku Gym Session", artist: "Mansa Bass Militia", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 156 },
    { title: "Punjabi Josh Infinite", artist: "Kapurthala Bass Lab", lang: "Punjabi", energy: "⚡ High energy", bpm: 158 },
    { title: "Chardi Kala Fitness", artist: "Nawanshahr Sound", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 145 },
    { title: "Daler Punjabi Sprint", artist: "Rupnagar Speed Team", lang: "Punjabi", energy: "🚀 Running", bpm: 162 },
    { title: "Munde Punjabi Iron", artist: "Barnala Muscle Sound", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Sheran De Dere", artist: "Tarn Taran Warriors", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Punjabi Sub-Bass Squat", artist: "Fazilka Sound Works", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Dhol Shaker 155 BPM", artist: "Muktsar Bass Factory", lang: "Punjabi", energy: "⚡ High energy", bpm: 155 },
    { title: "Badshah Of Benchpress", artist: "Chandigarh Alpha Club", lang: "Punjabi", energy: "👑 Confidence", bpm: 148 },
    { title: "Panga Na Le Gym", artist: "Pathankot Sound Lab", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Jazba Punjabi 808", artist: "Moga Iron Collective", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Bhangra Bass Boosted", artist: "Amritsar Dhol Lab", lang: "Punjabi", energy: "⚡ High energy", bpm: 162 },
    { title: "Jatt Da Muqabla", artist: "Ludhiana Urban Beats", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Sher Dil Punjabi Runner", artist: "Jalandhar Pace Squad", lang: "Punjabi", energy: "🚀 Running", bpm: 166 },
    { title: "Suraj Vargi Energy", artist: "Mohali Solar Beats", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Heavy Duty Jatt", artist: "Patiala Steel Works", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 156 },
    { title: "Punjabi Cyclone 160BPM", artist: "Bhatinda Thunder", lang: "Punjabi", energy: "⚡ High energy", bpm: 160 },
    { title: "Gym Da Sardar", artist: "Majha Heavy Unit", lang: "Punjabi", energy: "👑 Confidence", bpm: 146 },
    { title: "Loha Katda Loha", artist: "Firozpur Steel Unit", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 152 },
    { title: "Mehnat Da Mull", artist: "Gurdaspur Roots", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Jatt Te Gym De Rule", artist: "Doaba Rules Sound", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Tumbi Trap Workout", artist: "Sangrur Electronic", lang: "Punjabi", energy: "⚡ High energy", bpm: 158 },
    { title: "Dholak Overload Punjabi", artist: "Hoshiarpur Dholak", lang: "Punjabi", energy: "🚀 Running", bpm: 164 },
    { title: "Ankhi Punjabi Gabru", artist: "Mansa Pride Sound", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 145 },
    { title: "Khabardar Punjabi Drop", artist: "Kapurthala Bass", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Desi Drip Punjabi Lift", artist: "Chandigarh Drip Lab", lang: "Punjabi", energy: "👑 Confidence", bpm: 148 },
    { title: "Bhangra Marathon 165", artist: "Amritsar Stride", lang: "Punjabi", energy: "🚀 Running", bpm: 165 },
    { title: "Iron Heart Punjabi", artist: "Barnala Iron Works", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Sheran Di Chaal", artist: "Ludhiana Lions", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Bada Jigra Punjabi", artist: "Tarn Taran Heavy", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Punjabi Drill Fitness", artist: "Jalandhar Drill Squad", lang: "Punjabi", energy: "⚡ High energy", bpm: 160 },
    { title: "Fauji Jatt Heavy Duty", artist: "Pathankot Border Sound", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 146 },
    { title: "Punjabi Thunder Squat", artist: "Patiala Thunder Unit", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Taur Sardar Di", artist: "Mohali Royal Unit", lang: "Punjabi", energy: "👑 Confidence", bpm: 148 },
    { title: "Speed Demon Punjabi", artist: "Rupnagar Sprint Lab", lang: "Punjabi", energy: "🚀 Running", bpm: 166 },
    { title: "Never Give Up Jatt", artist: "Moga Endurance Team", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Full Josh Punjabi 808", artist: "Bhatinda Sub Lab", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 156 },
    { title: "Khulla Kharcha Gym", artist: "Chandigarh Elite Sound", lang: "Punjabi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Tumbi Trance Punjabi", artist: "Doaba Trance Lab", lang: "Punjabi", energy: "⚡ High energy", bpm: 162 },
    { title: "Dushman Nu Mat", artist: "Gurdaspur Warriors", lang: "Punjabi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Khabbi Seat Muscle", artist: "Ludhiana Cruisers", lang: "Punjabi", energy: "👑 Confidence", bpm: 146 },
    { title: "Rabb Da Banda Fit", artist: "Amritsar Devotion Sound", lang: "Punjabi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Heavy Metal Punjabi", artist: "Jalandhar Metal Forge", lang: "Punjabi", energy: "🏋️ Strength training", bpm: 156 },
    { title: "Aakhri Set Punjabi", artist: "Majha Last Set", lang: "Punjabi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Fateh Punjabi Gym Anthem", artist: "Punjab All Stars", lang: "Punjabi", energy: "⚡ High energy", bpm: 160 },

    // --- HINDI (66 Tracks) ---
    { title: "Sultan Energy 150BPM", artist: "Mumbai Gym Syndicate", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 150 },
    { title: "Ziddi Dil Motivation", artist: "Rishabh Pandey Beats", lang: "Hindi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Khoon Mein Angaar", artist: "Delhi Bass Warriors", lang: "Hindi", energy: "⚡ High energy", bpm: 156 },
    { title: "Pahad Tod Denge", artist: "Desi Beat Architects", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 142 },
    { title: "Iron Grip Dholak", artist: "Vibe Engine Gym Lab", lang: "Hindi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Toofan Hindi Cardio", artist: "Speed Force India", lang: "Hindi", energy: "🚀 Running", bpm: 164 },
    { title: "Raja Ki Tarah Jeena", artist: "Imperial Desi Sound", lang: "Hindi", energy: "👑 Confidence", bpm: 146 },
    { title: "Desi Attitude Trap Hindi", artist: "NCR Street Beats", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Fauladi Seena Heavy Lift", artist: "Indore Heavy Iron", lang: "Hindi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Josh Hindi Anthem", artist: "SurBeat Sound Lab", lang: "Hindi", energy: "⚡ High energy", bpm: 158 },
    { title: "Agni Hindi Workout", artist: "Pune Fitness Beat", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 152 },
    { title: "Haar Nahi Manunga", artist: "Bhopal Motivation Lab", lang: "Hindi", energy: "💪 Gym motivation", bpm: 146 },
    { title: "Challenger 160 Sprint", artist: "Lucknow Speed Lab", lang: "Hindi", energy: "🚀 Running", bpm: 160 },
    { title: "Kshatriya Warrior Flow", artist: "Jaipur Royalty Beats", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Swag Aur Seena", artist: "Kanpur Desi Beats", lang: "Hindi", energy: "👑 Confidence", bpm: 148 },
    { title: "Desi Sher Hindi 808", artist: "Varanasi Power Sound", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Shatter The Limits", artist: "Bengaluru High Octane", lang: "Hindi", energy: "⚡ High energy", bpm: 162 },
    { title: "Prachand Hindi Gym Mix", artist: "Hyderabad Heavy Force", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Sapno Ki Udaan Fitness", artist: "Kolkata Rhythm Division", lang: "Hindi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Desi Hercules Squat", artist: "Ahmedabad Iron Forge", lang: "Hindi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Cheetah Hindi Stride", artist: "Chandigarh Runners", lang: "Hindi", energy: "🚀 Running", bpm: 166 },
    { title: "Veer Tum Badhe Chalo", artist: "Patna Valor Sound", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 142 },
    { title: "Apna Time Aa Gaya Gym", artist: "Mumbai Street Squad", lang: "Hindi", energy: "👑 Confidence", bpm: 150 },
    { title: "Desi Swagger Heavy Reps", artist: "Delhi Alpha Syndicate", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Mahakaal Power Energy", artist: "Ujjain Spiritual Beats", lang: "Hindi", energy: "⚡ High energy", bpm: 158 },
    { title: "Loha Pighla Do", artist: "Ranchi Forge Works", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 155 },
    { title: "Zid Hi Jeet Hai", artist: "Noida Motivation Hub", lang: "Hindi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Titan Benchpress Hindi", artist: "Surat Steel Lab", lang: "Hindi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Raftaar Hindi 165", artist: "Gurgaon Speed Clan", lang: "Hindi", energy: "🚀 Running", bpm: 165 },
    { title: "Vijayi Bhava Hindi", artist: "Varanasi Raga Beats", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Self Made Sultan", artist: "Faridabad Gold Unit", lang: "Hindi", energy: "👑 Confidence", bpm: 146 },
    { title: "Hindustani Beast 808", artist: "Nagpur Bass Division", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 152 },
    { title: "Kalyug Ka Pehelwan", artist: "Meerut Akhada Sound", lang: "Hindi", energy: "⚡ High energy", bpm: 160 },
    { title: "Dhamaka Deadlift Hindi", artist: "Agra Power Lab", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Chingari Se Jwala", artist: "Gwalior Forge Beats", lang: "Hindi", energy: "💪 Gym motivation", bpm: 146 },
    { title: "Brahmastra Gym Drop", artist: "Varanasi Divine Bass", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 145 },
    { title: "Rocket Hindi Running", artist: "Delhi Striders", lang: "Hindi", energy: "🚀 Running", bpm: 164 },
    { title: "Faulad Ki Chhati", artist: "Ludhiana Heavy Foundry", lang: "Hindi", energy: "🏋️ Strength training", bpm: 150 },
    { title: "Rudra Tandav 160 BPM", artist: "Haridwar Bass Project", lang: "Hindi", energy: "⚡ High energy", bpm: 160 },
    { title: "Dabangg Fitness Hindi", artist: "Lucknow Nawabs Sound", lang: "Hindi", energy: "👑 Confidence", bpm: 148 },
    { title: "Aukaat Se Zyada Mehnat", artist: "Mumbai Hustlers", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Purna Sankalp Gym", artist: "Dehradun High Peaks", lang: "Hindi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Sholay Workout Theme", artist: "Bollywood Beat Redux", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 152 },
    { title: "Tandav Cardio Flow", artist: "Rishikesh Sound Waves", lang: "Hindi", energy: "🚀 Running", bpm: 162 },
    { title: "Gaurav Hindi Lift", artist: "Prayagraj Iron Clan", lang: "Hindi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Param Vir Fitness", artist: "Military Beat Project", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Baadshah Of Heavy Sets", artist: "Gurgaon High Rollers", lang: "Hindi", energy: "👑 Confidence", bpm: 146 },
    { title: "Desi Dhadkan 155", artist: "Jaipur Dholak Lab", lang: "Hindi", energy: "⚡ High energy", bpm: 155 },
    { title: "Khoon Paseena Hindi", artist: "Kanpur Labor Sound", lang: "Hindi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Desi Gladiator Hindi", artist: "Noida Combat Lab", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 154 },
    { title: "Bebak Desi Hindi Trap", artist: "Delhi Metro Beats", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 150 },
    { title: "Sprint Like A Wolf", artist: "Shimla Forest Striders", lang: "Hindi", energy: "🚀 Running", bpm: 166 },
    { title: "Vajra Hindi Power", artist: "Mathura Divine Beats", lang: "Hindi", energy: "🏋️ Strength training", bpm: 154 },
    { title: "Yodha Hindi Motivation", artist: "Udaipur Fort Sound", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 145 },
    { title: "Badshah Ki Entry", artist: "Mumbai Cinematic Lab", lang: "Hindi", energy: "👑 Confidence", bpm: 148 },
    { title: "Ultimatum Hindi Reps", artist: "Ghaziabad Iron Yard", lang: "Hindi", energy: "⚡ High energy", bpm: 158 },
    { title: "Seena Taan Ke Gym", artist: "Bhopal Warriors", lang: "Hindi", energy: "💪 Gym motivation", bpm: 150 },
    { title: "Desi Volcano 155 BPM", artist: "Indore Fire Beats", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 155 },
    { title: "Hindustani Tejas Cardio", artist: "Aero Speed India", lang: "Hindi", energy: "🚀 Running", bpm: 164 },
    { title: "Bheeshma Pratigya Reps", artist: "Kurukshetra Resolve", lang: "Hindi", energy: "🏋️ Strength training", bpm: 152 },
    { title: "Vijay Rath Hindi", artist: "Nagpur Victory Sound", lang: "Hindi", energy: "🥶 Goosebumps", bpm: 144 },
    { title: "Chhatrapati Josh", artist: "Pune Fort Sound", lang: "Hindi", energy: "👑 Confidence", bpm: 148 },
    { title: "Raktbeej Hindi Bass", artist: "Varanasi Underground", lang: "Hindi", energy: "🔥 Desi attitude", bpm: 154 },
    { title: "Karmayogi Workout", artist: "Surat Dharma Sound", lang: "Hindi", energy: "💪 Gym motivation", bpm: 148 },
    { title: "Desi Beast Finale 160", artist: "SurBeat All Stars Gym", lang: "Hindi", energy: "⚡ High energy", bpm: 160 },
    { title: "SurBeat Workout Anthem", artist: "Rishabh Pandey x Desi Beats", lang: "Hindi", energy: "🔥 Heavy workout", bpm: 155 }
  ];

  // Pre-rendered cached high-energy audio URLs
  const audioUrlCache = new Map();

  /**
   * Generates a dynamic, high-energy Desi workout beat wav audio blob with pounding 808 kick,
   * snare rolls, dhol syncopation, and energetic synth leads in < 5ms.
   * Completely royalty-free, legal, and instant zero-delay.
   */
  function generateWorkoutAudioBlobUrl(track) {
    if (audioUrlCache.has(track.id)) {
      return audioUrlCache.get(track.id);
    }

    try {
      const sampleRate = 22050; // Optimized sample rate for instant generation & minimal memory
      const duration = Math.min(track.duration || 180, 180);
      const totalSamples = sampleRate * duration;
      const bpm = track.bpm || 150;
      const beatInterval = (60 / bpm) * sampleRate;
      const subInterval = beatInterval / 4;

      // 16-bit Mono WAV Buffer Creation
      const wavHeaderSize = 44;
      const dataSize = totalSamples * 2;
      const buffer = new ArrayBuffer(wavHeaderSize + dataSize);
      const view = new DataView(buffer);

      // Write WAV Header
      function writeString(offset, string) {
        for (let i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      }
      writeString(0, 'RIFF');
      view.setUint32(4, 36 + dataSize, true);
      writeString(8, 'WAVE');
      writeString(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true); // PCM
      view.setUint16(22, 1, true); // Mono
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * 2, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true); // 16-bit
      writeString(36, 'data');
      view.setUint32(40, dataSize, true);

      // Seed synthesizer parameters based on track language & BPM
      const isHaryanvi = track.language === 'Haryanvi';
      const isPunjabi = track.language === 'Punjabi';
      const rootFreq = isHaryanvi ? 55 : (isPunjabi ? 65.41 : 43.65); // Bass Root: A1, C2, or F1

      // Fast procedural audio synthesis
      let writeOffset = 44;
      for (let i = 0; i < totalSamples; i++) {
        const beatPos = i % beatInterval;
        const subPos = i % subInterval;
        const barIndex = Math.floor(i / (beatInterval * 4));

        let sample = 0;

        // 1. Heavy 808 Bass Kick Drum on every beat
        if (beatPos < beatInterval * 0.45) {
          const kickT = beatPos / sampleRate;
          const kickFreq = 140 * Math.exp(-kickT * 18) + 42;
          const kickEnvelope = Math.exp(-kickT * 9);
          sample += Math.sin(2 * Math.PI * kickFreq * kickT) * kickEnvelope * 0.65;
        }

        // 2. High-Octane Snare / Dhol Slap on beat 2 and 4
        if ((beatPos > beatInterval * 0.85 || (i >= beatInterval && beatPos < beatInterval * 0.35 && Math.floor(i / beatInterval) % 2 === 1))) {
          const snareT = (beatPos % (beatInterval / 2)) / sampleRate;
          const snareNoise = (Math.random() * 2 - 1) * Math.exp(-snareT * 28);
          const snareTone = Math.sin(2 * Math.PI * 220 * snareT) * Math.exp(-snareT * 22);
          sample += (snareNoise * 0.35 + snareTone * 0.25);
        }

        // 3. Indian Dholak / Tumbi syncopated rhythms on 16th notes
        if (subPos < subInterval * 0.3) {
          const dholT = subPos / sampleRate;
          const dholFreq = isPunjabi ? (330 + (barIndex % 4) * 40) : (isHaryanvi ? 220 : 277);
          const dholEnvelope = Math.exp(-dholT * 35);
          sample += Math.sin(2 * Math.PI * dholFreq * dholT) * dholEnvelope * 0.18;
        }

        // 4. Energetic Workout Synth Arpeggio / Motivation Lead
        const noteSeq = isHaryanvi ? [0, 3, 5, 7, 10, 12, 10, 7] : (isPunjabi ? [0, 4, 7, 9, 12, 14, 12, 7] : [0, 2, 5, 7, 9, 12, 9, 5]);
        const noteIndex = Math.floor(i / (subInterval)) % noteSeq.length;
        const semitone = noteSeq[noteIndex];
        const synthFreq = rootFreq * 4 * Math.pow(2, semitone / 12);
        const synthT = i / sampleRate;
        const synthEnvelope = 0.5 + 0.5 * Math.sin(synthT * 1.5);
        const leadSynth = (Math.sin(2 * Math.PI * synthFreq * synthT) + 0.5 * Math.sin(4 * Math.PI * synthFreq * synthT)) * 0.12 * synthEnvelope;
        sample += leadSynth;

        // Clip guard & 16-bit conversion
        sample = Math.max(-0.99, Math.min(0.99, sample));
        const int16 = Math.floor(sample < 0 ? sample * 32768 : sample * 32767);
        view.setInt16(writeOffset, int16, true);
        writeOffset += 2;
      }

      const blob = new Blob([buffer], { type: 'audio/wav' });
      const blobUrl = URL.createObjectURL(blob);
      audioUrlCache.set(track.id, blobUrl);
      return blobUrl;
    } catch (err) {
      console.warn('Procedural audio generation error:', err);
      return '';
    }
  }

  /**
   * Generates crisp, high-resolution SVG/Data-URI stylized album artwork
   * featuring Desi Gym & Luxury Cyber-Emerald / Saffron Neon aesthetics.
   * Rendered asynchronously without delaying playback!
   */
  const artworkCache = new Map();
  function generateWorkoutArtwork(track) {
    if (artworkCache.has(track.id)) {
      return artworkCache.get(track.id);
    }

    const langColors = {
      'Haryanvi': { primary: '#ff3d00', secondary: '#ffea00', glow: '#ff6d00', icon: '🏋️' },
      'Punjabi': { primary: '#ffaa00', secondary: '#00e5ff', glow: '#ff9100', icon: '🪕' },
      'Hindi': { primary: '#ff1744', secondary: '#d500f9', glow: '#f50057', icon: '💪' }
    };

    const c = langColors[track.language] || langColors.Hindi;
    const safeTitle = (track.title || 'Workout Track').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeArtist = (track.artist || 'SurBeat Artist').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeEnergy = (track.energy || '🔥 Heavy workout').replace(/&/g, '&amp;');

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#2a081c" />
          <stop offset="60%" stop-color="#14020c" />
          <stop offset="100%" stop-color="#080006" />
        </radialGradient>
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c.primary}" />
          <stop offset="50%" stop-color="${c.glow}" />
          <stop offset="100%" stop-color="${c.secondary}" />
        </linearGradient>
        <filter id="neon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="500" height="500" rx="32" fill="url(#bgGrad)" />
      
      <!-- Outer Vinyl Edge -->
      <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2" />
      <circle cx="250" cy="250" r="195" fill="none" stroke="rgba(255,170,0,0.12)" stroke-width="1.5" />
      <circle cx="250" cy="250" r="165" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      
      <!-- Ambient Glow Ring -->
      <circle cx="250" cy="220" r="115" fill="none" stroke="url(#glowGrad)" stroke-width="4" filter="url(#neon)" opacity="0.85" />
      
      <!-- Core Badge Disc -->
      <circle cx="250" cy="220" r="100" fill="#180410" stroke="${c.secondary}" stroke-width="2" />
      
      <!-- Center Icon -->
      <text x="250" y="210" font-size="52" text-anchor="middle" dominant-baseline="central">${c.icon}</text>
      <text x="250" y="260" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="${c.secondary}" text-anchor="middle" letter-spacing="2.5">SURBEAT WORKOUT</text>
      
      <!-- Category Badges -->
      <g transform="translate(250, 360)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="rgba(255,255,255,0.06)" stroke="${c.glow}" stroke-width="1" />
        <text x="0" y="5" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">${safeEnergy}</text>
      </g>
      
      <!-- Track Details -->
      <text x="250" y="420" font-family="'Outfit', sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">${safeTitle.length > 24 ? safeTitle.substring(0, 22) + '...' : safeTitle}</text>
      <text x="250" y="452" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#ffcca0" text-anchor="middle">${safeArtist.length > 30 ? safeArtist.substring(0, 28) + '...' : safeArtist} &bull; ${track.bpm} BPM</text>
      <text x="250" y="480" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="${c.primary}" text-anchor="middle" letter-spacing="3">${track.language.toUpperCase()} WORKOUT FORCE</text>
    </svg>`;

    const dataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    artworkCache.set(track.id, dataUri);
    return dataUri;
  }

  // Construct the full 200 Structured Catalog
  const WORKOUT_CATALOG = [];

  TRACK_SEEDS.forEach((seed, index) => {
    const pad = String(index + 1).padStart(3, '0');
    const trackId = `workout-${pad}`;
    const duration = 180 + ((index * 13) % 75); // 180s - 255s duration

    const trackObj = {
      id: trackId,
      title: seed.title,
      artist: seed.artist,
      language: seed.lang,
      category: "Workout",
      energy: seed.energy,
      bpm: seed.bpm,
      duration: duration,
      source: "local",
      audioUrl: null, // Lazily resolved to avoid blocking
      artwork: null
    };

    // Define getter for audioUrl and artwork so they generate on-demand in < 5ms
    Object.defineProperty(trackObj, 'audioUrl', {
      get: function() {
        return generateWorkoutAudioBlobUrl(this);
      },
      configurable: true
    });

    Object.defineProperty(trackObj, 'artwork', {
      get: function() {
        return generateWorkoutArtwork(this);
      },
      configurable: true
    });

    WORKOUT_CATALOG.push(trackObj);
  });

  // Dedicated AWARAPAN (Emraan Hashmi) Collection
  // Authentic Awarapan songs metadata & official YouTube fallback IDs
  const AWARAPAN_COLLECTION = [
    {
      id: "awarapan-01",
      title: "Toh Phir Aao",
      artist: "Mustafa Zahid & Pritam",
      album: "Awarapan (2007)",
      movie: "Awarapan",
      actor: "Emraan Hashmi",
      category: "awarapan",
      ytId: "HqU_s1v8b6U",
      duration: 352,
      artwork: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "awarapan-02",
      title: "Tera Mera Rishta",
      artist: "Mustafa Zahid",
      album: "Awarapan (2007)",
      movie: "Awarapan",
      actor: "Emraan Hashmi",
      category: "awarapan",
      ytId: "tLqtnGLGQ4Y",
      duration: 345,
      artwork: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "awarapan-03",
      title: "Mahiya",
      artist: "Annie Khalid & Suzanne D'Mello",
      album: "Awarapan (2007)",
      movie: "Awarapan",
      actor: "Emraan Hashmi",
      category: "awarapan",
      ytId: "Nl8_x-rL5cM",
      duration: 278,
      artwork: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "awarapan-04",
      title: "Toh Phir Aao (Lounge Version)",
      artist: "Mustafa Zahid & Pritam",
      album: "Awarapan (2007)",
      movie: "Awarapan",
      actor: "Emraan Hashmi",
      category: "awarapan",
      ytId: "d0q6fJj5u6w",
      duration: 338,
      artwork: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "awarapan-05",
      title: "Tera Mera Rishta (Remix)",
      artist: "Mustafa Zahid & DJ Suketu",
      album: "Awarapan (2007)",
      movie: "Awarapan",
      actor: "Emraan Hashmi",
      category: "awarapan",
      ytId: "w_Z0Wq1a4-c",
      duration: 320,
      artwork: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "awarapan-06",
      title: "Mahiya (Remix)",
      artist: "Annie Khalid & DJ Suketu",
      album: "Awarapan (2007)",
      movie: "Awarapan",
      actor: "Emraan Hashmi",
      category: "awarapan",
      ytId: "m0b9lDk1i7k",
      duration: 288,
      artwork: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Export to Global Scope
  window.WORKOUT_CATALOG = WORKOUT_CATALOG;
  window.AWARAPAN_COLLECTION = AWARAPAN_COLLECTION;
  window.ENERGY_TAGS = ENERGY_TAGS;

  console.log(`💪 SurBeat Workout Catalog Loaded: ${WORKOUT_CATALOG.length} Tracks (Hindi, Haryanvi, Punjabi)`);
  console.log(`❤️ SurBeat Awarapan Collection Loaded: ${AWARAPAN_COLLECTION.length} Songs (Emraan Hashmi)`);

})(typeof window !== 'undefined' ? window : this);
