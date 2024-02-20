// Function to generate a random hex color
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  
  // Function to generate a random gradient background
  function setRandomGradient() {
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    document.body.style.background = 'linear-gradient(to bottom right, ' + color1 + ', ' + color2 + ')';
    console.log('Random background color set');
  }
  
  // Call the function to set a random gradient background when the page loads
  window.addEventListener('load', setRandomGradient);