import defFunctions from "./functions.js";

let userDate = document.getElementById("dateInput");


let btn1 = document.getElementById("Submit");

btn1.addEventListener("click", function () {
    let date = new Date(userDate.value);
    let sign = defFunctions.getSign(date);
    let signInfo = defFunctions.getSignInfo(sign);
    let horoscope = defFunctions.randomHoroscope(sign);

    document.getElementById("display").style.display = "block";
    document.getElementById("sign").innerHTML = "Your Zodiac Sign: " + sign;
    document.getElementById("element").innerHTML = "Element: " + signInfo.element;
    document.getElementById("quality").innerHTML = "Quality: " + signInfo.quality;
    document.getElementById("color").innerHTML = "Color: " + signInfo.color;
    document.getElementById("rulingPlanet").innerHTML = "Ruling Planet: " + signInfo.rulingPlanet;
    document.getElementById("symbol").innerHTML = "Symbol: " + signInfo.symbol;
    document.getElementById("compatibility").innerHTML = "Compatibility: " + signInfo.compatibility;
    document.getElementById("horoscope").innerHTML = "Your Horoscope: " + horoscope;
})