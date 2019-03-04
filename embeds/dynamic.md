---
title: Dynamic Embeds
---

# Automatically embedding the Blogcast player on all your articles

### How can I automatically add the player to all my articles?

If you've followed the [starter guide](/), you may have noticed that manually adding your article is a tedious process. You have to submit the article on the Blogcast interface, then copy the embed code and add it to your article's page. This is fine when you have one or two articles, but what if you have 50?

In addition to the importing feature, Blogcast also supports adding a special tag that will detect the page you're on, and render the player accordingly. Here's how you can set it up:

### Adding dynamic embeds to your website

<!-- <details>
<summary>Video Walkthrough</summary>

![Guided tutorial](images/medium-embeds.gif)

</details> -->

The steps for adding the dynamic Blogcast player to your blog are pretty straightforward, but you'll need to have access to the HTML code that's being rendered on each page of your website. Don't be scared by this if you're running something like Wordpress! Every CMS usually has an option to do just that, just google around a little to find it.

Once you've found a way to edit the code, you'll have to make two tweaks. Firstly, add an element with an ID of `blogcast` above the place where your content is rendered. In most cases, this just means to paste the following:

```html
<div id="blogcast"></div>
```

The second tweak you'll need to add is a script tag. Locate the closing body tag (`</body>`), and add the following on a line above it:

```html
<script src="https://blogcast.host/embed.js"></script>
```

That's it! Save and close the document, and now the Blogcast player should appear on any page you've added to Blogcast!