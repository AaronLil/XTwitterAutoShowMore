# XTwitterAutoShowMore

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Automatically expands all "Show more" content on X (formerly Twitter) as you scroll the feed.**  
No more clicking to see hidden tweet content—just scroll and let the script do the work!

---

## Features

- Automatically clicks "Show more" on any tweet, in any language
- Works seamlessly as you scroll or as new tweets are loaded
- Logs each automatic click to the console with the tweet link
- Lightweight and unobtrusive

---

## Demo

<!--
Add a screenshot or GIF of the script in action here!

![Demo](demo.gif)
-->

---

## Installation

1. **Install [Tampermonkey](https://www.tampermonkey.net/)** for Chrome, Edge, or any Chromium browser.
2. **Create a new userscript** and paste the code from [`XTwitterAutoShowMore.user.js`](./XTwitterAutoShowMore.user.js).
3. The script runs automatically on [twitter.com](https://twitter.com) and [x.com](https://x.com).

---

## How it works

- Detects any "Show more" button (using a stable data attribute)
- Simulates a click automatically as soon as the button is visible in the viewport
- Logs the tweet link in the console

---

## Author

Developed by [Aaron Lil Vazquez](https://github.com/AaronLil)

---

## License

MIT License.  
See [LICENSE](LICENSE) for details.
