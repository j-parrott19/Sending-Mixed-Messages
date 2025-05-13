import defSigns from "./objects.js";
// Imports the sign defitions as object keys and their information as values.
// The object contains the start and end dates of each sign, as well as its information.
import { userHorroscope } from "./objects.js";
// This file contains the functions that will be used to get the horoscope sign and its information
// It will also contain the functions that will be used to get the horoscope for a specific sign

// Defining an obejct that is easily exportable for all functions for the application.
let defFunctions = {
    // This function takes a date as input and returns the horoscope sign for that date.
    // The date is pulled from the date input field in the HTML file.
    getSign: function (date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        for (let sign in defSigns) {
            if (
                (month === defSigns[sign].start.getMonth() + 1 && day >= defSigns[sign].start.getDate()) ||
                (month === defSigns[sign].end.getMonth() + 1 && day <= defSigns[sign].end.getDate())
            ) {
                return sign;
            }
        }
        return null;
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
    }
}

export default defFunctions;