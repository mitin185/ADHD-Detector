// Example JavaScript code to toggle the background color
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Change Background Color";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", function() {
      document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
    });
  });
  