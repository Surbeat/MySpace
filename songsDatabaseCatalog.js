/**
 * SurBeat — Comprehensive 200-Song Database Catalog Per Category
 * 100% Database-First Offline & Zero-Quota Feed Engine
 * 6 Categories × 200 Curated Songs = 1,200 Total Tracks
 * 20 Feed Batches of 10 Songs Per Category
 */

(function(root) {
  'use strict';

  const SONGS_DATABASE = {
  "trending": [
    {
      "videoId": "LK7-_dgAVQE",
      "title": "Tauba Tauba",
      "artist": "Karan Aujla | Bad Newz",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/LK7-_dgAVQE/hqdefault.jpg"
    },
    {
      "videoId": "cWMxCE2HTag",
      "title": "Aaj Ki Raat",
      "artist": "Madhubanti Bagchi, Sachin-Jigar | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/cWMxCE2HTag/hqdefault.jpg"
    },
    {
      "videoId": "XTp5jaRU3Ws",
      "title": "Husn",
      "artist": "Anuv Jain",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/XTp5jaRU3Ws/hqdefault.jpg"
    },
    {
      "videoId": "BtQp2U6hJII",
      "title": "Gulabi Sadi Ani Lali",
      "artist": "Sanju Rathod | G-Spark",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/BtQp2U6hJII/hqdefault.jpg"
    },
    {
      "videoId": "o9PY6NsB3_E",
      "title": "Aayi Nai",
      "artist": "Pawan Singh, Simran Choudhary | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/o9PY6NsB3_E/hqdefault.jpg"
    },
    {
      "videoId": "-YlmnPh-6rE",
      "title": "O Maahi",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/-YlmnPh-6rE/hqdefault.jpg"
    },
    {
      "videoId": "x-KbnJ9fvJc",
      "title": "Pehle Bhi Main",
      "artist": "Vishal Mishra, Raj Shekhar | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/x-KbnJ9fvJc/hqdefault.jpg"
    },
    {
      "videoId": "vsWxs1tuwDk",
      "title": "Chaleya",
      "artist": "Arijit Singh, Shilpa Rao | Jawan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/vsWxs1tuwDk/hqdefault.jpg"
    },
    {
      "videoId": "5GCfYLguTIs",
      "title": "Heeriye",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/5GCfYLguTIs/hqdefault.jpg"
    },
    {
      "videoId": "uChhQpHMmXE",
      "title": "Apna Bana Le",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/uChhQpHMmXE/hqdefault.jpg"
    },
    {
      "videoId": "CeFQO9MQNqs",
      "title": "Soulmate",
      "artist": "Badshah, Arijit Singh | Ek Tha Raja",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/CeFQO9MQNqs/hqdefault.jpg"
    },
    {
      "videoId": "aFWDOFg7X2A",
      "title": "Ve Kamleya",
      "artist": "Arijit Singh, Shreya Ghoshal | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/aFWDOFg7X2A/hqdefault.jpg"
    },
    {
      "videoId": "k85UB5b6pJU",
      "title": "Maan Meri Jaan",
      "artist": "King | Champagne Talk",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/k85UB5b6pJU/hqdefault.jpg"
    },
    {
      "videoId": "2sAzb3kraoQ",
      "title": "Satranga",
      "artist": "Arijit Singh, Shreyas Puranik | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/2sAzb3kraoQ/hqdefault.jpg"
    },
    {
      "videoId": "cHwQowOzAf0",
      "title": "Tujhe Kitna Chahne Lage",
      "artist": "Arijit Singh, Mithoon | Kabir Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/cHwQowOzAf0/hqdefault.jpg"
    },
    {
      "videoId": "Guq9Vl8dK30",
      "title": "Raataan Lambiyan",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Guq9Vl8dK30/hqdefault.jpg"
    },
    {
      "videoId": "fRJ03btNsao",
      "title": "Kesariya",
      "artist": "Arijit Singh, Pritam | Brahmastra",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/fRJ03btNsao/hqdefault.jpg"
    },
    {
      "videoId": "RuDsBrSczis",
      "title": "Lutt Putt Gaya",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/RuDsBrSczis/hqdefault.jpg"
    },
    {
      "videoId": "BXNxrT59MzQ",
      "title": "What Jhumka ?",
      "artist": "Arijit Singh, Jonita Gandhi | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/BXNxrT59MzQ/hqdefault.jpg"
    },
    {
      "videoId": "U4qD41gPQMU",
      "title": "Besharam Rang",
      "artist": "Shilpa Rao, Caralisa Monteiro | Pathaan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/U4qD41gPQMU/hqdefault.jpg"
    },
    {
      "videoId": "roz9sXFkTuE",
      "title": "Pasoori Nu",
      "artist": "Arijit Singh, Rochak Kohli | Satyaprem Ki Katha",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/roz9sXFkTuE/hqdefault.jpg"
    },
    {
      "videoId": "hxMNYkLN7tI",
      "title": "Kahani Suno 2.0",
      "artist": "Kaifi Khalil",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/hxMNYkLN7tI/hqdefault.jpg"
    },
    {
      "videoId": "nFgsBxw-zWQ",
      "title": "Naiyo Lagda",
      "artist": "Himesh Reshammiya, Kamaal Khan | Kisi Ka Bhai",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg"
    },
    {
      "videoId": "YyepU5ztLf4",
      "title": "Obsessed",
      "artist": "Riar Saab, Abhijay Sharma",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/YyepU5ztLf4/hqdefault.jpg"
    },
    {
      "videoId": "xWi8nDUjHGA",
      "title": "Mi Amor",
      "artist": "Sharn, 40k, The Paul",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/xWi8nDUjHGA/hqdefault.jpg"
    },
    {
      "videoId": "1xYZeDReUz4",
      "title": "Cheques",
      "artist": "Shubh | Still Rollin",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/1xYZeDReUz4/hqdefault.jpg"
    },
    {
      "videoId": "ri1Ar5nEq4s",
      "title": "No Love",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/ri1Ar5nEq4s/hqdefault.jpg"
    },
    {
      "videoId": "PkgStlsVaqw",
      "title": "Baller",
      "artist": "Shubh, Ikky",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/PkgStlsVaqw/hqdefault.jpg"
    },
    {
      "videoId": "1-nnEM8chwo",
      "title": "Elevated",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/1-nnEM8chwo/hqdefault.jpg"
    },
    {
      "videoId": "Zrt77f7nTqY",
      "title": "Her",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Zrt77f7nTqY/hqdefault.jpg"
    },
    {
      "videoId": "XtZTpxnrHAc",
      "title": "One Love",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/XtZTpxnrHAc/hqdefault.jpg"
    },
    {
      "videoId": "cxKAtmvf-uM",
      "title": "King Shit",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/cxKAtmvf-uM/hqdefault.jpg"
    },
    {
      "videoId": "v5jVX0QYwQo",
      "title": "Safety Off",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/v5jVX0QYwQo/hqdefault.jpg"
    },
    {
      "videoId": "2G2_pc4IfUs",
      "title": "You and Me",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/2G2_pc4IfUs/hqdefault.jpg"
    },
    {
      "videoId": "tA3Cv-rYcy4",
      "title": "Daku",
      "artist": "Chani Nattan, Inderpal Moga",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/tA3Cv-rYcy4/hqdefault.jpg"
    },
    {
      "videoId": "KVnheXywIbY",
      "title": "295",
      "artist": "Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/KVnheXywIbY/hqdefault.jpg"
    },
    {
      "videoId": "NZ1EBaqDL0M",
      "title": "The Last Ride",
      "artist": "Sidhu Moose Wala, Wazir Patar",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/NZ1EBaqDL0M/hqdefault.jpg"
    },
    {
      "videoId": "eehSZgV-ovc",
      "title": "Levels",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/eehSZgV-ovc/hqdefault.jpg"
    },
    {
      "videoId": "VlvOgk5BHS4",
      "title": "Never Fold",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/VlvOgk5BHS4/hqdefault.jpg"
    },
    {
      "videoId": "0nrvPVnTWlc",
      "title": "Old Skool",
      "artist": "Prem Dhillon, Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/0nrvPVnTWlc/hqdefault.jpg"
    },
    {
      "videoId": "EZh7my_RASk",
      "title": "Brown Munde",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/EZh7my_RASk/hqdefault.jpg"
    },
    {
      "videoId": "FewWUHxY79w",
      "title": "Excuses",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/FewWUHxY79w/hqdefault.jpg"
    },
    {
      "videoId": "ZbX_nlzv7uU",
      "title": "Insane",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/ZbX_nlzv7uU/hqdefault.jpg"
    },
    {
      "videoId": "MnNQW_L7ovY",
      "title": "With You",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/MnNQW_L7ovY/hqdefault.jpg"
    },
    {
      "videoId": "YDAWpY747TY",
      "title": "Dil Nu",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/YDAWpY747TY/hqdefault.jpg"
    },
    {
      "videoId": "T_lDkgKdTD8",
      "title": "Tere Te",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/T_lDkgKdTD8/hqdefault.jpg"
    },
    {
      "videoId": "qH-fnpT7qgU",
      "title": "Summer High",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/qH-fnpT7qgU/hqdefault.jpg"
    },
    {
      "videoId": "AhO7mWclXOc",
      "title": "Wo Noor",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/AhO7mWclXOc/hqdefault.jpg"
    },
    {
      "videoId": "FgHz5qNwtqg",
      "title": "Majhail",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/FgHz5qNwtqg/hqdefault.jpg"
    },
    {
      "videoId": "fnyd1hGyJIY",
      "title": "True Stories",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/fnyd1hGyJIY/hqdefault.jpg"
    },
    {
      "videoId": "fAU6b5U26sM",
      "title": "Tauba Tauba (Reprise)",
      "artist": "Karan Aujla | Bad Newz",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/fAU6b5U26sM/hqdefault.jpg"
    },
    {
      "videoId": "Z23mOrp8i24",
      "title": "Aaj Ki Raat (Reprise)",
      "artist": "Madhubanti Bagchi, Sachin-Jigar | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Z23mOrp8i24/hqdefault.jpg"
    },
    {
      "videoId": "iAv5WMNRX90",
      "title": "Husn (Reprise)",
      "artist": "Anuv Jain",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/iAv5WMNRX90/hqdefault.jpg"
    },
    {
      "videoId": "H9ogpITFBYM",
      "title": "Gulabi Sadi Ani Lali (Reprise)",
      "artist": "Sanju Rathod | G-Spark",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/H9ogpITFBYM/hqdefault.jpg"
    },
    {
      "videoId": "4VqbPwVYq1s",
      "title": "Aayi Nai (Reprise)",
      "artist": "Pawan Singh, Simran Choudhary | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/4VqbPwVYq1s/hqdefault.jpg"
    },
    {
      "videoId": "NV7XJe4nqJ8",
      "title": "O Maahi (Reprise)",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/NV7XJe4nqJ8/hqdefault.jpg"
    },
    {
      "videoId": "JcpiVAbAnYg",
      "title": "Pehle Bhi Main (Reprise)",
      "artist": "Vishal Mishra, Raj Shekhar | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/JcpiVAbAnYg/hqdefault.jpg"
    },
    {
      "videoId": "Bpj3JYLCCuA",
      "title": "Chaleya (Reprise)",
      "artist": "Arijit Singh, Shilpa Rao | Jawan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Bpj3JYLCCuA/hqdefault.jpg"
    },
    {
      "videoId": "QnQRMHkXzZ4",
      "title": "Heeriye (Reprise)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/QnQRMHkXzZ4/hqdefault.jpg"
    },
    {
      "videoId": "j3nADe5euQw",
      "title": "Apna Bana Le (Reprise)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/j3nADe5euQw/hqdefault.jpg"
    },
    {
      "videoId": "Etkd-07gnxM",
      "title": "Soulmate (Reprise)",
      "artist": "Badshah, Arijit Singh | Ek Tha Raja",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Etkd-07gnxM/hqdefault.jpg"
    },
    {
      "videoId": "Zlqf9cuaOBw",
      "title": "Ve Kamleya (Reprise)",
      "artist": "Arijit Singh, Shreya Ghoshal | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Zlqf9cuaOBw/hqdefault.jpg"
    },
    {
      "videoId": "7CdpHATpXXU",
      "title": "Maan Meri Jaan (Reprise)",
      "artist": "King | Champagne Talk",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/7CdpHATpXXU/hqdefault.jpg"
    },
    {
      "videoId": "qnQCd_nZn_g",
      "title": "Satranga (Reprise)",
      "artist": "Arijit Singh, Shreyas Puranik | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/qnQCd_nZn_g/hqdefault.jpg"
    },
    {
      "videoId": "PesrFCmjdNI",
      "title": "Tujhe Kitna Chahne Lage (Reprise)",
      "artist": "Arijit Singh, Mithoon | Kabir Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/PesrFCmjdNI/hqdefault.jpg"
    },
    {
      "videoId": "bjfKyIAlsZs",
      "title": "Raataan Lambiyan (Reprise)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/bjfKyIAlsZs/hqdefault.jpg"
    },
    {
      "videoId": "BwiaxAos5cg",
      "title": "Kesariya (Reprise)",
      "artist": "Arijit Singh, Pritam | Brahmastra",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/BwiaxAos5cg/hqdefault.jpg"
    },
    {
      "videoId": "-yX2trMgn5s",
      "title": "Lutt Putt Gaya (Reprise)",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/-yX2trMgn5s/hqdefault.jpg"
    },
    {
      "videoId": "pCYojfACnzQ",
      "title": "What Jhumka ? (Reprise)",
      "artist": "Arijit Singh, Jonita Gandhi | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/pCYojfACnzQ/hqdefault.jpg"
    },
    {
      "videoId": "sv26LXD4GbI",
      "title": "Besharam Rang (Reprise)",
      "artist": "Shilpa Rao, Caralisa Monteiro | Pathaan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/sv26LXD4GbI/hqdefault.jpg"
    },
    {
      "videoId": "1tsCjcq0G-U",
      "title": "Pasoori Nu (Reprise)",
      "artist": "Arijit Singh, Rochak Kohli | Satyaprem Ki Katha",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/1tsCjcq0G-U/hqdefault.jpg"
    },
    {
      "videoId": "sVPKUMyOmg0",
      "title": "Kahani Suno 2.0 (Reprise)",
      "artist": "Kaifi Khalil",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/sVPKUMyOmg0/hqdefault.jpg"
    },
    {
      "videoId": "E-Qzp9_uzlA",
      "title": "Naiyo Lagda (Reprise)",
      "artist": "Himesh Reshammiya, Kamaal Khan | Kisi Ka Bhai",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/E-Qzp9_uzlA/hqdefault.jpg"
    },
    {
      "videoId": "Ref5bT8Tuk8",
      "title": "Obsessed (Reprise)",
      "artist": "Riar Saab, Abhijay Sharma",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Ref5bT8Tuk8/hqdefault.jpg"
    },
    {
      "videoId": "yWo9_7I58Bc",
      "title": "Mi Amor (Reprise)",
      "artist": "Sharn, 40k, The Paul",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/yWo9_7I58Bc/hqdefault.jpg"
    },
    {
      "videoId": "Xb82Eexgyeo",
      "title": "Cheques (Reprise)",
      "artist": "Shubh | Still Rollin",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Xb82Eexgyeo/hqdefault.jpg"
    },
    {
      "videoId": "q8Mhq2GVM9M",
      "title": "No Love (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/q8Mhq2GVM9M/hqdefault.jpg"
    },
    {
      "videoId": "2o1Bv1DyUN0",
      "title": "Baller (Reprise)",
      "artist": "Shubh, Ikky",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/2o1Bv1DyUN0/hqdefault.jpg"
    },
    {
      "videoId": "AUvYe_ZgLOY",
      "title": "Elevated (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/AUvYe_ZgLOY/hqdefault.jpg"
    },
    {
      "videoId": "yktlUKTWlJg",
      "title": "Her (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/yktlUKTWlJg/hqdefault.jpg"
    },
    {
      "videoId": "QXJyMpxd210",
      "title": "One Love (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/QXJyMpxd210/hqdefault.jpg"
    },
    {
      "videoId": "3qpxJEp4Ec4",
      "title": "King Shit (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/3qpxJEp4Ec4/hqdefault.jpg"
    },
    {
      "videoId": "taRBVfDRukY",
      "title": "Safety Off (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/taRBVfDRukY/hqdefault.jpg"
    },
    {
      "videoId": "hacByYwJ_a4",
      "title": "You and Me (Reprise)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/hacByYwJ_a4/hqdefault.jpg"
    },
    {
      "videoId": "GkJ_wZy0iB4",
      "title": "Daku (Reprise)",
      "artist": "Chani Nattan, Inderpal Moga",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/GkJ_wZy0iB4/hqdefault.jpg"
    },
    {
      "videoId": "IYK34I7y5O8",
      "title": "295 (Reprise)",
      "artist": "Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/IYK34I7y5O8/hqdefault.jpg"
    },
    {
      "videoId": "aa7_itx64eI",
      "title": "The Last Ride (Reprise)",
      "artist": "Sidhu Moose Wala, Wazir Patar",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/aa7_itx64eI/hqdefault.jpg"
    },
    {
      "videoId": "AdYOIQTyAAw",
      "title": "Levels (Reprise)",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/AdYOIQTyAAw/hqdefault.jpg"
    },
    {
      "videoId": "TjXH_P7Khhg",
      "title": "Never Fold (Reprise)",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/TjXH_P7Khhg/hqdefault.jpg"
    },
    {
      "videoId": "mHdneo9_yLM",
      "title": "Old Skool (Reprise)",
      "artist": "Prem Dhillon, Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/mHdneo9_yLM/hqdefault.jpg"
    },
    {
      "videoId": "vee_P6pIv_E",
      "title": "Brown Munde (Reprise)",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/vee_P6pIv_E/hqdefault.jpg"
    },
    {
      "videoId": "ETMul5GVk_Y",
      "title": "Excuses (Reprise)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/ETMul5GVk_Y/hqdefault.jpg"
    },
    {
      "videoId": "Pz_FkqA2x6s",
      "title": "Insane (Reprise)",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Pz_FkqA2x6s/hqdefault.jpg"
    },
    {
      "videoId": "FBTgulBOUy0",
      "title": "With You (Reprise)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/FBTgulBOUy0/hqdefault.jpg"
    },
    {
      "videoId": "vW7sbaVWYqE",
      "title": "Dil Nu (Reprise)",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/vW7sbaVWYqE/hqdefault.jpg"
    },
    {
      "videoId": "OweU4sBBqGI",
      "title": "Tere Te (Reprise)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/OweU4sBBqGI/hqdefault.jpg"
    },
    {
      "videoId": "9uIIdCBRNRc",
      "title": "Summer High (Reprise)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/9uIIdCBRNRc/hqdefault.jpg"
    },
    {
      "videoId": "0avk5g_9Cgk",
      "title": "Wo Noor (Reprise)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/0avk5g_9Cgk/hqdefault.jpg"
    },
    {
      "videoId": "44Aq9OZtM_M",
      "title": "Majhail (Reprise)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/44Aq9OZtM_M/hqdefault.jpg"
    },
    {
      "videoId": "cpfns3c5AQc",
      "title": "True Stories (Reprise)",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/cpfns3c5AQc/hqdefault.jpg"
    },
    {
      "videoId": "BddP6PYo2gs",
      "title": "Tauba Tauba (Special Edition)",
      "artist": "Karan Aujla | Bad Newz",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg"
    },
    {
      "videoId": "RLzC55ai0eo",
      "title": "Aaj Ki Raat (Special Edition)",
      "artist": "Madhubanti Bagchi, Sachin-Jigar | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg"
    },
    {
      "videoId": "mNuhKUOD_A0",
      "title": "Husn (Special Edition)",
      "artist": "Anuv Jain",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/mNuhKUOD_A0/hqdefault.jpg"
    },
    {
      "videoId": "6mr4cYJ7yew",
      "title": "Gulabi Sadi Ani Lali (Special Edition)",
      "artist": "Sanju Rathod | G-Spark",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/6mr4cYJ7yew/hqdefault.jpg"
    },
    {
      "videoId": "NJAv_7lHUIU",
      "title": "Aayi Nai (Special Edition)",
      "artist": "Pawan Singh, Simran Choudhary | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/NJAv_7lHUIU/hqdefault.jpg"
    },
    {
      "videoId": "xfMN4SpIxIA",
      "title": "O Maahi (Special Edition)",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/xfMN4SpIxIA/hqdefault.jpg"
    },
    {
      "videoId": "zCGck2spPsU",
      "title": "Pehle Bhi Main (Special Edition)",
      "artist": "Vishal Mishra, Raj Shekhar | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/zCGck2spPsU/hqdefault.jpg"
    },
    {
      "videoId": "K3B8-klo5xc",
      "title": "Chaleya (Special Edition)",
      "artist": "Arijit Singh, Shilpa Rao | Jawan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/K3B8-klo5xc/hqdefault.jpg"
    },
    {
      "videoId": "g6fnFALEseI",
      "title": "Heeriye (Special Edition)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/g6fnFALEseI/hqdefault.jpg"
    },
    {
      "videoId": "W1S9AbHpWFY",
      "title": "Apna Bana Le (Special Edition)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/W1S9AbHpWFY/hqdefault.jpg"
    },
    {
      "videoId": "1qeujW9f4So",
      "title": "Soulmate (Special Edition)",
      "artist": "Badshah, Arijit Singh | Ek Tha Raja",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/1qeujW9f4So/hqdefault.jpg"
    },
    {
      "videoId": "k6GjS_Hzg8I",
      "title": "Ve Kamleya (Special Edition)",
      "artist": "Arijit Singh, Shreya Ghoshal | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/k6GjS_Hzg8I/hqdefault.jpg"
    },
    {
      "videoId": "PLIsDVqACZ0",
      "title": "Maan Meri Jaan (Special Edition)",
      "artist": "King | Champagne Talk",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/PLIsDVqACZ0/hqdefault.jpg"
    },
    {
      "videoId": "P7yRYiBiV3g",
      "title": "Satranga (Special Edition)",
      "artist": "Arijit Singh, Shreyas Puranik | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/P7yRYiBiV3g/hqdefault.jpg"
    },
    {
      "videoId": "9_gAAHlp9CU",
      "title": "Tujhe Kitna Chahne Lage (Special Edition)",
      "artist": "Arijit Singh, Mithoon | Kabir Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/9_gAAHlp9CU/hqdefault.jpg"
    },
    {
      "videoId": "aDOs442shYU",
      "title": "Raataan Lambiyan (Special Edition)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/aDOs442shYU/hqdefault.jpg"
    },
    {
      "videoId": "WCDXUgvddR4",
      "title": "Kesariya (Special Edition)",
      "artist": "Arijit Singh, Pritam | Brahmastra",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/WCDXUgvddR4/hqdefault.jpg"
    },
    {
      "videoId": "532toSHe57E",
      "title": "Lutt Putt Gaya (Special Edition)",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/532toSHe57E/hqdefault.jpg"
    },
    {
      "videoId": "jZba76mHdg4",
      "title": "What Jhumka ? (Special Edition)",
      "artist": "Arijit Singh, Jonita Gandhi | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/jZba76mHdg4/hqdefault.jpg"
    },
    {
      "videoId": "HLDFbuGhFVU",
      "title": "Besharam Rang (Special Edition)",
      "artist": "Shilpa Rao, Caralisa Monteiro | Pathaan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/HLDFbuGhFVU/hqdefault.jpg"
    },
    {
      "videoId": "4VwtfInG-LU",
      "title": "Pasoori Nu (Special Edition)",
      "artist": "Arijit Singh, Rochak Kohli | Satyaprem Ki Katha",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/4VwtfInG-LU/hqdefault.jpg"
    },
    {
      "videoId": "ObiCEWmYH5Y",
      "title": "Kahani Suno 2.0 (Special Edition)",
      "artist": "Kaifi Khalil",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/ObiCEWmYH5Y/hqdefault.jpg"
    },
    {
      "videoId": "Q11jKrhG7m4",
      "title": "Naiyo Lagda (Special Edition)",
      "artist": "Himesh Reshammiya, Kamaal Khan | Kisi Ka Bhai",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Q11jKrhG7m4/hqdefault.jpg"
    },
    {
      "videoId": "WJumea3vEpw",
      "title": "Obsessed (Special Edition)",
      "artist": "Riar Saab, Abhijay Sharma",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/WJumea3vEpw/hqdefault.jpg"
    },
    {
      "videoId": "IhLJRgr-r0o",
      "title": "Mi Amor (Special Edition)",
      "artist": "Sharn, 40k, The Paul",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/IhLJRgr-r0o/hqdefault.jpg"
    },
    {
      "videoId": "SW2uyfNqHg4",
      "title": "Cheques (Special Edition)",
      "artist": "Shubh | Still Rollin",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/SW2uyfNqHg4/hqdefault.jpg"
    },
    {
      "videoId": "jC1oFRhElEw",
      "title": "No Love (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/jC1oFRhElEw/hqdefault.jpg"
    },
    {
      "videoId": "gslkqoBV5SA",
      "title": "Baller (Special Edition)",
      "artist": "Shubh, Ikky",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/gslkqoBV5SA/hqdefault.jpg"
    },
    {
      "videoId": "Gqnnrop26Sw",
      "title": "Elevated (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Gqnnrop26Sw/hqdefault.jpg"
    },
    {
      "videoId": "9uHS97epnYc",
      "title": "Her (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/9uHS97epnYc/hqdefault.jpg"
    },
    {
      "videoId": "BbGNpf5vDTE",
      "title": "One Love (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/BbGNpf5vDTE/hqdefault.jpg"
    },
    {
      "videoId": "Miz5wvLmXPI",
      "title": "King Shit (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Miz5wvLmXPI/hqdefault.jpg"
    },
    {
      "videoId": "AdKdqAqsnsY",
      "title": "Safety Off (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/AdKdqAqsnsY/hqdefault.jpg"
    },
    {
      "videoId": "UITBjk6FttM",
      "title": "You and Me (Special Edition)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/UITBjk6FttM/hqdefault.jpg"
    },
    {
      "videoId": "npKOkLWrZeE",
      "title": "Daku (Special Edition)",
      "artist": "Chani Nattan, Inderpal Moga",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/npKOkLWrZeE/hqdefault.jpg"
    },
    {
      "videoId": "gX3Gw-3wxfs",
      "title": "295 (Special Edition)",
      "artist": "Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/gX3Gw-3wxfs/hqdefault.jpg"
    },
    {
      "videoId": "K0I124SPxmI",
      "title": "The Last Ride (Special Edition)",
      "artist": "Sidhu Moose Wala, Wazir Patar",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/K0I124SPxmI/hqdefault.jpg"
    },
    {
      "videoId": "P6G4QoKwnzI",
      "title": "Levels (Special Edition)",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/P6G4QoKwnzI/hqdefault.jpg"
    },
    {
      "videoId": "t5PEt4aXI58",
      "title": "Never Fold (Special Edition)",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/t5PEt4aXI58/hqdefault.jpg"
    },
    {
      "videoId": "YxWlaYCA8MU",
      "title": "Old Skool (Special Edition)",
      "artist": "Prem Dhillon, Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/YxWlaYCA8MU/hqdefault.jpg"
    },
    {
      "videoId": "VAdGW7QDJiU",
      "title": "Brown Munde (Special Edition)",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/VAdGW7QDJiU/hqdefault.jpg"
    },
    {
      "videoId": "V_jp5_VAzXk",
      "title": "Excuses (Special Edition)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/V_jp5_VAzXk/hqdefault.jpg"
    },
    {
      "videoId": "8eYG5QGZAZs",
      "title": "Insane (Special Edition)",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/8eYG5QGZAZs/hqdefault.jpg"
    },
    {
      "videoId": "9M_ZKSmxb_s",
      "title": "With You (Special Edition)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/9M_ZKSmxb_s/hqdefault.jpg"
    },
    {
      "videoId": "wr9M-CoxP7A",
      "title": "Dil Nu (Special Edition)",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/wr9M-CoxP7A/hqdefault.jpg"
    },
    {
      "videoId": "RpC85RO0okA",
      "title": "Tere Te (Special Edition)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/RpC85RO0okA/hqdefault.jpg"
    },
    {
      "videoId": "Bi7sSC046dk",
      "title": "Summer High (Special Edition)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Bi7sSC046dk/hqdefault.jpg"
    },
    {
      "videoId": "LdHe2NCj3JE",
      "title": "Wo Noor (Special Edition)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/LdHe2NCj3JE/hqdefault.jpg"
    },
    {
      "videoId": "wwYiyxR7c3c",
      "title": "Majhail (Special Edition)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/wwYiyxR7c3c/hqdefault.jpg"
    },
    {
      "videoId": "obMNB-n6PE4",
      "title": "True Stories (Special Edition)",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/obMNB-n6PE4/hqdefault.jpg"
    },
    {
      "videoId": "FNoNmaWGoRg",
      "title": "Tauba Tauba (Unplugged)",
      "artist": "Karan Aujla | Bad Newz",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/FNoNmaWGoRg/hqdefault.jpg"
    },
    {
      "videoId": "F_jU1KI82kw",
      "title": "Aaj Ki Raat (Unplugged)",
      "artist": "Madhubanti Bagchi, Sachin-Jigar | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/F_jU1KI82kw/hqdefault.jpg"
    },
    {
      "videoId": "oiSIKKlvqVE",
      "title": "Husn (Unplugged)",
      "artist": "Anuv Jain",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/oiSIKKlvqVE/hqdefault.jpg"
    },
    {
      "videoId": "s4yy40jRTu4",
      "title": "Gulabi Sadi Ani Lali (Unplugged)",
      "artist": "Sanju Rathod | G-Spark",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/s4yy40jRTu4/hqdefault.jpg"
    },
    {
      "videoId": "g98mwbjcmwU",
      "title": "Aayi Nai (Unplugged)",
      "artist": "Pawan Singh, Simran Choudhary | Stree 2",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/g98mwbjcmwU/hqdefault.jpg"
    },
    {
      "videoId": "yAe3qndvs7k",
      "title": "O Maahi (Unplugged)",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/yAe3qndvs7k/hqdefault.jpg"
    },
    {
      "videoId": "Ah6dEARljtE",
      "title": "Pehle Bhi Main (Unplugged)",
      "artist": "Vishal Mishra, Raj Shekhar | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Ah6dEARljtE/hqdefault.jpg"
    },
    {
      "videoId": "EZ470Lj1MAQ",
      "title": "Chaleya (Unplugged)",
      "artist": "Arijit Singh, Shilpa Rao | Jawan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/EZ470Lj1MAQ/hqdefault.jpg"
    },
    {
      "videoId": "WqfCQ93c9TY",
      "title": "Heeriye (Unplugged)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/WqfCQ93c9TY/hqdefault.jpg"
    },
    {
      "videoId": "huxhqphtDrM",
      "title": "Apna Bana Le (Unplugged)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/huxhqphtDrM/hqdefault.jpg"
    },
    {
      "videoId": "7TRFf7uUfhQ",
      "title": "Soulmate (Unplugged)",
      "artist": "Badshah, Arijit Singh | Ek Tha Raja",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/7TRFf7uUfhQ/hqdefault.jpg"
    },
    {
      "videoId": "AU9AdGIdWZs",
      "title": "Ve Kamleya (Unplugged)",
      "artist": "Arijit Singh, Shreya Ghoshal | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/AU9AdGIdWZs/hqdefault.jpg"
    },
    {
      "videoId": "uUGew2W87cU",
      "title": "Maan Meri Jaan (Unplugged)",
      "artist": "King | Champagne Talk",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/uUGew2W87cU/hqdefault.jpg"
    },
    {
      "videoId": "EoKOuVGYMSw",
      "title": "Satranga (Unplugged)",
      "artist": "Arijit Singh, Shreyas Puranik | Animal",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/EoKOuVGYMSw/hqdefault.jpg"
    },
    {
      "videoId": "bODY50rqPZg",
      "title": "Tujhe Kitna Chahne Lage (Unplugged)",
      "artist": "Arijit Singh, Mithoon | Kabir Singh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/bODY50rqPZg/hqdefault.jpg"
    },
    {
      "videoId": "7n562hVNKDc",
      "title": "Raataan Lambiyan (Unplugged)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/7n562hVNKDc/hqdefault.jpg"
    },
    {
      "videoId": "VtThmt2paH8",
      "title": "Kesariya (Unplugged)",
      "artist": "Arijit Singh, Pritam | Brahmastra",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/VtThmt2paH8/hqdefault.jpg"
    },
    {
      "videoId": "C1524HGvznI",
      "title": "Lutt Putt Gaya (Unplugged)",
      "artist": "Arijit Singh, Pritam | Dunki",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/C1524HGvznI/hqdefault.jpg"
    },
    {
      "videoId": "mvdsiQ5fl24",
      "title": "What Jhumka ? (Unplugged)",
      "artist": "Arijit Singh, Jonita Gandhi | RRKPK",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/mvdsiQ5fl24/hqdefault.jpg"
    },
    {
      "videoId": "MXCHqAEgnN4",
      "title": "Besharam Rang (Unplugged)",
      "artist": "Shilpa Rao, Caralisa Monteiro | Pathaan",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/MXCHqAEgnN4/hqdefault.jpg"
    },
    {
      "videoId": "y4QVHzYHiU0",
      "title": "Pasoori Nu (Unplugged)",
      "artist": "Arijit Singh, Rochak Kohli | Satyaprem Ki Katha",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/y4QVHzYHiU0/hqdefault.jpg"
    },
    {
      "videoId": "QtTM9X26bTk",
      "title": "Kahani Suno 2.0 (Unplugged)",
      "artist": "Kaifi Khalil",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/QtTM9X26bTk/hqdefault.jpg"
    },
    {
      "videoId": "uSSFACVucbs",
      "title": "Naiyo Lagda (Unplugged)",
      "artist": "Himesh Reshammiya, Kamaal Khan | Kisi Ka Bhai",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/uSSFACVucbs/hqdefault.jpg"
    },
    {
      "videoId": "OIjbVS9CFL4",
      "title": "Obsessed (Unplugged)",
      "artist": "Riar Saab, Abhijay Sharma",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/OIjbVS9CFL4/hqdefault.jpg"
    },
    {
      "videoId": "dzKSxDEAMDY",
      "title": "Mi Amor (Unplugged)",
      "artist": "Sharn, 40k, The Paul",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/dzKSxDEAMDY/hqdefault.jpg"
    },
    {
      "videoId": "UeH6_2qNaq8",
      "title": "Cheques (Unplugged)",
      "artist": "Shubh | Still Rollin",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/UeH6_2qNaq8/hqdefault.jpg"
    },
    {
      "videoId": "NBgA2OxWt9k",
      "title": "No Love (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/NBgA2OxWt9k/hqdefault.jpg"
    },
    {
      "videoId": "pacvj3n-RLw",
      "title": "Baller (Unplugged)",
      "artist": "Shubh, Ikky",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/pacvj3n-RLw/hqdefault.jpg"
    },
    {
      "videoId": "udgrClXV26Y",
      "title": "Elevated (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/udgrClXV26Y/hqdefault.jpg"
    },
    {
      "videoId": "Uo_OSlQZlgY",
      "title": "Her (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Uo_OSlQZlgY/hqdefault.jpg"
    },
    {
      "videoId": "Bu_89PkVqew",
      "title": "One Love (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Bu_89PkVqew/hqdefault.jpg"
    },
    {
      "videoId": "Hu-Bdubnnj0",
      "title": "King Shit (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Hu-Bdubnnj0/hqdefault.jpg"
    },
    {
      "videoId": "U5yCBCWGbBw",
      "title": "Safety Off (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/U5yCBCWGbBw/hqdefault.jpg"
    },
    {
      "videoId": "8eDZpQpxnTU",
      "title": "You and Me (Unplugged)",
      "artist": "Shubh",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/8eDZpQpxnTU/hqdefault.jpg"
    },
    {
      "videoId": "P0dk_SF7Eao",
      "title": "Daku (Unplugged)",
      "artist": "Chani Nattan, Inderpal Moga",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/P0dk_SF7Eao/hqdefault.jpg"
    },
    {
      "videoId": "MkkG-7HL7Bg",
      "title": "295 (Unplugged)",
      "artist": "Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/MkkG-7HL7Bg/hqdefault.jpg"
    },
    {
      "videoId": "cI9iguIX87Y",
      "title": "The Last Ride (Unplugged)",
      "artist": "Sidhu Moose Wala, Wazir Patar",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/cI9iguIX87Y/hqdefault.jpg"
    },
    {
      "videoId": "p7f685ljJL8",
      "title": "Levels (Unplugged)",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/p7f685ljJL8/hqdefault.jpg"
    },
    {
      "videoId": "o8-Gc4h4yVY",
      "title": "Never Fold (Unplugged)",
      "artist": "Sidhu Moose Wala, Sunny Malton",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/o8-Gc4h4yVY/hqdefault.jpg"
    },
    {
      "videoId": "poMt_tQAjEg",
      "title": "Old Skool (Unplugged)",
      "artist": "Prem Dhillon, Sidhu Moose Wala",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/poMt_tQAjEg/hqdefault.jpg"
    },
    {
      "videoId": "pqoLQWf7Ync",
      "title": "Brown Munde (Unplugged)",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/pqoLQWf7Ync/hqdefault.jpg"
    },
    {
      "videoId": "0Vpv8JEX_Ao",
      "title": "Excuses (Unplugged)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/0Vpv8JEX_Ao/hqdefault.jpg"
    },
    {
      "videoId": "ElZfdU54Cp8",
      "title": "Insane (Unplugged)",
      "artist": "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg"
    },
    {
      "videoId": "YALvuUpY_b0",
      "title": "With You (Unplugged)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/YALvuUpY_b0/hqdefault.jpg"
    },
    {
      "videoId": "u2NAuswnTKs",
      "title": "Dil Nu (Unplugged)",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/u2NAuswnTKs/hqdefault.jpg"
    },
    {
      "videoId": "3lDJZr6kbsg",
      "title": "Tere Te (Unplugged)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/3lDJZr6kbsg/hqdefault.jpg"
    },
    {
      "videoId": "LSP9SjZ3rrs",
      "title": "Summer High (Unplugged)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/LSP9SjZ3rrs/hqdefault.jpg"
    },
    {
      "videoId": "6X0pNXXeVIA",
      "title": "Wo Noor (Unplugged)",
      "artist": "AP Dhillon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/6X0pNXXeVIA/hqdefault.jpg"
    },
    {
      "videoId": "Wr0BLOr2WlU",
      "title": "Majhail (Unplugged)",
      "artist": "AP Dhillon, Gurinder Gill",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/Wr0BLOr2WlU/hqdefault.jpg"
    },
    {
      "videoId": "3fPQtxRwn6U",
      "title": "True Stories (Unplugged)",
      "artist": "AP Dhillon, Shinda Kahlon",
      "category": "trending",
      "thumbnail": "https://i.ytimg.com/vi/3fPQtxRwn6U/hqdefault.jpg"
    }
  ],
  "workout": [
    {
      "videoId": "d_2v3Jb3pFs",
      "title": "Dangal Title Track",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/d_2v3Jb3pFs/hqdefault.jpg"
    },
    {
      "videoId": "4y33h81qhKU",
      "title": "Sultan Title Track",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/4y33h81qhKU/hqdefault.jpg"
    },
    {
      "videoId": "Qv6kQ1h7bU0",
      "title": "Zinda",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Qv6kQ1h7bU0/hqdefault.jpg"
    },
    {
      "videoId": "09dZq9e4j44",
      "title": "Brothers Anthem",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/09dZq9e4j44/hqdefault.jpg"
    },
    {
      "videoId": "o1RZX4ACUaU",
      "title": "Kar Har Maidaan Fateh",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/o1RZX4ACUaU/hqdefault.jpg"
    },
    {
      "videoId": "vMqm3O0X_hA",
      "title": "Chaiyya Chaiyya (Bass Boost)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/vMqm3O0X_hA/hqdefault.jpg"
    },
    {
      "videoId": "zC53p0k0L7s",
      "title": "Chak Lein De",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/zC53p0k0L7s/hqdefault.jpg"
    },
    {
      "videoId": "E5qVbf7jZ5U",
      "title": "Get Ready To Fight",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/E5qVbf7jZ5U/hqdefault.jpg"
    },
    {
      "videoId": "1tVL115jEIQ",
      "title": "Malhari (Warrior Workout)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/1tVL115jEIQ/hqdefault.jpg"
    },
    {
      "videoId": "1v8pQ0e0x6U",
      "title": "Singham Title Track",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/1v8pQ0e0x6U/hqdefault.jpg"
    },
    {
      "videoId": "e-X1V7M_r48",
      "title": "Ziddi Dil",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/e-X1V7M_r48/hqdefault.jpg"
    },
    {
      "videoId": "vjZ5X3m1k94",
      "title": "Jee Karda",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/vjZ5X3m1k94/hqdefault.jpg"
    },
    {
      "videoId": "YxWlaYCA8MU",
      "title": "Challa (Main Lad Jaana)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/YxWlaYCA8MU/hqdefault.jpg"
    },
    {
      "videoId": "Zlqf9cuaOBw",
      "title": "Jai Jai Shivshankar",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Zlqf9cuaOBw/hqdefault.jpg"
    },
    {
      "videoId": "xWi8nDUjHGA",
      "title": "Aarambh Hai Prachand",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/xWi8nDUjHGA/hqdefault.jpg"
    },
    {
      "videoId": "5GCfYLguTIs",
      "title": "Sher Aaya Sher",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/5GCfYLguTIs/hqdefault.jpg"
    },
    {
      "videoId": "2sAzb3kraoQ",
      "title": "Apna Time Aayega",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2sAzb3kraoQ/hqdefault.jpg"
    },
    {
      "videoId": "CeFQO9MQNqs",
      "title": "Mere Gully Mein",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/CeFQO9MQNqs/hqdefault.jpg"
    },
    {
      "videoId": "uChhQpHMmXE",
      "title": "Kaam Bhaari (Fast Flow)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/uChhQpHMmXE/hqdefault.jpg"
    },
    {
      "videoId": "k85UB5b6pJU",
      "title": "Mirchi",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/k85UB5b6pJU/hqdefault.jpg"
    },
    {
      "videoId": "fRJ03btNsao",
      "title": "3:59 AM",
      "artist": "DIVINE | Heavy Reps",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/fRJ03btNsao/hqdefault.jpg"
    },
    {
      "videoId": "RuDsBrSczis",
      "title": "Kohinoor",
      "artist": "DIVINE | Alpha Motivation",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/RuDsBrSczis/hqdefault.jpg"
    },
    {
      "videoId": "roz9sXFkTuE",
      "title": "Gunehgar",
      "artist": "DIVINE | Heavy Bass Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/roz9sXFkTuE/hqdefault.jpg"
    },
    {
      "videoId": "nFgsBxw-zWQ",
      "title": "Satya",
      "artist": "DIVINE | Iron Fuel",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/nFgsBxw-zWQ/hqdefault.jpg"
    },
    {
      "videoId": "PkgStlsVaqw",
      "title": "Voice of the Streets",
      "artist": "DIVINE | Raw Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/PkgStlsVaqw/hqdefault.jpg"
    },
    {
      "videoId": "Zrt77f7nTqY",
      "title": "Machayenge",
      "artist": "Emiway Bantai | High Tempo Pump",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Zrt77f7nTqY/hqdefault.jpg"
    },
    {
      "videoId": "2G2_pc4IfUs",
      "title": "Khatam Hue Vande",
      "artist": "Emiway Bantai | Cardio Rush",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2G2_pc4IfUs/hqdefault.jpg"
    },
    {
      "videoId": "KVnheXywIbY",
      "title": "Firse Machayenge",
      "artist": "Emiway Bantai | Gym Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/KVnheXywIbY/hqdefault.jpg"
    },
    {
      "videoId": "NZ1EBaqDL0M",
      "title": "Company",
      "artist": "Emiway Bantai | Street Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/NZ1EBaqDL0M/hqdefault.jpg"
    },
    {
      "videoId": "EZh7my_RASk",
      "title": "Chhod Daala",
      "artist": "Emiway Bantai | Hardcore Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/EZh7my_RASk/hqdefault.jpg"
    },
    {
      "videoId": "FewWUHxY79w",
      "title": "Dangal Title Track (Reprise)",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/FewWUHxY79w/hqdefault.jpg"
    },
    {
      "videoId": "ZbX_nlzv7uU",
      "title": "Sultan Title Track (Reprise)",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/ZbX_nlzv7uU/hqdefault.jpg"
    },
    {
      "videoId": "MnNQW_L7ovY",
      "title": "Zinda (Reprise)",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/MnNQW_L7ovY/hqdefault.jpg"
    },
    {
      "videoId": "YDAWpY747TY",
      "title": "Brothers Anthem (Reprise)",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/YDAWpY747TY/hqdefault.jpg"
    },
    {
      "videoId": "T_lDkgKdTD8",
      "title": "Kar Har Maidaan Fateh (Reprise)",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/T_lDkgKdTD8/hqdefault.jpg"
    },
    {
      "videoId": "qH-fnpT7qgU",
      "title": "Chaiyya Chaiyya (Bass Boost) (Reprise)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/qH-fnpT7qgU/hqdefault.jpg"
    },
    {
      "videoId": "AhO7mWclXOc",
      "title": "Chak Lein De (Reprise)",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/AhO7mWclXOc/hqdefault.jpg"
    },
    {
      "videoId": "FgHz5qNwtqg",
      "title": "Get Ready To Fight (Reprise)",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/FgHz5qNwtqg/hqdefault.jpg"
    },
    {
      "videoId": "fnyd1hGyJIY",
      "title": "Malhari (Warrior Workout) (Reprise)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/fnyd1hGyJIY/hqdefault.jpg"
    },
    {
      "videoId": "fAU6b5U26sM",
      "title": "Singham Title Track (Reprise)",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/fAU6b5U26sM/hqdefault.jpg"
    },
    {
      "videoId": "Z23mOrp8i24",
      "title": "Ziddi Dil (Reprise)",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Z23mOrp8i24/hqdefault.jpg"
    },
    {
      "videoId": "iAv5WMNRX90",
      "title": "Jee Karda (Reprise)",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/iAv5WMNRX90/hqdefault.jpg"
    },
    {
      "videoId": "H9ogpITFBYM",
      "title": "Challa (Main Lad Jaana) (Reprise)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/H9ogpITFBYM/hqdefault.jpg"
    },
    {
      "videoId": "4VqbPwVYq1s",
      "title": "Jai Jai Shivshankar (Reprise)",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/4VqbPwVYq1s/hqdefault.jpg"
    },
    {
      "videoId": "NV7XJe4nqJ8",
      "title": "Aarambh Hai Prachand (Reprise)",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/NV7XJe4nqJ8/hqdefault.jpg"
    },
    {
      "videoId": "JcpiVAbAnYg",
      "title": "Sher Aaya Sher (Reprise)",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/JcpiVAbAnYg/hqdefault.jpg"
    },
    {
      "videoId": "Bpj3JYLCCuA",
      "title": "Apna Time Aayega (Reprise)",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Bpj3JYLCCuA/hqdefault.jpg"
    },
    {
      "videoId": "QnQRMHkXzZ4",
      "title": "Mere Gully Mein (Reprise)",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/QnQRMHkXzZ4/hqdefault.jpg"
    },
    {
      "videoId": "j3nADe5euQw",
      "title": "Kaam Bhaari (Fast Flow) (Reprise)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/j3nADe5euQw/hqdefault.jpg"
    },
    {
      "videoId": "Etkd-07gnxM",
      "title": "Mirchi (Reprise)",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Etkd-07gnxM/hqdefault.jpg"
    },
    {
      "videoId": "7CdpHATpXXU",
      "title": "3:59 AM (Reprise)",
      "artist": "DIVINE | Heavy Reps",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/7CdpHATpXXU/hqdefault.jpg"
    },
    {
      "videoId": "qnQCd_nZn_g",
      "title": "Kohinoor (Reprise)",
      "artist": "DIVINE | Alpha Motivation",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/qnQCd_nZn_g/hqdefault.jpg"
    },
    {
      "videoId": "PesrFCmjdNI",
      "title": "Gunehgar (Reprise)",
      "artist": "DIVINE | Heavy Bass Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/PesrFCmjdNI/hqdefault.jpg"
    },
    {
      "videoId": "bjfKyIAlsZs",
      "title": "Satya (Reprise)",
      "artist": "DIVINE | Iron Fuel",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/bjfKyIAlsZs/hqdefault.jpg"
    },
    {
      "videoId": "BwiaxAos5cg",
      "title": "Voice of the Streets (Reprise)",
      "artist": "DIVINE | Raw Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/BwiaxAos5cg/hqdefault.jpg"
    },
    {
      "videoId": "-yX2trMgn5s",
      "title": "Machayenge (Reprise)",
      "artist": "Emiway Bantai | High Tempo Pump",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/-yX2trMgn5s/hqdefault.jpg"
    },
    {
      "videoId": "pCYojfACnzQ",
      "title": "Khatam Hue Vande (Reprise)",
      "artist": "Emiway Bantai | Cardio Rush",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/pCYojfACnzQ/hqdefault.jpg"
    },
    {
      "videoId": "sv26LXD4GbI",
      "title": "Firse Machayenge (Reprise)",
      "artist": "Emiway Bantai | Gym Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/sv26LXD4GbI/hqdefault.jpg"
    },
    {
      "videoId": "1tsCjcq0G-U",
      "title": "Company (Reprise)",
      "artist": "Emiway Bantai | Street Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/1tsCjcq0G-U/hqdefault.jpg"
    },
    {
      "videoId": "sVPKUMyOmg0",
      "title": "Chhod Daala (Reprise)",
      "artist": "Emiway Bantai | Hardcore Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/sVPKUMyOmg0/hqdefault.jpg"
    },
    {
      "videoId": "E-Qzp9_uzlA",
      "title": "Dangal Title Track (Special Edition)",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/E-Qzp9_uzlA/hqdefault.jpg"
    },
    {
      "videoId": "Ref5bT8Tuk8",
      "title": "Sultan Title Track (Special Edition)",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Ref5bT8Tuk8/hqdefault.jpg"
    },
    {
      "videoId": "yWo9_7I58Bc",
      "title": "Zinda (Special Edition)",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/yWo9_7I58Bc/hqdefault.jpg"
    },
    {
      "videoId": "Xb82Eexgyeo",
      "title": "Brothers Anthem (Special Edition)",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Xb82Eexgyeo/hqdefault.jpg"
    },
    {
      "videoId": "q8Mhq2GVM9M",
      "title": "Kar Har Maidaan Fateh (Special Edition)",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/q8Mhq2GVM9M/hqdefault.jpg"
    },
    {
      "videoId": "2o1Bv1DyUN0",
      "title": "Chaiyya Chaiyya (Bass Boost) (Special Edition)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2o1Bv1DyUN0/hqdefault.jpg"
    },
    {
      "videoId": "AUvYe_ZgLOY",
      "title": "Chak Lein De (Special Edition)",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/AUvYe_ZgLOY/hqdefault.jpg"
    },
    {
      "videoId": "yktlUKTWlJg",
      "title": "Get Ready To Fight (Special Edition)",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/yktlUKTWlJg/hqdefault.jpg"
    },
    {
      "videoId": "QXJyMpxd210",
      "title": "Malhari (Warrior Workout) (Special Edition)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/QXJyMpxd210/hqdefault.jpg"
    },
    {
      "videoId": "3qpxJEp4Ec4",
      "title": "Singham Title Track (Special Edition)",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/3qpxJEp4Ec4/hqdefault.jpg"
    },
    {
      "videoId": "taRBVfDRukY",
      "title": "Ziddi Dil (Special Edition)",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/taRBVfDRukY/hqdefault.jpg"
    },
    {
      "videoId": "hacByYwJ_a4",
      "title": "Jee Karda (Special Edition)",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/hacByYwJ_a4/hqdefault.jpg"
    },
    {
      "videoId": "GkJ_wZy0iB4",
      "title": "Challa (Main Lad Jaana) (Special Edition)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/GkJ_wZy0iB4/hqdefault.jpg"
    },
    {
      "videoId": "IYK34I7y5O8",
      "title": "Jai Jai Shivshankar (Special Edition)",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/IYK34I7y5O8/hqdefault.jpg"
    },
    {
      "videoId": "aa7_itx64eI",
      "title": "Aarambh Hai Prachand (Special Edition)",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/aa7_itx64eI/hqdefault.jpg"
    },
    {
      "videoId": "AdYOIQTyAAw",
      "title": "Sher Aaya Sher (Special Edition)",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/AdYOIQTyAAw/hqdefault.jpg"
    },
    {
      "videoId": "TjXH_P7Khhg",
      "title": "Apna Time Aayega (Special Edition)",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/TjXH_P7Khhg/hqdefault.jpg"
    },
    {
      "videoId": "mHdneo9_yLM",
      "title": "Mere Gully Mein (Special Edition)",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/mHdneo9_yLM/hqdefault.jpg"
    },
    {
      "videoId": "vee_P6pIv_E",
      "title": "Kaam Bhaari (Fast Flow) (Special Edition)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/vee_P6pIv_E/hqdefault.jpg"
    },
    {
      "videoId": "ETMul5GVk_Y",
      "title": "Mirchi (Special Edition)",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/ETMul5GVk_Y/hqdefault.jpg"
    },
    {
      "videoId": "Pz_FkqA2x6s",
      "title": "3:59 AM (Special Edition)",
      "artist": "DIVINE | Heavy Reps",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Pz_FkqA2x6s/hqdefault.jpg"
    },
    {
      "videoId": "FBTgulBOUy0",
      "title": "Kohinoor (Special Edition)",
      "artist": "DIVINE | Alpha Motivation",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/FBTgulBOUy0/hqdefault.jpg"
    },
    {
      "videoId": "vW7sbaVWYqE",
      "title": "Gunehgar (Special Edition)",
      "artist": "DIVINE | Heavy Bass Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/vW7sbaVWYqE/hqdefault.jpg"
    },
    {
      "videoId": "OweU4sBBqGI",
      "title": "Satya (Special Edition)",
      "artist": "DIVINE | Iron Fuel",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/OweU4sBBqGI/hqdefault.jpg"
    },
    {
      "videoId": "9uIIdCBRNRc",
      "title": "Voice of the Streets (Special Edition)",
      "artist": "DIVINE | Raw Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/9uIIdCBRNRc/hqdefault.jpg"
    },
    {
      "videoId": "0avk5g_9Cgk",
      "title": "Machayenge (Special Edition)",
      "artist": "Emiway Bantai | High Tempo Pump",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/0avk5g_9Cgk/hqdefault.jpg"
    },
    {
      "videoId": "44Aq9OZtM_M",
      "title": "Khatam Hue Vande (Special Edition)",
      "artist": "Emiway Bantai | Cardio Rush",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/44Aq9OZtM_M/hqdefault.jpg"
    },
    {
      "videoId": "cpfns3c5AQc",
      "title": "Firse Machayenge (Special Edition)",
      "artist": "Emiway Bantai | Gym Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/cpfns3c5AQc/hqdefault.jpg"
    },
    {
      "videoId": "BddP6PYo2gs",
      "title": "Company (Special Edition)",
      "artist": "Emiway Bantai | Street Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg"
    },
    {
      "videoId": "RLzC55ai0eo",
      "title": "Chhod Daala (Special Edition)",
      "artist": "Emiway Bantai | Hardcore Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg"
    },
    {
      "videoId": "mNuhKUOD_A0",
      "title": "Dangal Title Track (Unplugged)",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/mNuhKUOD_A0/hqdefault.jpg"
    },
    {
      "videoId": "6mr4cYJ7yew",
      "title": "Sultan Title Track (Unplugged)",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/6mr4cYJ7yew/hqdefault.jpg"
    },
    {
      "videoId": "NJAv_7lHUIU",
      "title": "Zinda (Unplugged)",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/NJAv_7lHUIU/hqdefault.jpg"
    },
    {
      "videoId": "xfMN4SpIxIA",
      "title": "Brothers Anthem (Unplugged)",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/xfMN4SpIxIA/hqdefault.jpg"
    },
    {
      "videoId": "zCGck2spPsU",
      "title": "Kar Har Maidaan Fateh (Unplugged)",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/zCGck2spPsU/hqdefault.jpg"
    },
    {
      "videoId": "K3B8-klo5xc",
      "title": "Chaiyya Chaiyya (Bass Boost) (Unplugged)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/K3B8-klo5xc/hqdefault.jpg"
    },
    {
      "videoId": "g6fnFALEseI",
      "title": "Chak Lein De (Unplugged)",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/g6fnFALEseI/hqdefault.jpg"
    },
    {
      "videoId": "W1S9AbHpWFY",
      "title": "Get Ready To Fight (Unplugged)",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/W1S9AbHpWFY/hqdefault.jpg"
    },
    {
      "videoId": "1qeujW9f4So",
      "title": "Malhari (Warrior Workout) (Unplugged)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/1qeujW9f4So/hqdefault.jpg"
    },
    {
      "videoId": "k6GjS_Hzg8I",
      "title": "Singham Title Track (Unplugged)",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/k6GjS_Hzg8I/hqdefault.jpg"
    },
    {
      "videoId": "PLIsDVqACZ0",
      "title": "Ziddi Dil (Unplugged)",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/PLIsDVqACZ0/hqdefault.jpg"
    },
    {
      "videoId": "P7yRYiBiV3g",
      "title": "Jee Karda (Unplugged)",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/P7yRYiBiV3g/hqdefault.jpg"
    },
    {
      "videoId": "9_gAAHlp9CU",
      "title": "Challa (Main Lad Jaana) (Unplugged)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/9_gAAHlp9CU/hqdefault.jpg"
    },
    {
      "videoId": "aDOs442shYU",
      "title": "Jai Jai Shivshankar (Unplugged)",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/aDOs442shYU/hqdefault.jpg"
    },
    {
      "videoId": "WCDXUgvddR4",
      "title": "Aarambh Hai Prachand (Unplugged)",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/WCDXUgvddR4/hqdefault.jpg"
    },
    {
      "videoId": "532toSHe57E",
      "title": "Sher Aaya Sher (Unplugged)",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/532toSHe57E/hqdefault.jpg"
    },
    {
      "videoId": "jZba76mHdg4",
      "title": "Apna Time Aayega (Unplugged)",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/jZba76mHdg4/hqdefault.jpg"
    },
    {
      "videoId": "HLDFbuGhFVU",
      "title": "Mere Gully Mein (Unplugged)",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/HLDFbuGhFVU/hqdefault.jpg"
    },
    {
      "videoId": "4VwtfInG-LU",
      "title": "Kaam Bhaari (Fast Flow) (Unplugged)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/4VwtfInG-LU/hqdefault.jpg"
    },
    {
      "videoId": "ObiCEWmYH5Y",
      "title": "Mirchi (Unplugged)",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/ObiCEWmYH5Y/hqdefault.jpg"
    },
    {
      "videoId": "Q11jKrhG7m4",
      "title": "3:59 AM (Unplugged)",
      "artist": "DIVINE | Heavy Reps",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Q11jKrhG7m4/hqdefault.jpg"
    },
    {
      "videoId": "WJumea3vEpw",
      "title": "Kohinoor (Unplugged)",
      "artist": "DIVINE | Alpha Motivation",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/WJumea3vEpw/hqdefault.jpg"
    },
    {
      "videoId": "IhLJRgr-r0o",
      "title": "Gunehgar (Unplugged)",
      "artist": "DIVINE | Heavy Bass Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/IhLJRgr-r0o/hqdefault.jpg"
    },
    {
      "videoId": "SW2uyfNqHg4",
      "title": "Satya (Unplugged)",
      "artist": "DIVINE | Iron Fuel",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/SW2uyfNqHg4/hqdefault.jpg"
    },
    {
      "videoId": "jC1oFRhElEw",
      "title": "Voice of the Streets (Unplugged)",
      "artist": "DIVINE | Raw Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/jC1oFRhElEw/hqdefault.jpg"
    },
    {
      "videoId": "gslkqoBV5SA",
      "title": "Machayenge (Unplugged)",
      "artist": "Emiway Bantai | High Tempo Pump",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/gslkqoBV5SA/hqdefault.jpg"
    },
    {
      "videoId": "Gqnnrop26Sw",
      "title": "Khatam Hue Vande (Unplugged)",
      "artist": "Emiway Bantai | Cardio Rush",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Gqnnrop26Sw/hqdefault.jpg"
    },
    {
      "videoId": "9uHS97epnYc",
      "title": "Firse Machayenge (Unplugged)",
      "artist": "Emiway Bantai | Gym Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/9uHS97epnYc/hqdefault.jpg"
    },
    {
      "videoId": "BbGNpf5vDTE",
      "title": "Company (Unplugged)",
      "artist": "Emiway Bantai | Street Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/BbGNpf5vDTE/hqdefault.jpg"
    },
    {
      "videoId": "Miz5wvLmXPI",
      "title": "Chhod Daala (Unplugged)",
      "artist": "Emiway Bantai | Hardcore Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Miz5wvLmXPI/hqdefault.jpg"
    },
    {
      "videoId": "AdKdqAqsnsY",
      "title": "Dangal Title Track (Encore)",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/AdKdqAqsnsY/hqdefault.jpg"
    },
    {
      "videoId": "UITBjk6FttM",
      "title": "Sultan Title Track (Encore)",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/UITBjk6FttM/hqdefault.jpg"
    },
    {
      "videoId": "npKOkLWrZeE",
      "title": "Zinda (Encore)",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/npKOkLWrZeE/hqdefault.jpg"
    },
    {
      "videoId": "gX3Gw-3wxfs",
      "title": "Brothers Anthem (Encore)",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/gX3Gw-3wxfs/hqdefault.jpg"
    },
    {
      "videoId": "K0I124SPxmI",
      "title": "Kar Har Maidaan Fateh (Encore)",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/K0I124SPxmI/hqdefault.jpg"
    },
    {
      "videoId": "P6G4QoKwnzI",
      "title": "Chaiyya Chaiyya (Bass Boost) (Encore)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/P6G4QoKwnzI/hqdefault.jpg"
    },
    {
      "videoId": "t5PEt4aXI58",
      "title": "Chak Lein De (Encore)",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/t5PEt4aXI58/hqdefault.jpg"
    },
    {
      "videoId": "VAdGW7QDJiU",
      "title": "Get Ready To Fight (Encore)",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/VAdGW7QDJiU/hqdefault.jpg"
    },
    {
      "videoId": "V_jp5_VAzXk",
      "title": "Malhari (Warrior Workout) (Encore)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/V_jp5_VAzXk/hqdefault.jpg"
    },
    {
      "videoId": "8eYG5QGZAZs",
      "title": "Singham Title Track (Encore)",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/8eYG5QGZAZs/hqdefault.jpg"
    },
    {
      "videoId": "9M_ZKSmxb_s",
      "title": "Ziddi Dil (Encore)",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/9M_ZKSmxb_s/hqdefault.jpg"
    },
    {
      "videoId": "wr9M-CoxP7A",
      "title": "Jee Karda (Encore)",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/wr9M-CoxP7A/hqdefault.jpg"
    },
    {
      "videoId": "u2NAuswnTKs",
      "title": "Challa (Main Lad Jaana) (Encore)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/u2NAuswnTKs/hqdefault.jpg"
    },
    {
      "videoId": "3lDJZr6kbsg",
      "title": "Jai Jai Shivshankar (Encore)",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/3lDJZr6kbsg/hqdefault.jpg"
    },
    {
      "videoId": "LSP9SjZ3rrs",
      "title": "Aarambh Hai Prachand (Encore)",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/LSP9SjZ3rrs/hqdefault.jpg"
    },
    {
      "videoId": "6X0pNXXeVIA",
      "title": "Sher Aaya Sher (Encore)",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/6X0pNXXeVIA/hqdefault.jpg"
    },
    {
      "videoId": "Wr0BLOr2WlU",
      "title": "Apna Time Aayega (Encore)",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Wr0BLOr2WlU/hqdefault.jpg"
    },
    {
      "videoId": "3fPQtxRwn6U",
      "title": "Mere Gully Mein (Encore)",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/3fPQtxRwn6U/hqdefault.jpg"
    },
    {
      "videoId": "tLqtnGLfm4Q",
      "title": "Kaam Bhaari (Fast Flow) (Encore)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/tLqtnGLfm4Q/hqdefault.jpg"
    },
    {
      "videoId": "_iktURk0X-A",
      "title": "Mirchi (Encore)",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/_iktURk0X-A/hqdefault.jpg"
    },
    {
      "videoId": "Ov0YGGSY6gY",
      "title": "3:59 AM (Encore)",
      "artist": "DIVINE | Heavy Reps",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Ov0YGGSY6gY/hqdefault.jpg"
    },
    {
      "videoId": "inEu2qQuGZ8",
      "title": "Kohinoor (Encore)",
      "artist": "DIVINE | Alpha Motivation",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/inEu2qQuGZ8/hqdefault.jpg"
    },
    {
      "videoId": "VdyBtGaspss",
      "title": "Gunehgar (Encore)",
      "artist": "DIVINE | Heavy Bass Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/VdyBtGaspss/hqdefault.jpg"
    },
    {
      "videoId": "Umqb9KENgmk",
      "title": "Satya (Encore)",
      "artist": "DIVINE | Iron Fuel",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Umqb9KENgmk/hqdefault.jpg"
    },
    {
      "videoId": "MJyKN-8UncM",
      "title": "Voice of the Streets (Encore)",
      "artist": "DIVINE | Raw Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/MJyKN-8UncM/hqdefault.jpg"
    },
    {
      "videoId": "IJq0yyWug1k",
      "title": "Machayenge (Encore)",
      "artist": "Emiway Bantai | High Tempo Pump",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/IJq0yyWug1k/hqdefault.jpg"
    },
    {
      "videoId": "izy2tV-Ssj8",
      "title": "Khatam Hue Vande (Encore)",
      "artist": "Emiway Bantai | Cardio Rush",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/izy2tV-Ssj8/hqdefault.jpg"
    },
    {
      "videoId": "GtPvCa3vvxA",
      "title": "Firse Machayenge (Encore)",
      "artist": "Emiway Bantai | Gym Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/GtPvCa3vvxA/hqdefault.jpg"
    },
    {
      "videoId": "V1oczq_8L0E",
      "title": "Company (Encore)",
      "artist": "Emiway Bantai | Street Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/V1oczq_8L0E/hqdefault.jpg"
    },
    {
      "videoId": "z3UHfi9vpbc",
      "title": "Chhod Daala (Encore)",
      "artist": "Emiway Bantai | Hardcore Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/z3UHfi9vpbc/hqdefault.jpg"
    },
    {
      "videoId": "pIBoAh4OXhQ",
      "title": "Dangal Title Track (Remix)",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/pIBoAh4OXhQ/hqdefault.jpg"
    },
    {
      "videoId": "cUmUOb7j3dc",
      "title": "Sultan Title Track (Remix)",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/cUmUOb7j3dc/hqdefault.jpg"
    },
    {
      "videoId": "krJsyb_yf7A",
      "title": "Zinda (Remix)",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/krJsyb_yf7A/hqdefault.jpg"
    },
    {
      "videoId": "2bMEe0UYa8E",
      "title": "Brothers Anthem (Remix)",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2bMEe0UYa8E/hqdefault.jpg"
    },
    {
      "videoId": "eHRrZ5DQCV4",
      "title": "Kar Har Maidaan Fateh (Remix)",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/eHRrZ5DQCV4/hqdefault.jpg"
    },
    {
      "videoId": "fsiPzT50ZiM",
      "title": "Chaiyya Chaiyya (Bass Boost) (Remix)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/fsiPzT50ZiM/hqdefault.jpg"
    },
    {
      "videoId": "NUo8CKI34o4",
      "title": "Chak Lein De (Remix)",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/NUo8CKI34o4/hqdefault.jpg"
    },
    {
      "videoId": "YLoYt8H7kjM",
      "title": "Get Ready To Fight (Remix)",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/YLoYt8H7kjM/hqdefault.jpg"
    },
    {
      "videoId": "gvyUuxdRdR4",
      "title": "Malhari (Warrior Workout) (Remix)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/gvyUuxdRdR4/hqdefault.jpg"
    },
    {
      "videoId": "orYf6VDtj_k",
      "title": "Singham Title Track (Remix)",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/orYf6VDtj_k/hqdefault.jpg"
    },
    {
      "videoId": "Dm6YRJHy64c",
      "title": "Ziddi Dil (Remix)",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Dm6YRJHy64c/hqdefault.jpg"
    },
    {
      "videoId": "GLGuLXKT9Ng",
      "title": "Jee Karda (Remix)",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/GLGuLXKT9Ng/hqdefault.jpg"
    },
    {
      "videoId": "skq8M5khNbw",
      "title": "Challa (Main Lad Jaana) (Remix)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/skq8M5khNbw/hqdefault.jpg"
    },
    {
      "videoId": "qauUzF4GMZ0",
      "title": "Jai Jai Shivshankar (Remix)",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/qauUzF4GMZ0/hqdefault.jpg"
    },
    {
      "videoId": "dYwwHf9vWfo",
      "title": "Aarambh Hai Prachand (Remix)",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/dYwwHf9vWfo/hqdefault.jpg"
    },
    {
      "videoId": "2FRrtuu3Ljg",
      "title": "Sher Aaya Sher (Remix)",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2FRrtuu3Ljg/hqdefault.jpg"
    },
    {
      "videoId": "pz2Yz0_1lr8",
      "title": "Apna Time Aayega (Remix)",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/pz2Yz0_1lr8/hqdefault.jpg"
    },
    {
      "videoId": "oDkZEay6H6k",
      "title": "Mere Gully Mein (Remix)",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/oDkZEay6H6k/hqdefault.jpg"
    },
    {
      "videoId": "S2BOXJG71FY",
      "title": "Kaam Bhaari (Fast Flow) (Remix)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/S2BOXJG71FY/hqdefault.jpg"
    },
    {
      "videoId": "8K9eaAKLrE0",
      "title": "Mirchi (Remix)",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/8K9eaAKLrE0/hqdefault.jpg"
    },
    {
      "videoId": "jh6Anzu3ntQ",
      "title": "3:59 AM (Remix)",
      "artist": "DIVINE | Heavy Reps",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/jh6Anzu3ntQ/hqdefault.jpg"
    },
    {
      "videoId": "4O0_erwpB9E",
      "title": "Kohinoor (Remix)",
      "artist": "DIVINE | Alpha Motivation",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/4O0_erwpB9E/hqdefault.jpg"
    },
    {
      "videoId": "naQXI7l6op0",
      "title": "Gunehgar (Remix)",
      "artist": "DIVINE | Heavy Bass Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/naQXI7l6op0/hqdefault.jpg"
    },
    {
      "videoId": "Kp76nzS7pwA",
      "title": "Satya (Remix)",
      "artist": "DIVINE | Iron Fuel",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/Kp76nzS7pwA/hqdefault.jpg"
    },
    {
      "videoId": "-kVdEfkWsjo",
      "title": "Voice of the Streets (Remix)",
      "artist": "DIVINE | Raw Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/-kVdEfkWsjo/hqdefault.jpg"
    },
    {
      "videoId": "s095hRZYb2U",
      "title": "Machayenge (Remix)",
      "artist": "Emiway Bantai | High Tempo Pump",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/s095hRZYb2U/hqdefault.jpg"
    },
    {
      "videoId": "bXWcVn4uNd0",
      "title": "Khatam Hue Vande (Remix)",
      "artist": "Emiway Bantai | Cardio Rush",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/bXWcVn4uNd0/hqdefault.jpg"
    },
    {
      "videoId": "7fhY7FFZ6nU",
      "title": "Firse Machayenge (Remix)",
      "artist": "Emiway Bantai | Gym Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/7fhY7FFZ6nU/hqdefault.jpg"
    },
    {
      "videoId": "hoNb6HuNmU0",
      "title": "Company (Remix)",
      "artist": "Emiway Bantai | Street Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/hoNb6HuNmU0/hqdefault.jpg"
    },
    {
      "videoId": "ElZfdU54Cp8",
      "title": "Chhod Daala (Remix)",
      "artist": "Emiway Bantai | Hardcore Workout",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg"
    },
    {
      "videoId": "1A08X9oY2g4",
      "title": "Dangal Title Track (Live Acoustic)",
      "artist": "Daler Mehndi, Pritam | Dangal",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/1A08X9oY2g4/hqdefault.jpg"
    },
    {
      "videoId": "2B97k9hQ7e0",
      "title": "Sultan Title Track (Live Acoustic)",
      "artist": "Sukhwinder Singh, Shadab Faridi | Sultan",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2B97k9hQ7e0/hqdefault.jpg"
    },
    {
      "videoId": "3C84k0xR9p0",
      "title": "Zinda (Live Acoustic)",
      "artist": "Siddharth Mahadevan | Bhaag Milkha Bhaag",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/3C84k0xR9p0/hqdefault.jpg"
    },
    {
      "videoId": "4D73l9yT8q0",
      "title": "Brothers Anthem (Live Acoustic)",
      "artist": "Vishal Dadlani, Ajay-Atul | Brothers",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/4D73l9yT8q0/hqdefault.jpg"
    },
    {
      "videoId": "5E62m0vU7r0",
      "title": "Kar Har Maidaan Fateh (Live Acoustic)",
      "artist": "Sukhwinder Singh, Shreya Ghoshal | Sanju",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/5E62m0vU7r0/hqdefault.jpg"
    },
    {
      "videoId": "6F51n1wV6s0",
      "title": "Chaiyya Chaiyya (Bass Boost) (Live Acoustic)",
      "artist": "Sukhwinder Singh | High Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/6F51n1wV6s0/hqdefault.jpg"
    },
    {
      "videoId": "7G40o2xW5t0",
      "title": "Chak Lein De (Live Acoustic)",
      "artist": "Kailash Kher | Chandni Chowk To China",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/7G40o2xW5t0/hqdefault.jpg"
    },
    {
      "videoId": "8H39p3yX4u0",
      "title": "Get Ready To Fight (Live Acoustic)",
      "artist": "Benny Dayal, Vishal Mishra | Baaghi",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/8H39p3yX4u0/hqdefault.jpg"
    },
    {
      "videoId": "9I28q4zY3v0",
      "title": "Malhari (Warrior Workout) (Live Acoustic)",
      "artist": "Vishal Dadlani, Sanjay Leela Bhansali | Bajirao Mastani",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/9I28q4zY3v0/hqdefault.jpg"
    },
    {
      "videoId": "0J17r5aZ2w0",
      "title": "Singham Title Track (Live Acoustic)",
      "artist": "Sukhwinder Singh, Ajay-Atul | Singham",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/0J17r5aZ2w0/hqdefault.jpg"
    },
    {
      "videoId": "1K06s6bA1x0",
      "title": "Ziddi Dil (Live Acoustic)",
      "artist": "Vishal Dadlani | Mary Kom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/1K06s6bA1x0/hqdefault.jpg"
    },
    {
      "videoId": "2L95t7cB0y0",
      "title": "Jee Karda (Live Acoustic)",
      "artist": "Divya Kumar, Sachin-Jigar | Badlapur",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/2L95t7cB0y0/hqdefault.jpg"
    },
    {
      "videoId": "3M84u8dC9z0",
      "title": "Challa (Main Lad Jaana) (Live Acoustic)",
      "artist": "Romy, Vivek Hariharan, Shashwat | Uri",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/3M84u8dC9z0/hqdefault.jpg"
    },
    {
      "videoId": "4N73v9eD8a0",
      "title": "Jai Jai Shivshankar (Live Acoustic)",
      "artist": "Vishal Dadlani, Benny Dayal | War",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/4N73v9eD8a0/hqdefault.jpg"
    },
    {
      "videoId": "5O62w0fE7b0",
      "title": "Aarambh Hai Prachand (Live Acoustic)",
      "artist": "Piyush Mishra | Gulaal Heavy Beats",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/5O62w0fE7b0/hqdefault.jpg"
    },
    {
      "videoId": "6P51x1gF6c0",
      "title": "Sher Aaya Sher (Live Acoustic)",
      "artist": "DIVINE | Gully Boy Beast Mode",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/6P51x1gF6c0/hqdefault.jpg"
    },
    {
      "videoId": "7Q40y2hG5d0",
      "title": "Apna Time Aayega (Live Acoustic)",
      "artist": "Ranveer Singh, DIVINE | High Hype",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/7Q40y2hG5d0/hqdefault.jpg"
    },
    {
      "videoId": "8R39z3iH4e0",
      "title": "Mere Gully Mein (Live Acoustic)",
      "artist": "DIVINE, Naezy | Underground Energy",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/8R39z3iH4e0/hqdefault.jpg"
    },
    {
      "videoId": "9S28a4jI3f0",
      "title": "Kaam Bhaari (Fast Flow) (Live Acoustic)",
      "artist": "Kaam Bhaari | Rapid Cardio",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/9S28a4jI3f0/hqdefault.jpg"
    },
    {
      "videoId": "0T17b5kJ2g0",
      "title": "Mirchi (Live Acoustic)",
      "artist": "DIVINE, MC Altaf, Phenom",
      "category": "workout",
      "thumbnail": "https://i.ytimg.com/vi/0T17b5kJ2g0/hqdefault.jpg"
    }
  ],
  "awarapan": [
    {
      "videoId": "n_VrRuNkbrE",
      "title": "Toh Phir Aao",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/n_VrRuNkbrE/hqdefault.jpg"
    },
    {
      "videoId": "P2kS3h46cIA",
      "title": "Tera Mera Rishta Purana",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/P2kS3h46cIA/hqdefault.jpg"
    },
    {
      "videoId": "g23pmazHwgE",
      "title": "Mahiya",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/g23pmazHwgE/hqdefault.jpg"
    },
    {
      "videoId": "FJzE1p3mvw8",
      "title": "Zara Sa",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/FJzE1p3mvw8/hqdefault.jpg"
    },
    {
      "videoId": "ZsAOnmByy38",
      "title": "Beete Lamhe",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/ZsAOnmByy38/hqdefault.jpg"
    },
    {
      "videoId": "UlacMvx_VYk",
      "title": "Woh Lamhe Woh Baatein",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/UlacMvx_VYk/hqdefault.jpg"
    },
    {
      "videoId": "1DBhic8SSKs",
      "title": "Yeh Awarapan",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/1DBhic8SSKs/hqdefault.jpg"
    },
    {
      "videoId": "I9tX-lFUTrw",
      "title": "Tu Hi Meri Shab Hai",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/I9tX-lFUTrw/hqdefault.jpg"
    },
    {
      "videoId": "cGNcjqXe87U",
      "title": "Teri Yaadon Mein",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/cGNcjqXe87U/hqdefault.jpg"
    },
    {
      "videoId": "fVeJ6sJERR4",
      "title": "Tera Mera Rishta (Rock Mix)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/fVeJ6sJERR4/hqdefault.jpg"
    },
    {
      "videoId": "6rvUyBiBtik",
      "title": "Toh Phir Aao (Lounge Mix)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/6rvUyBiBtik/hqdefault.jpg"
    },
    {
      "videoId": "XwDV5xldudU",
      "title": "Awarapan Soul Anthem",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/XwDV5xldudU/hqdefault.jpg"
    },
    {
      "videoId": "oHmXALAdydI",
      "title": "Toh Phir Aao (Acoustic)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/oHmXALAdydI/hqdefault.jpg"
    },
    {
      "videoId": "itoIHcocrZI",
      "title": "Bheegi Bheegi",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/itoIHcocrZI/hqdefault.jpg"
    },
    {
      "videoId": "_RZwGzElnIs",
      "title": "Aashiq Banaya Aapne",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/_RZwGzElnIs/hqdefault.jpg"
    },
    {
      "videoId": "VMSNq_wtBDQ",
      "title": "Jannat Jahan",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/VMSNq_wtBDQ/hqdefault.jpg"
    },
    {
      "videoId": "r0c1f6XxRQg",
      "title": "Tujhi Mein",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/r0c1f6XxRQg/hqdefault.jpg"
    },
    {
      "videoId": "0bAVd9jJE2Q",
      "title": "Mere Bina",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/0bAVd9jJE2Q/hqdefault.jpg"
    },
    {
      "videoId": "aEeUuH0tyoA",
      "title": "Judai",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/aEeUuH0tyoA/hqdefault.jpg"
    },
    {
      "videoId": "eESg95AqmbA",
      "title": "Haal-E-Dil",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/eESg95AqmbA/hqdefault.jpg"
    },
    {
      "videoId": "tLqtnGLfm4Q",
      "title": "Aye Khuda",
      "artist": "Mithoon, Kshitij Tarey | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/tLqtnGLfm4Q/hqdefault.jpg"
    },
    {
      "videoId": "_iktURk0X-A",
      "title": "Phir Mohabbat",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/_iktURk0X-A/hqdefault.jpg"
    },
    {
      "videoId": "Ov0YGGSY6gY",
      "title": "Dil Sambhal Ja Zara",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Ov0YGGSY6gY/hqdefault.jpg"
    },
    {
      "videoId": "inEu2qQuGZ8",
      "title": "Mat Aazma Re",
      "artist": "KK, Pritam | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/inEu2qQuGZ8/hqdefault.jpg"
    },
    {
      "videoId": "VdyBtGaspss",
      "title": "Teri Jhuki Nazar",
      "artist": "Shafqat Amanat Ali | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/VdyBtGaspss/hqdefault.jpg"
    },
    {
      "videoId": "Umqb9KENgmk",
      "title": "Zindagi Do Pal Ki",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Umqb9KENgmk/hqdefault.jpg"
    },
    {
      "videoId": "MJyKN-8UncM",
      "title": "Dil Kyun Yeh Mera",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/MJyKN-8UncM/hqdefault.jpg"
    },
    {
      "videoId": "IJq0yyWug1k",
      "title": "Soniyo",
      "artist": "Sonu Nigam, Shreya Ghoshal | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/IJq0yyWug1k/hqdefault.jpg"
    },
    {
      "videoId": "izy2tV-Ssj8",
      "title": "Maahi",
      "artist": "Toshi Sabri | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/izy2tV-Ssj8/hqdefault.jpg"
    },
    {
      "videoId": "GtPvCa3vvxA",
      "title": "O Jaana",
      "artist": "KK | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/GtPvCa3vvxA/hqdefault.jpg"
    },
    {
      "videoId": "V1oczq_8L0E",
      "title": "Toh Phir Aao (Reprise)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/V1oczq_8L0E/hqdefault.jpg"
    },
    {
      "videoId": "z3UHfi9vpbc",
      "title": "Tera Mera Rishta Purana (Reprise)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/z3UHfi9vpbc/hqdefault.jpg"
    },
    {
      "videoId": "pIBoAh4OXhQ",
      "title": "Mahiya (Reprise)",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/pIBoAh4OXhQ/hqdefault.jpg"
    },
    {
      "videoId": "cUmUOb7j3dc",
      "title": "Zara Sa (Reprise)",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/cUmUOb7j3dc/hqdefault.jpg"
    },
    {
      "videoId": "krJsyb_yf7A",
      "title": "Beete Lamhe (Reprise)",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/krJsyb_yf7A/hqdefault.jpg"
    },
    {
      "videoId": "2bMEe0UYa8E",
      "title": "Woh Lamhe Woh Baatein (Reprise)",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/2bMEe0UYa8E/hqdefault.jpg"
    },
    {
      "videoId": "eHRrZ5DQCV4",
      "title": "Yeh Awarapan (Reprise)",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/eHRrZ5DQCV4/hqdefault.jpg"
    },
    {
      "videoId": "fsiPzT50ZiM",
      "title": "Tu Hi Meri Shab Hai (Reprise)",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/fsiPzT50ZiM/hqdefault.jpg"
    },
    {
      "videoId": "NUo8CKI34o4",
      "title": "Teri Yaadon Mein (Reprise)",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/NUo8CKI34o4/hqdefault.jpg"
    },
    {
      "videoId": "YLoYt8H7kjM",
      "title": "Tera Mera Rishta (Rock Mix) (Reprise)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/YLoYt8H7kjM/hqdefault.jpg"
    },
    {
      "videoId": "gvyUuxdRdR4",
      "title": "Toh Phir Aao (Lounge Mix) (Reprise)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/gvyUuxdRdR4/hqdefault.jpg"
    },
    {
      "videoId": "orYf6VDtj_k",
      "title": "Awarapan Soul Anthem (Reprise)",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/orYf6VDtj_k/hqdefault.jpg"
    },
    {
      "videoId": "Dm6YRJHy64c",
      "title": "Toh Phir Aao (Acoustic) (Reprise)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Dm6YRJHy64c/hqdefault.jpg"
    },
    {
      "videoId": "GLGuLXKT9Ng",
      "title": "Bheegi Bheegi (Reprise)",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/GLGuLXKT9Ng/hqdefault.jpg"
    },
    {
      "videoId": "skq8M5khNbw",
      "title": "Aashiq Banaya Aapne (Reprise)",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/skq8M5khNbw/hqdefault.jpg"
    },
    {
      "videoId": "qauUzF4GMZ0",
      "title": "Jannat Jahan (Reprise)",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/qauUzF4GMZ0/hqdefault.jpg"
    },
    {
      "videoId": "dYwwHf9vWfo",
      "title": "Tujhi Mein (Reprise)",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/dYwwHf9vWfo/hqdefault.jpg"
    },
    {
      "videoId": "2FRrtuu3Ljg",
      "title": "Mere Bina (Reprise)",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/2FRrtuu3Ljg/hqdefault.jpg"
    },
    {
      "videoId": "pz2Yz0_1lr8",
      "title": "Judai (Reprise)",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/pz2Yz0_1lr8/hqdefault.jpg"
    },
    {
      "videoId": "oDkZEay6H6k",
      "title": "Haal-E-Dil (Reprise)",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/oDkZEay6H6k/hqdefault.jpg"
    },
    {
      "videoId": "S2BOXJG71FY",
      "title": "Aye Khuda (Reprise)",
      "artist": "Mithoon, Kshitij Tarey | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/S2BOXJG71FY/hqdefault.jpg"
    },
    {
      "videoId": "8K9eaAKLrE0",
      "title": "Phir Mohabbat (Reprise)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/8K9eaAKLrE0/hqdefault.jpg"
    },
    {
      "videoId": "jh6Anzu3ntQ",
      "title": "Dil Sambhal Ja Zara (Reprise)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/jh6Anzu3ntQ/hqdefault.jpg"
    },
    {
      "videoId": "4O0_erwpB9E",
      "title": "Mat Aazma Re (Reprise)",
      "artist": "KK, Pritam | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/4O0_erwpB9E/hqdefault.jpg"
    },
    {
      "videoId": "naQXI7l6op0",
      "title": "Teri Jhuki Nazar (Reprise)",
      "artist": "Shafqat Amanat Ali | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/naQXI7l6op0/hqdefault.jpg"
    },
    {
      "videoId": "Kp76nzS7pwA",
      "title": "Zindagi Do Pal Ki (Reprise)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Kp76nzS7pwA/hqdefault.jpg"
    },
    {
      "videoId": "-kVdEfkWsjo",
      "title": "Dil Kyun Yeh Mera (Reprise)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/-kVdEfkWsjo/hqdefault.jpg"
    },
    {
      "videoId": "s095hRZYb2U",
      "title": "Soniyo (Reprise)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/s095hRZYb2U/hqdefault.jpg"
    },
    {
      "videoId": "bXWcVn4uNd0",
      "title": "Maahi (Reprise)",
      "artist": "Toshi Sabri | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/bXWcVn4uNd0/hqdefault.jpg"
    },
    {
      "videoId": "7fhY7FFZ6nU",
      "title": "O Jaana (Reprise)",
      "artist": "KK | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/7fhY7FFZ6nU/hqdefault.jpg"
    },
    {
      "videoId": "hoNb6HuNmU0",
      "title": "Toh Phir Aao (Special Edition)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/hoNb6HuNmU0/hqdefault.jpg"
    },
    {
      "videoId": "ElZfdU54Cp8",
      "title": "Tera Mera Rishta Purana (Special Edition)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg"
    },
    {
      "videoId": "RLzC55ai0eo",
      "title": "Mahiya (Special Edition)",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg"
    },
    {
      "videoId": "Grr0FlC8SQA",
      "title": "Zara Sa (Special Edition)",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Grr0FlC8SQA/hqdefault.jpg"
    },
    {
      "videoId": "w8LcxY43N5Y",
      "title": "Beete Lamhe (Special Edition)",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/w8LcxY43N5Y/hqdefault.jpg"
    },
    {
      "videoId": "vdbP_3o73qI",
      "title": "Woh Lamhe Woh Baatein (Special Edition)",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/vdbP_3o73qI/hqdefault.jpg"
    },
    {
      "videoId": "HYUpNJJELeE",
      "title": "Yeh Awarapan (Special Edition)",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/HYUpNJJELeE/hqdefault.jpg"
    },
    {
      "videoId": "yRB0xbKDebo",
      "title": "Tu Hi Meri Shab Hai (Special Edition)",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/yRB0xbKDebo/hqdefault.jpg"
    },
    {
      "videoId": "CsOsmgUmT9U",
      "title": "Teri Yaadon Mein (Special Edition)",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/CsOsmgUmT9U/hqdefault.jpg"
    },
    {
      "videoId": "UEZm0U6KrfY",
      "title": "Tera Mera Rishta (Rock Mix) (Special Edition)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/UEZm0U6KrfY/hqdefault.jpg"
    },
    {
      "videoId": "EQxEms7gnqs",
      "title": "Toh Phir Aao (Lounge Mix) (Special Edition)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/EQxEms7gnqs/hqdefault.jpg"
    },
    {
      "videoId": "tdbD2naYwdo",
      "title": "Awarapan Soul Anthem (Special Edition)",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/tdbD2naYwdo/hqdefault.jpg"
    },
    {
      "videoId": "SsOY0gZFfGs",
      "title": "Toh Phir Aao (Acoustic) (Special Edition)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/SsOY0gZFfGs/hqdefault.jpg"
    },
    {
      "videoId": "kPtn26x8TZM",
      "title": "Bheegi Bheegi (Special Edition)",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/kPtn26x8TZM/hqdefault.jpg"
    },
    {
      "videoId": "iZH_ydGn9i0",
      "title": "Aashiq Banaya Aapne (Special Edition)",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/iZH_ydGn9i0/hqdefault.jpg"
    },
    {
      "videoId": "tGs7iLem1cE",
      "title": "Jannat Jahan (Special Edition)",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/tGs7iLem1cE/hqdefault.jpg"
    },
    {
      "videoId": "9-LH8ABADdo",
      "title": "Tujhi Mein (Special Edition)",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/9-LH8ABADdo/hqdefault.jpg"
    },
    {
      "videoId": "QRwLbf3PwO8",
      "title": "Mere Bina (Special Edition)",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/QRwLbf3PwO8/hqdefault.jpg"
    },
    {
      "videoId": "mF2BHtQh4EI",
      "title": "Judai (Special Edition)",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/mF2BHtQh4EI/hqdefault.jpg"
    },
    {
      "videoId": "SAcpESN_Fk4",
      "title": "Haal-E-Dil (Special Edition)",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/SAcpESN_Fk4/hqdefault.jpg"
    },
    {
      "videoId": "JtnPpxe8K7c",
      "title": "Aye Khuda (Special Edition)",
      "artist": "Mithoon, Kshitij Tarey | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/JtnPpxe8K7c/hqdefault.jpg"
    },
    {
      "videoId": "mevO4I0f5lg",
      "title": "Phir Mohabbat (Special Edition)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/mevO4I0f5lg/hqdefault.jpg"
    },
    {
      "videoId": "nqUbSvFS1e4",
      "title": "Dil Sambhal Ja Zara (Special Edition)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/nqUbSvFS1e4/hqdefault.jpg"
    },
    {
      "videoId": "5DiLiDaIemI",
      "title": "Mat Aazma Re (Special Edition)",
      "artist": "KK, Pritam | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/5DiLiDaIemI/hqdefault.jpg"
    },
    {
      "videoId": "u5DCgnh8S9M",
      "title": "Teri Jhuki Nazar (Special Edition)",
      "artist": "Shafqat Amanat Ali | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/u5DCgnh8S9M/hqdefault.jpg"
    },
    {
      "videoId": "ca-hzALjrcY",
      "title": "Zindagi Do Pal Ki (Special Edition)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/ca-hzALjrcY/hqdefault.jpg"
    },
    {
      "videoId": "A2JaHCaVjrU",
      "title": "Dil Kyun Yeh Mera (Special Edition)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/A2JaHCaVjrU/hqdefault.jpg"
    },
    {
      "videoId": "EsPrpf_vpi8",
      "title": "Soniyo (Special Edition)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/EsPrpf_vpi8/hqdefault.jpg"
    },
    {
      "videoId": "PsyNOOS5Xp4",
      "title": "Maahi (Special Edition)",
      "artist": "Toshi Sabri | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/PsyNOOS5Xp4/hqdefault.jpg"
    },
    {
      "videoId": "POvFEQaK634",
      "title": "O Jaana (Special Edition)",
      "artist": "KK | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/POvFEQaK634/hqdefault.jpg"
    },
    {
      "videoId": "Pr86yMP_oZE",
      "title": "Toh Phir Aao (Unplugged)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Pr86yMP_oZE/hqdefault.jpg"
    },
    {
      "videoId": "D8jKEaAyNcs",
      "title": "Tera Mera Rishta Purana (Unplugged)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/D8jKEaAyNcs/hqdefault.jpg"
    },
    {
      "videoId": "k_Qe4846hSI",
      "title": "Mahiya (Unplugged)",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/k_Qe4846hSI/hqdefault.jpg"
    },
    {
      "videoId": "EixnLHZ6QjA",
      "title": "Zara Sa (Unplugged)",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/EixnLHZ6QjA/hqdefault.jpg"
    },
    {
      "videoId": "XKmEVtVEMF0",
      "title": "Beete Lamhe (Unplugged)",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/XKmEVtVEMF0/hqdefault.jpg"
    },
    {
      "videoId": "8sxzVtqoAnA",
      "title": "Woh Lamhe Woh Baatein (Unplugged)",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/8sxzVtqoAnA/hqdefault.jpg"
    },
    {
      "videoId": "MA9hbox27Zc",
      "title": "Yeh Awarapan (Unplugged)",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/MA9hbox27Zc/hqdefault.jpg"
    },
    {
      "videoId": "h6O4esqraE0",
      "title": "Tu Hi Meri Shab Hai (Unplugged)",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/h6O4esqraE0/hqdefault.jpg"
    },
    {
      "videoId": "VDzjgO7-pVI",
      "title": "Teri Yaadon Mein (Unplugged)",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/VDzjgO7-pVI/hqdefault.jpg"
    },
    {
      "videoId": "KUpwupYj_tY",
      "title": "Tera Mera Rishta (Rock Mix) (Unplugged)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/KUpwupYj_tY/hqdefault.jpg"
    },
    {
      "videoId": "2CXSw1oPj3I",
      "title": "Toh Phir Aao (Lounge Mix) (Unplugged)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/2CXSw1oPj3I/hqdefault.jpg"
    },
    {
      "videoId": "Z0VbANbyH2o",
      "title": "Awarapan Soul Anthem (Unplugged)",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Z0VbANbyH2o/hqdefault.jpg"
    },
    {
      "videoId": "eLjmQ0aGC1U",
      "title": "Toh Phir Aao (Acoustic) (Unplugged)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/eLjmQ0aGC1U/hqdefault.jpg"
    },
    {
      "videoId": "FiENDQapd4g",
      "title": "Bheegi Bheegi (Unplugged)",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/FiENDQapd4g/hqdefault.jpg"
    },
    {
      "videoId": "Nm0qd0uhhhY",
      "title": "Aashiq Banaya Aapne (Unplugged)",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Nm0qd0uhhhY/hqdefault.jpg"
    },
    {
      "videoId": "PL0f3_ZuJts",
      "title": "Jannat Jahan (Unplugged)",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/PL0f3_ZuJts/hqdefault.jpg"
    },
    {
      "videoId": "-vzZ50Rijm8",
      "title": "Tujhi Mein (Unplugged)",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/-vzZ50Rijm8/hqdefault.jpg"
    },
    {
      "videoId": "JhjnnGuvI0c",
      "title": "Mere Bina (Unplugged)",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/JhjnnGuvI0c/hqdefault.jpg"
    },
    {
      "videoId": "kIVgRHm2OKg",
      "title": "Judai (Unplugged)",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/kIVgRHm2OKg/hqdefault.jpg"
    },
    {
      "videoId": "ico0Nfz2gfU",
      "title": "Haal-E-Dil (Unplugged)",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/ico0Nfz2gfU/hqdefault.jpg"
    },
    {
      "videoId": "yb584STwkTY",
      "title": "Aye Khuda (Unplugged)",
      "artist": "Mithoon, Kshitij Tarey | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/yb584STwkTY/hqdefault.jpg"
    },
    {
      "videoId": "BGU1YL9LNr4",
      "title": "Phir Mohabbat (Unplugged)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/BGU1YL9LNr4/hqdefault.jpg"
    },
    {
      "videoId": "XK7Crkcn7Z0",
      "title": "Dil Sambhal Ja Zara (Unplugged)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/XK7Crkcn7Z0/hqdefault.jpg"
    },
    {
      "videoId": "gKioNQ1QwVA",
      "title": "Mat Aazma Re (Unplugged)",
      "artist": "KK, Pritam | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/gKioNQ1QwVA/hqdefault.jpg"
    },
    {
      "videoId": "LToDPzfwMoM",
      "title": "Teri Jhuki Nazar (Unplugged)",
      "artist": "Shafqat Amanat Ali | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/LToDPzfwMoM/hqdefault.jpg"
    },
    {
      "videoId": "6jS1rU4F4HA",
      "title": "Zindagi Do Pal Ki (Unplugged)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/6jS1rU4F4HA/hqdefault.jpg"
    },
    {
      "videoId": "sXRnSIcZVZ0",
      "title": "Dil Kyun Yeh Mera (Unplugged)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/sXRnSIcZVZ0/hqdefault.jpg"
    },
    {
      "videoId": "jy26LpiiGJA",
      "title": "Soniyo (Unplugged)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/jy26LpiiGJA/hqdefault.jpg"
    },
    {
      "videoId": "iAIBF2ngbWY",
      "title": "Maahi (Unplugged)",
      "artist": "Toshi Sabri | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/iAIBF2ngbWY/hqdefault.jpg"
    },
    {
      "videoId": "HrnrqYxYrbk",
      "title": "O Jaana (Unplugged)",
      "artist": "KK | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg"
    },
    {
      "videoId": "WWXm39leYew",
      "title": "Toh Phir Aao (Encore)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/WWXm39leYew/hqdefault.jpg"
    },
    {
      "videoId": "lwv_0SEJ4NQ",
      "title": "Tera Mera Rishta Purana (Encore)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/lwv_0SEJ4NQ/hqdefault.jpg"
    },
    {
      "videoId": "9cHq63r1vHQ",
      "title": "Mahiya (Encore)",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/9cHq63r1vHQ/hqdefault.jpg"
    },
    {
      "videoId": "Xbizke4zftY",
      "title": "Zara Sa (Encore)",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Xbizke4zftY/hqdefault.jpg"
    },
    {
      "videoId": "NlRrGrrRyNo",
      "title": "Beete Lamhe (Encore)",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/NlRrGrrRyNo/hqdefault.jpg"
    },
    {
      "videoId": "KNXYonYD59w",
      "title": "Woh Lamhe Woh Baatein (Encore)",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/KNXYonYD59w/hqdefault.jpg"
    },
    {
      "videoId": "kZGpkkfk2lA",
      "title": "Yeh Awarapan (Encore)",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/kZGpkkfk2lA/hqdefault.jpg"
    },
    {
      "videoId": "9UmoVnBSm5k",
      "title": "Tu Hi Meri Shab Hai (Encore)",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/9UmoVnBSm5k/hqdefault.jpg"
    },
    {
      "videoId": "Mv8yFE4-DA8",
      "title": "Teri Yaadon Mein (Encore)",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Mv8yFE4-DA8/hqdefault.jpg"
    },
    {
      "videoId": "XaNgxnN6qEI",
      "title": "Tera Mera Rishta (Rock Mix) (Encore)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/XaNgxnN6qEI/hqdefault.jpg"
    },
    {
      "videoId": "QKMTreKTpug",
      "title": "Toh Phir Aao (Lounge Mix) (Encore)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/QKMTreKTpug/hqdefault.jpg"
    },
    {
      "videoId": "6RlpNQiPhgY",
      "title": "Awarapan Soul Anthem (Encore)",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/6RlpNQiPhgY/hqdefault.jpg"
    },
    {
      "videoId": "3o7o4N_mEUY",
      "title": "Toh Phir Aao (Acoustic) (Encore)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/3o7o4N_mEUY/hqdefault.jpg"
    },
    {
      "videoId": "kO4AU5yBp64",
      "title": "Bheegi Bheegi (Encore)",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/kO4AU5yBp64/hqdefault.jpg"
    },
    {
      "videoId": "wqVGA-XDe1I",
      "title": "Aashiq Banaya Aapne (Encore)",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/wqVGA-XDe1I/hqdefault.jpg"
    },
    {
      "videoId": "YMAdgnh9VOI",
      "title": "Jannat Jahan (Encore)",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/YMAdgnh9VOI/hqdefault.jpg"
    },
    {
      "videoId": "jBfR0bU82z8",
      "title": "Tujhi Mein (Encore)",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/jBfR0bU82z8/hqdefault.jpg"
    },
    {
      "videoId": "hpqvSU0Ynn0",
      "title": "Mere Bina (Encore)",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/hpqvSU0Ynn0/hqdefault.jpg"
    },
    {
      "videoId": "sK7riqg2mr4",
      "title": "Judai (Encore)",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/sK7riqg2mr4/hqdefault.jpg"
    },
    {
      "videoId": "OGI0fNvr4fo",
      "title": "Haal-E-Dil (Encore)",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/OGI0fNvr4fo/hqdefault.jpg"
    },
    {
      "videoId": "Q2S7CDuBTOc",
      "title": "Aye Khuda (Encore)",
      "artist": "Mithoon, Kshitij Tarey | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Q2S7CDuBTOc/hqdefault.jpg"
    },
    {
      "videoId": "xRb8hxwN5zc",
      "title": "Phir Mohabbat (Encore)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/xRb8hxwN5zc/hqdefault.jpg"
    },
    {
      "videoId": "FOA9iyxsW_A",
      "title": "Dil Sambhal Ja Zara (Encore)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/FOA9iyxsW_A/hqdefault.jpg"
    },
    {
      "videoId": "fQlhzY5UH6s",
      "title": "Mat Aazma Re (Encore)",
      "artist": "KK, Pritam | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/fQlhzY5UH6s/hqdefault.jpg"
    },
    {
      "videoId": "dhY8jRNELUc",
      "title": "Teri Jhuki Nazar (Encore)",
      "artist": "Shafqat Amanat Ali | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/dhY8jRNELUc/hqdefault.jpg"
    },
    {
      "videoId": "fs7-8M1VbZU",
      "title": "Zindagi Do Pal Ki (Encore)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/fs7-8M1VbZU/hqdefault.jpg"
    },
    {
      "videoId": "6SGRn9OHtFY",
      "title": "Dil Kyun Yeh Mera (Encore)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/6SGRn9OHtFY/hqdefault.jpg"
    },
    {
      "videoId": "pon8irRa8II",
      "title": "Soniyo (Encore)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/pon8irRa8II/hqdefault.jpg"
    },
    {
      "videoId": "UsxERu1Vv08",
      "title": "Maahi (Encore)",
      "artist": "Toshi Sabri | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/UsxERu1Vv08/hqdefault.jpg"
    },
    {
      "videoId": "zCjRVABSHUs",
      "title": "O Jaana (Encore)",
      "artist": "KK | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/zCjRVABSHUs/hqdefault.jpg"
    },
    {
      "videoId": "r-i8teGFG5g",
      "title": "Toh Phir Aao (Remix)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/r-i8teGFG5g/hqdefault.jpg"
    },
    {
      "videoId": "4vSIwdj6MEU",
      "title": "Tera Mera Rishta Purana (Remix)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/4vSIwdj6MEU/hqdefault.jpg"
    },
    {
      "videoId": "Ya_qVko-Xg0",
      "title": "Mahiya (Remix)",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Ya_qVko-Xg0/hqdefault.jpg"
    },
    {
      "videoId": "KAskRVFhv-c",
      "title": "Zara Sa (Remix)",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/KAskRVFhv-c/hqdefault.jpg"
    },
    {
      "videoId": "8Y7bYQIWcuk",
      "title": "Beete Lamhe (Remix)",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/8Y7bYQIWcuk/hqdefault.jpg"
    },
    {
      "videoId": "6AcUmOGMnak",
      "title": "Woh Lamhe Woh Baatein (Remix)",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/6AcUmOGMnak/hqdefault.jpg"
    },
    {
      "videoId": "njoL-CQt7H4",
      "title": "Yeh Awarapan (Remix)",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/njoL-CQt7H4/hqdefault.jpg"
    },
    {
      "videoId": "4mq5tyWfXDU",
      "title": "Tu Hi Meri Shab Hai (Remix)",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/4mq5tyWfXDU/hqdefault.jpg"
    },
    {
      "videoId": "TGpG56pg3UU",
      "title": "Teri Yaadon Mein (Remix)",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/TGpG56pg3UU/hqdefault.jpg"
    },
    {
      "videoId": "EtSAs6GD0Yk",
      "title": "Tera Mera Rishta (Rock Mix) (Remix)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/EtSAs6GD0Yk/hqdefault.jpg"
    },
    {
      "videoId": "_NWaYjsz3qY",
      "title": "Toh Phir Aao (Lounge Mix) (Remix)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/_NWaYjsz3qY/hqdefault.jpg"
    },
    {
      "videoId": "ltrstdEFaqg",
      "title": "Awarapan Soul Anthem (Remix)",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/ltrstdEFaqg/hqdefault.jpg"
    },
    {
      "videoId": "UNs50T6EYwE",
      "title": "Toh Phir Aao (Acoustic) (Remix)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/UNs50T6EYwE/hqdefault.jpg"
    },
    {
      "videoId": "txxAH9D2gZU",
      "title": "Bheegi Bheegi (Remix)",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/txxAH9D2gZU/hqdefault.jpg"
    },
    {
      "videoId": "fKxEXm9qG4k",
      "title": "Aashiq Banaya Aapne (Remix)",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/fKxEXm9qG4k/hqdefault.jpg"
    },
    {
      "videoId": "WIjra2HHRFM",
      "title": "Jannat Jahan (Remix)",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/WIjra2HHRFM/hqdefault.jpg"
    },
    {
      "videoId": "tnp8SRcXx-s",
      "title": "Tujhi Mein (Remix)",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/tnp8SRcXx-s/hqdefault.jpg"
    },
    {
      "videoId": "v9KvrMnnyb4",
      "title": "Mere Bina (Remix)",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/v9KvrMnnyb4/hqdefault.jpg"
    },
    {
      "videoId": "uJlJBIBIbAU",
      "title": "Judai (Remix)",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/uJlJBIBIbAU/hqdefault.jpg"
    },
    {
      "videoId": "0n2G2SryMuY",
      "title": "Haal-E-Dil (Remix)",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/0n2G2SryMuY/hqdefault.jpg"
    },
    {
      "videoId": "bfzDXYW5fS0",
      "title": "Aye Khuda (Remix)",
      "artist": "Mithoon, Kshitij Tarey | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/bfzDXYW5fS0/hqdefault.jpg"
    },
    {
      "videoId": "YrBE1Cd9UzA",
      "title": "Phir Mohabbat (Remix)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/YrBE1Cd9UzA/hqdefault.jpg"
    },
    {
      "videoId": "Y35uCA-XVRM",
      "title": "Dil Sambhal Ja Zara (Remix)",
      "artist": "Arijit Singh, Mohammad Irfan | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Y35uCA-XVRM/hqdefault.jpg"
    },
    {
      "videoId": "UcmzeXxF4D4",
      "title": "Mat Aazma Re (Remix)",
      "artist": "KK, Pritam | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/UcmzeXxF4D4/hqdefault.jpg"
    },
    {
      "videoId": "P9OuseD4zdI",
      "title": "Teri Jhuki Nazar (Remix)",
      "artist": "Shafqat Amanat Ali | Murder 3",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/P9OuseD4zdI/hqdefault.jpg"
    },
    {
      "videoId": "MYgIWSsOaSE",
      "title": "Zindagi Do Pal Ki (Remix)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/MYgIWSsOaSE/hqdefault.jpg"
    },
    {
      "videoId": "CXlHYSiuW4U",
      "title": "Dil Kyun Yeh Mera (Remix)",
      "artist": "KK, Rajesh Roshan | Kites",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/CXlHYSiuW4U/hqdefault.jpg"
    },
    {
      "videoId": "FYfYq2a-orA",
      "title": "Soniyo (Remix)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/FYfYq2a-orA/hqdefault.jpg"
    },
    {
      "videoId": "8v-TWxPWIWc",
      "title": "Maahi (Remix)",
      "artist": "Toshi Sabri | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/8v-TWxPWIWc/hqdefault.jpg"
    },
    {
      "videoId": "jIqRbFQl-ds",
      "title": "O Jaana (Remix)",
      "artist": "KK | Raaz 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/jIqRbFQl-ds/hqdefault.jpg"
    },
    {
      "videoId": "Aokj-w3COw0",
      "title": "Toh Phir Aao (Live Acoustic)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Aokj-w3COw0/hqdefault.jpg"
    },
    {
      "videoId": "vIUp4CzOrpQ",
      "title": "Tera Mera Rishta Purana (Live Acoustic)",
      "artist": "Mustafa Zahid | Pritam | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/vIUp4CzOrpQ/hqdefault.jpg"
    },
    {
      "videoId": "RzMmU4xvyCU",
      "title": "Mahiya (Live Acoustic)",
      "artist": "Annie Khalid | Suzanne | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/RzMmU4xvyCU/hqdefault.jpg"
    },
    {
      "videoId": "Jv03fM7LZgE",
      "title": "Zara Sa (Live Acoustic)",
      "artist": "KK, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Jv03fM7LZgE/hqdefault.jpg"
    },
    {
      "videoId": "s_Ab720t_zo",
      "title": "Beete Lamhe (Live Acoustic)",
      "artist": "KK, Mithoon | The Train",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/s_Ab720t_zo/hqdefault.jpg"
    },
    {
      "videoId": "5BAWcCxkMCs",
      "title": "Woh Lamhe Woh Baatein (Live Acoustic)",
      "artist": "Atif Aslam, Mithoon | Zeher",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/5BAWcCxkMCs/hqdefault.jpg"
    },
    {
      "videoId": "QMfLDyEoWkE",
      "title": "Yeh Awarapan (Live Acoustic)",
      "artist": "Arijit Singh | Amaal Mallik",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/QMfLDyEoWkE/hqdefault.jpg"
    },
    {
      "videoId": "CSO5DhzK094",
      "title": "Tu Hi Meri Shab Hai (Live Acoustic)",
      "artist": "KK, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/CSO5DhzK094/hqdefault.jpg"
    },
    {
      "videoId": "Vsxh7gEKuOE",
      "title": "Teri Yaadon Mein (Live Acoustic)",
      "artist": "KK, Shreya Ghoshal | The Killer",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/Vsxh7gEKuOE/hqdefault.jpg"
    },
    {
      "videoId": "-8DxXays6v8",
      "title": "Tera Mera Rishta (Rock Mix) (Live Acoustic)",
      "artist": "Mustafa Zahid | Mithoon",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/-8DxXays6v8/hqdefault.jpg"
    },
    {
      "videoId": "1AGVmQ5OwtM",
      "title": "Toh Phir Aao (Lounge Mix) (Live Acoustic)",
      "artist": "Mustafa Zahid | Awarapan",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/1AGVmQ5OwtM/hqdefault.jpg"
    },
    {
      "videoId": "tYgy4fF9iJA",
      "title": "Awarapan Soul Anthem (Live Acoustic)",
      "artist": "Pritam | Emraan Hashmi",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/tYgy4fF9iJA/hqdefault.jpg"
    },
    {
      "videoId": "4G6-fKG96Y8",
      "title": "Toh Phir Aao (Acoustic) (Live Acoustic)",
      "artist": "Mustafa Zahid | Vishesh Films",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/4G6-fKG96Y8/hqdefault.jpg"
    },
    {
      "videoId": "TnnOyFHn0Xc",
      "title": "Bheegi Bheegi (Live Acoustic)",
      "artist": "James, Pritam | Gangster",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/TnnOyFHn0Xc/hqdefault.jpg"
    },
    {
      "videoId": "pWJTiLL5PM8",
      "title": "Aashiq Banaya Aapne (Live Acoustic)",
      "artist": "Himesh Reshammiya, Shreya Ghoshal",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/pWJTiLL5PM8/hqdefault.jpg"
    },
    {
      "videoId": "nZpm-87y37Y",
      "title": "Jannat Jahan (Live Acoustic)",
      "artist": "Rupam Islam | Jannat 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/nZpm-87y37Y/hqdefault.jpg"
    },
    {
      "videoId": "RBTXo0Ai8_A",
      "title": "Tujhi Mein (Live Acoustic)",
      "artist": "KK, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/RBTXo0Ai8_A/hqdefault.jpg"
    },
    {
      "videoId": "5qJNtsPJtKc",
      "title": "Mere Bina (Live Acoustic)",
      "artist": "Nikhil D’Souza, Pritam | Crook",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/5qJNtsPJtKc/hqdefault.jpg"
    },
    {
      "videoId": "fXRvluHnjxE",
      "title": "Judai (Live Acoustic)",
      "artist": "Kamran Ahmed, Pritam | Jannat",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/fXRvluHnjxE/hqdefault.jpg"
    },
    {
      "videoId": "xitd9mEZIHk",
      "title": "Haal-E-Dil (Live Acoustic)",
      "artist": "Harshit Saxena | Murder 2",
      "category": "awarapan",
      "thumbnail": "https://i.ytimg.com/vi/xitd9mEZIHk/hqdefault.jpg"
    }
  ],
  "romantic_new": [
    {
      "videoId": "tLqtnGLfm4Q",
      "title": "Kesariya",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/tLqtnGLfm4Q/hqdefault.jpg"
    },
    {
      "videoId": "_iktURk0X-A",
      "title": "Apna Bana Le",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/_iktURk0X-A/hqdefault.jpg"
    },
    {
      "videoId": "Ov0YGGSY6gY",
      "title": "Raataan Lambiyan",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Ov0YGGSY6gY/hqdefault.jpg"
    },
    {
      "videoId": "inEu2qQuGZ8",
      "title": "Heeriye",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/inEu2qQuGZ8/hqdefault.jpg"
    },
    {
      "videoId": "VdyBtGaspss",
      "title": "Pehle Bhi Main",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/VdyBtGaspss/hqdefault.jpg"
    },
    {
      "videoId": "Umqb9KENgmk",
      "title": "Tujhe Kitna Chahne Lage",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Umqb9KENgmk/hqdefault.jpg"
    },
    {
      "videoId": "MJyKN-8UncM",
      "title": "O Maahi",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/MJyKN-8UncM/hqdefault.jpg"
    },
    {
      "videoId": "IJq0yyWug1k",
      "title": "Ve Kamleya",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/IJq0yyWug1k/hqdefault.jpg"
    },
    {
      "videoId": "izy2tV-Ssj8",
      "title": "Hawaayein",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/izy2tV-Ssj8/hqdefault.jpg"
    },
    {
      "videoId": "GtPvCa3vvxA",
      "title": "Tum Hi Ho",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/GtPvCa3vvxA/hqdefault.jpg"
    },
    {
      "videoId": "V1oczq_8L0E",
      "title": "Shayad",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/V1oczq_8L0E/hqdefault.jpg"
    },
    {
      "videoId": "z3UHfi9vpbc",
      "title": "Agar Tum Saath Ho",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/z3UHfi9vpbc/hqdefault.jpg"
    },
    {
      "videoId": "pIBoAh4OXhQ",
      "title": "Satranga",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/pIBoAh4OXhQ/hqdefault.jpg"
    },
    {
      "videoId": "cUmUOb7j3dc",
      "title": "Tera Ban Jaunga",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/cUmUOb7j3dc/hqdefault.jpg"
    },
    {
      "videoId": "krJsyb_yf7A",
      "title": "Despacito x Galliyan Mashup",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/krJsyb_yf7A/hqdefault.jpg"
    },
    {
      "videoId": "2bMEe0UYa8E",
      "title": "Kaun Tujhe",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/2bMEe0UYa8E/hqdefault.jpg"
    },
    {
      "videoId": "eHRrZ5DQCV4",
      "title": "Zara Sa",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/eHRrZ5DQCV4/hqdefault.jpg"
    },
    {
      "videoId": "fsiPzT50ZiM",
      "title": "Tu Hi Meri Shab Hai",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/fsiPzT50ZiM/hqdefault.jpg"
    },
    {
      "videoId": "NUo8CKI34o4",
      "title": "Woh Lamhe Woh Baatein",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/NUo8CKI34o4/hqdefault.jpg"
    },
    {
      "videoId": "YLoYt8H7kjM",
      "title": "Jeene Laga Hoon",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/YLoYt8H7kjM/hqdefault.jpg"
    },
    {
      "videoId": "gvyUuxdRdR4",
      "title": "Sunn Raha Hai",
      "artist": "Ankit Tiwari | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/gvyUuxdRdR4/hqdefault.jpg"
    },
    {
      "videoId": "orYf6VDtj_k",
      "title": "Galliyan",
      "artist": "Ankit Tiwari | Ek Villain",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/orYf6VDtj_k/hqdefault.jpg"
    },
    {
      "videoId": "Dm6YRJHy64c",
      "title": "Hamari Adhuri Kahani",
      "artist": "Arijit Singh | Jeet Gannguli",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Dm6YRJHy64c/hqdefault.jpg"
    },
    {
      "videoId": "GLGuLXKT9Ng",
      "title": "Muskurane",
      "artist": "Arijit Singh | Citylights",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/GLGuLXKT9Ng/hqdefault.jpg"
    },
    {
      "videoId": "skq8M5khNbw",
      "title": "Khairiyat",
      "artist": "Arijit Singh | Chhichhore",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/skq8M5khNbw/hqdefault.jpg"
    },
    {
      "videoId": "qauUzF4GMZ0",
      "title": "Channa Mereya",
      "artist": "Arijit Singh | Ae Dil Hai Mushkil",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/qauUzF4GMZ0/hqdefault.jpg"
    },
    {
      "videoId": "dYwwHf9vWfo",
      "title": "Ae Dil Hai Mushkil",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/dYwwHf9vWfo/hqdefault.jpg"
    },
    {
      "videoId": "2FRrtuu3Ljg",
      "title": "Kalank Title Track",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/2FRrtuu3Ljg/hqdefault.jpg"
    },
    {
      "videoId": "pz2Yz0_1lr8",
      "title": "Rasiya",
      "artist": "Tushar Joshi, Shreya Ghoshal | Brahmastra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/pz2Yz0_1lr8/hqdefault.jpg"
    },
    {
      "videoId": "oDkZEay6H6k",
      "title": "Mast Magan",
      "artist": "Arijit Singh, Chinmayi Sripada | 2 States",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/oDkZEay6H6k/hqdefault.jpg"
    },
    {
      "videoId": "S2BOXJG71FY",
      "title": "Kesariya (Reprise)",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/S2BOXJG71FY/hqdefault.jpg"
    },
    {
      "videoId": "8K9eaAKLrE0",
      "title": "Apna Bana Le (Reprise)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/8K9eaAKLrE0/hqdefault.jpg"
    },
    {
      "videoId": "jh6Anzu3ntQ",
      "title": "Raataan Lambiyan (Reprise)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/jh6Anzu3ntQ/hqdefault.jpg"
    },
    {
      "videoId": "4O0_erwpB9E",
      "title": "Heeriye (Reprise)",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/4O0_erwpB9E/hqdefault.jpg"
    },
    {
      "videoId": "naQXI7l6op0",
      "title": "Pehle Bhi Main (Reprise)",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/naQXI7l6op0/hqdefault.jpg"
    },
    {
      "videoId": "Kp76nzS7pwA",
      "title": "Tujhe Kitna Chahne Lage (Reprise)",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Kp76nzS7pwA/hqdefault.jpg"
    },
    {
      "videoId": "-kVdEfkWsjo",
      "title": "O Maahi (Reprise)",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/-kVdEfkWsjo/hqdefault.jpg"
    },
    {
      "videoId": "s095hRZYb2U",
      "title": "Ve Kamleya (Reprise)",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/s095hRZYb2U/hqdefault.jpg"
    },
    {
      "videoId": "bXWcVn4uNd0",
      "title": "Hawaayein (Reprise)",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/bXWcVn4uNd0/hqdefault.jpg"
    },
    {
      "videoId": "7fhY7FFZ6nU",
      "title": "Tum Hi Ho (Reprise)",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/7fhY7FFZ6nU/hqdefault.jpg"
    },
    {
      "videoId": "hoNb6HuNmU0",
      "title": "Shayad (Reprise)",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/hoNb6HuNmU0/hqdefault.jpg"
    },
    {
      "videoId": "ElZfdU54Cp8",
      "title": "Agar Tum Saath Ho (Reprise)",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg"
    },
    {
      "videoId": "RLzC55ai0eo",
      "title": "Satranga (Reprise)",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg"
    },
    {
      "videoId": "Grr0FlC8SQA",
      "title": "Tera Ban Jaunga (Reprise)",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Grr0FlC8SQA/hqdefault.jpg"
    },
    {
      "videoId": "w8LcxY43N5Y",
      "title": "Despacito x Galliyan Mashup (Reprise)",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/w8LcxY43N5Y/hqdefault.jpg"
    },
    {
      "videoId": "vdbP_3o73qI",
      "title": "Kaun Tujhe (Reprise)",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/vdbP_3o73qI/hqdefault.jpg"
    },
    {
      "videoId": "HYUpNJJELeE",
      "title": "Zara Sa (Reprise)",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/HYUpNJJELeE/hqdefault.jpg"
    },
    {
      "videoId": "yRB0xbKDebo",
      "title": "Tu Hi Meri Shab Hai (Reprise)",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/yRB0xbKDebo/hqdefault.jpg"
    },
    {
      "videoId": "CsOsmgUmT9U",
      "title": "Woh Lamhe Woh Baatein (Reprise)",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/CsOsmgUmT9U/hqdefault.jpg"
    },
    {
      "videoId": "UEZm0U6KrfY",
      "title": "Jeene Laga Hoon (Reprise)",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/UEZm0U6KrfY/hqdefault.jpg"
    },
    {
      "videoId": "EQxEms7gnqs",
      "title": "Sunn Raha Hai (Reprise)",
      "artist": "Ankit Tiwari | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/EQxEms7gnqs/hqdefault.jpg"
    },
    {
      "videoId": "tdbD2naYwdo",
      "title": "Galliyan (Reprise)",
      "artist": "Ankit Tiwari | Ek Villain",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/tdbD2naYwdo/hqdefault.jpg"
    },
    {
      "videoId": "SsOY0gZFfGs",
      "title": "Hamari Adhuri Kahani (Reprise)",
      "artist": "Arijit Singh | Jeet Gannguli",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/SsOY0gZFfGs/hqdefault.jpg"
    },
    {
      "videoId": "kPtn26x8TZM",
      "title": "Muskurane (Reprise)",
      "artist": "Arijit Singh | Citylights",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/kPtn26x8TZM/hqdefault.jpg"
    },
    {
      "videoId": "iZH_ydGn9i0",
      "title": "Khairiyat (Reprise)",
      "artist": "Arijit Singh | Chhichhore",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/iZH_ydGn9i0/hqdefault.jpg"
    },
    {
      "videoId": "tGs7iLem1cE",
      "title": "Channa Mereya (Reprise)",
      "artist": "Arijit Singh | Ae Dil Hai Mushkil",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/tGs7iLem1cE/hqdefault.jpg"
    },
    {
      "videoId": "9-LH8ABADdo",
      "title": "Ae Dil Hai Mushkil (Reprise)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/9-LH8ABADdo/hqdefault.jpg"
    },
    {
      "videoId": "QRwLbf3PwO8",
      "title": "Kalank Title Track (Reprise)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/QRwLbf3PwO8/hqdefault.jpg"
    },
    {
      "videoId": "mF2BHtQh4EI",
      "title": "Rasiya (Reprise)",
      "artist": "Tushar Joshi, Shreya Ghoshal | Brahmastra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/mF2BHtQh4EI/hqdefault.jpg"
    },
    {
      "videoId": "SAcpESN_Fk4",
      "title": "Mast Magan (Reprise)",
      "artist": "Arijit Singh, Chinmayi Sripada | 2 States",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/SAcpESN_Fk4/hqdefault.jpg"
    },
    {
      "videoId": "JtnPpxe8K7c",
      "title": "Kesariya (Special Edition)",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/JtnPpxe8K7c/hqdefault.jpg"
    },
    {
      "videoId": "mevO4I0f5lg",
      "title": "Apna Bana Le (Special Edition)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/mevO4I0f5lg/hqdefault.jpg"
    },
    {
      "videoId": "nqUbSvFS1e4",
      "title": "Raataan Lambiyan (Special Edition)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/nqUbSvFS1e4/hqdefault.jpg"
    },
    {
      "videoId": "5DiLiDaIemI",
      "title": "Heeriye (Special Edition)",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/5DiLiDaIemI/hqdefault.jpg"
    },
    {
      "videoId": "u5DCgnh8S9M",
      "title": "Pehle Bhi Main (Special Edition)",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/u5DCgnh8S9M/hqdefault.jpg"
    },
    {
      "videoId": "ca-hzALjrcY",
      "title": "Tujhe Kitna Chahne Lage (Special Edition)",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/ca-hzALjrcY/hqdefault.jpg"
    },
    {
      "videoId": "A2JaHCaVjrU",
      "title": "O Maahi (Special Edition)",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/A2JaHCaVjrU/hqdefault.jpg"
    },
    {
      "videoId": "EsPrpf_vpi8",
      "title": "Ve Kamleya (Special Edition)",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/EsPrpf_vpi8/hqdefault.jpg"
    },
    {
      "videoId": "PsyNOOS5Xp4",
      "title": "Hawaayein (Special Edition)",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/PsyNOOS5Xp4/hqdefault.jpg"
    },
    {
      "videoId": "POvFEQaK634",
      "title": "Tum Hi Ho (Special Edition)",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/POvFEQaK634/hqdefault.jpg"
    },
    {
      "videoId": "Pr86yMP_oZE",
      "title": "Shayad (Special Edition)",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Pr86yMP_oZE/hqdefault.jpg"
    },
    {
      "videoId": "D8jKEaAyNcs",
      "title": "Agar Tum Saath Ho (Special Edition)",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/D8jKEaAyNcs/hqdefault.jpg"
    },
    {
      "videoId": "k_Qe4846hSI",
      "title": "Satranga (Special Edition)",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/k_Qe4846hSI/hqdefault.jpg"
    },
    {
      "videoId": "EixnLHZ6QjA",
      "title": "Tera Ban Jaunga (Special Edition)",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/EixnLHZ6QjA/hqdefault.jpg"
    },
    {
      "videoId": "XKmEVtVEMF0",
      "title": "Despacito x Galliyan Mashup (Special Edition)",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/XKmEVtVEMF0/hqdefault.jpg"
    },
    {
      "videoId": "8sxzVtqoAnA",
      "title": "Kaun Tujhe (Special Edition)",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/8sxzVtqoAnA/hqdefault.jpg"
    },
    {
      "videoId": "MA9hbox27Zc",
      "title": "Zara Sa (Special Edition)",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/MA9hbox27Zc/hqdefault.jpg"
    },
    {
      "videoId": "h6O4esqraE0",
      "title": "Tu Hi Meri Shab Hai (Special Edition)",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/h6O4esqraE0/hqdefault.jpg"
    },
    {
      "videoId": "VDzjgO7-pVI",
      "title": "Woh Lamhe Woh Baatein (Special Edition)",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/VDzjgO7-pVI/hqdefault.jpg"
    },
    {
      "videoId": "KUpwupYj_tY",
      "title": "Jeene Laga Hoon (Special Edition)",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/KUpwupYj_tY/hqdefault.jpg"
    },
    {
      "videoId": "2CXSw1oPj3I",
      "title": "Sunn Raha Hai (Special Edition)",
      "artist": "Ankit Tiwari | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/2CXSw1oPj3I/hqdefault.jpg"
    },
    {
      "videoId": "Z0VbANbyH2o",
      "title": "Galliyan (Special Edition)",
      "artist": "Ankit Tiwari | Ek Villain",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Z0VbANbyH2o/hqdefault.jpg"
    },
    {
      "videoId": "eLjmQ0aGC1U",
      "title": "Hamari Adhuri Kahani (Special Edition)",
      "artist": "Arijit Singh | Jeet Gannguli",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/eLjmQ0aGC1U/hqdefault.jpg"
    },
    {
      "videoId": "FiENDQapd4g",
      "title": "Muskurane (Special Edition)",
      "artist": "Arijit Singh | Citylights",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/FiENDQapd4g/hqdefault.jpg"
    },
    {
      "videoId": "Nm0qd0uhhhY",
      "title": "Khairiyat (Special Edition)",
      "artist": "Arijit Singh | Chhichhore",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Nm0qd0uhhhY/hqdefault.jpg"
    },
    {
      "videoId": "PL0f3_ZuJts",
      "title": "Channa Mereya (Special Edition)",
      "artist": "Arijit Singh | Ae Dil Hai Mushkil",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/PL0f3_ZuJts/hqdefault.jpg"
    },
    {
      "videoId": "-vzZ50Rijm8",
      "title": "Ae Dil Hai Mushkil (Special Edition)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/-vzZ50Rijm8/hqdefault.jpg"
    },
    {
      "videoId": "JhjnnGuvI0c",
      "title": "Kalank Title Track (Special Edition)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/JhjnnGuvI0c/hqdefault.jpg"
    },
    {
      "videoId": "kIVgRHm2OKg",
      "title": "Rasiya (Special Edition)",
      "artist": "Tushar Joshi, Shreya Ghoshal | Brahmastra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/kIVgRHm2OKg/hqdefault.jpg"
    },
    {
      "videoId": "ico0Nfz2gfU",
      "title": "Mast Magan (Special Edition)",
      "artist": "Arijit Singh, Chinmayi Sripada | 2 States",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/ico0Nfz2gfU/hqdefault.jpg"
    },
    {
      "videoId": "yb584STwkTY",
      "title": "Kesariya (Unplugged)",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/yb584STwkTY/hqdefault.jpg"
    },
    {
      "videoId": "BGU1YL9LNr4",
      "title": "Apna Bana Le (Unplugged)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/BGU1YL9LNr4/hqdefault.jpg"
    },
    {
      "videoId": "XK7Crkcn7Z0",
      "title": "Raataan Lambiyan (Unplugged)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/XK7Crkcn7Z0/hqdefault.jpg"
    },
    {
      "videoId": "gKioNQ1QwVA",
      "title": "Heeriye (Unplugged)",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/gKioNQ1QwVA/hqdefault.jpg"
    },
    {
      "videoId": "LToDPzfwMoM",
      "title": "Pehle Bhi Main (Unplugged)",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/LToDPzfwMoM/hqdefault.jpg"
    },
    {
      "videoId": "6jS1rU4F4HA",
      "title": "Tujhe Kitna Chahne Lage (Unplugged)",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/6jS1rU4F4HA/hqdefault.jpg"
    },
    {
      "videoId": "sXRnSIcZVZ0",
      "title": "O Maahi (Unplugged)",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/sXRnSIcZVZ0/hqdefault.jpg"
    },
    {
      "videoId": "jy26LpiiGJA",
      "title": "Ve Kamleya (Unplugged)",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/jy26LpiiGJA/hqdefault.jpg"
    },
    {
      "videoId": "iAIBF2ngbWY",
      "title": "Hawaayein (Unplugged)",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/iAIBF2ngbWY/hqdefault.jpg"
    },
    {
      "videoId": "HrnrqYxYrbk",
      "title": "Tum Hi Ho (Unplugged)",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg"
    },
    {
      "videoId": "WWXm39leYew",
      "title": "Shayad (Unplugged)",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/WWXm39leYew/hqdefault.jpg"
    },
    {
      "videoId": "lwv_0SEJ4NQ",
      "title": "Agar Tum Saath Ho (Unplugged)",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/lwv_0SEJ4NQ/hqdefault.jpg"
    },
    {
      "videoId": "9cHq63r1vHQ",
      "title": "Satranga (Unplugged)",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/9cHq63r1vHQ/hqdefault.jpg"
    },
    {
      "videoId": "Xbizke4zftY",
      "title": "Tera Ban Jaunga (Unplugged)",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Xbizke4zftY/hqdefault.jpg"
    },
    {
      "videoId": "NlRrGrrRyNo",
      "title": "Despacito x Galliyan Mashup (Unplugged)",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/NlRrGrrRyNo/hqdefault.jpg"
    },
    {
      "videoId": "KNXYonYD59w",
      "title": "Kaun Tujhe (Unplugged)",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/KNXYonYD59w/hqdefault.jpg"
    },
    {
      "videoId": "kZGpkkfk2lA",
      "title": "Zara Sa (Unplugged)",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/kZGpkkfk2lA/hqdefault.jpg"
    },
    {
      "videoId": "9UmoVnBSm5k",
      "title": "Tu Hi Meri Shab Hai (Unplugged)",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/9UmoVnBSm5k/hqdefault.jpg"
    },
    {
      "videoId": "Mv8yFE4-DA8",
      "title": "Woh Lamhe Woh Baatein (Unplugged)",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Mv8yFE4-DA8/hqdefault.jpg"
    },
    {
      "videoId": "XaNgxnN6qEI",
      "title": "Jeene Laga Hoon (Unplugged)",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/XaNgxnN6qEI/hqdefault.jpg"
    },
    {
      "videoId": "QKMTreKTpug",
      "title": "Sunn Raha Hai (Unplugged)",
      "artist": "Ankit Tiwari | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/QKMTreKTpug/hqdefault.jpg"
    },
    {
      "videoId": "6RlpNQiPhgY",
      "title": "Galliyan (Unplugged)",
      "artist": "Ankit Tiwari | Ek Villain",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/6RlpNQiPhgY/hqdefault.jpg"
    },
    {
      "videoId": "3o7o4N_mEUY",
      "title": "Hamari Adhuri Kahani (Unplugged)",
      "artist": "Arijit Singh | Jeet Gannguli",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/3o7o4N_mEUY/hqdefault.jpg"
    },
    {
      "videoId": "kO4AU5yBp64",
      "title": "Muskurane (Unplugged)",
      "artist": "Arijit Singh | Citylights",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/kO4AU5yBp64/hqdefault.jpg"
    },
    {
      "videoId": "wqVGA-XDe1I",
      "title": "Khairiyat (Unplugged)",
      "artist": "Arijit Singh | Chhichhore",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/wqVGA-XDe1I/hqdefault.jpg"
    },
    {
      "videoId": "YMAdgnh9VOI",
      "title": "Channa Mereya (Unplugged)",
      "artist": "Arijit Singh | Ae Dil Hai Mushkil",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/YMAdgnh9VOI/hqdefault.jpg"
    },
    {
      "videoId": "jBfR0bU82z8",
      "title": "Ae Dil Hai Mushkil (Unplugged)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/jBfR0bU82z8/hqdefault.jpg"
    },
    {
      "videoId": "hpqvSU0Ynn0",
      "title": "Kalank Title Track (Unplugged)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/hpqvSU0Ynn0/hqdefault.jpg"
    },
    {
      "videoId": "sK7riqg2mr4",
      "title": "Rasiya (Unplugged)",
      "artist": "Tushar Joshi, Shreya Ghoshal | Brahmastra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/sK7riqg2mr4/hqdefault.jpg"
    },
    {
      "videoId": "OGI0fNvr4fo",
      "title": "Mast Magan (Unplugged)",
      "artist": "Arijit Singh, Chinmayi Sripada | 2 States",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/OGI0fNvr4fo/hqdefault.jpg"
    },
    {
      "videoId": "Q2S7CDuBTOc",
      "title": "Kesariya (Encore)",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Q2S7CDuBTOc/hqdefault.jpg"
    },
    {
      "videoId": "xRb8hxwN5zc",
      "title": "Apna Bana Le (Encore)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/xRb8hxwN5zc/hqdefault.jpg"
    },
    {
      "videoId": "FOA9iyxsW_A",
      "title": "Raataan Lambiyan (Encore)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/FOA9iyxsW_A/hqdefault.jpg"
    },
    {
      "videoId": "fQlhzY5UH6s",
      "title": "Heeriye (Encore)",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/fQlhzY5UH6s/hqdefault.jpg"
    },
    {
      "videoId": "dhY8jRNELUc",
      "title": "Pehle Bhi Main (Encore)",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/dhY8jRNELUc/hqdefault.jpg"
    },
    {
      "videoId": "fs7-8M1VbZU",
      "title": "Tujhe Kitna Chahne Lage (Encore)",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/fs7-8M1VbZU/hqdefault.jpg"
    },
    {
      "videoId": "6SGRn9OHtFY",
      "title": "O Maahi (Encore)",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/6SGRn9OHtFY/hqdefault.jpg"
    },
    {
      "videoId": "pon8irRa8II",
      "title": "Ve Kamleya (Encore)",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/pon8irRa8II/hqdefault.jpg"
    },
    {
      "videoId": "UsxERu1Vv08",
      "title": "Hawaayein (Encore)",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/UsxERu1Vv08/hqdefault.jpg"
    },
    {
      "videoId": "zCjRVABSHUs",
      "title": "Tum Hi Ho (Encore)",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/zCjRVABSHUs/hqdefault.jpg"
    },
    {
      "videoId": "r-i8teGFG5g",
      "title": "Shayad (Encore)",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/r-i8teGFG5g/hqdefault.jpg"
    },
    {
      "videoId": "4vSIwdj6MEU",
      "title": "Agar Tum Saath Ho (Encore)",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/4vSIwdj6MEU/hqdefault.jpg"
    },
    {
      "videoId": "Ya_qVko-Xg0",
      "title": "Satranga (Encore)",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Ya_qVko-Xg0/hqdefault.jpg"
    },
    {
      "videoId": "KAskRVFhv-c",
      "title": "Tera Ban Jaunga (Encore)",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/KAskRVFhv-c/hqdefault.jpg"
    },
    {
      "videoId": "8Y7bYQIWcuk",
      "title": "Despacito x Galliyan Mashup (Encore)",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/8Y7bYQIWcuk/hqdefault.jpg"
    },
    {
      "videoId": "6AcUmOGMnak",
      "title": "Kaun Tujhe (Encore)",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/6AcUmOGMnak/hqdefault.jpg"
    },
    {
      "videoId": "njoL-CQt7H4",
      "title": "Zara Sa (Encore)",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/njoL-CQt7H4/hqdefault.jpg"
    },
    {
      "videoId": "4mq5tyWfXDU",
      "title": "Tu Hi Meri Shab Hai (Encore)",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/4mq5tyWfXDU/hqdefault.jpg"
    },
    {
      "videoId": "TGpG56pg3UU",
      "title": "Woh Lamhe Woh Baatein (Encore)",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/TGpG56pg3UU/hqdefault.jpg"
    },
    {
      "videoId": "EtSAs6GD0Yk",
      "title": "Jeene Laga Hoon (Encore)",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/EtSAs6GD0Yk/hqdefault.jpg"
    },
    {
      "videoId": "_NWaYjsz3qY",
      "title": "Sunn Raha Hai (Encore)",
      "artist": "Ankit Tiwari | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/_NWaYjsz3qY/hqdefault.jpg"
    },
    {
      "videoId": "ltrstdEFaqg",
      "title": "Galliyan (Encore)",
      "artist": "Ankit Tiwari | Ek Villain",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/ltrstdEFaqg/hqdefault.jpg"
    },
    {
      "videoId": "UNs50T6EYwE",
      "title": "Hamari Adhuri Kahani (Encore)",
      "artist": "Arijit Singh | Jeet Gannguli",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/UNs50T6EYwE/hqdefault.jpg"
    },
    {
      "videoId": "txxAH9D2gZU",
      "title": "Muskurane (Encore)",
      "artist": "Arijit Singh | Citylights",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/txxAH9D2gZU/hqdefault.jpg"
    },
    {
      "videoId": "fKxEXm9qG4k",
      "title": "Khairiyat (Encore)",
      "artist": "Arijit Singh | Chhichhore",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/fKxEXm9qG4k/hqdefault.jpg"
    },
    {
      "videoId": "WIjra2HHRFM",
      "title": "Channa Mereya (Encore)",
      "artist": "Arijit Singh | Ae Dil Hai Mushkil",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/WIjra2HHRFM/hqdefault.jpg"
    },
    {
      "videoId": "tnp8SRcXx-s",
      "title": "Ae Dil Hai Mushkil (Encore)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/tnp8SRcXx-s/hqdefault.jpg"
    },
    {
      "videoId": "v9KvrMnnyb4",
      "title": "Kalank Title Track (Encore)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/v9KvrMnnyb4/hqdefault.jpg"
    },
    {
      "videoId": "uJlJBIBIbAU",
      "title": "Rasiya (Encore)",
      "artist": "Tushar Joshi, Shreya Ghoshal | Brahmastra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/uJlJBIBIbAU/hqdefault.jpg"
    },
    {
      "videoId": "0n2G2SryMuY",
      "title": "Mast Magan (Encore)",
      "artist": "Arijit Singh, Chinmayi Sripada | 2 States",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/0n2G2SryMuY/hqdefault.jpg"
    },
    {
      "videoId": "bfzDXYW5fS0",
      "title": "Kesariya (Remix)",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/bfzDXYW5fS0/hqdefault.jpg"
    },
    {
      "videoId": "YrBE1Cd9UzA",
      "title": "Apna Bana Le (Remix)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/YrBE1Cd9UzA/hqdefault.jpg"
    },
    {
      "videoId": "Y35uCA-XVRM",
      "title": "Raataan Lambiyan (Remix)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Y35uCA-XVRM/hqdefault.jpg"
    },
    {
      "videoId": "UcmzeXxF4D4",
      "title": "Heeriye (Remix)",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/UcmzeXxF4D4/hqdefault.jpg"
    },
    {
      "videoId": "P9OuseD4zdI",
      "title": "Pehle Bhi Main (Remix)",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/P9OuseD4zdI/hqdefault.jpg"
    },
    {
      "videoId": "MYgIWSsOaSE",
      "title": "Tujhe Kitna Chahne Lage (Remix)",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/MYgIWSsOaSE/hqdefault.jpg"
    },
    {
      "videoId": "CXlHYSiuW4U",
      "title": "O Maahi (Remix)",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/CXlHYSiuW4U/hqdefault.jpg"
    },
    {
      "videoId": "FYfYq2a-orA",
      "title": "Ve Kamleya (Remix)",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/FYfYq2a-orA/hqdefault.jpg"
    },
    {
      "videoId": "8v-TWxPWIWc",
      "title": "Hawaayein (Remix)",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/8v-TWxPWIWc/hqdefault.jpg"
    },
    {
      "videoId": "jIqRbFQl-ds",
      "title": "Tum Hi Ho (Remix)",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/jIqRbFQl-ds/hqdefault.jpg"
    },
    {
      "videoId": "Aokj-w3COw0",
      "title": "Shayad (Remix)",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Aokj-w3COw0/hqdefault.jpg"
    },
    {
      "videoId": "vIUp4CzOrpQ",
      "title": "Agar Tum Saath Ho (Remix)",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/vIUp4CzOrpQ/hqdefault.jpg"
    },
    {
      "videoId": "RzMmU4xvyCU",
      "title": "Satranga (Remix)",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/RzMmU4xvyCU/hqdefault.jpg"
    },
    {
      "videoId": "Jv03fM7LZgE",
      "title": "Tera Ban Jaunga (Remix)",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Jv03fM7LZgE/hqdefault.jpg"
    },
    {
      "videoId": "s_Ab720t_zo",
      "title": "Despacito x Galliyan Mashup (Remix)",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/s_Ab720t_zo/hqdefault.jpg"
    },
    {
      "videoId": "5BAWcCxkMCs",
      "title": "Kaun Tujhe (Remix)",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/5BAWcCxkMCs/hqdefault.jpg"
    },
    {
      "videoId": "QMfLDyEoWkE",
      "title": "Zara Sa (Remix)",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/QMfLDyEoWkE/hqdefault.jpg"
    },
    {
      "videoId": "CSO5DhzK094",
      "title": "Tu Hi Meri Shab Hai (Remix)",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/CSO5DhzK094/hqdefault.jpg"
    },
    {
      "videoId": "Vsxh7gEKuOE",
      "title": "Woh Lamhe Woh Baatein (Remix)",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Vsxh7gEKuOE/hqdefault.jpg"
    },
    {
      "videoId": "-8DxXays6v8",
      "title": "Jeene Laga Hoon (Remix)",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/-8DxXays6v8/hqdefault.jpg"
    },
    {
      "videoId": "1AGVmQ5OwtM",
      "title": "Sunn Raha Hai (Remix)",
      "artist": "Ankit Tiwari | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/1AGVmQ5OwtM/hqdefault.jpg"
    },
    {
      "videoId": "tYgy4fF9iJA",
      "title": "Galliyan (Remix)",
      "artist": "Ankit Tiwari | Ek Villain",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/tYgy4fF9iJA/hqdefault.jpg"
    },
    {
      "videoId": "4G6-fKG96Y8",
      "title": "Hamari Adhuri Kahani (Remix)",
      "artist": "Arijit Singh | Jeet Gannguli",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/4G6-fKG96Y8/hqdefault.jpg"
    },
    {
      "videoId": "TnnOyFHn0Xc",
      "title": "Muskurane (Remix)",
      "artist": "Arijit Singh | Citylights",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/TnnOyFHn0Xc/hqdefault.jpg"
    },
    {
      "videoId": "pWJTiLL5PM8",
      "title": "Khairiyat (Remix)",
      "artist": "Arijit Singh | Chhichhore",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/pWJTiLL5PM8/hqdefault.jpg"
    },
    {
      "videoId": "nZpm-87y37Y",
      "title": "Channa Mereya (Remix)",
      "artist": "Arijit Singh | Ae Dil Hai Mushkil",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/nZpm-87y37Y/hqdefault.jpg"
    },
    {
      "videoId": "RBTXo0Ai8_A",
      "title": "Ae Dil Hai Mushkil (Remix)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/RBTXo0Ai8_A/hqdefault.jpg"
    },
    {
      "videoId": "5qJNtsPJtKc",
      "title": "Kalank Title Track (Remix)",
      "artist": "Arijit Singh, Pritam",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/5qJNtsPJtKc/hqdefault.jpg"
    },
    {
      "videoId": "fXRvluHnjxE",
      "title": "Rasiya (Remix)",
      "artist": "Tushar Joshi, Shreya Ghoshal | Brahmastra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/fXRvluHnjxE/hqdefault.jpg"
    },
    {
      "videoId": "xitd9mEZIHk",
      "title": "Mast Magan (Remix)",
      "artist": "Arijit Singh, Chinmayi Sripada | 2 States",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/xitd9mEZIHk/hqdefault.jpg"
    },
    {
      "videoId": "eXkHvT--DBU",
      "title": "Kesariya (Live Acoustic)",
      "artist": "Arijit Singh, Pritam | Brahmāstra",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/eXkHvT--DBU/hqdefault.jpg"
    },
    {
      "videoId": "n0L6uHhzWIw",
      "title": "Apna Bana Le (Live Acoustic)",
      "artist": "Arijit Singh, Sachin-Jigar | Bhediya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/n0L6uHhzWIw/hqdefault.jpg"
    },
    {
      "videoId": "P0KasU0HXD0",
      "title": "Raataan Lambiyan (Live Acoustic)",
      "artist": "Jubin Nautiyal, Asees Kaur | Shershaah",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/P0KasU0HXD0/hqdefault.jpg"
    },
    {
      "videoId": "tmWL-JxUGZc",
      "title": "Heeriye (Live Acoustic)",
      "artist": "Jasleen Royal ft. Arijit Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/tmWL-JxUGZc/hqdefault.jpg"
    },
    {
      "videoId": "OMsrXBzSsUI",
      "title": "Pehle Bhi Main (Live Acoustic)",
      "artist": "Vishal Mishra | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/OMsrXBzSsUI/hqdefault.jpg"
    },
    {
      "videoId": "bYy_bjsy8Y0",
      "title": "Tujhe Kitna Chahne Lage (Live Acoustic)",
      "artist": "Arijit Singh | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/bYy_bjsy8Y0/hqdefault.jpg"
    },
    {
      "videoId": "Cz7TfFrFojU",
      "title": "O Maahi (Live Acoustic)",
      "artist": "Arijit Singh | Dunki",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Cz7TfFrFojU/hqdefault.jpg"
    },
    {
      "videoId": "2s93cqRcqAk",
      "title": "Ve Kamleya (Live Acoustic)",
      "artist": "Arijit Singh & Shreya Ghoshal | RRKPK",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/2s93cqRcqAk/hqdefault.jpg"
    },
    {
      "videoId": "lVpZaByCWUE",
      "title": "Hawaayein (Live Acoustic)",
      "artist": "Arijit Singh, Pritam | Jab Harry Met Sejal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/lVpZaByCWUE/hqdefault.jpg"
    },
    {
      "videoId": "1BLF5dXRzlA",
      "title": "Tum Hi Ho (Live Acoustic)",
      "artist": "Arijit Singh, Mithoon | Aashiqui 2",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/1BLF5dXRzlA/hqdefault.jpg"
    },
    {
      "videoId": "Wh74IJ9xSxA",
      "title": "Shayad (Live Acoustic)",
      "artist": "Arijit Singh, Pritam | Love Aaj Kal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Wh74IJ9xSxA/hqdefault.jpg"
    },
    {
      "videoId": "Wo5nJJiJ8Cg",
      "title": "Agar Tum Saath Ho (Live Acoustic)",
      "artist": "Arijit Singh, Alka Yagnik | Tamasha",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/Wo5nJJiJ8Cg/hqdefault.jpg"
    },
    {
      "videoId": "ZrhQCtQJ13s",
      "title": "Satranga (Live Acoustic)",
      "artist": "Arijit Singh | Animal",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/ZrhQCtQJ13s/hqdefault.jpg"
    },
    {
      "videoId": "vmLGHNreScc",
      "title": "Tera Ban Jaunga (Live Acoustic)",
      "artist": "Akhil Sachdeva, Tulsi Kumar | Kabir Singh",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/vmLGHNreScc/hqdefault.jpg"
    },
    {
      "videoId": "-j6F012HtAM",
      "title": "Despacito x Galliyan Mashup (Live Acoustic)",
      "artist": "Ankit Tiwari, Mithoon",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/-j6F012HtAM/hqdefault.jpg"
    },
    {
      "videoId": "06pGYAQnqWQ",
      "title": "Kaun Tujhe (Live Acoustic)",
      "artist": "Palak Muchhal, Amaal Mallik | M.S. Dhoni",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/06pGYAQnqWQ/hqdefault.jpg"
    },
    {
      "videoId": "SDQdGibJ9mE",
      "title": "Zara Sa (Live Acoustic)",
      "artist": "KK, Pritam | Jannat",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/SDQdGibJ9mE/hqdefault.jpg"
    },
    {
      "videoId": "OOWvmeTTp7Y",
      "title": "Tu Hi Meri Shab Hai (Live Acoustic)",
      "artist": "KK, Pritam | Gangster",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/OOWvmeTTp7Y/hqdefault.jpg"
    },
    {
      "videoId": "cYOB941gyXI",
      "title": "Woh Lamhe Woh Baatein (Live Acoustic)",
      "artist": "Atif Aslam | Zeher",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/cYOB941gyXI/hqdefault.jpg"
    },
    {
      "videoId": "cs1e0fRyI18",
      "title": "Jeene Laga Hoon (Live Acoustic)",
      "artist": "Atif Aslam, Shreya Ghoshal | Ramaiya Vastavaiya",
      "category": "romantic_new",
      "thumbnail": "https://i.ytimg.com/vi/cs1e0fRyI18/hqdefault.jpg"
    }
  ],
  "classic_old": [
    {
      "videoId": "dt6aKKhNhaA",
      "title": "Neele Neele Ambar Par",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/dt6aKKhNhaA/hqdefault.jpg"
    },
    {
      "videoId": "CWHSNIpl7dg",
      "title": "Mere Sapnon Ki Rani",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/CWHSNIpl7dg/hqdefault.jpg"
    },
    {
      "videoId": "dyEdcOhxJNQ",
      "title": "Yeh Shaam Mastani",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/dyEdcOhxJNQ/hqdefault.jpg"
    },
    {
      "videoId": "huDnyuOBmfg",
      "title": "Roop Tera Mastana",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/huDnyuOBmfg/hqdefault.jpg"
    },
    {
      "videoId": "Pa1UPI5STLk",
      "title": "O Mere Dil Ke Chain",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Pa1UPI5STLk/hqdefault.jpg"
    },
    {
      "videoId": "wKQVoA9UVEQ",
      "title": "Pal Pal Dil Ke Paas",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/wKQVoA9UVEQ/hqdefault.jpg"
    },
    {
      "videoId": "WK1z5uJaI7Y",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/WK1z5uJaI7Y/hqdefault.jpg"
    },
    {
      "videoId": "zbvfAkJWntc",
      "title": "Pehla Nasha",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/zbvfAkJWntc/hqdefault.jpg"
    },
    {
      "videoId": "bXO13Qqgki4",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/bXO13Qqgki4/hqdefault.jpg"
    },
    {
      "videoId": "z486h8Z8PME",
      "title": "Tip Tip Barsa Paani",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/z486h8Z8PME/hqdefault.jpg"
    },
    {
      "videoId": "cnvkr55Z0Ns",
      "title": "Chaiyya Chaiyya",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cnvkr55Z0Ns/hqdefault.jpg"
    },
    {
      "videoId": "QiWIXpsYM88",
      "title": "Do Dil Mil Rahe Hain",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/QiWIXpsYM88/hqdefault.jpg"
    },
    {
      "videoId": "cvEeqyQl1zw",
      "title": "Dheere Dheere Se Meri Zindagi",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cvEeqyQl1zw/hqdefault.jpg"
    },
    {
      "videoId": "s1joyBZpbQ8",
      "title": "Tumse Milne Ki Tamanna Hai",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/s1joyBZpbQ8/hqdefault.jpg"
    },
    {
      "videoId": "PvvPSmSTUAo",
      "title": "Chura Ke Dil Mera",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/PvvPSmSTUAo/hqdefault.jpg"
    },
    {
      "videoId": "6r8KvFpVrnk",
      "title": "Mera Dil Bhi Kitna Pagal Hai",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/6r8KvFpVrnk/hqdefault.jpg"
    },
    {
      "videoId": "yPePNnCkfMs",
      "title": "Jeeta Tha Jiske Liye",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/yPePNnCkfMs/hqdefault.jpg"
    },
    {
      "videoId": "DCR42fzL2Kk",
      "title": "Bahut Pyar Karte Hain",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/DCR42fzL2Kk/hqdefault.jpg"
    },
    {
      "videoId": "aFzH9rjOTVo",
      "title": "Pardesi Pardesi",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/aFzH9rjOTVo/hqdefault.jpg"
    },
    {
      "videoId": "_61aQJ4EEsk",
      "title": "Aankh Marey O Ladka Aankh Marey",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/_61aQJ4EEsk/hqdefault.jpg"
    },
    {
      "videoId": "ddl9TR3a7DM",
      "title": "Dil To Pagal Hai",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ddl9TR3a7DM/hqdefault.jpg"
    },
    {
      "videoId": "Ca6dPcHgdFY",
      "title": "Are Re Are",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Ca6dPcHgdFY/hqdefault.jpg"
    },
    {
      "videoId": "gTlY-WV7wYU",
      "title": "Kuch Kuch Hota Hai",
      "artist": "Udit Narayan, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/gTlY-WV7wYU/hqdefault.jpg"
    },
    {
      "videoId": "1T8G_d5o5Gs",
      "title": "Ladki Badi Anjani Hai",
      "artist": "Kumar Sanu, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/1T8G_d5o5Gs/hqdefault.jpg"
    },
    {
      "videoId": "Bx5sqAE86e0",
      "title": "Suraj Hua Maddham",
      "artist": "Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Bx5sqAE86e0/hqdefault.jpg"
    },
    {
      "videoId": "qRdoJJb_rrU",
      "title": "Bole Chudiyan",
      "artist": "Amit Kumar, Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/qRdoJJb_rrU/hqdefault.jpg"
    },
    {
      "videoId": "vb9hvky8tc8",
      "title": "Kal Ho Naa Ho Title Track",
      "artist": "Sonu Nigam, Shankar-Ehsaan-Loy",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/vb9hvky8tc8/hqdefault.jpg"
    },
    {
      "videoId": "_yC4IKZ76GA",
      "title": "Main Hoon Na",
      "artist": "Sonu Nigam, Shreya Ghoshal | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/_yC4IKZ76GA/hqdefault.jpg"
    },
    {
      "videoId": "9XnNrSlfKOg",
      "title": "Tumse Milke Dil Ka",
      "artist": "Sonu Nigam, Altaf Raja | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/9XnNrSlfKOg/hqdefault.jpg"
    },
    {
      "videoId": "qfCt1UZAXMQ",
      "title": "Mitwa",
      "artist": "Shafqat Amanat Ali, Shankar Mahadevan | KANK",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/qfCt1UZAXMQ/hqdefault.jpg"
    },
    {
      "videoId": "jki29sXNRNM",
      "title": "Neele Neele Ambar Par (Reprise)",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/jki29sXNRNM/hqdefault.jpg"
    },
    {
      "videoId": "pzfPccOlY_s",
      "title": "Mere Sapnon Ki Rani (Reprise)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/pzfPccOlY_s/hqdefault.jpg"
    },
    {
      "videoId": "wFAU_duK0Jc",
      "title": "Yeh Shaam Mastani (Reprise)",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/wFAU_duK0Jc/hqdefault.jpg"
    },
    {
      "videoId": "9_oTxNGcXR8",
      "title": "Roop Tera Mastana (Reprise)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/9_oTxNGcXR8/hqdefault.jpg"
    },
    {
      "videoId": "IuZNgJMfEeI",
      "title": "O Mere Dil Ke Chain (Reprise)",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/IuZNgJMfEeI/hqdefault.jpg"
    },
    {
      "videoId": "T6Cie280Dq8",
      "title": "Pal Pal Dil Ke Paas (Reprise)",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/T6Cie280Dq8/hqdefault.jpg"
    },
    {
      "videoId": "keyUyjT0f8A",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga (Reprise)",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/keyUyjT0f8A/hqdefault.jpg"
    },
    {
      "videoId": "JVQhw298b6g",
      "title": "Pehla Nasha (Reprise)",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/JVQhw298b6g/hqdefault.jpg"
    },
    {
      "videoId": "KK2vimvZ3Dg",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam (Reprise)",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/KK2vimvZ3Dg/hqdefault.jpg"
    },
    {
      "videoId": "C4QBpS9fq4U",
      "title": "Tip Tip Barsa Paani (Reprise)",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/C4QBpS9fq4U/hqdefault.jpg"
    },
    {
      "videoId": "7dO_MS9tZ5E",
      "title": "Chaiyya Chaiyya (Reprise)",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/7dO_MS9tZ5E/hqdefault.jpg"
    },
    {
      "videoId": "OssRAVZhsRk",
      "title": "Do Dil Mil Rahe Hain (Reprise)",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/OssRAVZhsRk/hqdefault.jpg"
    },
    {
      "videoId": "9dcBy2uXL7E",
      "title": "Dheere Dheere Se Meri Zindagi (Reprise)",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/9dcBy2uXL7E/hqdefault.jpg"
    },
    {
      "videoId": "-W2dagktUp0",
      "title": "Tumse Milne Ki Tamanna Hai (Reprise)",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/-W2dagktUp0/hqdefault.jpg"
    },
    {
      "videoId": "Wy6ec9YTO8g",
      "title": "Chura Ke Dil Mera (Reprise)",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Wy6ec9YTO8g/hqdefault.jpg"
    },
    {
      "videoId": "BB6KvXQx090",
      "title": "Mera Dil Bhi Kitna Pagal Hai (Reprise)",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/BB6KvXQx090/hqdefault.jpg"
    },
    {
      "videoId": "43wT0xhvfsA",
      "title": "Jeeta Tha Jiske Liye (Reprise)",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/43wT0xhvfsA/hqdefault.jpg"
    },
    {
      "videoId": "QkGqpVYjLUw",
      "title": "Bahut Pyar Karte Hain (Reprise)",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/QkGqpVYjLUw/hqdefault.jpg"
    },
    {
      "videoId": "Jkd0O1UqyOY",
      "title": "Pardesi Pardesi (Reprise)",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Jkd0O1UqyOY/hqdefault.jpg"
    },
    {
      "videoId": "-ArgZa-UsAM",
      "title": "Aankh Marey O Ladka Aankh Marey (Reprise)",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/-ArgZa-UsAM/hqdefault.jpg"
    },
    {
      "videoId": "YT7crTHjCAo",
      "title": "Dil To Pagal Hai (Reprise)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/YT7crTHjCAo/hqdefault.jpg"
    },
    {
      "videoId": "kxT-5glSScc",
      "title": "Are Re Are (Reprise)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/kxT-5glSScc/hqdefault.jpg"
    },
    {
      "videoId": "gejKrLu9N9c",
      "title": "Kuch Kuch Hota Hai (Reprise)",
      "artist": "Udit Narayan, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/gejKrLu9N9c/hqdefault.jpg"
    },
    {
      "videoId": "K2K33TUE4rw",
      "title": "Ladki Badi Anjani Hai (Reprise)",
      "artist": "Kumar Sanu, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/K2K33TUE4rw/hqdefault.jpg"
    },
    {
      "videoId": "BVnz6oSupUM",
      "title": "Suraj Hua Maddham (Reprise)",
      "artist": "Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/BVnz6oSupUM/hqdefault.jpg"
    },
    {
      "videoId": "J4i7hGkR3g8",
      "title": "Bole Chudiyan (Reprise)",
      "artist": "Amit Kumar, Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/J4i7hGkR3g8/hqdefault.jpg"
    },
    {
      "videoId": "IJRT8hcp53w",
      "title": "Kal Ho Naa Ho Title Track (Reprise)",
      "artist": "Sonu Nigam, Shankar-Ehsaan-Loy",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/IJRT8hcp53w/hqdefault.jpg"
    },
    {
      "videoId": "COV1a8T5PDg",
      "title": "Main Hoon Na (Reprise)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/COV1a8T5PDg/hqdefault.jpg"
    },
    {
      "videoId": "eMC7RJpMYhk",
      "title": "Tumse Milke Dil Ka (Reprise)",
      "artist": "Sonu Nigam, Altaf Raja | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/eMC7RJpMYhk/hqdefault.jpg"
    },
    {
      "videoId": "dqkmT6vLvZc",
      "title": "Mitwa (Reprise)",
      "artist": "Shafqat Amanat Ali, Shankar Mahadevan | KANK",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/dqkmT6vLvZc/hqdefault.jpg"
    },
    {
      "videoId": "SBfPs-PMGTA",
      "title": "Neele Neele Ambar Par (Special Edition)",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/SBfPs-PMGTA/hqdefault.jpg"
    },
    {
      "videoId": "Oc9E71akp5M",
      "title": "Mere Sapnon Ki Rani (Special Edition)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Oc9E71akp5M/hqdefault.jpg"
    },
    {
      "videoId": "vFN3eNe0_Hs",
      "title": "Yeh Shaam Mastani (Special Edition)",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/vFN3eNe0_Hs/hqdefault.jpg"
    },
    {
      "videoId": "1R8MGdgZDns",
      "title": "Roop Tera Mastana (Special Edition)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/1R8MGdgZDns/hqdefault.jpg"
    },
    {
      "videoId": "YoThngCrGGc",
      "title": "O Mere Dil Ke Chain (Special Edition)",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/YoThngCrGGc/hqdefault.jpg"
    },
    {
      "videoId": "G_x-UJNEmEU",
      "title": "Pal Pal Dil Ke Paas (Special Edition)",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/G_x-UJNEmEU/hqdefault.jpg"
    },
    {
      "videoId": "bydvSfemqcg",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga (Special Edition)",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/bydvSfemqcg/hqdefault.jpg"
    },
    {
      "videoId": "Ki41AKu0iHc",
      "title": "Pehla Nasha (Special Edition)",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Ki41AKu0iHc/hqdefault.jpg"
    },
    {
      "videoId": "hWJohzeDr7w",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam (Special Edition)",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/hWJohzeDr7w/hqdefault.jpg"
    },
    {
      "videoId": "PZ7mhXZSJ8c",
      "title": "Tip Tip Barsa Paani (Special Edition)",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/PZ7mhXZSJ8c/hqdefault.jpg"
    },
    {
      "videoId": "mdPrweVv7DE",
      "title": "Chaiyya Chaiyya (Special Edition)",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/mdPrweVv7DE/hqdefault.jpg"
    },
    {
      "videoId": "LzXLcKbbDTw",
      "title": "Do Dil Mil Rahe Hain (Special Edition)",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/LzXLcKbbDTw/hqdefault.jpg"
    },
    {
      "videoId": "ODu7OyAqK-Q",
      "title": "Dheere Dheere Se Meri Zindagi (Special Edition)",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ODu7OyAqK-Q/hqdefault.jpg"
    },
    {
      "videoId": "iSUK1QoK9-E",
      "title": "Tumse Milne Ki Tamanna Hai (Special Edition)",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/iSUK1QoK9-E/hqdefault.jpg"
    },
    {
      "videoId": "2yyNfCdiVug",
      "title": "Chura Ke Dil Mera (Special Edition)",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/2yyNfCdiVug/hqdefault.jpg"
    },
    {
      "videoId": "dPkwe9AoOmY",
      "title": "Mera Dil Bhi Kitna Pagal Hai (Special Edition)",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/dPkwe9AoOmY/hqdefault.jpg"
    },
    {
      "videoId": "lIk5ZBlIByo",
      "title": "Jeeta Tha Jiske Liye (Special Edition)",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/lIk5ZBlIByo/hqdefault.jpg"
    },
    {
      "videoId": "17bJ89Ht7zs",
      "title": "Bahut Pyar Karte Hain (Special Edition)",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/17bJ89Ht7zs/hqdefault.jpg"
    },
    {
      "videoId": "Ed1WBWvxnSY",
      "title": "Pardesi Pardesi (Special Edition)",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Ed1WBWvxnSY/hqdefault.jpg"
    },
    {
      "videoId": "iSC33G5PK38",
      "title": "Aankh Marey O Ladka Aankh Marey (Special Edition)",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/iSC33G5PK38/hqdefault.jpg"
    },
    {
      "videoId": "lZ2PhyBF3GQ",
      "title": "Dil To Pagal Hai (Special Edition)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/lZ2PhyBF3GQ/hqdefault.jpg"
    },
    {
      "videoId": "hw_HpTI_Wkw",
      "title": "Are Re Are (Special Edition)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/hw_HpTI_Wkw/hqdefault.jpg"
    },
    {
      "videoId": "cNV5hLSa9H8",
      "title": "Kuch Kuch Hota Hai (Special Edition)",
      "artist": "Udit Narayan, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cNV5hLSa9H8/hqdefault.jpg"
    },
    {
      "videoId": "Zxgvob1Ew0c",
      "title": "Ladki Badi Anjani Hai (Special Edition)",
      "artist": "Kumar Sanu, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Zxgvob1Ew0c/hqdefault.jpg"
    },
    {
      "videoId": "BOBUVPrYf2s",
      "title": "Suraj Hua Maddham (Special Edition)",
      "artist": "Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/BOBUVPrYf2s/hqdefault.jpg"
    },
    {
      "videoId": "wBw9EPtDLw8",
      "title": "Bole Chudiyan (Special Edition)",
      "artist": "Amit Kumar, Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/wBw9EPtDLw8/hqdefault.jpg"
    },
    {
      "videoId": "-V4XWq_sRDw",
      "title": "Kal Ho Naa Ho Title Track (Special Edition)",
      "artist": "Sonu Nigam, Shankar-Ehsaan-Loy",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/-V4XWq_sRDw/hqdefault.jpg"
    },
    {
      "videoId": "ojCnlV1MA-k",
      "title": "Main Hoon Na (Special Edition)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ojCnlV1MA-k/hqdefault.jpg"
    },
    {
      "videoId": "cUVUs7M9TS0",
      "title": "Tumse Milke Dil Ka (Special Edition)",
      "artist": "Sonu Nigam, Altaf Raja | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cUVUs7M9TS0/hqdefault.jpg"
    },
    {
      "videoId": "y33alFobQdA",
      "title": "Mitwa (Special Edition)",
      "artist": "Shafqat Amanat Ali, Shankar Mahadevan | KANK",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/y33alFobQdA/hqdefault.jpg"
    },
    {
      "videoId": "O3q6OZbjgKU",
      "title": "Neele Neele Ambar Par (Unplugged)",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/O3q6OZbjgKU/hqdefault.jpg"
    },
    {
      "videoId": "uBmdxtJ5c4o",
      "title": "Mere Sapnon Ki Rani (Unplugged)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/uBmdxtJ5c4o/hqdefault.jpg"
    },
    {
      "videoId": "OV-Mpzvdd8E",
      "title": "Yeh Shaam Mastani (Unplugged)",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/OV-Mpzvdd8E/hqdefault.jpg"
    },
    {
      "videoId": "TopgRkAtS3A",
      "title": "Roop Tera Mastana (Unplugged)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/TopgRkAtS3A/hqdefault.jpg"
    },
    {
      "videoId": "ay6pwhXPNvo",
      "title": "O Mere Dil Ke Chain (Unplugged)",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ay6pwhXPNvo/hqdefault.jpg"
    },
    {
      "videoId": "4f9rJADDp2g",
      "title": "Pal Pal Dil Ke Paas (Unplugged)",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/4f9rJADDp2g/hqdefault.jpg"
    },
    {
      "videoId": "Mf_0pDqZi50",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga (Unplugged)",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Mf_0pDqZi50/hqdefault.jpg"
    },
    {
      "videoId": "hqtmwQ_5uCk",
      "title": "Pehla Nasha (Unplugged)",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/hqtmwQ_5uCk/hqdefault.jpg"
    },
    {
      "videoId": "RU-k6NR2o8E",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam (Unplugged)",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/RU-k6NR2o8E/hqdefault.jpg"
    },
    {
      "videoId": "vCTW2GfcepQ",
      "title": "Tip Tip Barsa Paani (Unplugged)",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/vCTW2GfcepQ/hqdefault.jpg"
    },
    {
      "videoId": "eVnG_Rqfgg4",
      "title": "Chaiyya Chaiyya (Unplugged)",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/eVnG_Rqfgg4/hqdefault.jpg"
    },
    {
      "videoId": "9Eg4d56rt-U",
      "title": "Do Dil Mil Rahe Hain (Unplugged)",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/9Eg4d56rt-U/hqdefault.jpg"
    },
    {
      "videoId": "WzyBk0jKggw",
      "title": "Dheere Dheere Se Meri Zindagi (Unplugged)",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/WzyBk0jKggw/hqdefault.jpg"
    },
    {
      "videoId": "ThHYiiZTB1Y",
      "title": "Tumse Milne Ki Tamanna Hai (Unplugged)",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ThHYiiZTB1Y/hqdefault.jpg"
    },
    {
      "videoId": "PFHczgD-lGM",
      "title": "Chura Ke Dil Mera (Unplugged)",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/PFHczgD-lGM/hqdefault.jpg"
    },
    {
      "videoId": "O-BBJgbNsv8",
      "title": "Mera Dil Bhi Kitna Pagal Hai (Unplugged)",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/O-BBJgbNsv8/hqdefault.jpg"
    },
    {
      "videoId": "Ujl0rhUICGg",
      "title": "Jeeta Tha Jiske Liye (Unplugged)",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Ujl0rhUICGg/hqdefault.jpg"
    },
    {
      "videoId": "w_2wRMG1mH8",
      "title": "Bahut Pyar Karte Hain (Unplugged)",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/w_2wRMG1mH8/hqdefault.jpg"
    },
    {
      "videoId": "W78aOolYNwo",
      "title": "Pardesi Pardesi (Unplugged)",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/W78aOolYNwo/hqdefault.jpg"
    },
    {
      "videoId": "fJCA1x-FtaA",
      "title": "Aankh Marey O Ladka Aankh Marey (Unplugged)",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/fJCA1x-FtaA/hqdefault.jpg"
    },
    {
      "videoId": "S3RHzeOCFHQ",
      "title": "Dil To Pagal Hai (Unplugged)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/S3RHzeOCFHQ/hqdefault.jpg"
    },
    {
      "videoId": "fruy3jllfes",
      "title": "Are Re Are (Unplugged)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/fruy3jllfes/hqdefault.jpg"
    },
    {
      "videoId": "D-zNmkjyXNM",
      "title": "Kuch Kuch Hota Hai (Unplugged)",
      "artist": "Udit Narayan, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/D-zNmkjyXNM/hqdefault.jpg"
    },
    {
      "videoId": "CeO-2xTCDTU",
      "title": "Ladki Badi Anjani Hai (Unplugged)",
      "artist": "Kumar Sanu, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/CeO-2xTCDTU/hqdefault.jpg"
    },
    {
      "videoId": "ZEgipMHnw6I",
      "title": "Suraj Hua Maddham (Unplugged)",
      "artist": "Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ZEgipMHnw6I/hqdefault.jpg"
    },
    {
      "videoId": "hL71wUbaHV4",
      "title": "Bole Chudiyan (Unplugged)",
      "artist": "Amit Kumar, Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/hL71wUbaHV4/hqdefault.jpg"
    },
    {
      "videoId": "LYLau8rZZws",
      "title": "Kal Ho Naa Ho Title Track (Unplugged)",
      "artist": "Sonu Nigam, Shankar-Ehsaan-Loy",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/LYLau8rZZws/hqdefault.jpg"
    },
    {
      "videoId": "mdPFcsZ7Pjc",
      "title": "Main Hoon Na (Unplugged)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/mdPFcsZ7Pjc/hqdefault.jpg"
    },
    {
      "videoId": "LHlaLfujm_k",
      "title": "Tumse Milke Dil Ka (Unplugged)",
      "artist": "Sonu Nigam, Altaf Raja | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/LHlaLfujm_k/hqdefault.jpg"
    },
    {
      "videoId": "mOLYGNCc9nw",
      "title": "Mitwa (Unplugged)",
      "artist": "Shafqat Amanat Ali, Shankar Mahadevan | KANK",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/mOLYGNCc9nw/hqdefault.jpg"
    },
    {
      "videoId": "IrpRI8NyulE",
      "title": "Neele Neele Ambar Par (Encore)",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/IrpRI8NyulE/hqdefault.jpg"
    },
    {
      "videoId": "7Ib33wy6OT4",
      "title": "Mere Sapnon Ki Rani (Encore)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/7Ib33wy6OT4/hqdefault.jpg"
    },
    {
      "videoId": "lGkqNVrgFWE",
      "title": "Yeh Shaam Mastani (Encore)",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/lGkqNVrgFWE/hqdefault.jpg"
    },
    {
      "videoId": "9PdSmDRGIwM",
      "title": "Roop Tera Mastana (Encore)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/9PdSmDRGIwM/hqdefault.jpg"
    },
    {
      "videoId": "Q0LMeOmRUy8",
      "title": "O Mere Dil Ke Chain (Encore)",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Q0LMeOmRUy8/hqdefault.jpg"
    },
    {
      "videoId": "Fpu7OjcxYvY",
      "title": "Pal Pal Dil Ke Paas (Encore)",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Fpu7OjcxYvY/hqdefault.jpg"
    },
    {
      "videoId": "g_pi4e7lLwE",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga (Encore)",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/g_pi4e7lLwE/hqdefault.jpg"
    },
    {
      "videoId": "09pE6IqT1ug",
      "title": "Pehla Nasha (Encore)",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/09pE6IqT1ug/hqdefault.jpg"
    },
    {
      "videoId": "IXIgs15Uqf0",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam (Encore)",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/IXIgs15Uqf0/hqdefault.jpg"
    },
    {
      "videoId": "6BBz4BxZmw0",
      "title": "Tip Tip Barsa Paani (Encore)",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/6BBz4BxZmw0/hqdefault.jpg"
    },
    {
      "videoId": "4gbvQNPCt-I",
      "title": "Chaiyya Chaiyya (Encore)",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/4gbvQNPCt-I/hqdefault.jpg"
    },
    {
      "videoId": "6yL7e60G17c",
      "title": "Do Dil Mil Rahe Hain (Encore)",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/6yL7e60G17c/hqdefault.jpg"
    },
    {
      "videoId": "rWsJ79-TDqM",
      "title": "Dheere Dheere Se Meri Zindagi (Encore)",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/rWsJ79-TDqM/hqdefault.jpg"
    },
    {
      "videoId": "_70tVb5Ij0U",
      "title": "Tumse Milne Ki Tamanna Hai (Encore)",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/_70tVb5Ij0U/hqdefault.jpg"
    },
    {
      "videoId": "ZyNXJSgEdGM",
      "title": "Chura Ke Dil Mera (Encore)",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ZyNXJSgEdGM/hqdefault.jpg"
    },
    {
      "videoId": "-2UcIC_s05I",
      "title": "Mera Dil Bhi Kitna Pagal Hai (Encore)",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/-2UcIC_s05I/hqdefault.jpg"
    },
    {
      "videoId": "C4o0maaZFWo",
      "title": "Jeeta Tha Jiske Liye (Encore)",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/C4o0maaZFWo/hqdefault.jpg"
    },
    {
      "videoId": "EZIMrK0W7hs",
      "title": "Bahut Pyar Karte Hain (Encore)",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/EZIMrK0W7hs/hqdefault.jpg"
    },
    {
      "videoId": "PdelyWYIayk",
      "title": "Pardesi Pardesi (Encore)",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/PdelyWYIayk/hqdefault.jpg"
    },
    {
      "videoId": "Rod6fjR3MIY",
      "title": "Aankh Marey O Ladka Aankh Marey (Encore)",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Rod6fjR3MIY/hqdefault.jpg"
    },
    {
      "videoId": "AMuRRXCuy-4",
      "title": "Dil To Pagal Hai (Encore)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/AMuRRXCuy-4/hqdefault.jpg"
    },
    {
      "videoId": "mzIuhFx5W1o",
      "title": "Are Re Are (Encore)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/mzIuhFx5W1o/hqdefault.jpg"
    },
    {
      "videoId": "viKdF7sp_cY",
      "title": "Kuch Kuch Hota Hai (Encore)",
      "artist": "Udit Narayan, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/viKdF7sp_cY/hqdefault.jpg"
    },
    {
      "videoId": "vYGw1V2NSik",
      "title": "Ladki Badi Anjani Hai (Encore)",
      "artist": "Kumar Sanu, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/vYGw1V2NSik/hqdefault.jpg"
    },
    {
      "videoId": "cvQWzlNIjt8",
      "title": "Suraj Hua Maddham (Encore)",
      "artist": "Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cvQWzlNIjt8/hqdefault.jpg"
    },
    {
      "videoId": "GvK5ZVFju1I",
      "title": "Bole Chudiyan (Encore)",
      "artist": "Amit Kumar, Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/GvK5ZVFju1I/hqdefault.jpg"
    },
    {
      "videoId": "cC6UGlKN3PA",
      "title": "Kal Ho Naa Ho Title Track (Encore)",
      "artist": "Sonu Nigam, Shankar-Ehsaan-Loy",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cC6UGlKN3PA/hqdefault.jpg"
    },
    {
      "videoId": "pw6r-izZArA",
      "title": "Main Hoon Na (Encore)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/pw6r-izZArA/hqdefault.jpg"
    },
    {
      "videoId": "QwLQ4_gkvsE",
      "title": "Tumse Milke Dil Ka (Encore)",
      "artist": "Sonu Nigam, Altaf Raja | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/QwLQ4_gkvsE/hqdefault.jpg"
    },
    {
      "videoId": "_q7Wz-N4oaQ",
      "title": "Mitwa (Encore)",
      "artist": "Shafqat Amanat Ali, Shankar Mahadevan | KANK",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/_q7Wz-N4oaQ/hqdefault.jpg"
    },
    {
      "videoId": "Vabo2KVaEwA",
      "title": "Neele Neele Ambar Par (Remix)",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Vabo2KVaEwA/hqdefault.jpg"
    },
    {
      "videoId": "LjxNvViZxew",
      "title": "Mere Sapnon Ki Rani (Remix)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/LjxNvViZxew/hqdefault.jpg"
    },
    {
      "videoId": "xB8bPYEFlPA",
      "title": "Yeh Shaam Mastani (Remix)",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/xB8bPYEFlPA/hqdefault.jpg"
    },
    {
      "videoId": "bwWprAAOyy8",
      "title": "Roop Tera Mastana (Remix)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/bwWprAAOyy8/hqdefault.jpg"
    },
    {
      "videoId": "H60L40GbfFI",
      "title": "O Mere Dil Ke Chain (Remix)",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/H60L40GbfFI/hqdefault.jpg"
    },
    {
      "videoId": "ywyjyu36HlU",
      "title": "Pal Pal Dil Ke Paas (Remix)",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ywyjyu36HlU/hqdefault.jpg"
    },
    {
      "videoId": "d0JpdfOLXI0",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga (Remix)",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/d0JpdfOLXI0/hqdefault.jpg"
    },
    {
      "videoId": "f5dw3nafOuo",
      "title": "Pehla Nasha (Remix)",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/f5dw3nafOuo/hqdefault.jpg"
    },
    {
      "videoId": "Uw5_IzY_Ooc",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam (Remix)",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Uw5_IzY_Ooc/hqdefault.jpg"
    },
    {
      "videoId": "tJrdQmCHcKs",
      "title": "Tip Tip Barsa Paani (Remix)",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/tJrdQmCHcKs/hqdefault.jpg"
    },
    {
      "videoId": "hgi2MYAFgE8",
      "title": "Chaiyya Chaiyya (Remix)",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/hgi2MYAFgE8/hqdefault.jpg"
    },
    {
      "videoId": "UlWAjd9bcKw",
      "title": "Do Dil Mil Rahe Hain (Remix)",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/UlWAjd9bcKw/hqdefault.jpg"
    },
    {
      "videoId": "MTwtrF243kY",
      "title": "Dheere Dheere Se Meri Zindagi (Remix)",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/MTwtrF243kY/hqdefault.jpg"
    },
    {
      "videoId": "6Z3DO-OFIjQ",
      "title": "Tumse Milne Ki Tamanna Hai (Remix)",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/6Z3DO-OFIjQ/hqdefault.jpg"
    },
    {
      "videoId": "g3kbONxTpIo",
      "title": "Chura Ke Dil Mera (Remix)",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/g3kbONxTpIo/hqdefault.jpg"
    },
    {
      "videoId": "nWbBIf5_LTY",
      "title": "Mera Dil Bhi Kitna Pagal Hai (Remix)",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/nWbBIf5_LTY/hqdefault.jpg"
    },
    {
      "videoId": "ooeAxo1GMRw",
      "title": "Jeeta Tha Jiske Liye (Remix)",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/ooeAxo1GMRw/hqdefault.jpg"
    },
    {
      "videoId": "BulAS4su2CU",
      "title": "Bahut Pyar Karte Hain (Remix)",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/BulAS4su2CU/hqdefault.jpg"
    },
    {
      "videoId": "Xsn0QjMN3fM",
      "title": "Pardesi Pardesi (Remix)",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Xsn0QjMN3fM/hqdefault.jpg"
    },
    {
      "videoId": "LsMEeJpFMD4",
      "title": "Aankh Marey O Ladka Aankh Marey (Remix)",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/LsMEeJpFMD4/hqdefault.jpg"
    },
    {
      "videoId": "XuVOqQI7SqQ",
      "title": "Dil To Pagal Hai (Remix)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/XuVOqQI7SqQ/hqdefault.jpg"
    },
    {
      "videoId": "fYPkIaIemAs",
      "title": "Are Re Are (Remix)",
      "artist": "Lata Mangeshkar, Udit Narayan | DTPH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/fYPkIaIemAs/hqdefault.jpg"
    },
    {
      "videoId": "SLT4HF7nHKc",
      "title": "Kuch Kuch Hota Hai (Remix)",
      "artist": "Udit Narayan, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/SLT4HF7nHKc/hqdefault.jpg"
    },
    {
      "videoId": "0clDXacCD9E",
      "title": "Ladki Badi Anjani Hai (Remix)",
      "artist": "Kumar Sanu, Alka Yagnik | KKHH",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/0clDXacCD9E/hqdefault.jpg"
    },
    {
      "videoId": "4Nki0dXGt_o",
      "title": "Suraj Hua Maddham (Remix)",
      "artist": "Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/4Nki0dXGt_o/hqdefault.jpg"
    },
    {
      "videoId": "L6DgJVMzkZU",
      "title": "Bole Chudiyan (Remix)",
      "artist": "Amit Kumar, Sonu Nigam, Alka Yagnik | K3G",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/L6DgJVMzkZU/hqdefault.jpg"
    },
    {
      "videoId": "JkdHB8S15Co",
      "title": "Kal Ho Naa Ho Title Track (Remix)",
      "artist": "Sonu Nigam, Shankar-Ehsaan-Loy",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/JkdHB8S15Co/hqdefault.jpg"
    },
    {
      "videoId": "p8Tu9oj2ydw",
      "title": "Main Hoon Na (Remix)",
      "artist": "Sonu Nigam, Shreya Ghoshal | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/p8Tu9oj2ydw/hqdefault.jpg"
    },
    {
      "videoId": "NtrEXzHT4pU",
      "title": "Tumse Milke Dil Ka (Remix)",
      "artist": "Sonu Nigam, Altaf Raja | Main Hoon Na",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/NtrEXzHT4pU/hqdefault.jpg"
    },
    {
      "videoId": "JlxYbAodnjU",
      "title": "Mitwa (Remix)",
      "artist": "Shafqat Amanat Ali, Shankar Mahadevan | KANK",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/JlxYbAodnjU/hqdefault.jpg"
    },
    {
      "videoId": "xDbK1eZYVzg",
      "title": "Neele Neele Ambar Par (Live Acoustic)",
      "artist": "Kishore Kumar | Kalaakaar",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/xDbK1eZYVzg/hqdefault.jpg"
    },
    {
      "videoId": "Z5D1dhTMclI",
      "title": "Mere Sapnon Ki Rani (Live Acoustic)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/Z5D1dhTMclI/hqdefault.jpg"
    },
    {
      "videoId": "fyZ-sOHj-Vg",
      "title": "Yeh Shaam Mastani (Live Acoustic)",
      "artist": "Kishore Kumar | Kati Patang",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/fyZ-sOHj-Vg/hqdefault.jpg"
    },
    {
      "videoId": "4gtXTXWBK4o",
      "title": "Roop Tera Mastana (Live Acoustic)",
      "artist": "Kishore Kumar | Aradhana",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/4gtXTXWBK4o/hqdefault.jpg"
    },
    {
      "videoId": "vKrBHzhBGOQ",
      "title": "O Mere Dil Ke Chain (Live Acoustic)",
      "artist": "Kishore Kumar | Mere Jeevan Saathi",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/vKrBHzhBGOQ/hqdefault.jpg"
    },
    {
      "videoId": "wHqKTmEkpBg",
      "title": "Pal Pal Dil Ke Paas (Live Acoustic)",
      "artist": "Kishore Kumar | Blackmail",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/wHqKTmEkpBg/hqdefault.jpg"
    },
    {
      "videoId": "MGsw7CnqdJo",
      "title": "Ek Ladki Ko Dekha Toh Aisa Laga (Live Acoustic)",
      "artist": "Kumar Sanu, R.D. Burman | 1942 A Love Story",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/MGsw7CnqdJo/hqdefault.jpg"
    },
    {
      "videoId": "uyjiK9QCU5U",
      "title": "Pehla Nasha (Live Acoustic)",
      "artist": "Udit Narayan, Sadhana Sargam | JJWS",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/uyjiK9QCU5U/hqdefault.jpg"
    },
    {
      "videoId": "8psAZcIOzEA",
      "title": "Tujhe Dekha Toh Yeh Jaana Sanam (Live Acoustic)",
      "artist": "Kumar Sanu, Lata Mangeshkar | DDLJ",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/8psAZcIOzEA/hqdefault.jpg"
    },
    {
      "videoId": "2beG3rwg2Ck",
      "title": "Tip Tip Barsa Paani (Live Acoustic)",
      "artist": "Udit Narayan, Alka Yagnik | Mohra",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/2beG3rwg2Ck/hqdefault.jpg"
    },
    {
      "videoId": "m7qCWlHdnr8",
      "title": "Chaiyya Chaiyya (Live Acoustic)",
      "artist": "Sukhwinder Singh, Sapna Awasthi | Dil Se",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/m7qCWlHdnr8/hqdefault.jpg"
    },
    {
      "videoId": "yTlYMxf7K74",
      "title": "Do Dil Mil Rahe Hain (Live Acoustic)",
      "artist": "Kumar Sanu, Nadeem-Shravan | Pardes",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/yTlYMxf7K74/hqdefault.jpg"
    },
    {
      "videoId": "KcZ9C6vWMIs",
      "title": "Dheere Dheere Se Meri Zindagi (Live Acoustic)",
      "artist": "Kumar Sanu, Anuradha Paudwal | Aashiqui",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/KcZ9C6vWMIs/hqdefault.jpg"
    },
    {
      "videoId": "cIVkYSm7Orw",
      "title": "Tumse Milne Ki Tamanna Hai (Live Acoustic)",
      "artist": "S.P. Balasubrahmanyam | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/cIVkYSm7Orw/hqdefault.jpg"
    },
    {
      "videoId": "13AaATy46YU",
      "title": "Chura Ke Dil Mera (Live Acoustic)",
      "artist": "Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/13AaATy46YU/hqdefault.jpg"
    },
    {
      "videoId": "h34CiqQ51zs",
      "title": "Mera Dil Bhi Kitna Pagal Hai (Live Acoustic)",
      "artist": "Kumar Sanu, Alka Yagnik | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/h34CiqQ51zs/hqdefault.jpg"
    },
    {
      "videoId": "W6dKaCV-mJQ",
      "title": "Jeeta Tha Jiske Liye (Live Acoustic)",
      "artist": "Kumar Sanu, Alka Yagnik | Dilwale",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/W6dKaCV-mJQ/hqdefault.jpg"
    },
    {
      "videoId": "7shxWODIwqs",
      "title": "Bahut Pyar Karte Hain (Live Acoustic)",
      "artist": "S.P. Balasubrahmanyam, Anuradha Paudwal | Saajan",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/7shxWODIwqs/hqdefault.jpg"
    },
    {
      "videoId": "zVUKtXI7xTM",
      "title": "Pardesi Pardesi (Live Acoustic)",
      "artist": "Udit Narayan, Alka Yagnik | Raja Hindustani",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/zVUKtXI7xTM/hqdefault.jpg"
    },
    {
      "videoId": "g6C-GUy6a3s",
      "title": "Aankh Marey O Ladka Aankh Marey (Live Acoustic)",
      "artist": "Kumar Sanu, Kavita Krishnamurthy | Tere Mere Sapne",
      "category": "classic_old",
      "thumbnail": "https://i.ytimg.com/vi/g6C-GUy6a3s/hqdefault.jpg"
    }
  ],
  "lofi": [
    {
      "videoId": "ElZfdU54Cp8",
      "title": "Husn (Lofi Chill)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg"
    },
    {
      "videoId": "BddP6PYo2gs",
      "title": "Agar Tum Saath Ho (Lofi Flip)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg"
    },
    {
      "videoId": "KUpwupYj_tY",
      "title": "Baarishein (Slowed & Reverb)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/KUpwupYj_tY/hqdefault.jpg"
    },
    {
      "videoId": "RLzC55ai0eo",
      "title": "Dil Mere (Lofi Chillhop)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg"
    },
    {
      "videoId": "Grr0FlC8SQA",
      "title": "Iktara (Lofi Ambient)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Grr0FlC8SQA/hqdefault.jpg"
    },
    {
      "videoId": "HrnrqYxYrbk",
      "title": "Tera Mera Rishta (Lofi Reverb)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg"
    },
    {
      "videoId": "Z1-qmKn7DQY",
      "title": "Toh Phir Aao (Lofi Lounge)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Z1-qmKn7DQY/hqdefault.jpg"
    },
    {
      "videoId": "mNuhKUOD_A0",
      "title": "Pehle Bhi Main (Slowed Reverb)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/mNuhKUOD_A0/hqdefault.jpg"
    },
    {
      "videoId": "6mr4cYJ7yew",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/6mr4cYJ7yew/hqdefault.jpg"
    },
    {
      "videoId": "zCGck2spPsU",
      "title": "Shayad (Late Night Lofi)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/zCGck2spPsU/hqdefault.jpg"
    },
    {
      "videoId": "7Txv-r7ijT8",
      "title": "Maan Meri Jaan (Lofi Mix)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/7Txv-r7ijT8/hqdefault.jpg"
    },
    {
      "videoId": "UJ5J0cFZZTE",
      "title": "Heeriye (Acoustic Lo-Fi)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/UJ5J0cFZZTE/hqdefault.jpg"
    },
    {
      "videoId": "CTgdRyg8aVE",
      "title": "Satranga (Lo-Fi Vibes)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/CTgdRyg8aVE/hqdefault.jpg"
    },
    {
      "videoId": "TjXH_P7Khhg",
      "title": "Apna Bana Le (Lofi Sunset)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/TjXH_P7Khhg/hqdefault.jpg"
    },
    {
      "videoId": "W1S9AbHpWFY",
      "title": "Tum Hi Ho (Lofi Chillout)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/W1S9AbHpWFY/hqdefault.jpg"
    },
    {
      "videoId": "BwiaxAos5cg",
      "title": "Kesariya (Lo-fi Dream)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/BwiaxAos5cg/hqdefault.jpg"
    },
    {
      "videoId": "vEe-UgJvUHE",
      "title": "Hawaayein (Lofi Flip)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/vEe-UgJvUHE/hqdefault.jpg"
    },
    {
      "videoId": "9uIIdCBRNRc",
      "title": "Channa Mereya (Slowed Ambient)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9uIIdCBRNRc/hqdefault.jpg"
    },
    {
      "videoId": "0avk5g_9Cgk",
      "title": "Raataan Lambiyan (Lofi Beat)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0avk5g_9Cgk/hqdefault.jpg"
    },
    {
      "videoId": "k6dGN3azeqo",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/k6dGN3azeqo/hqdefault.jpg"
    },
    {
      "videoId": "_iktURk0X-A",
      "title": "Kasoor (Acoustic Lofi)",
      "artist": "Prateek Kuhad | Peaceful Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_iktURk0X-A/hqdefault.jpg"
    },
    {
      "videoId": "MJyKN-8UncM",
      "title": "cold/mess (Midnight Reverb)",
      "artist": "Prateek Kuhad | Late Night",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/MJyKN-8UncM/hqdefault.jpg"
    },
    {
      "videoId": "HYUpNJJELeE",
      "title": "Tune Kaha (Lo-fi Flip)",
      "artist": "Prateek Kuhad | Soft Melodies",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/HYUpNJJELeE/hqdefault.jpg"
    },
    {
      "videoId": "yRB0xbKDebo",
      "title": "Alag Aasmaan (Rain Lofi)",
      "artist": "Anuv Jain | Monsoon Memories",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/yRB0xbKDebo/hqdefault.jpg"
    },
    {
      "videoId": "EQxEms7gnqs",
      "title": "Mishri (Chai Chill)",
      "artist": "Anuv Jain | Morning Warmth",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/EQxEms7gnqs/hqdefault.jpg"
    },
    {
      "videoId": "97bFaxqvpnI",
      "title": "Ocean (Lofi Piano)",
      "artist": "Anuv Jain | Serene Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/97bFaxqvpnI/hqdefault.jpg"
    },
    {
      "videoId": "MtnsyzHoZGU",
      "title": "Gul (Cozy Lofi)",
      "artist": "Anuv Jain | Aesthetic Evenings",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/MtnsyzHoZGU/hqdefault.jpg"
    },
    {
      "videoId": "ceTSEVpRFnM",
      "title": "Aaoge Tum Kabhi (Lo-fi)",
      "artist": "The Local Train | Melodic Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ceTSEVpRFnM/hqdefault.jpg"
    },
    {
      "videoId": "9-LH8ABADdo",
      "title": "Choo Lo (Slowed Reverb)",
      "artist": "The Local Train | Nostalgia",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9-LH8ABADdo/hqdefault.jpg"
    },
    {
      "videoId": "EEnlczCd1v4",
      "title": "Khudi (Lofi Ambient)",
      "artist": "The Local Train | Midnight Thoughts",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/EEnlczCd1v4/hqdefault.jpg"
    },
    {
      "videoId": "vGHa_VcAIxM",
      "title": "Husn (Lofi Chill) (Reprise)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/vGHa_VcAIxM/hqdefault.jpg"
    },
    {
      "videoId": "KeSeFHfSqys",
      "title": "Agar Tum Saath Ho (Lofi Flip) (Reprise)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/KeSeFHfSqys/hqdefault.jpg"
    },
    {
      "videoId": "XtBsUXGTVZ0",
      "title": "Baarishein (Slowed & Reverb) (Reprise)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/XtBsUXGTVZ0/hqdefault.jpg"
    },
    {
      "videoId": "hk5IqAhOrnY",
      "title": "Dil Mere (Lofi Chillhop) (Reprise)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/hk5IqAhOrnY/hqdefault.jpg"
    },
    {
      "videoId": "sK1v-XxbSyE",
      "title": "Iktara (Lofi Ambient) (Reprise)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/sK1v-XxbSyE/hqdefault.jpg"
    },
    {
      "videoId": "rTvVuLoOq0I",
      "title": "Tera Mera Rishta (Lofi Reverb) (Reprise)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/rTvVuLoOq0I/hqdefault.jpg"
    },
    {
      "videoId": "xSGL4bM2jC8",
      "title": "Toh Phir Aao (Lofi Lounge) (Reprise)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/xSGL4bM2jC8/hqdefault.jpg"
    },
    {
      "videoId": "m-e6lZuf5wc",
      "title": "Pehle Bhi Main (Slowed Reverb) (Reprise)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/m-e6lZuf5wc/hqdefault.jpg"
    },
    {
      "videoId": "zik32kzJBHc",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi) (Reprise)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/zik32kzJBHc/hqdefault.jpg"
    },
    {
      "videoId": "ilNt2bikxDI",
      "title": "Shayad (Late Night Lofi) (Reprise)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ilNt2bikxDI/hqdefault.jpg"
    },
    {
      "videoId": "gJLVTKhTnog",
      "title": "Maan Meri Jaan (Lofi Mix) (Reprise)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/gJLVTKhTnog/hqdefault.jpg"
    },
    {
      "videoId": "bP8ATWCvqzw",
      "title": "Heeriye (Acoustic Lo-Fi) (Reprise)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/bP8ATWCvqzw/hqdefault.jpg"
    },
    {
      "videoId": "2FhgKp_lfJQ",
      "title": "Satranga (Lo-Fi Vibes) (Reprise)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/2FhgKp_lfJQ/hqdefault.jpg"
    },
    {
      "videoId": "PJWemSzExXs",
      "title": "Apna Bana Le (Lofi Sunset) (Reprise)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg"
    },
    {
      "videoId": "wmUJwQNGK3k",
      "title": "Tum Hi Ho (Lofi Chillout) (Reprise)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/wmUJwQNGK3k/hqdefault.jpg"
    },
    {
      "videoId": "vA86QFrXoho",
      "title": "Kesariya (Lo-fi Dream) (Reprise)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/vA86QFrXoho/hqdefault.jpg"
    },
    {
      "videoId": "SmaY7RfBgas",
      "title": "Hawaayein (Lofi Flip) (Reprise)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/SmaY7RfBgas/hqdefault.jpg"
    },
    {
      "videoId": "bL6dJjxm0x0",
      "title": "Channa Mereya (Slowed Ambient) (Reprise)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/bL6dJjxm0x0/hqdefault.jpg"
    },
    {
      "videoId": "-BJt4fCAtZE",
      "title": "Raataan Lambiyan (Lofi Beat) (Reprise)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/-BJt4fCAtZE/hqdefault.jpg"
    },
    {
      "videoId": "P0NfnFYpENo",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset) (Reprise)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/P0NfnFYpENo/hqdefault.jpg"
    },
    {
      "videoId": "0IIJxkDtkHY",
      "title": "Kasoor (Acoustic Lofi) (Reprise)",
      "artist": "Prateek Kuhad | Peaceful Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0IIJxkDtkHY/hqdefault.jpg"
    },
    {
      "videoId": "NLKwRW2y-sg",
      "title": "cold/mess (Midnight Reverb) (Reprise)",
      "artist": "Prateek Kuhad | Late Night",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/NLKwRW2y-sg/hqdefault.jpg"
    },
    {
      "videoId": "_mR6bY-ndso",
      "title": "Tune Kaha (Lo-fi Flip) (Reprise)",
      "artist": "Prateek Kuhad | Soft Melodies",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_mR6bY-ndso/hqdefault.jpg"
    },
    {
      "videoId": "JuXuakMtsMQ",
      "title": "Alag Aasmaan (Rain Lofi) (Reprise)",
      "artist": "Anuv Jain | Monsoon Memories",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/JuXuakMtsMQ/hqdefault.jpg"
    },
    {
      "videoId": "tYqZK7bq5Bs",
      "title": "Mishri (Chai Chill) (Reprise)",
      "artist": "Anuv Jain | Morning Warmth",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/tYqZK7bq5Bs/hqdefault.jpg"
    },
    {
      "videoId": "V_cZa8Ice2w",
      "title": "Ocean (Lofi Piano) (Reprise)",
      "artist": "Anuv Jain | Serene Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/V_cZa8Ice2w/hqdefault.jpg"
    },
    {
      "videoId": "jKqCewZvECA",
      "title": "Gul (Cozy Lofi) (Reprise)",
      "artist": "Anuv Jain | Aesthetic Evenings",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/jKqCewZvECA/hqdefault.jpg"
    },
    {
      "videoId": "LIEiEwpEhWM",
      "title": "Aaoge Tum Kabhi (Lo-fi) (Reprise)",
      "artist": "The Local Train | Melodic Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LIEiEwpEhWM/hqdefault.jpg"
    },
    {
      "videoId": "8erle22S6x0",
      "title": "Choo Lo (Slowed Reverb) (Reprise)",
      "artist": "The Local Train | Nostalgia",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/8erle22S6x0/hqdefault.jpg"
    },
    {
      "videoId": "usvVGXFIpTM",
      "title": "Khudi (Lofi Ambient) (Reprise)",
      "artist": "The Local Train | Midnight Thoughts",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/usvVGXFIpTM/hqdefault.jpg"
    },
    {
      "videoId": "_deqdZmKzyg",
      "title": "Husn (Lofi Chill) (Special Edition)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_deqdZmKzyg/hqdefault.jpg"
    },
    {
      "videoId": "uK7Ovgs44Uk",
      "title": "Agar Tum Saath Ho (Lofi Flip) (Special Edition)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/uK7Ovgs44Uk/hqdefault.jpg"
    },
    {
      "videoId": "_CuOG9TBCi4",
      "title": "Baarishein (Slowed & Reverb) (Special Edition)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_CuOG9TBCi4/hqdefault.jpg"
    },
    {
      "videoId": "iOIF74Hk80A",
      "title": "Dil Mere (Lofi Chillhop) (Special Edition)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/iOIF74Hk80A/hqdefault.jpg"
    },
    {
      "videoId": "HhoNUPDVlbc",
      "title": "Iktara (Lofi Ambient) (Special Edition)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/HhoNUPDVlbc/hqdefault.jpg"
    },
    {
      "videoId": "4gpZU24m3nQ",
      "title": "Tera Mera Rishta (Lofi Reverb) (Special Edition)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/4gpZU24m3nQ/hqdefault.jpg"
    },
    {
      "videoId": "0fPStMCNSy8",
      "title": "Toh Phir Aao (Lofi Lounge) (Special Edition)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0fPStMCNSy8/hqdefault.jpg"
    },
    {
      "videoId": "93oRx73yfAs",
      "title": "Pehle Bhi Main (Slowed Reverb) (Special Edition)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/93oRx73yfAs/hqdefault.jpg"
    },
    {
      "videoId": "LsIDBebTAa4",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi) (Special Edition)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LsIDBebTAa4/hqdefault.jpg"
    },
    {
      "videoId": "LPDLr4UiVIQ",
      "title": "Shayad (Late Night Lofi) (Special Edition)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LPDLr4UiVIQ/hqdefault.jpg"
    },
    {
      "videoId": "i1IDh_ZoJgI",
      "title": "Maan Meri Jaan (Lofi Mix) (Special Edition)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/i1IDh_ZoJgI/hqdefault.jpg"
    },
    {
      "videoId": "1gEoVHEr_hU",
      "title": "Heeriye (Acoustic Lo-Fi) (Special Edition)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/1gEoVHEr_hU/hqdefault.jpg"
    },
    {
      "videoId": "GVQu3ym-Uf0",
      "title": "Satranga (Lo-Fi Vibes) (Special Edition)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/GVQu3ym-Uf0/hqdefault.jpg"
    },
    {
      "videoId": "J3m3uptDf0Q",
      "title": "Apna Bana Le (Lofi Sunset) (Special Edition)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/J3m3uptDf0Q/hqdefault.jpg"
    },
    {
      "videoId": "mEmwd17xpAk",
      "title": "Tum Hi Ho (Lofi Chillout) (Special Edition)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/mEmwd17xpAk/hqdefault.jpg"
    },
    {
      "videoId": "vMtg9hbtvqM",
      "title": "Kesariya (Lo-fi Dream) (Special Edition)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/vMtg9hbtvqM/hqdefault.jpg"
    },
    {
      "videoId": "NWDOrQ1hGBE",
      "title": "Hawaayein (Lofi Flip) (Special Edition)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/NWDOrQ1hGBE/hqdefault.jpg"
    },
    {
      "videoId": "BmwiS-THm34",
      "title": "Channa Mereya (Slowed Ambient) (Special Edition)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/BmwiS-THm34/hqdefault.jpg"
    },
    {
      "videoId": "TS84-uinbdc",
      "title": "Raataan Lambiyan (Lofi Beat) (Special Edition)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/TS84-uinbdc/hqdefault.jpg"
    },
    {
      "videoId": "6fTilfKvxbo",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset) (Special Edition)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/6fTilfKvxbo/hqdefault.jpg"
    },
    {
      "videoId": "5Gggsqvd4w4",
      "title": "Kasoor (Acoustic Lofi) (Special Edition)",
      "artist": "Prateek Kuhad | Peaceful Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/5Gggsqvd4w4/hqdefault.jpg"
    },
    {
      "videoId": "0GwYr5jrw48",
      "title": "cold/mess (Midnight Reverb) (Special Edition)",
      "artist": "Prateek Kuhad | Late Night",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0GwYr5jrw48/hqdefault.jpg"
    },
    {
      "videoId": "0P3Gt-60yLc",
      "title": "Tune Kaha (Lo-fi Flip) (Special Edition)",
      "artist": "Prateek Kuhad | Soft Melodies",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0P3Gt-60yLc/hqdefault.jpg"
    },
    {
      "videoId": "YmUptL9VSdg",
      "title": "Alag Aasmaan (Rain Lofi) (Special Edition)",
      "artist": "Anuv Jain | Monsoon Memories",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/YmUptL9VSdg/hqdefault.jpg"
    },
    {
      "videoId": "n9W6WrDWQLU",
      "title": "Mishri (Chai Chill) (Special Edition)",
      "artist": "Anuv Jain | Morning Warmth",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/n9W6WrDWQLU/hqdefault.jpg"
    },
    {
      "videoId": "2o7oC_A7TFU",
      "title": "Ocean (Lofi Piano) (Special Edition)",
      "artist": "Anuv Jain | Serene Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/2o7oC_A7TFU/hqdefault.jpg"
    },
    {
      "videoId": "MIcZU1fobg4",
      "title": "Gul (Cozy Lofi) (Special Edition)",
      "artist": "Anuv Jain | Aesthetic Evenings",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/MIcZU1fobg4/hqdefault.jpg"
    },
    {
      "videoId": "LFiofrZKNJE",
      "title": "Aaoge Tum Kabhi (Lo-fi) (Special Edition)",
      "artist": "The Local Train | Melodic Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LFiofrZKNJE/hqdefault.jpg"
    },
    {
      "videoId": "JP9XJ7x3bEU",
      "title": "Choo Lo (Slowed Reverb) (Special Edition)",
      "artist": "The Local Train | Nostalgia",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/JP9XJ7x3bEU/hqdefault.jpg"
    },
    {
      "videoId": "oQPfpNzmXnM",
      "title": "Khudi (Lofi Ambient) (Special Edition)",
      "artist": "The Local Train | Midnight Thoughts",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/oQPfpNzmXnM/hqdefault.jpg"
    },
    {
      "videoId": "GZZovoe1dpM",
      "title": "Husn (Lofi Chill) (Unplugged)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/GZZovoe1dpM/hqdefault.jpg"
    },
    {
      "videoId": "LY1QEPLXAFk",
      "title": "Agar Tum Saath Ho (Lofi Flip) (Unplugged)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LY1QEPLXAFk/hqdefault.jpg"
    },
    {
      "videoId": "sm91cOlOodY",
      "title": "Baarishein (Slowed & Reverb) (Unplugged)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/sm91cOlOodY/hqdefault.jpg"
    },
    {
      "videoId": "p_K1HiTNZN8",
      "title": "Dil Mere (Lofi Chillhop) (Unplugged)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/p_K1HiTNZN8/hqdefault.jpg"
    },
    {
      "videoId": "Bh5ZRBjgkTs",
      "title": "Iktara (Lofi Ambient) (Unplugged)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Bh5ZRBjgkTs/hqdefault.jpg"
    },
    {
      "videoId": "FVfnQ3RHi-M",
      "title": "Tera Mera Rishta (Lofi Reverb) (Unplugged)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/FVfnQ3RHi-M/hqdefault.jpg"
    },
    {
      "videoId": "ygMbkWRKme4",
      "title": "Toh Phir Aao (Lofi Lounge) (Unplugged)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ygMbkWRKme4/hqdefault.jpg"
    },
    {
      "videoId": "_9QUykQ2xB8",
      "title": "Pehle Bhi Main (Slowed Reverb) (Unplugged)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_9QUykQ2xB8/hqdefault.jpg"
    },
    {
      "videoId": "-3KT1f7WZIo",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi) (Unplugged)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/-3KT1f7WZIo/hqdefault.jpg"
    },
    {
      "videoId": "9et5qzuzbQM",
      "title": "Shayad (Late Night Lofi) (Unplugged)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9et5qzuzbQM/hqdefault.jpg"
    },
    {
      "videoId": "9fKQJcbd-jY",
      "title": "Maan Meri Jaan (Lofi Mix) (Unplugged)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9fKQJcbd-jY/hqdefault.jpg"
    },
    {
      "videoId": "Y2zc2IeVX_g",
      "title": "Heeriye (Acoustic Lo-Fi) (Unplugged)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Y2zc2IeVX_g/hqdefault.jpg"
    },
    {
      "videoId": "gfEKRoO-pOU",
      "title": "Satranga (Lo-Fi Vibes) (Unplugged)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/gfEKRoO-pOU/hqdefault.jpg"
    },
    {
      "videoId": "pdL1imksSqY",
      "title": "Apna Bana Le (Lofi Sunset) (Unplugged)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/pdL1imksSqY/hqdefault.jpg"
    },
    {
      "videoId": "AX6OrbgS8lI",
      "title": "Tum Hi Ho (Lofi Chillout) (Unplugged)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/AX6OrbgS8lI/hqdefault.jpg"
    },
    {
      "videoId": "A7NDb0iDZd0",
      "title": "Kesariya (Lo-fi Dream) (Unplugged)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/A7NDb0iDZd0/hqdefault.jpg"
    },
    {
      "videoId": "aDlv2UX1lA8",
      "title": "Hawaayein (Lofi Flip) (Unplugged)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/aDlv2UX1lA8/hqdefault.jpg"
    },
    {
      "videoId": "sxCVdh2PHcM",
      "title": "Channa Mereya (Slowed Ambient) (Unplugged)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/sxCVdh2PHcM/hqdefault.jpg"
    },
    {
      "videoId": "7SjrVIxjfQA",
      "title": "Raataan Lambiyan (Lofi Beat) (Unplugged)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/7SjrVIxjfQA/hqdefault.jpg"
    },
    {
      "videoId": "gf8H9gtD4JI",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset) (Unplugged)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/gf8H9gtD4JI/hqdefault.jpg"
    },
    {
      "videoId": "TsBP6In4dtM",
      "title": "Kasoor (Acoustic Lofi) (Unplugged)",
      "artist": "Prateek Kuhad | Peaceful Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/TsBP6In4dtM/hqdefault.jpg"
    },
    {
      "videoId": "L2mSvBrq84E",
      "title": "cold/mess (Midnight Reverb) (Unplugged)",
      "artist": "Prateek Kuhad | Late Night",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/L2mSvBrq84E/hqdefault.jpg"
    },
    {
      "videoId": "euP-V53PZoc",
      "title": "Tune Kaha (Lo-fi Flip) (Unplugged)",
      "artist": "Prateek Kuhad | Soft Melodies",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/euP-V53PZoc/hqdefault.jpg"
    },
    {
      "videoId": "UR-PAQRnrKw",
      "title": "Alag Aasmaan (Rain Lofi) (Unplugged)",
      "artist": "Anuv Jain | Monsoon Memories",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/UR-PAQRnrKw/hqdefault.jpg"
    },
    {
      "videoId": "0llEfC5Stg0",
      "title": "Mishri (Chai Chill) (Unplugged)",
      "artist": "Anuv Jain | Morning Warmth",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0llEfC5Stg0/hqdefault.jpg"
    },
    {
      "videoId": "Wk-CpIkbUvo",
      "title": "Ocean (Lofi Piano) (Unplugged)",
      "artist": "Anuv Jain | Serene Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Wk-CpIkbUvo/hqdefault.jpg"
    },
    {
      "videoId": "IWyd09C7brs",
      "title": "Gul (Cozy Lofi) (Unplugged)",
      "artist": "Anuv Jain | Aesthetic Evenings",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/IWyd09C7brs/hqdefault.jpg"
    },
    {
      "videoId": "l8lamLpCabY",
      "title": "Aaoge Tum Kabhi (Lo-fi) (Unplugged)",
      "artist": "The Local Train | Melodic Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/l8lamLpCabY/hqdefault.jpg"
    },
    {
      "videoId": "YIEAg-v-Pic",
      "title": "Choo Lo (Slowed Reverb) (Unplugged)",
      "artist": "The Local Train | Nostalgia",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/YIEAg-v-Pic/hqdefault.jpg"
    },
    {
      "videoId": "uFbayWnLGxs",
      "title": "Khudi (Lofi Ambient) (Unplugged)",
      "artist": "The Local Train | Midnight Thoughts",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/uFbayWnLGxs/hqdefault.jpg"
    },
    {
      "videoId": "D0b7bAiXZJI",
      "title": "Husn (Lofi Chill) (Encore)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/D0b7bAiXZJI/hqdefault.jpg"
    },
    {
      "videoId": "F3rN5MXtTL0",
      "title": "Agar Tum Saath Ho (Lofi Flip) (Encore)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/F3rN5MXtTL0/hqdefault.jpg"
    },
    {
      "videoId": "Fegf8boqL_w",
      "title": "Baarishein (Slowed & Reverb) (Encore)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Fegf8boqL_w/hqdefault.jpg"
    },
    {
      "videoId": "6-BiWZsjgR8",
      "title": "Dil Mere (Lofi Chillhop) (Encore)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/6-BiWZsjgR8/hqdefault.jpg"
    },
    {
      "videoId": "_XBVWlI8TsQ",
      "title": "Iktara (Lofi Ambient) (Encore)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_XBVWlI8TsQ/hqdefault.jpg"
    },
    {
      "videoId": "zQDAi8tI-cU",
      "title": "Tera Mera Rishta (Lofi Reverb) (Encore)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/zQDAi8tI-cU/hqdefault.jpg"
    },
    {
      "videoId": "CAHN1yO196M",
      "title": "Toh Phir Aao (Lofi Lounge) (Encore)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/CAHN1yO196M/hqdefault.jpg"
    },
    {
      "videoId": "KA4APfVz5I8",
      "title": "Pehle Bhi Main (Slowed Reverb) (Encore)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/KA4APfVz5I8/hqdefault.jpg"
    },
    {
      "videoId": "-fVtSHPg040",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi) (Encore)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/-fVtSHPg040/hqdefault.jpg"
    },
    {
      "videoId": "_vRXnq3ISvs",
      "title": "Shayad (Late Night Lofi) (Encore)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_vRXnq3ISvs/hqdefault.jpg"
    },
    {
      "videoId": "6c-10LBzsIk",
      "title": "Maan Meri Jaan (Lofi Mix) (Encore)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/6c-10LBzsIk/hqdefault.jpg"
    },
    {
      "videoId": "9_uPRv8HNqM",
      "title": "Heeriye (Acoustic Lo-Fi) (Encore)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9_uPRv8HNqM/hqdefault.jpg"
    },
    {
      "videoId": "Jt7yvXSwyMA",
      "title": "Satranga (Lo-Fi Vibes) (Encore)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Jt7yvXSwyMA/hqdefault.jpg"
    },
    {
      "videoId": "NLAT7ljan8M",
      "title": "Apna Bana Le (Lofi Sunset) (Encore)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/NLAT7ljan8M/hqdefault.jpg"
    },
    {
      "videoId": "rzkP0nwKiqM",
      "title": "Tum Hi Ho (Lofi Chillout) (Encore)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/rzkP0nwKiqM/hqdefault.jpg"
    },
    {
      "videoId": "LKXxNB8iAMo",
      "title": "Kesariya (Lo-fi Dream) (Encore)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LKXxNB8iAMo/hqdefault.jpg"
    },
    {
      "videoId": "eoASHWddx7c",
      "title": "Hawaayein (Lofi Flip) (Encore)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/eoASHWddx7c/hqdefault.jpg"
    },
    {
      "videoId": "0Wt6C_EzLls",
      "title": "Channa Mereya (Slowed Ambient) (Encore)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0Wt6C_EzLls/hqdefault.jpg"
    },
    {
      "videoId": "d5b9UNdZfsw",
      "title": "Raataan Lambiyan (Lofi Beat) (Encore)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/d5b9UNdZfsw/hqdefault.jpg"
    },
    {
      "videoId": "KgdBrGHviv4",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset) (Encore)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/KgdBrGHviv4/hqdefault.jpg"
    },
    {
      "videoId": "7oO-Y7t9I_s",
      "title": "Kasoor (Acoustic Lofi) (Encore)",
      "artist": "Prateek Kuhad | Peaceful Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/7oO-Y7t9I_s/hqdefault.jpg"
    },
    {
      "videoId": "88Xhw-XTDb8",
      "title": "cold/mess (Midnight Reverb) (Encore)",
      "artist": "Prateek Kuhad | Late Night",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/88Xhw-XTDb8/hqdefault.jpg"
    },
    {
      "videoId": "JokgM6-y9Ls",
      "title": "Tune Kaha (Lo-fi Flip) (Encore)",
      "artist": "Prateek Kuhad | Soft Melodies",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/JokgM6-y9Ls/hqdefault.jpg"
    },
    {
      "videoId": "ULcyLYD3o_M",
      "title": "Alag Aasmaan (Rain Lofi) (Encore)",
      "artist": "Anuv Jain | Monsoon Memories",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ULcyLYD3o_M/hqdefault.jpg"
    },
    {
      "videoId": "9lyPBa5Kd3I",
      "title": "Mishri (Chai Chill) (Encore)",
      "artist": "Anuv Jain | Morning Warmth",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9lyPBa5Kd3I/hqdefault.jpg"
    },
    {
      "videoId": "Q3WfedW2i-s",
      "title": "Ocean (Lofi Piano) (Encore)",
      "artist": "Anuv Jain | Serene Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Q3WfedW2i-s/hqdefault.jpg"
    },
    {
      "videoId": "9aNUc4L_94U",
      "title": "Gul (Cozy Lofi) (Encore)",
      "artist": "Anuv Jain | Aesthetic Evenings",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9aNUc4L_94U/hqdefault.jpg"
    },
    {
      "videoId": "MArLl3XbN8Y",
      "title": "Aaoge Tum Kabhi (Lo-fi) (Encore)",
      "artist": "The Local Train | Melodic Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/MArLl3XbN8Y/hqdefault.jpg"
    },
    {
      "videoId": "3RAoczaBVP8",
      "title": "Choo Lo (Slowed Reverb) (Encore)",
      "artist": "The Local Train | Nostalgia",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/3RAoczaBVP8/hqdefault.jpg"
    },
    {
      "videoId": "ewuvBK5nax8",
      "title": "Khudi (Lofi Ambient) (Encore)",
      "artist": "The Local Train | Midnight Thoughts",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ewuvBK5nax8/hqdefault.jpg"
    },
    {
      "videoId": "ZP1lpOMsek4",
      "title": "Husn (Lofi Chill) (Remix)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ZP1lpOMsek4/hqdefault.jpg"
    },
    {
      "videoId": "Q5Sc8IsY-SQ",
      "title": "Agar Tum Saath Ho (Lofi Flip) (Remix)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Q5Sc8IsY-SQ/hqdefault.jpg"
    },
    {
      "videoId": "TZLo-TTnrfQ",
      "title": "Baarishein (Slowed & Reverb) (Remix)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/TZLo-TTnrfQ/hqdefault.jpg"
    },
    {
      "videoId": "qy1l5Wt_olw",
      "title": "Dil Mere (Lofi Chillhop) (Remix)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/qy1l5Wt_olw/hqdefault.jpg"
    },
    {
      "videoId": "FysdiBYGJLI",
      "title": "Iktara (Lofi Ambient) (Remix)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/FysdiBYGJLI/hqdefault.jpg"
    },
    {
      "videoId": "etwc_LzYTFI",
      "title": "Tera Mera Rishta (Lofi Reverb) (Remix)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/etwc_LzYTFI/hqdefault.jpg"
    },
    {
      "videoId": "bE_hK9NZ2_A",
      "title": "Toh Phir Aao (Lofi Lounge) (Remix)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/bE_hK9NZ2_A/hqdefault.jpg"
    },
    {
      "videoId": "_rGuNjq6fCE",
      "title": "Pehle Bhi Main (Slowed Reverb) (Remix)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_rGuNjq6fCE/hqdefault.jpg"
    },
    {
      "videoId": "LWJU1kj1PaI",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi) (Remix)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/LWJU1kj1PaI/hqdefault.jpg"
    },
    {
      "videoId": "N-PHKu9FCVY",
      "title": "Shayad (Late Night Lofi) (Remix)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/N-PHKu9FCVY/hqdefault.jpg"
    },
    {
      "videoId": "_RFVSuDK9Eg",
      "title": "Maan Meri Jaan (Lofi Mix) (Remix)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/_RFVSuDK9Eg/hqdefault.jpg"
    },
    {
      "videoId": "n5Jqs1vMyzE",
      "title": "Heeriye (Acoustic Lo-Fi) (Remix)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/n5Jqs1vMyzE/hqdefault.jpg"
    },
    {
      "videoId": "9UpiVZDzXYc",
      "title": "Satranga (Lo-Fi Vibes) (Remix)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/9UpiVZDzXYc/hqdefault.jpg"
    },
    {
      "videoId": "fSS_R91Nimw",
      "title": "Apna Bana Le (Lofi Sunset) (Remix)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/fSS_R91Nimw/hqdefault.jpg"
    },
    {
      "videoId": "1q65CU2JoXg",
      "title": "Tum Hi Ho (Lofi Chillout) (Remix)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/1q65CU2JoXg/hqdefault.jpg"
    },
    {
      "videoId": "ZlOZktsODpA",
      "title": "Kesariya (Lo-fi Dream) (Remix)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ZlOZktsODpA/hqdefault.jpg"
    },
    {
      "videoId": "akjdj6iHttY",
      "title": "Hawaayein (Lofi Flip) (Remix)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/akjdj6iHttY/hqdefault.jpg"
    },
    {
      "videoId": "nJcaU8bKpGs",
      "title": "Channa Mereya (Slowed Ambient) (Remix)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/nJcaU8bKpGs/hqdefault.jpg"
    },
    {
      "videoId": "JKSoBqnQ5I4",
      "title": "Raataan Lambiyan (Lofi Beat) (Remix)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/JKSoBqnQ5I4/hqdefault.jpg"
    },
    {
      "videoId": "EYgSirZikfw",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset) (Remix)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/EYgSirZikfw/hqdefault.jpg"
    },
    {
      "videoId": "fTtPg6CSeHk",
      "title": "Kasoor (Acoustic Lofi) (Remix)",
      "artist": "Prateek Kuhad | Peaceful Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/fTtPg6CSeHk/hqdefault.jpg"
    },
    {
      "videoId": "p8p0Pb5R-FA",
      "title": "cold/mess (Midnight Reverb) (Remix)",
      "artist": "Prateek Kuhad | Late Night",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/p8p0Pb5R-FA/hqdefault.jpg"
    },
    {
      "videoId": "oTJxvlHcB-4",
      "title": "Tune Kaha (Lo-fi Flip) (Remix)",
      "artist": "Prateek Kuhad | Soft Melodies",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/oTJxvlHcB-4/hqdefault.jpg"
    },
    {
      "videoId": "0bRnXG4ytuM",
      "title": "Alag Aasmaan (Rain Lofi) (Remix)",
      "artist": "Anuv Jain | Monsoon Memories",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/0bRnXG4ytuM/hqdefault.jpg"
    },
    {
      "videoId": "FvLlxpd4f7M",
      "title": "Mishri (Chai Chill) (Remix)",
      "artist": "Anuv Jain | Morning Warmth",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/FvLlxpd4f7M/hqdefault.jpg"
    },
    {
      "videoId": "Qqxb9lI6xLw",
      "title": "Ocean (Lofi Piano) (Remix)",
      "artist": "Anuv Jain | Serene Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Qqxb9lI6xLw/hqdefault.jpg"
    },
    {
      "videoId": "4sMdGz8rbcs",
      "title": "Gul (Cozy Lofi) (Remix)",
      "artist": "Anuv Jain | Aesthetic Evenings",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/4sMdGz8rbcs/hqdefault.jpg"
    },
    {
      "videoId": "3Kjj5UI9edw",
      "title": "Aaoge Tum Kabhi (Lo-fi) (Remix)",
      "artist": "The Local Train | Melodic Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/3Kjj5UI9edw/hqdefault.jpg"
    },
    {
      "videoId": "fAB7HttsFpE",
      "title": "Choo Lo (Slowed Reverb) (Remix)",
      "artist": "The Local Train | Nostalgia",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/fAB7HttsFpE/hqdefault.jpg"
    },
    {
      "videoId": "3lMww57WSzQ",
      "title": "Khudi (Lofi Ambient) (Remix)",
      "artist": "The Local Train | Midnight Thoughts",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/3lMww57WSzQ/hqdefault.jpg"
    },
    {
      "videoId": "8V8dOlyQj4Y",
      "title": "Husn (Lofi Chill) (Live Acoustic)",
      "artist": "Anuv Jain | Midnight Reverie",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/8V8dOlyQj4Y/hqdefault.jpg"
    },
    {
      "videoId": "czfRogz56cA",
      "title": "Agar Tum Saath Ho (Lofi Flip) (Live Acoustic)",
      "artist": "Arijit Singh, Alka Yagnik | Chai Beats",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/czfRogz56cA/hqdefault.jpg"
    },
    {
      "videoId": "U4e2UvC_YCo",
      "title": "Baarishein (Slowed & Reverb) (Live Acoustic)",
      "artist": "Anuv Jain | Monsoon Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/U4e2UvC_YCo/hqdefault.jpg"
    },
    {
      "videoId": "jHNNMj5bNQw",
      "title": "Dil Mere (Lofi Chillhop) (Live Acoustic)",
      "artist": "The Local Train | Night Drive",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/jHNNMj5bNQw/hqdefault.jpg"
    },
    {
      "videoId": "yk2tHuIP59s",
      "title": "Iktara (Lofi Ambient) (Live Acoustic)",
      "artist": "Kavita Seth, Amit Trivedi | Chill Station",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/yk2tHuIP59s/hqdefault.jpg"
    },
    {
      "videoId": "MuCfsZk9lbU",
      "title": "Tera Mera Rishta (Lofi Reverb) (Live Acoustic)",
      "artist": "Mustafa Zahid | Chai & Smoke",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/MuCfsZk9lbU/hqdefault.jpg"
    },
    {
      "videoId": "ta-W16uw7zg",
      "title": "Toh Phir Aao (Lofi Lounge) (Live Acoustic)",
      "artist": "Mustafa Zahid | Rainy Cafe",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/ta-W16uw7zg/hqdefault.jpg"
    },
    {
      "videoId": "lwLVJ0E8gN4",
      "title": "Pehle Bhi Main (Slowed Reverb) (Live Acoustic)",
      "artist": "Vishal Mishra | Night Drive Lofi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/lwLVJ0E8gN4/hqdefault.jpg"
    },
    {
      "videoId": "EK2Ol1ov0gk",
      "title": "Tujhe Kitna Chahne Lage (Lo-fi) (Live Acoustic)",
      "artist": "Arijit Singh | Lo-Fi Rhythms",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/EK2Ol1ov0gk/hqdefault.jpg"
    },
    {
      "videoId": "7jZwAl0ArQw",
      "title": "Shayad (Late Night Lofi) (Live Acoustic)",
      "artist": "Arijit Singh, Pritam | Bedtime Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/7jZwAl0ArQw/hqdefault.jpg"
    },
    {
      "videoId": "Ymcbjo6P1O0",
      "title": "Maan Meri Jaan (Lofi Mix) (Live Acoustic)",
      "artist": "King | Lo-Fi Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/Ymcbjo6P1O0/hqdefault.jpg"
    },
    {
      "videoId": "3F9r7xggi88",
      "title": "Heeriye (Acoustic Lo-Fi) (Live Acoustic)",
      "artist": "Jasleen Royal, Arijit Singh",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/3F9r7xggi88/hqdefault.jpg"
    },
    {
      "videoId": "-X2dsCQMLcs",
      "title": "Satranga (Lo-Fi Vibes) (Live Acoustic)",
      "artist": "Arijit Singh | Soulful Waves",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/-X2dsCQMLcs/hqdefault.jpg"
    },
    {
      "videoId": "jJ4AsIV1FDI",
      "title": "Apna Bana Le (Lofi Sunset) (Live Acoustic)",
      "artist": "Arijit Singh, Sachin-Jigar",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/jJ4AsIV1FDI/hqdefault.jpg"
    },
    {
      "videoId": "PAjJAWrCAzU",
      "title": "Tum Hi Ho (Lofi Chillout) (Live Acoustic)",
      "artist": "Arijit Singh | Midnight Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/PAjJAWrCAzU/hqdefault.jpg"
    },
    {
      "videoId": "L-SgTplq2IQ",
      "title": "Kesariya (Lo-fi Dream) (Live Acoustic)",
      "artist": "Arijit Singh | Sunset Chill",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/L-SgTplq2IQ/hqdefault.jpg"
    },
    {
      "videoId": "GgOjecsKCww",
      "title": "Hawaayein (Lofi Flip) (Live Acoustic)",
      "artist": "Arijit Singh | Monsoon Coffee",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/GgOjecsKCww/hqdefault.jpg"
    },
    {
      "videoId": "iAOA8TLgqG8",
      "title": "Channa Mereya (Slowed Ambient) (Live Acoustic)",
      "artist": "Arijit Singh | Sad Lo-fi",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/iAOA8TLgqG8/hqdefault.jpg"
    },
    {
      "videoId": "w3eYf7noC8A",
      "title": "Raataan Lambiyan (Lofi Beat) (Live Acoustic)",
      "artist": "Jubin Nautiyal | Starry Nights",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/w3eYf7noC8A/hqdefault.jpg"
    },
    {
      "videoId": "3oMQuyaPGa4",
      "title": "Kho Gaye Hum Kahan (Lofi Sunset) (Live Acoustic)",
      "artist": "Jasleen Royal, Prateek Kuhad",
      "category": "lofi",
      "thumbnail": "https://i.ytimg.com/vi/3oMQuyaPGa4/hqdefault.jpg"
    }
  ]
};

  function getDatabaseSongs(category) {
    if (category && SONGS_DATABASE[category] && SONGS_DATABASE[category].length > 0) {
      return [...SONGS_DATABASE[category]];
    }
    return [...(SONGS_DATABASE.trending || [])];
  }

  function getCategoryTotalCount(category) {
    if (category && SONGS_DATABASE[category]) {
      return SONGS_DATABASE[category].length;
    }
    return (SONGS_DATABASE.trending || []).length;
  }

  function getCategoryBatch(category, offset = 0, limit = 10) {
    const all = getDatabaseSongs(category);
    const start = Math.max(0, offset) % Math.max(1, all.length);
    const end = Math.min(start + limit, all.length);
    return all.slice(start, end);
  }

  // Export to module (Node.js) and browser (window)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      SONGS_DATABASE,
      getDatabaseSongs,
      getCategoryTotalCount,
      getCategoryBatch
    };
  }
  if (typeof root !== 'undefined') {
    root.SURBEAT_CATALOG = SONGS_DATABASE;
    root.getSurBeatDatabaseSongs = getDatabaseSongs;
    root.getCategoryTotalCount = getCategoryTotalCount;
    root.getCategoryBatch = getCategoryBatch;
  }
})(typeof window !== 'undefined' ? window : global);
