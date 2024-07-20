# Flowster Visual Sitemap

Welcome to the Flowster. We help your clients see the flow of their website through a visual sitemap.

## Legal Note

Use at your own risk. We copied all of these SVG icons from Flowmapp.

## Env Variables

These are the ENV variables that are used in the app. These are required for the app to work correctly.

```
APP_URL
CLIENT_NAME
```

### Local Setup

1. Clone repo to your Github account.
2. Create a file at the root of the project. It should be named `.env.development`.
3. Copy and paste the below into your file and update as needed.

- This is a Next.js app, so the `APP_URL` is correct.

```
APP_URL='http://localhost:3000'
CLIENT_NAME='Wicked Tuna Fishing'
```

## Local Dev

1. In your terminal, run `npm run start:dev`.
2. Open browser to both pages.

- [http://localhost:3000](http://localhost:3000)
- [http://localhost:3000/cards](http://localhost:3000/cards)

3. Update `./src/assets/data.json` to change what is visible.

## Data JSON Formats

This section goes over what is required to be here, with the options of what we can add.

### Required Data

The below data is `REQUIRED` to be present. You can see that there is a `Header` and a `Footer` section. This simulates the header and footer menus. We add all of our menu items in the `children` arrays.

```jsonc
{
  "pageList": [
    {
      "title": "Header",
      "icon": "main",
      "children": [
        // menu items go here
      ]
    },
    {
      "title": "Footer",
      "icon": "footer",
      "children": [
        // menu items go here
      ]
    }
  ]
}
```

### Menu Item Options

For each item, we have a recursive list of fields. The TS interface below shows the format.

```ts
export interface Card {
  title: string;
  icon: string;
  children?: Card[];
}
```

### Menu Examples:

1. These two are identical. An empty `children` array will work the same as not having the `children` field present.

```json
{
    "title": "Contact",
    "icon": "contact-form",
    "children": []
},
{ "title": "Contact", "icon": "contact-form" }
```

2. Here is a blog archive example:

```json
{
    "title": "Blog",
    "icon": "news-grid",
    "children": [
        { "title": "Article 1", "icon": "article" },
        { "title": "Article 2", "icon": "article" },
        { "title": "Article 3", "icon": "article" }
    ]
},
```

3. The `data.json` file contains the perfect example of where we start. You can see here that the blog archive, products archive, services archive, and legal archvies are all present. We simply need to add the missing pages.

```json
{
  "pageList": [
    {
      "title": "Header",
      "icon": "main",
      "children": [
        {
          "title": "Home",
          "icon": "main",
          "children": []
        },
        {
          "title": "About",
          "icon": "article-left-sidebar",
          "children": []
        },
        { "title": "Contact", "icon": "contact-form" },
        {
          "title": "Blog",
          "icon": "news-grid",
          "children": [
            { "title": "Article 1", "icon": "article" },
            { "title": "Article 2", "icon": "article" },
            { "title": "Article 3", "icon": "article" }
          ]
        },
        {
          "title": "Products",
          "icon": "catalog",
          "children": [
            { "title": "Product 1", "icon": "item" },
            { "title": "Product 2", "icon": "item" },
            { "title": "Product 3", "icon": "item" }
          ]
        },
        {
          "title": "Services",
          "icon": "services",
          "children": [
            { "title": "Service 1", "icon": "project" },
            { "title": "Service 2", "icon": "project" },
            { "title": "Service 3", "icon": "project" }
          ]
        }
      ]
    },
    {
      "title": "Footer",
      "icon": "footer",
      "children": [
        {
          "title": "Error Pages",
          "icon": "error",
          "children": [
            { "title": "404 Error", "icon": "page-404" },
            { "title": "500 Error", "icon": "page-500" }
          ]
        },
        {
          "title": "Legal",
          "icon": "news-list",
          "children": [
            { "title": "Accessibility Policy", "icon": "article" },
            { "title": "Privacy Policy", "icon": "article" },
            { "title": "Return Policy", "icon": "article" },
            { "title": "Shipping Policy", "icon": "article" },
            { "title": "Terms & Conditions", "icon": "article" }
          ]
        },
        { "title": "Sitemap", "icon": "sitemap" }
      ]
    }
  ]
}
```

## Vercel Deployment

Since we are using Next.js for this app, deploying them on Vercel is super easy. Once you get used to this extremely simple deployment setup, you do not want to go back to extensive DevOps situations.

1. Create Project on Vercel.
2. Add ENV variables.

- Your APP_URL variable will look like this from the default Vercel URL. https://flowster-visual-sitemap.vercel.app/

3. Deploy

## Notes for Success

We do not typically fill in the archive singles unless we need to. So, our articles will be listed as `article 1`, `article 2` and `article 3` for the visual sitemap. This helps streamline the process when we truly do not have a requirement to define them. Since that happens to be most of the time, we take the simple versions when we can.

## About Carbon Digital

We are Veteran-Owned and operated. We have different levels of projects. From a landing page, to small-large WordPress websites, up to full stack web and mobile apps.
