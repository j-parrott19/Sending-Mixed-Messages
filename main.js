import defFunctions from "./functions.js";


let userDate = document.getElementById("dateInput");


let btn1 = document.getElementById("Submit");

btn1.addEventListener("click", function () {
    let date = new Date(userDate.value);
    let sign = defFunctions.getSign(date);
    let signInfo = defFunctions.getSignInfo(sign);
    let horoscope = defFunctions.randomHoroscope(sign);

    document.getElementById("sign").innerHTML = "Your Zodiac Sign: " + sign;
    document.getElementById("info").innerHTML = "Sign Information: " + JSON.stringify(signInfo, null, 2);
    document.getElementById("horoscope").innerHTML = "Your Horoscope: " + horoscope;
    document.getElementById("display").style.display = "block";
})