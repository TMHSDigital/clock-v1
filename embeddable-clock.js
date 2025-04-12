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
    },
    'matrix': {
      color: '#00ff41',
      background: 'linear-gradient(180deg, #000000, #001100)',
      textShadow: '0 0 5px #00ff41, 0 0 15px #00ff41, 0 0 25px #00ff41',
      borderColor: '#003300',
      extraStyles: `
        background-image: 
          linear-gradient(180deg, #000000, #001100),
          repeating-linear-gradient(
            0deg,
            rgba(0, 255, 65, 0.15) 0px,
            rgba(0, 255, 65, 0.15) 1px,
            transparent 1px,
            transparent 2px
          ),
          radial-gradient(
            circle at 50% 50%,
            rgba(0, 255, 65, 0.1) 0%,
            transparent 50%
          );
        animation: matrix-rain 20s linear infinite;
        position: relative;
        overflow: hidden;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            rgba(0, 255, 65, 0.1) 0%,
            rgba(0, 255, 65, 0.2) 50%,
            rgba(0, 255, 65, 0) 100%
          );
          animation: matrix-scan 2s linear infinite;
        }
      `
    },
    'vapor-wave': {
      color: '#ff71ce',
      background: 'linear-gradient(45deg, #590d82, #b91372)',
      textShadow: '0 0 5px #ff71ce, 0 0 15px #ff71ce, 3px 3px 0 #01cdfe',
      borderColor: '#b91372',
      extraStyles: `
        background-image: 
          linear-gradient(45deg, #590d82, #b91372),
          linear-gradient(90deg, 
            rgba(255, 113, 206, 0.1) 0px,
            rgba(1, 205, 254, 0.1) 5px,
            transparent 5px,
            transparent 10px
          );
        background-size: 100% 100%, 10px 100%;
      `
    },
    'sunset': {
      color: '#ffffff',
      background: 'linear-gradient(0deg, #ff6b6b, #feca57, #ff9f43)',
      textShadow: '0 0 5px #ff6b6b, 0 0 15px #ff9f43',
      borderColor: '#ff9f43',
      extraStyles: `
        background-image: 
          linear-gradient(0deg, #ff6b6b, #feca57, #ff9f43),
          radial-gradient(
            circle at 50% 150%,
            #ff6b6b 0%,
            transparent 50%
          );
        animation: sunset-glow 4s ease infinite alternate;
      `
    },
    'synthwave': {
      color: '#ff00ff',
      background: 'linear-gradient(180deg, #000033, #1a0033)',
      textShadow: '0 0 5px #ff00ff, 0 0 15px #ff00ff, 3px 3px 0 #00ffff',
      borderColor: '#ff00ff',
      extraStyles: `
        background-image: 
          linear-gradient(180deg, #000033, #1a0033),
          repeating-linear-gradient(
            90deg,
            rgba(255, 0, 255, 0.1) 0px,
            rgba(255, 0, 255, 0.1) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            180deg,
            rgba(255, 0, 255, 0.1) 0px,
            rgba(255, 0, 255, 0.1) 1px,
            transparent 1px,
            transparent 40px
          );
        background-size: 100% 100%, 100% 100%, 100% 100%;
        perspective: 1000px;
        transform: rotateX(45deg);
        animation: grid-move 10s linear infinite;
      `
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
      display: inline-flex;
      align-items: center;
      text-align: center;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5),
                  inset -2px -2px 5px rgba(0, 0, 0, 0.3),
                  inset 2px 2px 5px rgba(255, 255, 255, 0.1);
      border-width: 1px;
      border-style: solid;
      transition: all 0.3s ease;
      background-blend-mode: overlay;
    }

    .clock-digit {
      display: inline-block;
      min-width: 1ch;
      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    .clock-digit.changing {
      opacity: 0;
      transform: translateY(-2px);
    }

    .clock-separator {
      display: inline-block;
      margin: 0 0.1em;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    .clock-separator.pulse {
      animation: separatorPulse 1s infinite;
    }

    @keyframes separatorPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .clock-period {
      margin-left: 0.3em;
      display: inline-block;
      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    .clock-period.changing {
      opacity: 0;
      transform: translateY(-2px);
    }
    
    /* Size variations */
    .clock-size-small { font-size: ${sizes.small}; }
    .clock-size-medium { font-size: ${sizes.medium}; }
    .clock-size-large { font-size: ${sizes.large}; }
    .clock-size-extra-large { font-size: ${sizes['extra-large']}; }

    @keyframes matrix-rain {
      0% { background-position: 0 0, 0 0, 0 0; }
      100% { background-position: 0 1000px, 0 1000px, 0 0; }
    }

    @keyframes matrix-scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    @keyframes sunset-glow {
      0% { 
        filter: brightness(1);
        background-position: 0 0, 50% 150%;
      }
      50% {
        filter: brightness(1.2);
        background-position: 0 0, 50% 140%;
      }
      100% { 
        filter: brightness(1);
        background-position: 0 0, 50% 150%;
      }
    }

    @keyframes grid-move {
      0% { 
        background-position: 0 0, 0 0, 0 0;
        transform: rotateX(45deg) translateZ(0px);
      }
      50% {
        transform: rotateX(45deg) translateZ(20px);
      }
      100% { 
        background-position: 0 0, 40px 100%, 100% 40px;
        transform: rotateX(45deg) translateZ(0px);
      }
    }
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
      
      // Create spans for hours, minutes, seconds, and period
      this.hourSpan = this.createDigitSpan('hour');
      this.minuteSpan = this.createDigitSpan('minute');
      this.secondSpan = this.createDigitSpan('second');
      this.periodSpan = document.createElement('span');
      this.periodSpan.className = 'clock-period';
      
      // Create separators
      this.separator1 = this.createSeparator();
      this.separator2 = this.createSeparator();
      
      // Assemble the clock
      this.clockElement.appendChild(this.hourSpan);
      this.clockElement.appendChild(this.separator1);
      this.clockElement.appendChild(this.minuteSpan);
      if (this.config.showSeconds) {
        this.clockElement.appendChild(this.separator2);
        this.clockElement.appendChild(this.secondSpan);
      }
      if (this.config.format === '12h') {
        this.clockElement.appendChild(this.periodSpan);
      }
      
      this.applyTheme();
      this.container.appendChild(this.clockElement);
      
      this.updateClock = this.updateClock.bind(this);
      this.interval = setInterval(this.updateClock, 1000);
      this.updateClock();
    }

    createDigitSpan(type) {
      const span = document.createElement('span');
      span.className = `clock-digit clock-${type}`;
      return span;
    }

    createSeparator() {
      const sep = document.createElement('span');
      sep.className = 'clock-separator';
      sep.textContent = ':';
      return sep;
    }

    updateDigit(span, newValue, oldValue) {
      if (newValue !== oldValue) {
        span.classList.add('changing');
        setTimeout(() => {
          span.textContent = newValue;
          span.classList.remove('changing');
        }, 200);
      }
    }

    applyTheme() {
      const theme = themes[this.config.theme] || themes['cyber-green'];
      Object.assign(this.clockElement.style, {
        color: theme.color,
        background: theme.background,
        textShadow: theme.textShadow,
        borderColor: theme.borderColor
      });
      
      // Apply extra theme-specific styles if they exist
      if (theme.extraStyles) {
        this.clockElement.style.cssText += theme.extraStyles;
      }
    }

    updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let period = '';
      
      // Handle 12/24 hour format
      if (this.config.format === '12h') {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
      }
      
      // Format numbers
      const hoursStr = hours.toString().padStart(2, '0');
      const minutesStr = now.getMinutes().toString().padStart(2, '0');
      const secondsStr = now.getSeconds().toString().padStart(2, '0');
      
      // Update digits with animation if they've changed
      this.updateDigit(this.hourSpan, hoursStr, this.hourSpan.textContent);
      this.updateDigit(this.minuteSpan, minutesStr, this.minuteSpan.textContent);
      if (this.config.showSeconds) {
        this.updateDigit(this.secondSpan, secondsStr, this.secondSpan.textContent);
      }
      if (this.config.format === '12h') {
        this.updateDigit(this.periodSpan, period, this.periodSpan.textContent);
      }
      
      // Pulse the separators
      this.separator1.classList.toggle('pulse', this.config.showSeconds);
      if (this.config.showSeconds) {
        this.separator2.classList.toggle('pulse', true);
      }
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