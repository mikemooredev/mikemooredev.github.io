---
layout: article
title: "Hello World"
excerpt: "Introducing my new website"
date: 2020-04-03 21:14:05 +0000
categories: jekyll update
permalink: /:year/:month/:day/:title
thumbnail: /hello-world-min.jpg
tumbnail_alt: "PHP echo hello world"
tags: hello-world
---
# Hello World

### Welcome to my new home. 

Despite the thumbnail incinuating the use of php, this site is built entirely with JavaScript using the Vue.js framework and has no back end. The blog is powered by a combination of a single json file and multiple md (markdown) files for the content of each article.

### What more can I say?

There's no content management system. To publish a new article I simply add an entry to my blog index.json and create an md file for the content which is then pushed to the site's repository in <a href="https://about.gitlab.com/" target="_blank" title="GitLab Source Control">GitLab</a>. Using GitLab's built-in CI/CD pipelines the site is automatically published with my latest updates.

### Why have I done this?

As a developer, I'm entirely capable of keeping my site up to date by writing code but the use of markdown keeps this to a minimum. The use of Vue.js ensures the site remains lightning fast at all times.

### How does the contact form work?

With the lack of a back end, at first I thought the contact form would be an ambitious hurdle to overcome but it's really quite simple. I've utilised <a href="https://elasticemail.com/referral-reward?r=947bf678-28ac-4150-b76b-43db81dd4365" target="_blank" title="Powerful email marketing tools to help you grow">Elastic Email's</a> HTTP API to process my contact form submissions.

### Want to know more?

Feel free to ask a question using the <a href="https://disqus.com/" target="_blank">Disqus</a> comments below or head over to my contact page and <a href="/contact" title="Get in touch">get in touch</a>