document.getElementById("converterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const unit = document.getElementById("unit").value;
  let temp = parseFloat(document.getElementById("ovenTemp").value);
  const time = parseFloat(document.getElementById("ovenTime").value);
  if (!temp || !time) return;
  const tempF = unit === "c" ? (temp * 9) / 5 + 32 : temp;
  const airTempF = Math.round(tempF - 25);
  const airTime = Math.round(time * 0.8);
  const airTempC = Math.round(((airTempF - 32) * 5) / 9);
  document.getElementById("airTempC").textContent = airTempC;
  document.getElementById("airTempF").textContent = airTempF;
  document.getElementById("airTime").textContent = airTime;
  document.getElementById("results").classList.remove("hidden");
});
