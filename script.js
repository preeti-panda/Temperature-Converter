const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const resultDisplay = document.getElementById('result');

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  
  if (isNaN(temperature)) {
    alert("Please enter a valid number.");
    return; 
  }

  let convertedTemp;
  if (unit === 'celsius') {
    convertedTemp = (temperature * 9/5) + 32;
    resultDisplay.textContent = `${temperature}°C is equal to ${convertedTemp.toFixed(2)}°F`;
  } else if (unit === 'fahrenheit') {
    convertedTemp = (temperature - 32) * 5/9;
    resultDisplay.textContent = `${temperature}°F is equal to ${convertedTemp.toFixed(2)}°C`;
  } else {
    
    resultDisplay.textContent = "Kelvin conversion coming soon!";
  }
}
