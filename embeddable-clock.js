(function() {
  // CSS Styles
  const styles = `
    #clock-widget-container { /* Use a more specific container */
      font-size: 3rem;
      font-family: monospace;
      text-align: center;
      /* Remove margin-top, let the user control layout */
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