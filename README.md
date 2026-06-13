Spotify Clone 🎵
A fully functional, responsive Spotify clone built entirely with Vanilla HTML, CSS, and JavaScript. This project dynamically loads music albums from local directories, processes metadata, and features a complete custom music player
.
✨ Key Features
Dynamic Album Generation: The app automatically detects album folders and populates the UI by reading an info.json file to extract the album's title and description
.
Fully Functional Music Player: Users can play, pause, and skip to the next or previous tracks
.
Seek Bar & Time Tracking: Features a custom, interactive seek bar that tracks the current song's duration and allows users to jump to different parts of the audio
.
Volume & Mute Controls: Includes a volume rocker slider to adjust the audio levels and a clickable icon to instantly mute the track
.
Highly Responsive Design: The layout adapts to mobile phones and tablets seamlessly, utilizing a collapsible hamburger menu for the sidebar navigation
.
🛠️ Tech Stack
HTML5
CSS3 (Flexbox, Media Queries, Custom Utility Classes)
JavaScript (ES6+) (Fetch API, DOM Manipulation, Audio Object)
📁 File & Folder Structure Requirement
To ensure the albums load correctly and prevent JSON or 404 errors, your repository must follow this specific folder structure
:
├── css/
│   ├── style.css
│   └── utility.css
├── js/
│   └── script.js
├── img/                # Contains all SVGs (play, pause, hamburger, etc.)
├── songs/              # Main directory for all albums
│   ├── ncs/            # Example album folder 1
│   │   ├── cover.jpg   # Album cover image
│   │   ├── info.json   # Metadata (Title & Description)
│   │   ├── track1.mp3
│   │   └── track2.mp3
│   └── cs/             # Example album folder 2
│       ├── cover.jpg
│       ├── info.json
│       └── track1.mp3
└── index.html
📝 The info.json File Format
Every album folder inside the /songs/ directory must contain an info.json file. The JavaScript fetch() API reads this strictly formatted JSON to generate the album cards
. Example:
{
  "title": "Sleep Songs",
  "description": "Songs for you"
}
🚀 Hosting & Deployment
If you want to deploy this site live, the application is optimized to run on standard web servers.
Recommended Host: The creator recommends using WebHostMost for free hosting (yielding up to 125MB of free storage)
.
Permissions: When deploying to a live server, ensure your /songs directory permissions are set to public (CHMOD 755), or use an .htaccess file to allow the JavaScript fetch API to read the directory structure
.
