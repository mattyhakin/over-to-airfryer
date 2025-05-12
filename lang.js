const labels = {
  en: {
    unit: "Unit",
    temp: "Oven Temperature",
    time: "Oven Time (minutes)",
    convert: "Convert",
    result: "Air Fryer Settings",
    tempC: "Temperature (°C)",
    tempF: "Temperature (°F)",
    minutes: "Time (minutes)"
  },
  es: {
    unit: "Unidad",
    temp: "Temperatura del horno",
    time: "Tiempo del horno (minutos)",
    convert: "Convertir",
    result: "Ajustes de la freidora",
    tempC: "Temperatura (°C)",
    tempF: "Temperatura (°F)",
    minutes: "Tiempo (minutos)"
  }
};

// Example: switch based on browser
const lang = navigator.language.startsWith("es") ? "es" : "en";
const t = labels[lang];

// Example usage
document.getElementById("label-unit").textContent = t.unit;
