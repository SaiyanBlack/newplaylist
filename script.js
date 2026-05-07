// DOM Elements
const homePage = document.getElementById("homePage");
const songDetailPage = document.getElementById("songDetailPage");
const playerPage = document.getElementById("playerPage");
const songListElement = document.getElementById("songList");

const backToHomeFromDetailBtn = document.getElementById(
  "backToHomeFromDetailBtn",
);
const backToHomeBtn = document.getElementById("backToHomeBtn"); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector(
  ".video-background-container",
);
const backgroundVideo = document.getElementById("backgroundVideo");

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById("detailAlbumArt");
const detailTrackTitle = document.getElementById("detailTrackTitle");
const detailTrackArtist = document.getElementById("detailTrackArtist");
const detailAlbumName = document.getElementById("detailAlbumName");
const playFromDetailBtn = document.getElementById("playFromDetailBtn"); // Play button on detail page

const audioPlayer = document.getElementById("audioPlayer");
const albumArtPlayer = document.getElementById("albumArt");
const playerTrackTitle = document.getElementById("playerTrackTitle");
const playerTrackArtist = document.getElementById("playerTrackArtist");
const lyricsContainer = document.getElementById("lyricsContainer");

const playerProgressBarContainer = document.getElementById(
  "playerProgressBarContainer",
);
const playerProgressBar = document.getElementById("playerProgressBar");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerTotalDuration = document.getElementById("playerTotalDuration");

const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerPlayPauseBtn = document.getElementById("playerPlayPauseBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const playerRepeatBtn = document.getElementById("playerRepeatBtn");
const playerShuffleBtn = document.getElementById("playerShuffleBtn");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const playerSpeedSlider = document.getElementById("playerSpeedSlider"); // Add this
const currentSpeedDisplay = document.getElementById("currentSpeedDisplay"); // Add this

// App State
let songs = [
  {
    id: 1,
    title: "Soulmate",
    artist: "Kahtina",
    album: "Soulmate",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b2737f1ff8e8be3727f0c362ba06",
    audioSrc: "audio/soulmate.mp3",
    videoBgSrc: "videos/soulmate.mp4",
    lyrics: [
      { time: 18, text: "Ketika" },
      { time: 21, text: "Engkau datang" },
      { time: 24, text: "Mengapa di saat ku tak mungkin" },

      { time: 28, text: "Menggapaimu?" },
      { time: 32, text: "Meskipun telah kau semaikan cinta" },
      { time: 37, text: "Di balik senyuman indah" },
      { time: 41, text: "Kau jadikan seakan nyata" },

      { time: 45, text: "Seolah kau belahan jiwa" },
      { time: 49, text: "Meskipun tak mungkin lagi" },
      { time: 53, text: "'Tuk menjadi pasanganku" },
      { time: 57, text: "Namun kuyakini cinta" },

      { time: 61, text: "Kau kekasih hati" },
      { time: 67, text: "Wo-oh-wo-oh-oh" },
      { time: 71, text: "Terkadang begitu sukar utuk dimengerti" },

      { time: 79, text: "Semua ini kita terlambat" },
      { time: 86, text: "Meskipun telah kau semaikan cinta" },
      { time: 91, text: "Dibalik senyuman indah" },
      { time: 95, text: "Kau jadikan seakan nyata" },

      { time: 98, text: "Seolah kau belahan jiwa" },
      { time: 102, text: "Meskipun tak mungkin lagi" },
      { time: 107, text: "'Tuk menjadi pasanganku" },
      { time: 111, text: "Namun kuyakini cinta" },

      { time: 115, text: "Kau kekasih hati" },

      { time: 131, text: "Oh-oh" },
      { time: 133, text: "Ho-ho-oh-oh" },
      { time: 136, text: "Meskipun tak mungkin lagi" },
      { time: 140, text: "'Tuk menjadi pasanganku" },

      { time: 143, text: "Namun kuyakini cinta" },
      { time: 148, text: "Kau kekasih hati" },
      { time: 152, text: "Dibalik senyuman indah" },

      { time: 157, text: "Kau jadikan seakan nyata" },
      { time: 160, text: "Seolah kau belahan jiwa " },
      { time: 165, text: "Meskipun tak mungkin lagi" },
      { time: 169, text: "'Tuk menjadi pasanganku" },

      { time: 173, text: "Namun ku yakini cinta" },
      { time: 176, text: "Kau kekasih hati" },

      { time: 181, text: "Meskipun tak mungkin lagi" },
      { time: 185, text: "'Tuk menjadi pasanganku" },
      { time: 189, text: "Namun ku yakini cinta" },

      { time: 193, text: "Kau kekasih hati" },
      { time: 202, text: "Oh-oh" },
    ],
  },

  {
    id: 2,
    title: "Kasih Putih",
    artist: "Glenn Fredly",
    album: "Selamat Pagi, Dunia!",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b273f75b60c4f21216761a613eaa",
    audioSrc: "audio/kasih-putih.mp3",
    videoBgSrc: "videos/kasih-putih.mp4",
    lyrics: [

  {
    time: 24,
    text: "Terdalam yang pernah kurasa..."
  },

  {
    time: 31,
    text: "Hasratku hanyalah... untukmu..."
  },

  {
    time: 36,
    text: "Terukir manis dalam renunganku... jiwamu..."
  },

  {
    time: 44,
    text: "Jiwaku menyatu..."
  },

  {
    time: 46,
    text: "Biarkanlah kurasakan..."
  },

  {
    time: 51,
    text: "Hangatnya... Tuhan kasih-Mu bawa penuhkui..."
  },

  {
    time: 63,
    text: "Berilah diriku kasih... putih di hatiku..."
  },

  {
    time: 71,
    text: "Ku datang pada-Mu kekasihku... kucurahkan..."
  },

  {
    time: 81,
    text: "Isi jiwaku..."
  },

  {
    time: 85,
    text: "Hanyutkan dalam air..."
  },

  {
    time: 89,
    text: "Hidup kau bawa selamanya diriku... biarkanlah..."
  },

  {
    time: 97,
    text: "Kurasakan hangatnya sentuhan..."
  },

  {
    time: 103,
    text: "Kasih-Mu bawa penuhkui..."
  },

  {
    time: 115,
    text: "Berilah diriku kasih putih... di hatiku..."
  },

  {
    time: 120,
    text: "Aku kasihku..."
  },

  {
    time: 127,
    text: "Taburku dengan cinta..."
  },

  {
    time: 135,
    text: "Biarkanlah kurasakan hanya..."
  },

  {
    time: 141,
    text: "Kesuhan kasih-Mu... kau wajahmu penuhkui..."
  },

  {
    time: 152,
    text: "Berilah diriku kasih-Mu..."
  },

  {
    time: 162,
    text: "Biarkanlah kurasakan hangatnya sentuhan..."
  },

  {
    time: 171,
    text: "Kasih-Mu..."
  },

  {
    time: 174,
    text: "Wadaku penuhkui..."
  },

  {
    time: 179,
    text: "Berilah diriku kasih..."
  },

  {
    time: 184,
    text: "Putih di hatiku..."
  },

  {
    time: 191,
    text: "Kuras hanya..."
  },

  {
    time: 203,
    text: "Penuhilu kasih..."
  },

  {
    time: 212,
    text: "Putih di hatiku... hati di hidupku..."
  },

  {
    time: 221,
    text: "Jangan..."
  }

]

  },

  {
    id: 3,
    title: "Untukku",
    artist: "Chrisye",
    album: "Untukku",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b2738b2625e0fb9735fd16b83b9b",
    audioSrc: "audio/untukku.mp3",
    videoBgSrc: "videos/untukku.mp4",
    lyrics:[
  // Verse 1
  { time: 14, text: "Ke mana langkahku pergi" },
  { time: 17, text: "Selalu ada bayangmu" },
  { time: 20, text: "Ku yakin makna nurani" },
  { time: 24, text: "Kau takkan pernah terganti" },
  { time: 28, text: "Saat lautan kau seberangi" },
  { time: 34, text: "Janganlah ragu bersauh" },
  { time: 38, text: "Ku percaya hati kecilku" },
  { time: 42, text: "Kau takkan berpaling" },

  // Chorus 1
  { time: 47, text: "Walau ke ujung dunia" },
  { time: 51, text: "Pasti akan kunanti" },
  { time: 55, text: "Meski ke tujuh samudra" },
  { time: 59, text: "Pasti ku 'kan menunggu" },
  { time: 63, text: "Karena ku yakin" },
  { time: 68, text: "Kau hanya untukku" },

  // Verse 2
  { time: 74, text: "Ke mana langkahku pergi" },
  { time: 77, text: "Selalu ada bayangmu" },
  { time: 80, text: "Ku yakin makna nurani" },
  { time: 84, text: "Kau takkan pernah terganti" },
  { time: 88, text: "Pandanglah bintang berpijar" },
  { time: 93, text: "Kau tak pernah tersembunyi" },
  { time: 98, text: "Di mana engkau berada" },
  { time: 102, text: "Di sana cintaku" },

  // Chorus 2
  { time: 107, text: "Walau ke ujung dunia" },
  { time: 111, text: "Pasti akan kunanti" },
  { time: 115, text: "Meski ke tujuh samudra" },
  { time: 119, text: "Pasti ku 'kan menunggu" },
  { time: 124, text: "Karena ku yakin" },
  { time: 128, text: "Kau hanya untukku" },

  // Jeda Instrumental yang lumayan panjang, masuk lagi di 02:45
  
  // Chorus 3 (Overtone/Fade Out)
  { time: 165, text: "Walau ke ujung dunia" },
  { time: 169, text: "Pasti akan kunanti" },
  { time: 173, text: "Meski ke tujuh samudra" },
  { time: 177, text: "Pasti ku 'kan menunggu" },

  { time: 180, text: "Walau ke ujung dunia" },
  { time: 184, text: "Pasti akan kunanti" },
  { time: 188, text: "Meski ke tujuh samudra" },
  { time: 194, text: "Pasti ku 'kan menunggu" },

  { time: 198, text: "Walau ke ujung dunia" },
  { time: 202, text: "Pasti akan kunanti" },
  { time: 206, text: "Meski ke tujuh samudra" },
  { time: 210, text: "Pasti ku 'kan menunggu" },

  { time: 213, text: "Karena ku yakin" },
  { time: 216, text: "Kau hanya untukku" },

  { time: 222, text: "Karena ku yakin" },
  { time: 226, text: "Kau hanya untukku" },
  { time: 230, text: "Hanya untukku..." }
]
  },

  {
    id: 4,
    title: "Do I Wanna Know?",
    artist: "Arctic Monkeys",
    album: "AM",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    audioSrc: "audio/do-i-wanna-know.mp3",
    videoBgSrc: "videos/do-i-wanna-know.mp4",
    lyrics:[
  { time: 30, text: "Have you got colour in your cheeks?" },
  { time: 35, text: "Do you ever get that fear that you can't shift the tide" },
  { time: 39, text: "That sticks around like summat in your teeth?" },
  { time: 42, text: "Are there some aces up your sleeve?" },
  { time: 46, text: "Have you no idea that you're in deep?" },
  { time: 49, text: "I've dreamt about you nearly every night this week" },
  { time: 54, text: "How many secrets can you keep?" },
  { time: 56, text: "Cause there's this tune I found" },
  { time: 60, text: "That makes me think of you somehow an' I play it on repeat" },
  { time: 65, text: "Until I fall asleep, spillin' drinks on my settee" },
  { time: 73, text: "Do I wanna know? If this feelin' flows both ways?" },
  { time: 78, text: "Sad to see you go was sorta hopin' that you'd stay" },
  { time: 85, text: "Baby, we both know that the nights were mainly made" },
  { time: 90, text: "For sayin' things that you can't say tomorrow day" },
  { time: 95, text: "Crawlin' back to you" },
  { time: 98, text: "Ever thought of callin' when" },
  { time: 102, text: "You've had a few? Cause I always do" },
  { time: 107, text: "Maybe I'm too busy bein' yours" },
  { time: 112, text: "To fall for somebody new" },
  { time: 115, text: "Now, I've thought it through" },
  { time: 117, text: "Crawlin' back to you" },
  { time: 121, text: "So have you got the guts?" },
  { time: 124, text: "Been wonderin' if your heart's still open" },
  { time: 129, text: "And if so, I wanna know what time it shuts" },
  { time: 132, text: "Simmer down an' pucker up, I'm sorry to interrupt" },
  { time: 139, text: "It's just I'm constantly on the cusp of tryin' to kiss you" },
  { time: 144, text: "I don't know if you feel the same as I do" },
  { time: 155, text: "But we could be together if you wanted to" },
  { time: 164, text: "Do I wanna know? If this feelin' flows both ways?" },
  { time: 169, text: "Sad to see you go was sorta hopin' that you'd stay" },
  { time: 175, text: "Baby, we both know that the nights were mainly made" },
  { time: 180, text: "For sayin' things that you can't say tomorrow day" },
  { time: 185, text: "Crawlin' back to you" },
  { time: 188, text: "Ever thought of callin' when" },
  { time: 193, text: "You've had a few? Cause I always do" },
  { time: 197, text: "Maybe I'm too busy bein' yours" },
  { time: 202, text: "To fall for somebody new" },
  { time: 205, text: "Now, I've thought it through" },
  { time: 207, text: "Crawlin' back to you" },
  { time: 231, text: "Do I wanna know? Too busy bein' yours to fall" },
  { time: 237, text: "Sad to see you go ever thought of callin', darlin'?" },
  { time: 243, text: "Do I wanna know? Do you want me crawlin' back to you?" }
]
  },

  {
    id: 5,
    title: "Why’d You Only Call Me When You’re High?",
    artist: "Arctic Monkeys",
    album: "AM",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    audioSrc: "audio/why-call-me.mp3",
    videoBgSrc: "videos/why-call-me.mp4",
    lyrics: [
  { time: 11, text: "The mirror's image, it tells me it's home time" },
  { time: 16, text: "But I'm not finished, 'cause you're not by my side" },
  { time: 21, text: "And as I arrived I thought I saw you leavin', carryin' your shoes" },
  { time: 26, text: "Decided that once again I was just dreamin' of bumpin' into you" },
  { time: 32, text: "Now it's three in the mornin' and I'm tryin' to change your mind" },
  { time: 37, text: "Left you multiple missed calls and to my message, you reply" },
  { time: 43, text: "\"Why'd you only call me when you're high?\"" },
  { time: 47, text: "\"Hi, why'd you only call me when you're high?\"" },
  { time: 53, text: "Somewhere darker, talkin' the same shite" },
  { time: 58, text: "I need a partner, well, are you out tonight?" },
  { time: 63, text: "It's harder and harder to get you to listen" },
  { time: 66, text: "More I get through the gears" },
  { time: 68, text: "Incapable of makin' alright decisions" },
  { time: 71, text: "And havin' bad ideas" },
  { time: 74, text: "Now it's three in the mornin' and I'm tryin' to change your mind" },
  { time: 79, text: "Left you multiple missed calls and to my message, you reply" },
  { time: 85, text: "(Why'd you only call me when you're high?)" },
  { time: 89, text: "(Hi, why'd you only call me when you're high?)" },
  { time: 105, text: "And I can't see you here, wonderin' where I might" },
  { time: 111, text: "It sort of feels like I'm runnin' out of time" },
  { time: 116, text: "I haven't found all I was hopin' to find" },
  { time: 120, text: "You said you gotta be up in the mornin', gonna have an early night" },
  { time: 125, text: "And you're startin' to bore me, baby, why'd you only call me when you're high?" },
  { time: 136, text: "\"Why'd you only call me when you're high?\"" },
  { time: 141, text: "\"Why'd you only call me when you're high?\"" },
  { time: 146, text: "\"Why'd you only call me when you're high?\"" },
  { time: 151, text: "\"Why'd you only call me when you're high?\"" }
]
  },

  {
    id: 6,
    title: "Anything You Want",
    artist: "Reality Club",
    album: "Reality Club",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b2735b7cbf4c2e0c4607dd56b137",
    audioSrc: "audio/anything-you-want.mp3",
    videoBgSrc: "videos/anything-you-want.mp4",
    lyrics:[
  {
    time: 0,
    text: "Trails of smoke trapped in a two, by two"
  },
  {
    time: 6,
    text: "Wasting the night feels right when I'm with you"
  },
  {
    time: 12,
    text: "It's the shimmer in your eyes"
  },
  {
    time: 18,
    text: "And the way you let down your disguise"
  },
  {
    time: 25,
    text: "I feel like I've known you for ages"
  },
  {
    time: 37,
    text: "I feel like with you I'm going places"
  },
  {
    time: 46,
    text: "ahh"
  },
  {
    time: 49,
    text: "ahh"
  },
  {
    time: 54,
    text: "The same song on repeat"
  },
  {
    time: 59,
    text: "\"You can call me anything you want\""
  },
  {
    time: 65,
    text: "it's fine by me"
  },
  {
    time: 70,
    text: "Number two out of three"
  },
  {
    time: 76,
    text: "He says that it's his favorite"
  },
  {
    time: 81,
    text: "And i can't disagree"
  },
  {
    time: 103,
    text: "We talk about everything"
  },
  {
    time: 107,
    text: "The important and the mundane"
  },
  {
    time: 112,
    text: "You know i think you know everything"
  },
  {
    time: 118,
    text: "But the night's still young"
  },
  {
    time: 120,
    text: "And there's still so much to gain"
  },
  {
    time: 125,
    text: "I feel like I've known you for ages"
  },
  {
    time: 135,
    text: "I feel like with you I'm going places"
  },
  {
    time: 144,
    text: "ahh"
  },
  {
    time: 147,
    text: "ahh"
  },
  {
    time: 152,
    text: "The same song on repeat"
  },
  {
    time: 157,
    text: "\"You can call me anything you want\""
  },
  {
    time: 163,
    text: "it's fine by me"
  },
  {
    time: 168,
    text: "Number two out of three"
  },
  {
    time: 175,
    text: "He says that it's his favorite"
  },
  {
    time: 180,
    text: "And i can't disagree"
  },
  {
    time: 185,
    text: "The same song on repeat"
  },
  {
    time: 190,
    text: "\"You can call me anything you want\""
  },
  {
    time: 196,
    text: "it's fine by me"
  },
  {
    time: 201,
    text: "Number two out of three"
  },
  {
    time: 207,
    text: "He says that it's his favorite"
  },
  {
    time: 212,
    text: "And i can't disagree"
  },
  {
    time: 218,
    text: "The same song on repeat"
  },
  {
    time: 223,
    text: "\"You can call me anything you want\""
  },
  {
    time: 229,
    text: "it's fine by me"
  },
  {
    time: 234,
    text: "Number two out of three"
  }
]
  },

  {
    id: 7,
    title: "Made in Japan",
    artist: "Buck Owens",
    album: "Made in Japan",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b27356b4caf274d2933cc4aa54ad",
    audioSrc: "audio/made-in-japan.mp3",
    videoBgSrc: "videos/made-in-japan.mp4",
    lyrics:[
  {
    time: 15,
    text: "My transistor radio comes from far away"
  },
  {
    time: 22,
    text: "And when it's night over here over there it's breaking day"
  },
  {
    time: 29,
    text: "I remember all the good times I had of walking in the sand"
  },
  {
    time: 37,
    text: "With the beautiful girl that I met made in Japan"
  },
  {
    time: 44,
    text: "The beauty of her face was beyond my wildest dreams"
  },
  {
    time: 51,
    text: "Like cherry blossoms looming in the mountain in the early spring"
  },
  {
    time: 59,
    text: "As we walked by the river and she softly took hold of my hand"
  },
  {
    time: 66,
    text: "That's when I fell deep in love with the girl made in Japan"
  },
  {
    time: 88,
    text: "In the dark of night we would lay on Tokyo Bay"
  },
  {
    time: 95,
    text: "And the singing of the birds whoops up at the break of day"
  },
  {
    time: 103,
    text: "Her smiling eyes always seem to try to understand"
  },
  {
    time: 110,
    text: "All the love in my heart for the girl made in Japan"
  },
  {
    time: 118,
    text: "My princess radio comes from far away"
  },
  {
    time: 125,
    text: "And when it's night over here over there it's breaking day"
  },
  {
    time: 132,
    text: "She cried when she said she'd been promised to another man"
  },
  {
    time: 139,
    text: "That's when I left my heart with the girl made in Japan"
  },
  {
    time: 147,
    text: "Yes my heart will always be with the girl made in Japan"
  }
]
  },

  {
    id: 8,
    title: "Margaret",
    artist: "Lana Del Rey",
    album: "Did You Know That There’s a Tunnel Under Ocean Blvd",
    albumArtUrl:
      "https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634",
    audioSrc: "audio/margaret.mp3",
    videoBgSrc: "videos/margaret.mp4",
    lyrics: [

  {
    time: 37,
    text: "This is a simple song... going to write it for a friend... my shirt is inside out I'm..."
  },

  {
    time: 45,
    text: "Messy with the pen... he met Margaret on a rooftop... she was wearing white and he was..."
  },

  {
    time: 53,
    text: "Like I might be in trouble... he had flashes of the good life... was like should I jump..."
  },

  {
    time: 63,
    text: "Off this building now or do it... on the double... cuz baby if your love is in..."
  },

  {
    time: 70,
    text: "Trouble... baby if your love is in trouble... maybe if your love is in..."
  },

  {
    time: 82,
    text: "Trouble... when you know you know... when you know you know..."
  },

  {
    time: 91,
    text: "It kind of makes me laugh... running down that path... when your good is..."
  },

  {
    time: 98,
    text: "C... you know you know words all my friends... but they're red flies they're..."
  },

  {
    time: 107,
    text: "White ni... they're black eyes and they're blue lies... if you're asking..."
  },

  {
    time: 113,
    text: "Yourself how do you know... and that's your answer... the answer is no..."
  },

  {
    time: 121,
    text: "Got got on fire away is on... baby..."
  },

  {
    time: 127,
    text: "If your love is in trouble... baby if your love is in..."
  },

  {
    time: 147,
    text: "Trouble... then you know you know know... when you know you know..."
  },

  {
    time: 156,
    text: "It kind of makes me laugh... running down that back... when you good is..."
  },

  {
    time: 163,
    text: "C cuz when you know you know... when you hold your own like hly would in..."
  },

  {
    time: 172,
    text: "Need the diamond on your ring... the soul that you bring to the table... one that makes me..."
  },

  {
    time: 178,
    text: "Sick..."
  },

  {
    time: 183,
    text: "In a myy... cuz when you know you know... when you know you..."
  },

  {
    time: 196,
    text: "Know... when you know you know... so if you..."
  },

  {
    time: 202,
    text: "Don't know don't give up... cuz you never know... what the new day might bring..."
  },

  {
    time: 215,
    text: "Maybe tomorrow you'll know... maybe tomorrow you'll know..."
  },

  {
    time: 223,
    text: "Maybe tomorrow you'll know... I mean join the..."
  },

  {
    time: 230,
    text: "Party by the way... the party is December 18... all right let's W this out cu..."
  },

  {
    time: 240,
    text: "Cuz when you know home... when you're old you're old..."
  },

  {
    time: 247,
    text: "Wouldn't me that diamond on your..."
  },

  {
    time: 252,
    text: "Ring the soul that you bring to the table... one that makes me..."
  },

  {
    time: 256,
    text: "S in on my diamond on your..."
  },

  {
    time: 264,
    text: "R cuz when you know you know... when you know you know..."
  },

  {
    time: 299,
    text: "Oh..."
  }

]
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
  playerPage.classList.remove("active");
  songDetailPage.classList.remove("active"); // Make sure the page details are hidden
  homePage.classList.add("active");

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.remove("detail-active-bg");
  backgroundVideoContainer.classList.remove("active"); // Hide background video
  backgroundVideo.pause(); // Pause background video
  backgroundVideo.src = ""; // Empty video src
  backgroundVideo.load();
  pauseTrack(); // Pause music when returning home
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
  homePage.classList.remove("active");
  playerPage.classList.remove("active");
  songDetailPage.classList.add("active");

  detailAlbumArt.src = song.albumArtUrl;
  detailTrackTitle.textContent = song.title;
  detailTrackArtist.textContent = song.artist;
  detailAlbumName.textContent = song.album || "Unknown Album";

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.add("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause(); // Pause background video
  backgroundVideo.src = ""; // Empty video src
  backgroundVideo.load();
}

function showPlayerPage() {
  homePage.classList.remove("active");
  songDetailPage.classList.remove("active");
  playerPage.classList.add("active");

  bodyElement.classList.remove("detail-active-bg");
  bodyElement.classList.add("player-active-bg");
  backgroundVideoContainer.classList.add("active"); // Show background video

  const currentSong = songs[currentSongIndex];
  if (currentSong && currentSong.videoBgSrc) {
    backgroundVideo.src = currentSong.videoBgSrc;
    backgroundVideo.load();
    backgroundVideo
      .play()
      .catch((e) => console.error("Error playing video background:", e));
  } else {
    backgroundVideo.src = "";
    backgroundVideo.load(); // Empty src if there is no custom video
  }
}

// --- Home Page Logic ---
function renderSongList() {
  songListElement.innerHTML = "";
  if (songs.length === 0) {
    songListElement.innerHTML =
      '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
    return;
  }
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", song.id);
    listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
    // --- Important Changes here ---
    // When a song item is clicked, immediately load & play the song then display the player page
    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      playTrack();
      showPlayerPage(); // Jump to the music player page
    });

    // Event listener for hover
    listItem.addEventListener("mouseenter", () => {
      // Only enable background video if we are on the home page
      if (homePage.classList.contains("active") && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideoContainer.classList.add("active");
        backgroundVideo
          .play()
          .catch((e) => console.error("Error playing video on hover:", e));
        bodyElement.classList.add("player-active-bg"); // Add class for body background color
      }
    });
    listItem.addEventListener("mouseleave", () => {
      // Hide background video only if we are on home page
      if (homePage.classList.contains("active")) {
        backgroundVideoContainer.classList.remove("active");
        backgroundVideo.pause(); // Pause video when mouse leaves
        backgroundVideo.src = ""; // Empty src to prevent playing in the background
        backgroundVideo.load();
        bodyElement.classList.remove("player-active-bg"); // Remove body background color class
      }
    });

    songListElement.appendChild(listItem);
  });
}

// --- Player Logic ---
function loadSong(song) {
  if (!song) {
    console.error("Song not found!");
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
    playerTrackTitle.textContent = "Song Not Available";
    playerTrackArtist.textContent = "-";
    lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
    audioPlayer.src = "";
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = "0:00";
    playerProgressBar.style.width = "0%";
    return;
  }
  albumArtPlayer.src = song.albumArtUrl;
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;

  renderLyrics(song.lyrics); // Call the render Lyrics function

  audioPlayer.src = song.audioSrc;

  audioPlayer.onloadedmetadata = () => {
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
  };
  audioPlayer.load();
  updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
  lyricsContainer.innerHTML = ""; // Clean the lyrics container
  if (!lyrics || lyrics.length === 0) {
    lyricsContainer.innerHTML =
      "<p>Lyrics are not available for this song.</p>";
    return;
  }

  lyrics.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line.text;
    span.setAttribute("data-time", line.time); // Store timestamp in data-attribute
    span.classList.add("lyric-line"); // Add class for styling
    lyricsContainer.appendChild(span);
    // Remove the added <br> manually, using CSS display:block or flexbox
    // lyrics Container.appendChild(document.createElement('br'));
  });
}

function playTrack() {
  if (!audioPlayer.src || audioPlayer.src === window.location.href) {
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    } else {
      console.log("There are no songs to play.");
      return;
    }
  }
  isPlaying = true;
  audioPlayer
    .play()
    .catch((error) => console.error("Error while playing:", error));
  updatePlayPauseIcon();
}

function pauseTrack() {
  isPlaying = false;
  audioPlayer.pause();
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (isPlaying) {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function prevTrack() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Update background video
}

function nextTrackLogic() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Update background video
}

function nextTrack() {
  if (songs.length === 0) return;

  if (repeatMode === 1 && audioPlayer.ended) {
    // Handled by audio.loop = true
  } else if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      if (repeatMode === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = songs.length - 1;
        loadSong(songs[currentSongIndex]);
        pauseTrack();
        audioPlayer.currentTime = audioPlayer.duration;
        return;
      }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
  }
  showPlayerPage(); // Update background video
}

function playRandomTrack() {
  if (songs.length <= 1) {
    currentSongIndex = 0;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Update background video
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progressPercent =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressBar.style.width = `${progressPercent}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

    // --- Logic highlight lyrics ---
    const currentTime = audioPlayer.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll(".lyric-line");
    let highlightedLine = null;

    lyricLines.forEach((line, index) => {
      const lineTime = parseFloat(line.getAttribute("data-time"));
      // Determine when this line of lyrics ends. If this is the last line, assume it ends at the end of the song.
      // Or, better, assume it ends just before the next line starts.
      let nextLineTime = Infinity;
      if (index + 1 < lyricLines.length) {
        nextLineTime = parseFloat(
          lyricLines[index + 1].getAttribute("data-time"),
        );
      }

      if (currentTime >= lineTime && currentTime < nextLineTime) {
        line.classList.add("highlight");
        highlightedLine = line;
      } else {
        line.classList.remove("highlight");
      }
    });

    // --- Auto-scroll lyrics only if highlighted line is not visible ---
    if (highlightedLine) {
      const containerRect = lyricsContainer.getBoundingClientRect();
      const lineRect = highlightedLine.getBoundingClientRect();

      // Check if the row is outside the container viewport
      const isOutsideTop = lineRect.top < containerRect.top;
      const isOutsideBottom = lineRect.bottom > containerRect.bottom;

      if (isOutsideTop || isOutsideBottom) {
        // Scroll so that the nearest row appears in the viewport, with a smooth animation
        highlightedLine.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playerProgressBarContainer.addEventListener("click", (e) => {
  if (!audioPlayer.duration || songs.length === 0) return;
  const width = playerProgressBarContainer.clientWidth;
  const clickX = e.offsetX;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener("input", (e) => {
  audioPlayer.playbackRate = parseFloat(e.target.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  playerShuffleBtn.classList.toggle("active-feature", isShuffle);
  console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButtonUI();
  console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
  playerRepeatBtn.classList.remove("active-feature");
  audioPlayer.loop = false;

  if (repeatMode === 0) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
  } else if (repeatMode === 1) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
    playerRepeatBtn.classList.add("active-feature");
    audioPlayer.loop = true;
  } else {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.classList.add("active-feature");
  }
}

playerPlayPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});
playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrackLogic);

audioPlayer.addEventListener("ended", () => {
  if (repeatMode === 1) {
    // Handled by audio.loop = true
  } else {
    nextTrack();
  }
});

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener("click", showHomePage); // From detail page to home
backToHomeBtn.addEventListener("click", showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener("click", () => {
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
});

// --- Initialization ---
function init() {
  console.log("Initializing..."); // Add log for initialization
  console.log("Songs array length:", songs.length); // Check the number of songs
  console.log("songListElement:", songListElement); // Check if song List Element is found

  renderSongList(); // This is what renders the track list

  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
  } else {
    // This will be displayed if the songs array is empty
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
    playerTrackTitle.textContent = "No Songs";
    playerTrackArtist.textContent = "Add songs";
    lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
  }
  audioPlayer.volume = playerVolumeSlider.value;
  audioPlayer.playbackRate = playerSpeedSlider.value; // Set the initial speed
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
  updatePlayPauseIcon();
  updateRepeatButtonUI();
  showHomePage(); // Start from the playlist page
  console.log("Initialization complete."); // Log completed initialization
}

init();
