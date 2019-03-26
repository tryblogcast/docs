---
title: Importing Articles
---

# How to import all your existing articles into Blogcast

By following the [Starter Guide](/), you have learned how to manually import articles into Blogcast. But this method is less than ideal if you have a few existing articles you'd like to add to Blogcast. Fortunately, Blogcast supports bulk imports. Here are the four ways you can import your existing articles:

## Importing via Medium

If you're using Medium you're in luck, as Blogcast supports importing all your articles directly from Medium using their API.

To import your articles, you'll need to know your Medium username. You can get it by going to [your user page](https://medium.com/me) and copying the part after the `@`.

Once you know your username, head up to the [Blogcast importing page](https://blogcast.host/import), select `Import from Medium` and enter your Medium username.

You'll then have a chance to preview the URLs that'll be imported, add more articles or delete some. Once you click the `Import articles` button and select a voice in the modal that opens, Blogcast will get rid of duplicate articles and apply a high-volume discount if you're importing more than 50 articles.

The importing process will then start, and can last between two and twenty minutes depending on the number of articles you're importing.

## Importing via RSS

<details>
<summary>Video Walkthrough</summary>

![Guided tutorial](images/importing/rss.gif)

</details>

Nowadays, most blogging engines (like Wordpress, Ghost or even Medium) generate a RSS feed with your articles. With this feed, Blogcast can easily import all your articles at once.

Firstly, you'll need to grab the feed URL of your website. You can google `RSS $PLATFORM_NAME` (e.g. `RSS WordPress`) to figure out how to get yours.

Once you have the URL, access the [Blogcast importing page](https://blogcast.host/import) and click the `Use RSS` button, then paste your feed URL in the input field and click `Parse RSS`.

You'll then have a chance to preview the URLs that'll be imported, add more articles or delete some. Once you click the `Import articles` button and select a voice in the modal that opens, Blogcast will get rid of duplicate articles and apply a high-volume discount if you're importing more than 50 articles.

The importing process will then start, and can last between two and twenty minutes depending on the number of articles you're importing.

## Importing via CSV

<!-- <details>
<summary>Video Walkthrough</summary>

![Guided tutorial](images/importing/rss.gif)

</details> -->

If you're using a platform that doesn't support RSS, you may be able to export a CSV listing your articles. CSV is an open format for spreadsheet files. You can export to CSV from Excel, Sheets or Google Sheets, and download CSV files from most web platforms that allow this types of exports.

Blogcast expect a certain format on your CSV files. It expects you to have your URLs in the first column, one URL for each column and without any headers. If you have exported a CSV file from your platform, you can edit it from your favourite spreadsheet software to fit this format.

Once you have your CSV file, access the [Blogcast importing page](https://blogcast.host/import) and click the `Use CSV` button, then upload your CSV file in the input field and click `Parse CSV`.

You'll then have a chance to preview the URLs that'll be imported, add more articles or delete some. Once you click the `Import articles` button and select a voice in the modal that opens, Blogcast will get rid of duplicate articles and apply a high-volume discount if you're importing more than 50 articles.

The importing process will then start, and can last between two and twenty minutes depending on the number of articles you're importing.

## Custom imports

If none of the above importing methods work for you, you can hire [me](https://miguelpiedrafita.com) to import your existing articles to Blogcast for `$10` (article price not included).

I'll write a crawler that parses your website and gets its articles from the source, then manually filter and import them.

Interested? Email me at [human@blogcast.host](mailto:human@blogcast.host?subject=Custom%20Import)
