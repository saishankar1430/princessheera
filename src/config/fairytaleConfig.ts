export interface RoyalOrderItem {
  number: number;
  title: string;
  description: string;
}

export interface GalleryPhotoConfig {
  filename: string;
  caption: string;
  tiltDeg: number;
}

export interface MirrorStepConfig {
  question: string;
  answer: string;
}

export const FAIRYTALE_CONFIG = {
  princessName: "Heeru",
  kingSignature: "Your King",
  madeWithLoveLabel: "Made with love for Heeru",

  /**
   * Easy-to-edit relationship start date (YYYY-MM-DD)
   * Used for the "Days of loving you" counter.
   */
  relationshipStartDate: "2026-01-31",

  /**
   * Audio track path placed inside /public/assets/music/background.mp3
   */
  music: {
    src: "/assets/music/background.mp3",
    title: "Heeru's Royal Melody",
    defaultVolume: 0.55,
  },

  /**
   * Hidden Easter Egg unlocked by clicking the header crown 5 times
   */
  crownEasterEgg: {
    tapsRequired: 5,
    title: "A Secret Note for Your Eyes Only",
    message:
      "You found the hidden royal chamber, Heeru! Just in case I don't say it enough today: every giggle, every sleepy voice note, and every little glance from you is my favourite magic in the entire universe. Forever yours.",
  },

  intro: {
    loadingText: "Loading something special for you",
  },

  page1Invitation: {
    envelopeTopLabel: "FOR PRINCESS",
    envelopeName: "Heeru",
    sealButtonText: "Tap to break the seal",
    salutation: "To My Dearest Heeru,",
    paragraphs: [
      "A special invitation awaits the most precious princess in my kingdom.",
      "Your presence is requested in a world made especially for you.",
    ],
    closing: "With love, Your King.",
    enterButtonText: "Enter Your Kingdom",
  },

  page2Castle: {
    closedButtonText: "Tap to open the gates",
    heading: "Princess Heeru, Your Castle Is Ready",
    subheading:
      "A little kingdom, a thousand dreams, and one princess who makes everything magical.",
    enterButtonText: "Enter the Castle",
  },

  page3Mirror: {
    heading: "Mirror, Mirror on the Wall",
    initialPrompt: "Tap the mirror to ask it.",
    steps: [
      {
        question: "Who is the prettiest of them all?",
        answer: "You.",
      },
      {
        question: "Who has the kindest heart?",
        answer: "Still you.",
      },
      {
        question: "And who is my princess?",
        answer: "You. Always You.",
      },
    ] as MirrorStepConfig[],
    revealLine1: "There, now the whole world knows what my heart has always known.",
    revealLine2: "Long live my princess!",
    nextButtonText: "Reveal My Royal Orders",
  },

  page4Orders: {
    heading: "By Royal Order",
    subheading: "Some promises are meant to last forever.",
    orders: [
      {
        number: 1,
        title: "THE FIRST AND LAST MOMENT",
        description:
          "Our mornings and nights will always end together, watching each other, no matter how long the day has been.",
      },
      {
        number: 2,
        title: "RESERVED BITES",
        description:
          "The first bite and the last bite of every meal will always be reserved for you. No negotiations, Your Highness.",
      },
      {
        number: 3,
        title: "THE GOLGAPPE TRADITION",
        description:
          "After every date, our staple food shall be golgappe. Because no date is truly complete without our favourite golgappe ritual.",
      },
      {
        number: 4,
        title: "DREAMS OF TWO",
        description:
          "Every dream we have will be achieved together. Your dreams are my dreams, and your victories will always be ours.",
      },
      {
        number: 5,
        title: "THE PERMANENT HANDHOLDER",
        description:
          "My hand will always be yours to hold, whether we're walking through beautiful places or simply crossing the road.",
      },
      {
        number: 6,
        title: "THE UNLIMITED HUG POLICY",
        description:
          "Unlimited hugs, forehead kisses, random cuddles and reassurance are hereby declared a permanent royal right.",
      },
      {
        number: 7,
        title: "THE ARGUMENT RULE",
        description:
          "Even on difficult days, we will never forget that it's us against the problem, never against each other.",
      },
      {
        number: 8,
        title: "THE LITTLE ADVENTURES",
        description:
          "We shall collect sunsets, silly photographs, spontaneous trips, midnight conversations and countless memories together.",
      },
      {
        number: 9,
        title: "THE HOME PROMISE",
        description:
          "Wherever life takes us, we will always find our home in each other.",
      },
      {
        number: 10,
        title: "THE FOREVER RULE",
        description:
          "No matter how old we grow, I promise to keep choosing you, making you smile and falling in love with you in all the little ways.",
      },
    ] as RoyalOrderItem[],
    holdInstruction: "Press and hold the seal to make it official.",
    sealedText: "Signed, Sealed, Yours Forever.",
    nextButtonText: "Keep Going, My Princess",
  },

  page5Gallery: {
    heading: "My Favourite Views",
    subheading: "Some of my favourite moments have one thing in common. You.",
    bannerText: "Every one of them has you in it.",
    nextButtonText: "One Last Thing",
    emptyBoxTitle: "Heeru's Royal Memory Box",
    emptyBoxBody:
      "Add your favourite photographs as photo1.jpg through photo24.jpg inside public/assets/photos/ to hang them along this starry garland.",
    photosBasePath: "/assets/photos/",
    photos: [
      { filename: "photo1.jpg", caption: "My favourite view", tiltDeg: -4 },
      { filename: "photo2.jpg", caption: "Sunshine smile", tiltDeg: 3 },
      { filename: "photo3.jpg", caption: "White roses for you", tiltDeg: -3 },
      { filename: "photo4.jpg", caption: "Radiant in blue", tiltDeg: 4 },
      { filename: "photo5.jpg", caption: "Grace in black", tiltDeg: -5 },
      { filename: "photo6.jpg", caption: "Purest joy", tiltDeg: 3 },
      { filename: "photo7.jpg", caption: "Royal elegance", tiltDeg: -3 },
      { filename: "photo8.jpg", caption: "Sweetest Polaroid", tiltDeg: 4 },
      { filename: "photo9.jpg", caption: "Golden glow", tiltDeg: -4 },
      { filename: "photo10.jpg", caption: "Pretty in sapphire", tiltDeg: 3 },
      { filename: "photo11.jpg", caption: "Always my princess", tiltDeg: -3 },
      { filename: "photo12.jpg", caption: "Red rose charm", tiltDeg: 5 },
      { filename: "photo13.jpg", caption: "Cute little heart", tiltDeg: -4 },
      { filename: "photo14.jpg", caption: "Prettiest eyes", tiltDeg: 3 },
      { filename: "photo15.jpg", caption: "Softest smile", tiltDeg: -3 },
      { filename: "photo16.jpg", caption: "Golden bangles", tiltDeg: 4 },
      { filename: "photo17.jpg", caption: "Forever dreamy", tiltDeg: -5 },
      { filename: "photo18.jpg", caption: "Silly & adorable", tiltDeg: 3 },
      { filename: "photo19.jpg", caption: "Evening grace", tiltDeg: -3 },
      { filename: "photo20.jpg", caption: "Blue & silver sparkle", tiltDeg: 4 },
      { filename: "photo21.jpg", caption: "Sweetest glance", tiltDeg: -4 },
      { filename: "photo22.jpg", caption: "Little moments", tiltDeg: 3 },
      { filename: "photo23.jpg", caption: "My whole world", tiltDeg: -3 },
      { filename: "photo24.jpg", caption: "Forever yours", tiltDeg: 4 },
    ] as GalleryPhotoConfig[],
  },

  page6Finale: {
    heading: "Happy Princess Day, Heeru!",
    skyHint: "Tap the sky",
    paragraphs: [
      "You don't need a crown to be a princess. You just need someone who sees your dreams as their own, someone who wants to make every ordinary day feel like a fairytale.",
      "Thank you for making my world more beautiful just by being in it.",
      "I may not have a kingdom to give you, but I promise to spend my life making sure you always feel like the queen of mine.",
    ],
    signatureLead: "Your loyal subject,",
    signatureName: "Your King ♡",
    foreverLine: "Forever has a beautiful name. It's Heeru.",
    crownButtonText: "Crown Me Again",
    finalToastMessage:
      "One lifetime, countless memories, and still choosing you. I love you, Heeru.",
    replayButtonText: "Replay Fairytale",
  },
} as const;
