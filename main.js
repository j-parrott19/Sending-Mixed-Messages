import defFunctions from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dateForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userDateInput = document.getElementById("dateInput").value;

        if (!userDateInput) {
            alert("Please enter your birthday before submitting.");
            return;
        }

        const date = new Date(userDateInput);
        if (isNaN(date.getTime())) {
            alert("Invalid date format. Please choose a valid birthday.");
            return;
        }

        const sign = defFunctions.getSign(date);
        const signInfo = defFunctions.getSignInfo(sign);
        const horoscope = defFunctions.randomHoroscope(sign);
        const signImage = defFunctions.getSignPicture(sign);

        console.log("Parsed Date:", date);
        console.log("Calculated Sign:", sign);
        console.log("Sign Info:", signInfo);

        if (!signInfo) {
            alert("Could not determine your zodiac sign. Please check your birthday.");
            return;
        }

        document.getElementById("output").style.display = "block";
        document.getElementById("sign").innerHTML = "Your Zodiac Sign: " + sign;
        document.getElementById("element").innerHTML = signInfo.element;
        document.getElementById("quality").innerHTML = signInfo.quality;
        document.getElementById("color").innerHTML = signInfo.color;
        document.getElementById("ruling").innerHTML = signInfo.rulingPlanet;
        document.getElementById("symbol").innerHTML = signInfo.symbol;
        document.getElementById("compatibility").innerHTML = signInfo.compatibility;
        document.getElementById("horoscope").innerHTML = horoscope;
        document.getElementById("signImage").src = signImage;
    });
});
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Place stars in the top third of the screen for visibility
  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.3;

  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2500);
}

// Call it regularly
document.addEventListener("DOMContentLoaded", () => {
  setInterval(createShootingStar, 3000);
});

