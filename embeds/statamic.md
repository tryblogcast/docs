---
title: Statamic Embeds
---

# Embedding the Blogcast player on your Statamic site

### Why shouldn't I use the provided HTML directly?

The short answer is that you can, but using the addon makes everything easier.

Under the hood, the `blogcast` Statamic tag adds the same HTML you'd copy from your dashboard, but it also comes with [dynamic embeding](embeds/statamic) by default.

### Adding the Blogcast player to your Statamic articles

The steps for adding the Blogcast player to your Statamic article are simple. First, you'll have to install the Blogcast addon. To do so, just download the addon from the [Statamic Marketplace](https://statamic.com/marketplace/addons/blogcast), unzip, and move the Blogcast folder to your addons folder.

Once the addon is installed, you'll be able to use the Blogcast tag on your articles like so `{{ blogcast id="1234" }}` where 1234 is the ID of your article. You can also use the short version, if you prefer `{{ blogcast:1234 }}`.

To make things even easier, you can simply drop the `{{ blogcast }}` tag without specifying the ID, and Blogcast will try to find your audio using your article's URL. :sparkles:
