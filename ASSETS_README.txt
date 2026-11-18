============================================================
A ROYAL FAIRYTALE FOR HEERU — ASSETS GUIDE
============================================================

Follow these simple steps to add your personal photos and
background song to the website:

1. PERSONAL PHOTOGRAPHS (Page 5: "My Favourite Views")
   ----------------------------------------------------
   Folder:
     public/assets/photos/

   Supported filenames:
     - photo1.jpg through photo24.jpg

   Notes:
   - All 24 uploaded photos are currently placed here.
   - Any missing filenames are automatically hidden without
     showing broken image boxes.
   - To customize the caption below each photo, edit the
     `photos` array inside:
       src/config/fairytaleConfig.ts

2. BACKGROUND MUSIC
   ----------------------------------------------------
   Folder:
     public/assets/music/

   Filename:
     - background.mp3

   Notes:
   - Place your romantic song as `public/assets/music/background.mp3`.
   - Music begins automatically after Heeru's first click
     (e.g., "Tap to break the seal") and keeps playing
     smoothly across every page.
   - Use the floating music button in the bottom-right
     corner to play, pause, or adjust volume.

3. CUSTOMIZING NAMES, DATES, & TEXT
   ----------------------------------------------------
   Edit this single file:
     src/config/fairytaleConfig.ts

   Inside you can easily update:
   - Princess name ("Heeru") & King signature
   - Relationship start date ("2026-01-31") for the
     "Days of loving you" counter
   - Royal Invitation letter text
   - All 10 Royal Orders
   - Photo captions
   - Final Princess Day letter & secret Crown Easter egg note

4. EXTRA ILLUSTRATIONS FOLDER
   ----------------------------------------------------
   Folder:
     public/assets/illustrations/

   Reserved for any extra custom illustrations you wish
   to store locally alongside the built-in fairytale art.
============================================================
