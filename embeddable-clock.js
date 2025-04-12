(function() {
  // Inject Google Font
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Theme definitions
  const themes = {
    'cyber-green': {
      color: '#0f0',
      background: 'linear-gradient(145deg, #232323, #383838)',
      textShadow: '0 0 5px #0f0, 0 0 10px #0f0',
      borderColor: '#444'
    },
    'neon-blue': {
      color: '#00f7ff',
      background: 'linear-gradient(145deg, #1a1a2e, #2a2a4a)',
      textShadow: '0 0 5px #00f7ff, 0 0 10px #00f7ff',
      borderColor: '#334'
    },
    'retro-red': {
      color: '#ff0043',
      background: 'linear-gradient(145deg, #2a1a1a, #3a2a2a)',
      textShadow: '0 0 5px #ff0043, 0 0 10px #ff0043',
      borderColor: '#433'
    },
    'minimal-white': {
      color: '#fff',
      background: 'linear-gradient(145deg, #2a2a2a, #3a3a3a)',
      textShadow: '0 0 5px rgba(255,255,255,0.5)',
      borderColor: '#444'
    }
  };

  // Size variations
  const sizes = {
    small: '2rem',
    medium: '3rem',
    large: '4rem',
    'extra-large': '5rem'
  };

  // CSS Styles with dynamic theme support
  const styles = `
    .clock-widget-base {
      font-family: 'Orbitron', sans-serif;
      font-weight: bold;
      padding: 20px 40px;
      border-radius: 10px;
      display: inline-block;
      text-align: center;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5),
                  inset -2px -2px 5px rgba(0, 0, 0, 0.3),
                  inset 2px 2px 5px rgba(255, 255, 255, 0.1);
      border-width: 1px;
      border-style: solid;
      transition: all 0.3s ease;
    }

    /* Theme-specific styles will be added dynamically */
    
    /* Size variations */
    .clock-size-small { font-size: ${sizes.small}; }
    .clock-size-medium { font-size: ${sizes.medium}; }
    .clock-size-large { font-size: ${sizes.large}; }
    .clock-size-extra-large { font-size: ${sizes['extra-large']}; }
  `;

  // Inject CSS into the head
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // Find the container element
  const targetElement = document.getElementById('clock-widget-target');

  if (targetElement) {
    // Get configuration from data attributes
    const config = {
      theme: targetElement.dataset.theme || 'cyber-green',
      format: targetElement.dataset.format || '12h',
      showSeconds: targetElement.dataset.showSeconds !== 'false',
      size: targetElement.dataset.size || 'medium'
    };

    // Create the clock display element
    const clockElement = document.createElement('div');
    clockElement.id = 'clock-widget-container';
    clockElement.className = `clock-widget-base clock-size-${config.size}`;
    
    // Apply theme styles
    const theme = themes[config.theme] || themes['cyber-green'];
    Object.assign(clockElement.style, {
      color: theme.color,
      background: theme.background,
      textShadow: theme.textShadow,
      borderColor: theme.borderColor
    });

    targetElement.appendChild(clockElement);

    // Clock update function with format support
    function updateClock() {
      const now = new Date();
      const currentClockElement = document.getElementById('clock-widget-container');
      
      if (currentClockElement) {
        let timeString;
        const options = {
          hour: 'numeric',
          minute: '2-digit',
          second: config.showSeconds ? '2-digit' : undefined,
          hour12: config.format === '12h'
        };
        
        timeString = now.toLocaleTimeString(undefined, options);
        
        // Remove seconds if not showing them
        if (!config.showSeconds) {
          timeString = timeString.replace(/:\d\d /, ' ').replace(/:\d\d$/, '');
        }
        
        currentClockElement.textContent = timeString;
      }
    }

    // Set interval and initial call
    setInterval(updateClock, 1000);
    updateClock();
  } else {
    console.error('Embeddable Clock: Target element with id "clock-widget-target" not found.');
  }
})(); 