# Twitch Bits Reward Hider

A Chrome extension that removes Twitch Bits rewards and Power-ups from the page.

## Features

- Automatically removes elements related to Twitch Bits rewards
- Removes "Power-ups" text elements
- Works on dynamically loaded content
- Targets elements based on class names and text content
- Works on all URLs (can be customized in `manifest.json`)

## Installation

1. Clone this repo
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the extension directory

## Development

- `manifest.json`: Extension configuration
- `styles.css`: Fallback CSS for hiding elements (targets classes containing "bitsRewardListItem--")
- `content.js`: JavaScript for dynamically removing elements and handling new content

## How it works

The extension uses JavaScript to:
1. Select and remove elements with class names containing "bitsRewardListItem--"
2. Select and remove `<p>` elements with the exact text "Power-ups"
3. Set up a MutationObserver to handle dynamically added content

The CSS file provides a fallback method to hide Bits reward elements in case the JavaScript fails to run.

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](https://choosealicense.com/licenses/mit/)
