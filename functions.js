// Imports the sign defitions as object keys and their information as values.
// The object contains the start and end dates of each sign, as well as its information.
import { userHorroscope, defSigns, signPictures } from "./objects.js";
// This file contains the functions that will be used to get the horoscope sign and its information
// It will also contain the functions that will be used to get the horoscope for a specific sign

// Defining an obejct that is easily exportable for all functions for the application.
let defFunctions = {
    // This function takes a date as input and returns the horoscope sign for that date.
    // The date is pulled from the date input field in the HTML file.
    getSign: function (date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    for (let sign in defSigns) {
        const start = defSigns[sign].start;
        const end = defSigns[sign].end;
        const startMonth = start.getMonth() + 1;
        const startDay = start.getDate();
        const endMonth = end.getMonth() + 1;
        const endDay = end.getDate();
        const afterStart = (month > startMonth) || (month === startMonth && day >= startDay);
        const beforeEnd = (month < endMonth) || (month === endMonth && day <= endDay);

        if (startMonth <= endMonth) {
            // Sign doesn't cross year boundary
            if (afterStart && beforeEnd) {
                return sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();
            }
        } else {
            // Sign crosses year boundary (e.g., Capricorn: Dec 22 - Jan 19)
            if (afterStart || beforeEnd) {
                return sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();
            }
        }
    }
    return "Unknown"; // Fallback
},

    getSignInfo: function (sign) {
        return defSigns[sign];
    },

    randomHoroscope: function (sign) {
        let horroscope = userHorroscope[sign];
        if (horroscope) {
            let randomIndex = Math.floor(Math.random() * horroscope.length);
            return horroscope[randomIndex];
        } else {
            return "No horoscope available for this sign.";
        }
    },

    getSignPicture: function (sign) {
        return signPictures[sign];
    }
}


export default defFunctions;