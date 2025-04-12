# Embeddable Clock Widget

A customizable digital clock widget that can be embedded into any website. Features multiple themes, time formats, and size options with smooth transitions and a modern design.

## Features

- 🎨 Multiple themes (Cyber Green, Neon Blue, Retro Red, Minimal White)
- 📐 Four size options (Small to Extra Large)
- 🕒 12/24 hour time format
- ⚡ Smooth transitions and animations
- 🎯 Multiple instances on the same page
- 📱 Fully responsive design

## How to Use

1. Add the following script tag to your HTML file, preferably just before the closing `</body>` tag:

    ```html
    <script src="https://TMHSDigital.github.io/clock-v1/embeddable-clock.js" defer></script>
    ```

2. Add a target div where you want the clock to appear:

    ```html
    <div id="clock-widget-target"></div>
    ```

## Customization Options

You can customize the clock using data attributes:

### Themes
```html
data-theme="theme-name"
```
Available themes:
- `cyber-green` (default) - Classic digital green with glow effect
- `neon-blue` - Bright blue with cyberpunk feel
- `retro-red` - Vintage LED display style
- `minimal-white` - Clean, modern white display

### Time Format
```html
data-format="format"
```
Options:
- `12h` (default) - 12-hour format with AM/PM
- `24h` - 24-hour military time format

### Show/Hide Seconds
```html
data-show-seconds="true|false"
```
- `true` (default) - Shows hours, minutes, and seconds
- `false` - Shows only hours and minutes

### Size
```html
data-size="size"
```
Available sizes:
- `small` (2rem) - Compact display
- `medium` (3rem, default) - Standard size
- `large` (4rem) - Enhanced visibility
- `extra-large` (5rem) - Maximum impact

## Example with All Options

```html
<div id="clock-widget-target"
     data-theme="neon-blue"
     data-format="24h"
     data-show-seconds="false"
     data-size="large">
</div>
```

## Live Demo

Visit our [interactive demo page](https://TMHSDigital.github.io/clock-v1/) to:
- See all available themes in action
- Try different combinations of options
- Get the exact code for your preferred configuration
- Preview the clock in different sizes and formats

## Development

- `index.html`: Interactive demo page with live configuration
- `embeddable-clock.js`: Core widget code with themes and animations

## Technical Details

- Uses the Orbitron font for that perfect digital display look
- Smooth transitions between updates
- Efficient handling of multiple instances
- No external dependencies
- Lightweight and performance-optimized
