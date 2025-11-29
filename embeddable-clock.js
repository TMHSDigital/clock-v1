(function() {
  // Inject Google Font
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Theme CSS Definitions using CSS Variables
  // This approach is more performant than inline styles and easier to maintain
  const styles = `
    :root {
      --ec-color: #0f0;
      --ec-bg: linear-gradient(145deg, #232323, #383838);
      --ec-text-shadow: 0 0 5px #0f0, 0 0 10px #0f0;
      --ec-border-color: #444;
      --ec-font-family: 'Orbitron', sans-serif;
    }

    /* Base Widget Styles */
    .clock-widget {
      font-family: var(--ec-font-family);
      font-weight: bold;
      padding: 20px 40px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      text-align: center;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5),
                  inset -2px -2px 5px rgba(0, 0, 0, 0.3),
                  inset 2px 2px 5px rgba(255, 255, 255, 0.1);
      border: 1px solid var(--ec-border-color);
      color: var(--ec-color);
      background: var(--ec-bg);
      text-shadow: var(--ec-text-shadow);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    /* Digit Animations */
    .clock-digit {
      display: inline-block;
      min-width: 1ch;
      transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
      will-change: transform, opacity;
    }

    .clock-digit.changing {
      opacity: 0;
      transform: translateY(-5px);
    }

    .clock-separator {
      display: inline-block;
      margin: 0 0.1em;
    }

    .clock-separator.pulse {
      animation: ec-pulse 1s infinite;
    }

    @keyframes ec-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .clock-period {
      margin-left: 0.3em;
      font-size: 0.6em;
      vertical-align: top;
      margin-top: 0.2em;
    }

    /* Size Variations */
    .clock-size-small { font-size: 2rem; padding: 10px 20px; }
    .clock-size-medium { font-size: 3rem; padding: 20px 40px; }
    .clock-size-large { font-size: 4rem; padding: 30px 50px; }
    .clock-size-extra-large { font-size: 5rem; padding: 40px 60px; }

    /* Themes */
    .theme-cyber-green {
      --ec-color: #0f0;
      --ec-bg: linear-gradient(145deg, #232323, #383838);
      --ec-text-shadow: 0 0 5px #0f0, 0 0 10px #0f0;
      --ec-border-color: #444;
    }

    .theme-neon-blue {
      --ec-color: #00f7ff;
      --ec-bg: linear-gradient(145deg, #1a1a2e, #2a2a4a);
      --ec-text-shadow: 0 0 5px #00f7ff, 0 0 10px #00f7ff;
      --ec-border-color: #334;
    }

    .theme-retro-red {
      --ec-color: #ff0043;
      --ec-bg: linear-gradient(145deg, #2a1a1a, #3a2a2a);
      --ec-text-shadow: 0 0 5px #ff0043, 0 0 10px #ff0043;
      --ec-border-color: #433;
    }

    .theme-minimal-white {
      --ec-color: #fff;
      --ec-bg: linear-gradient(145deg, #2a2a2a, #3a3a3a);
      --ec-text-shadow: 0 0 5px rgba(255,255,255,0.5);
      --ec-border-color: #444;
    }

    /* Advanced Themes with Background Effects */
    .theme-matrix {
      --ec-color: #00ff41;
      --ec-bg: #000;
      --ec-text-shadow: 0 0 5px #00ff41, 0 0 15px #00ff41;
      --ec-border-color: #003300;
    }
    .theme-matrix::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.1) 0px, transparent 2px);
      animation: ec-matrix-scan 3s linear infinite;
      pointer-events: none;
      z-index: 0;
    }
    @keyframes ec-matrix-scan {
      from { background-position: 0 0; }
      to { background-position: 0 100px; }
    }

    .theme-vapor-wave {
      --ec-color: #ff71ce;
      --ec-bg: linear-gradient(45deg, #590d82, #b91372);
      --ec-text-shadow: 0 0 5px #ff71ce, 3px 3px 0 #01cdfe;
      --ec-border-color: #b91372;
    }
    .theme-vapor-wave::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0; height: 50%;
      background: linear-gradient(90deg, rgba(1,205,254,0.1) 1px, transparent 1px);
      background-size: 20px 100%;
      z-index: 0;
    }

    .theme-sunset {
      --ec-color: #ffffff;
      --ec-bg: linear-gradient(0deg, #ff6b6b, #feca57, #ff9f43);
      --ec-text-shadow: 0 0 5px #ff6b6b;
      --ec-border-color: #ff9f43;
    }

    .theme-synthwave {
      --ec-color: #ff00ff;
      --ec-bg: linear-gradient(180deg, #000033, #1a0033);
      --ec-text-shadow: 0 0 5px #ff00ff, 3px 3px 0 #00ffff;
      --ec-border-color: #ff00ff;
    }
    .theme-synthwave::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      perspective: 100px;
      transform-origin: bottom;
      z-index: 0;
    }
  `;

  // Inject CSS
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  class ClockWidget {
    constructor(element) {
      this.container = element;
      this.timer = null;
      
      // Configuration with defaults
      this.config = {
        theme: element.dataset.theme || 'cyber-green',
        format: element.dataset.format || '12h',
        showSeconds: element.dataset.showSeconds !== 'false',
        size: element.dataset.size || 'medium',
        timezone: element.dataset.timezone || undefined // Default to local
      };

      // Validate timezone
      if (this.config.timezone) {
        try {
          Intl.DateTimeFormat(undefined, { timeZone: this.config.timezone });
        } catch (e) {
          console.warn(`Invalid timezone: ${this.config.timezone}, falling back to local.`);
          this.config.timezone = undefined;
        }
      }

      this.initDOM();
      this.startClock();
    }

    initDOM() {
      this.clockElement = document.createElement('div');
      this.clockElement.className = `clock-widget clock-size-${this.config.size} theme-${this.config.theme}`;
      this.clockElement.setAttribute('role', 'timer');
      this.clockElement.setAttribute('aria-label', 'Clock');
      
      // Structure
      this.hourSpan = this.createDigitSpan('hour');
      this.minuteSpan = this.createDigitSpan('minute');
      this.secondSpan = this.createDigitSpan('second');
      this.periodSpan = document.createElement('span');
      this.periodSpan.className = 'clock-period';
      
      this.clockElement.appendChild(this.hourSpan);
      this.clockElement.appendChild(this.createSeparator());
      this.clockElement.appendChild(this.minuteSpan);
      
      if (this.config.showSeconds) {
        this.clockElement.appendChild(this.createSeparator());
        this.clockElement.appendChild(this.secondSpan);
      }
      
      if (this.config.format === '12h') {
        this.clockElement.appendChild(this.periodSpan);
      }

      this.container.appendChild(this.clockElement);
    }

    createDigitSpan(type) {
      const span = document.createElement('span');
      span.className = `clock-digit clock-${type}`;
      // Ensure content exists for layout
      span.textContent = '00'; 
      return span;
    }

    createSeparator() {
      const sep = document.createElement('span');
      sep.className = `clock-separator ${this.config.showSeconds ? 'pulse' : ''}`;
      sep.textContent = ':';
      sep.setAttribute('aria-hidden', 'true');
      return sep;
    }

    updateDigit(span, newValue) {
      if (span.textContent !== newValue) {
        span.classList.add('changing');
        // We change content immediately for a11y but animate visual
        setTimeout(() => {
          span.textContent = newValue;
          span.classList.remove('changing');
        }, 200);
      }
    }

    getTimeData() {
      const options = {
        hour12: this.config.format === '12h',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: this.config.timezone
      };
      
      // Use Intl for robust localization
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(new Date());
      
      const timeData = {};
      parts.forEach(p => timeData[p.type] = p.value);
      return timeData;
    }

    updateClock() {
      const time = this.getTimeData();
      
      this.updateDigit(this.hourSpan, time.hour);
      this.updateDigit(this.minuteSpan, time.minute);
      
      if (this.config.showSeconds) {
        this.updateDigit(this.secondSpan, time.second);
      }
      
      if (this.config.format === '12h') {
        this.periodSpan.textContent = time.dayPeriod;
      }

      // Accessibility update (throttled to avoid spamming screen readers every second)
      // Ideally, we only update aria-label on minute change
      const ariaLabel = `${time.hour}:${time.minute} ${time.dayPeriod || ''}`;
      if (this.clockElement.getAttribute('aria-label') !== ariaLabel) {
         this.clockElement.setAttribute('aria-label', ariaLabel);
      }

      this.scheduleUpdate();
    }

    scheduleUpdate() {
      // Calculate time to next second for precision
      const now = new Date();
      const delay = 1002 - now.getMilliseconds(); // Small buffer to ensure we land in the next second
      this.timer = setTimeout(() => this.updateClock(), delay);
    }

    startClock() {
      this.updateClock();
    }

    destroy() {
      if (this.timer) clearTimeout(this.timer);
      this.clockElement.remove();
    }
  }

  // Initialization Logic
  function initClocks() {
    // Support both ID pattern (legacy) and Class pattern (modern)
    const targets = document.querySelectorAll('[id^="clock-widget-target"], .embeddable-clock');
    targets.forEach(target => {
        // Prevent double initialization
        if (!target._clockWidget) {
            target._clockWidget = new ClockWidget(target);
        }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClocks);
  } else {
    initClocks();
  }

  // Global API
  window.updateClockWidget = function(element) {
    if (element._clockWidget) {
      element._clockWidget.destroy();
      delete element._clockWidget;
    }
    element._clockWidget = new ClockWidget(element);
  };
})();
