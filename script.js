document.getElementById("converterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const unit = document.getElementById("unit").value;
  const foodType = document.getElementById("foodType").value;
  let temp = parseFloat(document.getElementById("ovenTemp").value);
  const time = parseFloat(document.getElementById("ovenTime").value);
  if (!temp || !time) return;

  const tempF = unit === "c" ? (temp * 9) / 5 + 32 : temp;

  const presets = {
    default: { tempOffset: 25, timeFactor: 0.8 },
    chicken: { tempOffset: 20, timeFactor: 0.85 },
    fries:   { tempOffset: 30, timeFactor: 0.75 },
    pastry:  { tempOffset: 25, timeFactor: 0.7 },
    vegetables: { tempOffset: 20, timeFactor: 0.8 }
  };

  const { tempOffset, timeFactor } = presets[foodType] || presets.default;
  const airTempF = Math.round((tempF - tempOffset) / 10) * 10;
  const airTime = Math.round(time * timeFactor);
  const airTempC = Math.round((((airTempF - 32) * 5) / 9) / 10) * 10;

  document.getElementById("airTempC").textContent = airTempC;
  document.getElementById("airTempF").textContent = airTempF;
  document.getElementById("airTime").textContent = airTime;
  document.getElementById("results").classList.remove("hidden");
});
