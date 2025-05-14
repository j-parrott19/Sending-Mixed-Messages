let defSigns = {
    Aries: {
        start: new Date("2025-03-21"),
        end: new Date("2025-04-19"),
        sign: "Aries",
        element: "Fire",
        quality: "Cardinal",
        color: "Red",
        rulingPlanet: "Mars",
        symbol: "The Ram",
        compatibility: "Libra, Leo, Sagittarius"
    }
    , Taurus: {
        start: new Date("2025-04-20"),
        end: new Date("2025-05-20"),
        sign: "Taurus",
        element: "Earth",
        quality: "Fixed",
        color: "Green",
        rulingPlanet: "Venus",
        symbol: "The Bull",
        compatibility: "Scorpio, Virgo, Capricorn"
    }
    , Gemini: {
        start: new Date("2025-05-21"),
        end: new Date("2025-06-20"),
        sign: "Gemini",
        element: "Air",
        quality: "Mutable",
        color: "Yellow",
        rulingPlanet: "Mercury",
        symbol: "The Twins",
        compatibility: "Sagittarius, Leo, Aquarius"
    }
    , Cancer: {
        start: new Date("2025-06-21"),
        end: new Date("2025-07-22"),
        sign: "Cancer",
        element: "Water",
        quality: "Cardinal",
        color: "Silver",
        rulingPlanet: "Moon",
        symbol: "The Crab",
        compatibility: "Capricorn, Scorpio, Pisces"
    }
    , Leo: {
        start: new Date("2025-07-23"),
        end: new Date("2025-08-22"),
        sign: "Leo",
        element: "Fire",
        quality: "Fixed",
        color: "Gold",
        rulingPlanet: "Sun",
        symbol: "The Lion",
        compatibility: "Aquarius, Aries, Sagittarius"
    }
    , Virgo: {
        start: new Date("2025-08-23"),
        end: new Date("2025-09-22"),
        sign: "Virgo",
        element: "Earth",
        quality: "Mutable",
        color: "Brown",
        rulingPlanet: "Mercury",
        symbol: "The Virgin",
        compatibility: "Pisces, Taurus, Capricorn"
    }
    , Libra: {
        start: new Date("2025-09-23"),
        end: new Date("2025-10-22"),
        sign: "Libra",
        element: "Air",
        quality: "Cardinal",
        color: "Pink",
        rulingPlanet: "Venus",
        symbol: "The Scales",
        compatibility: "Aries, Gemini, Aquarius"
    }
    , Scorpio: {
        start: new Date("2025-10-23"),
        end: new Date("2025-11-21"),
        sign: "Scorpio",
        element: "Water",
        quality: "Fixed",
        color: "Black",
        rulingPlanet: "Pluto",
        symbol: "The Scorpion",
        compatibility: "Taurus, Cancer, Pisces"
    }
    , Sagittarius: {
        start: new Date("2025-11-22"),
        end: new Date("2025-12-21"),   
        sign: "Sagittarius",
        element: "Fire",
        quality: "Mutable",
        color: "Purple",
        rulingPlanet: "Jupiter",
        symbol: "The Archer",
        compatibility: "Gemini, Aries, Leo"
    }
    , Capricorn: {
        start: new Date("2025-12-22"),
        end: new Date("2026-01-19"),
        sign: "Capricorn",
        element: "Earth",
        quality: "Cardinal",
        color: "Dark Green",
        rulingPlanet: "Saturn",
        symbol: "The Goat",
        compatibility: "Cancer, Virgo, Taurus"
    }
    , Aquarius: {
        start: new Date("2026-01-20"),
        end: new Date("2026-02-18"),
        sign: "Aquarius",
        element: "Air",
        quality: "Fixed",
        color: "Turquoise",
        rulingPlanet: "Uranus",
        symbol: "The Water Bearer",
        compatibility: "Leo, Gemini, Sagittarius"
    }
    , Pisces: {
        start: new Date("2026-02-19"),
        end: new Date("2026-03-20"),
        sign: "Pisces",
        element: "Water",
        quality: "Mutable",
        color: "Sea Green",
        rulingPlanet: "Neptune",
        symbol: "The Fish",
        compatibility: "Virgo, Cancer, Scorpio"
    }
}
export const userHorroscope = {
  Aries: [
    "The fire in your soul burns brightest today—be bold in your pursuits.",
    "A new challenge approaches; rise to it with your trademark courage.",
    "Patience may test you, but swift action will bring clarity."
  ],
  Taurus: [
    "Ground yourself in the familiar today—it will bring unexpected comfort.",
    "A small luxury can transform your whole mood. Indulge without guilt.",
    "Steady persistence will open a door long closed."
  ],
  Gemini: [
    "Curiosity leads to an illuminating conversation—listen closely.",
    "Your wit is sharper than usual today—use it wisely.",
    "A duality in your heart seeks resolution. Find stillness to choose."
  ],
  Cancer: [
    "Emotions rise like a tide—don’t fear their depths.",
    "Nurture yourself first, and others will follow your gentle lead.",
    "A memory resurfaces to remind you of your strength."
  ],
  Leo: [
    "The spotlight finds you—embrace it with confidence, not ego.",
    "Pride can guard your heart, but vulnerability holds more power today.",
    "Your leadership inspires more than you know—use it to uplift."
  ],
  Virgo: [
    "A puzzle in your life begins to solve itself—trust the process.",
    "Your attention to detail brings unseen beauty into the light.",
    "An act of quiet service may have a greater impact than bold gestures."
  ],
  Libra: [
    "Balance is not perfection. Let go of the need to please everyone.",
    "A relationship finds harmony through a simple truth shared.",
    "Your sense of justice guides someone in need—speak up."
  ],
  Scorpio: [
    "Secrets swirl today—discernment will reveal the truth.",
    "Your passion cuts deep. Channel it toward something sacred.",
    "Transformation is near. Let go of the shell you’ve outgrown."
  ],
  Sagittarius: [
    "Adventure calls from an unexpected place. Follow the spark.",
    "Your restless spirit needs direction—seek wisdom, not escape.",
    "A philosophy you've outgrown is ready to evolve."
  ],
  Capricorn: [
    "Build quietly today. The foundation matters more than praise.",
    "A long-term goal receives a sign of progress—keep climbing.",
    "Discipline may feel heavy, but its reward is near."
  ],
  Aquarius: [
    "An idea strikes like lightning—don’t wait to share it.",
    "Someone unusual crosses your path. Embrace their difference.",
    "Innovation blossoms when you break your own rules."
  ],
  Pisces: [
    "Dreams reveal more than logic today—listen to your inner world.",
    "A gentle gesture may heal a wound you didn’t know you carried.",
    "Flow with the current instead of swimming against it. Trust it will carry you."
  ]
};


export const signPictures = {
  Aries: "./images/aries.svg",
  Taurus: "./images/taurus.svg",
  Gemini: "./images/gemini.svg",
  Cancer: "./images/cancer.svg",
  Leo: "./images/leo.svg",
  Virgo: "./images/virgo.svg",
  Libra: "./images/libra.svg",
  Scorpio: "./images/scorpio.svg",
  Sagittarius: "./images/sagittarius.svg",
  Capricorn: "./images/capricorn.svg",
  Aquarius: "./images/aquarius.svg",
  Pisces: "./images/pisces.svg"
};


export { defSigns };