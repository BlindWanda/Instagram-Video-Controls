// ==UserScript==
// @name         Instagram Video Controls (Version 1.3b)
// @version      1.3b
// @description  Adds video player controls to Instagram videos and keyboard shortcuts for fullscreen (press 'f') and mute (press 'm')
// @author       FXZFun \ BlindWanda
// @match        https://www.instagram.com/
// @match        https://www.instagram.com/*
// @updateURL    https://raw.githubusercontent.com/BlindWanda/Instagram-Video-Controls/refs/heads/main/Instagram%20Video%20Controls.js
// @downloadURL  https://raw.githubusercontent.com/BlindWanda/Instagram-Video-Controls/refs/heads/main/Instagram%20Video%20Controls.js
// @grant        GM_addStyle
// @license      GNU GPL v3
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
                        opacity: 0;
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
