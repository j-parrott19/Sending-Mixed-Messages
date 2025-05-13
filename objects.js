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
let userHorroscope = {
    Aries: [],
    Taurus: [],
    Gemini: [],
    Cancer: [],
    Leo: [],
    Virgo: [],
    Libra: [],
    Scorpio: [],
    Sagittarius: [],
    Capricorn: [],
    Aquarius: [],
    Pisces: []
}

export default defSigns;
export { userHorroscope };