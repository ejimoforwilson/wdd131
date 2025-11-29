// ===== Display Current Year and Last Modified =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===== Static Weather Values =====
const temperature = 8; // °C
const windSpeed = 15;  // km/h

document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;

// ===== Wind Chill Calculation =====
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215*temp - 11.37*Math.pow(speed, 0.16) + 0.3965*temp*Math.pow(speed, 0.16);
}

// ===== Display Wind Chill if applicable =====
let windChillElement = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
} else {
  windChillElement.textContent = "N/A";
}