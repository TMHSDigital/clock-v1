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
    .clock-widget {
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

    .clock-widget span {
      display: inline-block;
      transition: opacity 0.3s ease;
    }

    .clock-widget.updating span {
      opacity: 0.5;
    }
    
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

  // Clock class to handle individual instances
  class ClockWidget {
    constructor(element) {
      this.container = element;
      this.config = {
        theme: element.dataset.theme || 'cyber-green',
        format: element.dataset.format || '12h',
        showSeconds: element.dataset.showSeconds !== 'false',
        size: element.dataset.size || 'medium'
      };
      
      this.clockElement = document.createElement('div');
      this.clockElement.className = `clock-widget clock-size-${this.config.size}`;
      this.timeElement = document.createElement('span');
      this.clockElement.appendChild(this.timeElement);
      
      this.applyTheme();
      this.container.appendChild(this.clockElement);
      
      this.updateClock = this.updateClock.bind(this);
      this.interval = setInterval(this.updateClock, 1000);
      this.updateClock();
    }

    applyTheme() {
      const theme = themes[this.config.theme] || themes['cyber-green'];
      Object.assign(this.clockElement.style, {
        color: theme.color,
        background: theme.background,
        textShadow: theme.textShadow,
        borderColor: theme.borderColor
      });
    }

    updateClock() {
      const now = new Date();
      this.clockElement.classList.add('updating');
      
      const options = {
        hour: 'numeric',
        minute: '2-digit',
        second: this.config.showSeconds ? '2-digit' : undefined,
        hour12: this.config.format === '12h'
      };
      
      let timeString = now.toLocaleTimeString(undefined, options);
      
      // Remove seconds if not showing them
      if (!this.config.showSeconds) {
        timeString = timeString.replace(/:\d\d /, ' ').replace(/:\d\d$/, '');
      }
      
      this.timeElement.textContent = timeString;
      
      // Remove updating class after transition
      setTimeout(() => {
        this.clockElement.classList.remove('updating');
      }, 100);
    }

    destroy() {
      clearInterval(this.interval);
      this.clockElement.remove();
    }
  }

  // Initialize all clock widgets
  function initClocks() {
    const clockTargets = document.querySelectorAll('[id^="clock-widget-target"]');
    clockTargets.forEach(target => new ClockWidget(target));
  }

  // Initialize clocks when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClocks);
  } else {
    initClocks();
  }

  // Re-initialize when interactive clock is updated
  window.updateClockWidget = function(element) {
    const widget = element._clockWidget;
    if (widget) {
      widget.destroy();
    }
    element._clockWidget = new ClockWidget(element);
  };
})(); 