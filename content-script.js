{
  "manifest_version": 2,
  "name": "Twitch Channel Points Auto-Claimer",
  "version": "1.0",
  "description": "Automatically claims channel points on Twitch.tv",
  "permissions": ["activeTab", "https://twitch.tv/*"],
  "content_scripts": [
    {
      "matches": ["https://www.twitch.tv/*"],
      "js": ["content-script.js"]
    }
  ],
  "icons": {
    "48": "icon.png"
  }
}
