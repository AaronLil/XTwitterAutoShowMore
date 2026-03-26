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
2. **Install via URL (recommended)**

	 - Copy this raw URL and paste it into your browser's address bar, then press Enter. Tampermonkey will detect the userscript and prompt to install:

		 https://raw.githubusercontent.com/AaronLil/XTwitterAutoShowMore/main/XTwitterAutoShowMore.user.js

	 - Alternately, open the Tampermonkey dashboard and use the "Install from URL" / "Add new script" option and paste the same URL.

3. The script runs automatically on [twitter.com](https://twitter.com) and [x.com](https://x.com).

---

## How it works

- Detects any "Show more" button (using a stable data attribute)
- Simulates a click automatically as soon as the button is visible in the viewport
- Logs the tweet link in the console

---

## Author

Developed by [Aaron Lil](https://github.com/AaronLil)

---

## License

MIT License.
See [LICENSE](LICENSE) for details.
