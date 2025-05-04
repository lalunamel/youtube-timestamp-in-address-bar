# YouTube Auto Timestamp URL

A minimal Chrome extension that updates the current YouTube video's URL with the most recently watched timestamp. Useful for bookmarking videos and resuming playback without relying on YouTube's watch history.

## Installing

This extension is not published to any store (e.g. the Chrome Web Store).

To install, download this repository as a zip, then go to `chrome://extensions/` > `Load Unpacked` > Select the downloaded zip

## Features

- Automatically appends or updates the `t=` parameter in the URL as the video plays.
- Enables bookmarking your current watch position without enabling YouTube watch history.
- Lightweight and runs only on YouTube watch pages.

## How It Works

Every 5 seconds, the extension:
- Retrieves the current video time.
- Updates the page URL with `t=<time>s` without reloading the page.
- So when you bookmark the video, the bookmark includes the current time.

## Notes

- Only runs on `https://www.youtube.com/watch*` pages.
- Does not store any data or send anything externally.
- Compatible with Chrome Manifest V3.

## License

MIT
