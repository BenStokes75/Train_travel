// Function to generate a random hex color
function getRandomColor() {
  // Generating random values for RGB channels
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  // Converting RGB to hex format
  return '#' + rgbToHex(r, g, b);
}

// Function to convert RGB to hex
function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

// Function to generate a random gradient background with five colors
function setRandomGradient() {
  var colors = [];
  for (var i = 0; i < 5; i++) {
      colors.push(getRandomColor());
  }
  var gradientColors = colors.join(', ');
  var body = document.body;
  body.style.background = 'linear-gradient(to bottom right, ' + gradientColors + ')';
  console.log('Random background color set');
}

// Call the function to set a random gradient background when the page loads
window.addEventListener('load', setRandomGradient);
