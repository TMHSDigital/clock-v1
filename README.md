# Embeddable Clock Widget

A customizable digital clock widget that can be embedded into any website. Features multiple themes, time formats, and size options.

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
- `cyber-green` (default)
- `neon-blue`
- `retro-red`
- `minimal-white`

### Time Format
```html
data-format="format"
```
Options:
- `12h` (default)
- `24h`

### Show/Hide Seconds
```html
data-show-seconds="true|false"
```
- `true` (default)
- `false`

### Size
```html
data-size="size"
```
Available sizes:
- `small` (2rem)
- `medium` (3rem, default)
- `large` (4rem)
- `extra-large` (5rem)

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

See all themes and options on the [demo page](https://TMHSDigital.github.io/clock-v1/).

## Development

- `index.html`: Example page demonstrating all customization options
- `embeddable-clock.js`: Contains the clock widget code and themes
