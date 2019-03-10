---
title: DEV.to Embeds
---

# Embedding the Blogcast player on DEV.to

### Why can't I use the provided HTML?

If you're using DEV.to to publish your articles and have tried to follow the [Starter Guide](/), you'll have noticed that the iframe tag gets stripped from your article.

This is because DEV mantains their custom templating language, limiting you to certain types of embeds. Fortunately, Blogcast is one of those!

### Adding the Blogcast player to your DEV articles

<details>
<summary>Video Walkthrough</summary>

![Guided tutorial](images/dev-embeds.gif)

</details>

The steps for adding the Blogcast player to your DEV article are simple. First, you'll have to navigate to [your dashboard](https://blogcast.host/dashboard) and click on the _Manage audio_ button.

Once the modal opens, click on the _Using Medium?_ link located above the embed code block. It should display a URL like `https://blogcast.host/embedly/...`. What interests us here is the part after the `/embedly/` path, which should be a number. That's your article ID.

Next, navigate to the DEV editor and find a good place for the player (hint: the best place is on the top, so people don't have to scroll to see it). On a new line, paste the Blogcast tag and add your ID:

```liquid
{% blogcast YOUR_ID_HERE %}
```

For example, for my lastest article, the tag would be `{% blogcast 289 %}` because that's my Blogcast ID.

After adding that tag, you should see the Blogcast player magically appear! :sparkles:
