// ==UserScript==
// @name         Instagram Video Controls (Version 1.3b)
// @version      1.3c
// @description  Adds video player controls to Instagram videos and keyboard shortcuts for fullscreen (press 'f') and mute (press 'm')
// @author       FXZFun \ BlindWanda
// @match        https://www.instagram.com/*
// @grant        none
// @license      GNU GPL v3
// @updateURL    https://github.com/BlindWanda/Instagram-Video-Controls/raw/refs/heads/main/Instagram%20Video%20Controls.js
// @downloadURL  https://github.com/BlindWanda/Instagram-Video-Controls/raw/refs/heads/main/Instagram%20Video%20Controls.js
// @icon         data:image/png;base64,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
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        document.querySelectorAll("video").forEach(el => {
            if (el.controls != "controls") {
                el.controls="controls";
            }
            if (!document.head.innerHTML.includes("::-webkit-media-controls")) {
                GM_addStyle(`
                    ::-webkit-media-controls {
                        z-index: 999999;
                        position: relative; /* Ensure the controls can be repositioned */
                        bottom: 35px; /* Move controls 50px up from the bottom */
                    }
                    video::-webkit-media-controls {
                        opacity: 1;
                        transition: opacity 2.5s ease-in-out;
                    }
                    video:hover::-webkit-media-controls {
                        opacity: 1;
                    }
                    /* Remove the fade/gradient bar around the controls */
                    video::-webkit-media-controls-panel {
                        background: transparent; /* Remove the gradient background */
                        -webkit-box-shadow: none; /* Remove any shadow effects */
                    }
                `);
            }
            if (el.closest('article') !== null && !el.hasAttribute("loop")) {
                el.setAttribute("loop", "true");
            }
            else if (el.closest('article') === null && el.hasAttribute("loop")) {
                el.removeAttribute("loop");
            }
        });
    }, 500);

    // add event listeners to the document object
    if (!document.body.dataset.hasFullscreenShortcut) {
        document.body.dataset.hasFullscreenShortcut = true;
        document.addEventListener("keydown", function(event) {
            if (event.key === "f") {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    const videos = document.querySelectorAll("video");
                    let closestVideo = null;
                    let closestDistance = Infinity;
                    videos.forEach(video => {
                        const bounds = video.getBoundingClientRect();
                        const centerX = bounds.left + bounds.width / 2;
                        const centerY = bounds.top + bounds.height / 2;
                        const distance = Math.sqrt((window.innerWidth/2 - centerX)**2 + (window.innerHeight/2 - centerY)**2);
                        if (distance < closestDistance) {
                            closestVideo = video;
                            closestDistance = distance;
                        }
                    });
                    closestVideo.requestFullscreen();
                }
            }
        });
    }


    if (!document.body.dataset.hasMuteShortcut) {
        document.body.dataset.hasMuteShortcut = true;
        document.addEventListener("keydown", function(event) {
            if (event.key === "m") {
                const videos = document.querySelectorAll("video");
                let closestVideo = null;
                let closestDistance = Infinity;
                videos.forEach(video => {
                    const bounds = video.getBoundingClientRect();
                    const centerX = bounds.left + bounds.width / 2;
                    const centerY = bounds.top + bounds.height / 2;
                    const distance = Math.sqrt((window.innerWidth/2 - centerX)**2 + (window.innerHeight/2 - centerY)**2);
                    if (distance < closestDistance) {
                        closestVideo = video;
                        closestDistance = distance;
                    }
                });
                closestVideo.muted = !closestVideo.muted;
            }
        });
    }
})();

// BELOW IS CODE TO AUTOMATICALLY UNMUTE INSTAGRAM VIDEOS --BLINDWANDA
(function() {
    'use strict';

    // Function to unmute videos
    function unmuteVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.muted = false;
        });
    }

    // Run the function when the page loads
    window.addEventListener('load', unmuteVideos);

    // Also run the function when new content is loaded (e.g., scrolling through the feed)
    const observer = new MutationObserver(unmuteVideos);
    observer.observe(document.body, { childList: true, subtree: true });
})();
