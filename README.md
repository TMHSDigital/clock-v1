# Embeddable Clock Widget 🕒

A modern, customizable clock widget that can be embedded into any webpage. Features smooth animations, multiple themes, and various display options.

## ✨ Features

- 🎨 8 Beautiful Themes:
  - Cyber Green (default): Futuristic green glow with dark gradient background
  - Neon Blue: Electric blue digits with deep space background
  - Retro Red: Warm red glow with dark contrast
  - Minimal White: Clean white design with subtle shadows
  - Matrix: Digital rain effect with bright green text
  - Vapor Wave: Pink and purple gradient with retro grid pattern
  - Sunset: Warm gradient background with pulsing glow
  - Synthwave: Perspective grid with neon pink and cyan accents
- 📏 Multiple sizes (small, medium, large, extra-large)
- 🕐 12/24 hour time formats
- ⚡ Smooth digit transitions and animations
- 🔄 Multiple instances support
- 📱 Responsive design

## 🚀 How to Use

Add this to your HTML:

```html
<div id="clock-widget-target"></div>
<script src="embeddable-clock.js"></script>
```

## ⚙️ Customization Options

### Navigation Features
The demo page includes convenient navigation features:
- Desktop: Fixed sidebar navigation to quickly jump between themes
- Mobile: Horizontal scrollable menu at the bottom of the screen
- Back to top button appears when scrolling
- Smooth scrolling animations
- Visual indicators for current theme section
- Automatic mobile/desktop layout switching

### Themes
```html
data-theme="theme-name"
```
Available themes:
- `cyber-green`: Default theme with neon green text and dark gradient
- `neon-blue`: Electric blue glow with space-like background
- `retro-red`: Warm red glow with dark contrast
- `minimal-white`: Clean white text with subtle effects
- `matrix`: The Matrix inspired theme with digital rain effect
- `vapor-wave`: Retro aesthetic with pink/purple gradient and grid
- `sunset`: Dynamic warm gradients with pulsing glow
- `synthwave`: 80s retro futurism with perspective grid

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
