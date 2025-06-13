// ==UserScript==
// @name         XTwitterAutoShowMore
// @namespace    https://github.com/AaronLil/XTwitterAutoShowMore
// @version      1.0
// @description  Automatically expands tweets by clicking "Show more" buttons in any language and logs the tweet link (if found) to the console
// @author       Aaron Lil Vazquez
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/AaronLil/XTwitterAutoShowMore/main/XTwitterAutoShowMore.user.js
// @updateURL    https://raw.githubusercontent.com/AaronLil/XTwitterAutoShowMore/main/XTwitterAutoShowMore.user.js
// @homepageURL  https://github.com/AaronLil/XTwitterAutoShowMore
// @supportURL   https://github.com/AaronLil/XTwitterAutoShowMore/issues
// ==/UserScript==

(function() {
    'use strict';

    // Checks if the button is the correct "Show more" expander
    function isShowMoreButton(btn) {
        return (
            btn &&
            btn.tagName === 'BUTTON' &&
            btn.getAttribute('data-testid') === 'tweet-text-show-more-link'
        );
    }

    // Tries to find the tweet link (permalink) for a given button
    function findTweetLink(btn) {
        // Go up to the tweet container (usually the <article> element)
        let tweetContainer = btn.closest('article');
        if (!tweetContainer) return null;
        // Look for the first <a> tag whose href matches "/status/"
        let link = tweetContainer.querySelector('a[href*="/status/"]');
        if (link) {
            // Return the full URL (relative URLs start with /username/status/...)
            return location.origin + link.getAttribute('href');
        }
        return null;
    }

    // IntersectionObserver: triggers when any part of the button is visible in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && isShowMoreButton(entry.target)) {
                const tweetLink = findTweetLink(entry.target);
                if (tweetLink) {
                    console.log('%c[Twitter/X Show More]%c simulated click on:', 'color: #1da1f2; font-weight: bold;', 'color: unset;', tweetLink);
                } else {
                    console.log('%c[Twitter/X Show More]%c simulated click (tweet link not found)', 'color: #1da1f2; font-weight: bold;', 'color: unset;');
                }
                entry.target.click();
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0 // Trigger as soon as any part of the button is visible
    });

    // Search and observe all "Show more" buttons in a given root
    function watchShowMoreButtons(root = document) {
        const btns = root.querySelectorAll('button[data-testid="tweet-text-show-more-link"]');
        btns.forEach(btn => {
            if (isShowMoreButton(btn)) observer.observe(btn);
        });
    }

    // MutationObserver: watches for new nodes (tweets) loaded dynamically
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    watchShowMoreButtons(node);
                }
            });
        });
    });

    // Initial scan for already present buttons
    watchShowMoreButtons();
    // Observe the document for new tweets and buttons
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
