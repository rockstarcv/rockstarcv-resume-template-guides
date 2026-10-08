# RockStarCV Resume Template Guides

Public, searchable documentation for 84 RockStarCV resume templates. Every guide includes template-specific builder instructions, role-tailored writing tips, six gallery images with image descriptions, and links to relevant RockStarCV Career Advice resources.

Guide index: https://rockstarcv.github.io/rockstarcv-resume-template-guides/

The site is hosted on GitHub Pages under the `rockstarcv` account. Public HTML, canonical URLs, crawlable links, `robots.txt`, and `sitemap.xml` make the guides eligible for Google Search; they do not guarantee crawling, indexing, or rankings. Use Search Console URL Inspection to verify Google’s status.

## Repository structure

- `<template>/index.html` — individual guide
- `assets/images/<template-slug>/` — six AVIF gallery images for each guide
- `assets/site.css` — shared responsive styles
- `assets/analytics.js` — consent-based Google Analytics for every guide
- `sitemap.xml` — guide URLs plus image locations, titles, and captions
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

When adding a new template, include its source-based guide, product gallery images, unique canonical URL, internal index link, sitemap entry, and the shared analytics script immediately before `</body>` (`/rockstarcv-resume-template-guides/assets/analytics.js` on the index; `../assets/analytics.js` on guide pages). Google Analytics uses the RockStarCV GA4 property and only loads after the visitor accepts analytics. Visitors can reject or change their choice using the privacy controls.
