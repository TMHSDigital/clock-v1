(function() {
  // Inject Google Font
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // CSS Styles
  const styles = `
    #clock-widget-container {
      font-family: 'Orbitron', sans-serif; /* Use Orbitron font */
      font-size: 3rem;
      font-weight: bold;
      color: #0f0; /* Green digital color */
      background: linear-gradient(145deg, #232323, #383838); /* Dark gradient background */
      padding: 20px 40px;
      border-radius: 10px;
      display: inline-block; /* Fit content size */
      text-align: center;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5), /* Outer shadow */
                  inset -2px -2px 5px rgba(0, 0, 0, 0.3), /* Inner shadow top-left */
                  inset 2px 2px 5px rgba(255, 255, 255, 0.1); /* Inner shadow bottom-right */
      text-shadow: 0 0 5px #0f0, 0 0 10px #0f0; /* Glow effect */
      border: 1px solid #444;
    }
  `;

  // Inject CSS into the head
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // Find the container element where the clock should be placed
  // Users will add <div id="clock-widget-target"></div> to their HTML
  const targetElement = document.getElementById('clock-widget-target');

  if (targetElement) {
    // Create the clock display element
    const clockElement = document.createElement('div');
    clockElement.id = 'clock-widget-container'; // Use the new ID for styling
    targetElement.appendChild(clockElement);

    // Clock update function
    function updateClock() {
      const now = new Date();
      // Check if the element still exists before updating
      const currentClockElement = document.getElementById('clock-widget-container');
      if (currentClockElement) {
          currentClockElement.textContent = now.toLocaleTimeString();
      }
    }

    // Set interval and initial call
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
  } else {
    console.error('Embeddable Clock: Target element with id "clock-widget-target" not found.');
  }
})(); 