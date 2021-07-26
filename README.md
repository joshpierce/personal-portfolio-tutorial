# Personal Portfolio Tutorial

This repository [joshpierce/personal-portfolio-tutorial](https://github.com/joshpierce/personal-portfolio-tutorial) was originally created for a workshop presentation at [THAT Conference 2021](https://that.us) - Wisconsin Dells, WI. The repository as it stands is a ready-to-tweak starter kit for building out your own Personal Portfolio site.

Technology Used In This Tutorial

-   [SvelteKit](https://kit.svelte.dev) - This is the UI ([Svelte](https://svelte.dev)) and App Framework for your portfolio.
-   [TailwindCSS](https://tailwindcss.com) - This is the CSS Framework used for style composition.
-   [Netlify](https://netlify.com) - This is the JamStack provider that will host your page.
-   [Cloudflare](https://cloudflare.com) - We'll use cloudflare for DNS.

# What Will You Build?

Your finished product will look and feel very similar to my own [personal portfolio](https://joshuapierce.com). I'm personally excited to see what people will build based on this starter project, please share your finished projects with me [here](https://joshuapierce.com/connect).

# How Long Will It Take?

You should be able to compile all the snippets and read through the content in approximately 4 hours time. This is not a guarantee. Proceed at your own peril.

# Things You'll Need Installed

-   [Node/NPM](https://nodejs.org) - Personally, I use NVM (because it's the 🐐) but for this tutorial, the LTS version should work.
-   [GIT](https://git-scm.com/downloads) - Latest version ought to do.
-   [Visual Studio Code](https://code.visualstudio.com) - This is where you'll be editing your source files.
    **Suggested Extensions** (Not Required, But Nice To Have):
    -   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code Formatter.
    -   [Svelte For VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - Helper extension for authoring Svelte apps in VS Code.
    -   [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Just makes finding files by type easier in the Explorer.
-   A Terminal - If you are using Visual Studio Code, this will be built in (`Top Menu > Terminal > New Terminal Window.`). You can always use your built in system terminal as well.
    > I also have to advocate for [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) if you're on a PC. Microsoft did a killer job here and I've been incredibly impressed.

# Accounts You'll Need To Complete This Tutorial

-   [GitHub](https://github.com) - This is where you'll be publishing your code and tracking your source.
-   [Netlify](https://netlify.com) - This is the JAMStack provider that you'll be using to deploy your site.

### Optional

-   [NameCheap](https://namecheap.com) - You can technically use any domain name provider, pick your poison.
-   [Cloudflare](https://cloudflare.com) - Again, there are lots of ways to do DNS, and you'll be using cloudflare to point your domain at your newly hosted Netlify site.

# Let's get started

To get started you'll need to bring this repository down locally and run a few commands to get everything ready to go.

You'll want your own copy of this repository. Get yours by clicking this -> [Fork This Repo](https://github.com/joshpierce/personal-portfolio-tutorial/fork).

> Note: after forking the repo, you can click the ⚙ icon, and the first setting available should give you the option to rename your repo however you'd like.

Next you'll want to create or navigate to a folder where you'd like to keep your project. Then run the following commands in order at the command line.

```bash
# Clone your repository (you may be asked to login to github at this point.)
git clone https://github.com/[YOUR USER NAME HERE]/personal-portfolio-tutorial.git

# Move into your app's directory
cd personal-portfolio-tutorial

# Install all the projects dependencies
npm install
```

At this point, you should be able to run the "mostly" blank app and see your page in the browser. You can run this svelte app with `npm run dev` in your terminal. After running, svelte will tell you where you can access your app in the browser. By default this is http://localhost:3000.

> You may notice a Flash of Unstyled Content (FOUC) where the styles aren't loaded at first, but "snap" in. As of creating this article, this is a known bug, but will not happen in your production app.

Awesome, this is exciting, you have your own SvelteKit app up and running locally. Clap three times, and let's move on.

# Tutorial Assets

Inside of this repo, I've included some assets that will help you to get moving. I've added a list below of the things that are included above and beyond a vanilla SvelteKit app initialization. Don't worry if there are things in this list that are unfamiliar now, they'll become clearer as you complete the tutorial.

-   **SNIPPETS** [IMPORTANT] - The folder called SNIPPETS contains all of the building blocks that you'll need to work through this tutorial. Each snippet will be named with a number, and correspond to an entry in the repository.

    ```svelte
    <script>
        //TUT-SNIPPET-01
    <script>

    or

    <div>
        <!--TUT-SNIPPET-02-->
    </div>
    ```

-   **Custom Pre-Deploy Script** - This repository uses a pre-deploy script to generate custom images for each post to be used in social media when sharing your posts. This script is located in `./deploy` along with it's corresponding `tsconfig.json`. For this tutorial, you shouldn't need to tweak anything here.
-   **Runtime Libraries for Canvas on Netlify** - The previous script uses [node-canvas](https://github.com/Automattic/node-canvas) for generating the custom post images at build time. Canvas running on Netlify will fail without these couple of critical binaries available.
-   **PostData Folder With Sample Post** - I've included a folder called `./postdata` that contains a sample posting for the blog section of your portfolio. You can feel free to keep this post alive, or delete it once you've added your own content.
    -   ⭐️ Action Item - You will at a minimum need to update the author of this post where it says [Your Name Here]
-   **TypeScript Helpers** - We could blow this tutorial out to a full week course if we wanted to get that deep in the weeds, but for the time being, I've included some basic TypeScript helpers in the `./src/lib` folder. Descriptions of each file are below
    -   **additional-svelte-jsx.d.ts** - Typings file for allowing our "click outside to close" handler for your navbar to get along with TypeScript.
    -   **clickOutside.ts** - Handlers for the "click outside to close" handler for your navbar.
    -   **navbar-links.ts** - Navigation definitions file for your navbar and footer.
    -   **posts.ts** - Library of functions for retrieving, paging, and sorting posts from the markdown files included in `postdata`.
    -   **socials.ts** - Social Media definitions file for your footer and /connect pages.
-   **Hero Background Image** - I've included a hero background image in `./static/images` that you are welcome to use, or replace with your own hero-background. The source image is from unsplash by [Ryan Hutton](https://unsplash.com/@ryan_hutton_): https://unsplash.com/photos/Jztmx9yqjBw. If you're going to use a different image, look for something dark that white text will look good on, or you'll need to tweak the text color for the hero component.
-   **Netlify Build Config File** - I've included a `netlify.toml` in the root of the repo that will be used by netlify when deploying your solution to the web. This also contains the command to copy the Canvas Dependencies mentioned above.

## Other Modified Files

-   **.gitignore** - Added `/build`, `/functions`, `/static/postimages` and `/deploy/dist` so that they wouldn't be committed to the repo.
-   **.prettierrc** - Forced use of spaces (because spaces > tabs) and tabWidth of 4.

# SvelteKit Routes

Your new portfolio page is going to have the following routes.

-   / - Your portfolios home page.
-   /blog/[pageNumber] - A list of all the articles and content that you post to your portfolio. Each [pageNum] will contain sorted, and paged out snippets of your articles for ease of access.
-   /article/[slug] - A single article of content that you post to your portfolio.
-   /connect - A page that prominently displays where people can find you on social media, and a form to contact you using netlify forms.

### How Do I Add a Route to my SvelteKit app?

SvelteKit uses a filesystem based router, where each route corresponds to a svelte component. You place these components inside of the `src/routes` folder. You can see that the repo has already given you a index.svelte file which corresponds to the `/` route. This is your home page.

## Creating The File Structure

Start by creating a few svelte components so we can get our routing off the ground. Create the following folders and files (marked in **bold** below).

<pre>
- 📂src
  - 📁 <b>components</b> (empty folder for now)
  - 📁 routes
    - 📂 <b>article</b>
      - 📃 <b>[slug].svelte</b> (component for <em>/article/[slug]</em> route)
    - 📂 <b>blog</b>
      - 📃 <b>[page].svelte</b> (component for <em>/blog/[page]</em> route)
    - 📂 <b>posts</b> (empty folder for now)
    - 📃 _layout.svelte
    - 📃 <b>connect.svelte</b> (component for <em>/connect</em> route)
    - 📃 index.svelte (component for <em>/</em> route, the home page)
</pre>

> Notice from the above file structure the 2 svelte components wrapped in square brackets, [slug] and [page]. These are Dynamic Parameters and will be passed to your Svelte Component to be used in your application.

## Adding Some Content

To check and make sure that we've set things up properly, let's add a little content to each of these pages.

-   `/src/routes/article/[slug].svelte` - Fill this with SNIPPETS/01.txt
-   `/src/routes/blog/[page].svelte` - Fill this with SNIPPETS/02.txt
-   `/src/routes/connect.svelte` - Fill this with SNIPPETS/03.txt
-   `/src/routes/index.svelte` - Replace the test snippet with the contents of SNIPPETS/04.txt

Once you've copied the snippets into their respective files, you should be able to open a terminal window, and run `npm run dev` to start your server. Navigating to the following urls, you should see your pages you just created.

-   http://localhost:3000/
-   http://localhost:3000/connect
-   http://localhost:3000/article/hello
-   http://localhost:3000/blog/1

Cool, you've got pages! Now let's give our end users a way to navigate our portfolio.

## Adding Navigation

Every great portfolio page has a centralized way to navigate to different parts of the site / app. You're going to add a Navbar component to your Svelte app.

Inside of `./src/components` create a new file called `Navbar.svelte`, and fill it with the contents of **SNIPPETS/05.txt**

Now is a good time for us to talk about the structure of a component in Svelte (these .svelte files). A svelte component can contain javascript for functionality, css for styling, and html for structure. Think of Svelte Components like building blocks. These building blocks can be used together to compose your Svelte app.

Typically a Svelte component will be laid out like the following:

```html
<!-- example.svelte Svelte Component -->
<script>
    // Javascript here
</script>

<style>
    /* CSS here */
</style>

<div>
    <!-- html here -->
</div>
<footer></footer>
```

All of those things living side-by-side harmoniously inside a single file? Blasphemy you say? It's amazing and provides an outstanding developer experience. Trust me, once you get used to it you're going to love it.

Your `Navbar.svelte` component contains both javascript and structure, but not styles, as you're mainly using TailwindCSS for composing your styles. That's just fine.

Take a minute to read through the comments in Navbar.svelte to better understand what's going on under the hood.

⭐ **Action Item** - Find the block of text labeled [Your Name Here] and replace it with your name. My name might be cool, but yours is cooler.

⭐ **Action Item** - Be sure to save your files as you're copying snippets over to them (ctrl/cmd + s) is your friend.

## Svelte Logic Blocks

### #if Blocks

You may have noticed inside the navbar component on Line 52, that you're using something foreign to normal html. This is a Svelte If block, which allows you to conditionally render some html, based on the evaluation of the block.

In the following example, the page would read 'The Number is Greater Than 50' because the If block would evaluate to true.

```html
<script>
    let someNumber = 1337;
</script>

{#if someNumber > 50}
<p>The Number is Greater Than 50</p>
{/if}
```

If `someNumber` was less than 50, the entire <p> tag would be excluded from the DOM.

Svelte Logic Blocks can even handle else and else-if blocks, both prepended with a colon, like the following example:

```html
<script>
    let someNumber = 42;
</script>

{#if someNumber > 50}
<p>The Number is Greater Than 50</p>
{:else-if someNumber == 42}
<p>This is the meaning of life.</p>
{:else}
<p>This number is neither the meaning of life, nor is it greater than 50.</p>
{/if}
```

### #each blocks

`Each Logic Blocks` are used to iterate over a list of data and render something for each entry. Below is an example of a #each block used to list out the members of a band.

```html
<script>
    let members = [
        { name: 'Griffin', funFact: 'Has a pet wolf.' },
        { name: 'Matt', funFact: 'His fans are called "Matt Bratts".' },
        { name: 'Boo Boo', funFact: 'His birthday is in October.' },
        { name: 'Allen', funFact: 'Loves poetry.' }
    ];
</script>

<ul>
    {#each members as member}
    <li>
        {member.name} - {member.funFact} {/each}
        <ul></ul>
    </li>
</ul>
```

Currently our Navbar is using a #each block (line 60) to iterate over the list of links for the navbar and display each one.

### Svelte Animations

We won't dive too deep into this for the purposes of the tutorial, but you can see between lines 63 and 78, we've thrown in some Svelte animations for the mobile navbar drawer. To get more information on Svelte Animations and what you can do with them, check out the [Svelte Docs](https://svelte.dev/docs#in_fn_out_fn).

## Using Your New Navbar Component in Another Page

So you've added the navbar component to your app, but when you `npm run dev`, you don't see it anywhere. You have to consume the component on the pages you want it to be displayed on.

You can add a Svelte Component to any other Svelte Component by importing it in your script tag, and then using your component by it's defined name.

```html
<!-- index.svelte example -->

<script>
    // Import the component
    import Navbar from '../components/Navbar.svelte';
</script>

<!-- Adding our component to the structure of our page -->
<Navbar />
```

While you could open up your 4 different page routes and add the component to each of them, that definitely seems wrong. There's good news though, Svelte has the concept of a Layout file (`./src/routes/__layout.svelte`) that gets used to wrap your other page components. The layout file is a great place to handle things like your navbar and your footer.

To add your Navbar component to all of your existing routed pages, head over to `./src/routes/__layout.svelte` and replace the file contents with those of **SNIPPETS/06.txt**.

Save your `__layout.svelte` file and then re-run `npm run dev`. You should now have a navbar with working links to your different routes.

Note the `<slot></slot>` tags. This is the location where your routed SvelteKit pages will be rendered.

`<slot>` can be used anywhere you want a component to consume any nested elements provided to the component.

## We Need A Hero

Your home page needs to make a big splash with a "hero" section welcoming people to your corner of the internet. Create a new file at `/src/components/Hero.svelte` and fill it with the contents of SNIPPETS/07.txt.

Taking a look at this component, you'll notice some new syntax in between our script tags.

```html
<script>
    export let title;
    export let subTitle;
</script>
```

This is how you declare component properties (props) in Svelte. It will allow you to consume your Hero component in different places throughout your app, but dynamically pass title, and subtitle so the hero will render differently.

```html
<Hero
    title="Something, Something, Something, Darkside"
    subTitle="Something, Something, Something, Complete"
/>
```

One other subtle but important new item is the data binding `{@html ...}` within the subtitle. This allows you to render dynamic html to the page. If you were to bind an html string without including this tag, your users would see our markup, instead of the rendered html.

> Note: Svelte doesn't do any sanitizing of the html that's being bound, so you need to be careful with html that comes from outside sources as you could risk exposing your users to XSS attacks. [More Info Here](https://svelte.dev/docs#html).

### Show the world your beautiful face

Your hero is setup to consume an image located at `./static/images/avatar.png`. Typically, you would just drop a square image in this place, and round it with Tailwind to create a nice circle image. In your case, you actually need the image to be round (png with transparency) for your dynamically generated post images. I used [This Tool](https://crop-circle.imageonline.co/) to create my circle png avatar. Disclaimer, that site is bloated with ads, buyer beware.

However you decide to make the image, you'll just need a circular png image located at `./static/images/avatar.png`. Create this image before moving on. If you don't have a good picture handy, use your phone or computer's camera to take a picture. Don't forget to smile!

Your component is ready to be consumed, but you've got a few more components to create before you can render this to a page.

## More Content

You're going to create the couple of components that are required for you to display blog snippets on the home page. One will be the container component that will hold many blog snippets, the next will be the component holding the structure for the snippet itself, and lastly you'll create a Pager component for when our blog snippets should be paged.

Create the following files, and copy their snippets in.

-   `./src/components/BlogSnippet.svelte` -> SNIPPETS/08.txt
    -   This is your individual blog snippet, 1 will be rendered per article.
-   `./src/components/BlogSnippets.svelte` -> SNIPPETS/09.txt
    -   This is your component that houses 1:many blog snippets.
-   `./src/components/Pager.svelte` -> SNIPPETS/10.txt
    -   This is the component that handles paging when there are many pages of snippets to be displayed.

The BlogSnippets and BlogSnippet/Pager components are great examples of using nested components in Svelte. There are many reasons to use nested components but the top two that come to mind:

-   It's good to keep components scoped to the data / structure they're concerned with. Having too much logic or structure inside a single component can become unwieldy fast.
-   When you're using custom css (`<style>` tags) inside your component, svelte will keep those styles encapsulated to that component. This helps prevent styles from inadvertantly leaking out to other components on your page.

    _Example of CSS Encapsulation_

    ```html
    <!-- CatsList.svelte -->
    <script>
        import Cat from './Cat.svelte';
        export let cats;
    </script>

    <style>
        p {
            color: red;
        }
    </style>

    <p>This is a list of cats</p>

    {#each cats as cat}
    <!-- Notice that if the prop name, and your local variable name are the same, you can pass your local variable inside single curly braces -->
    <Cat {name}>
        {/each} --------------
        <!-- Cat.svelte -->
        <script>
            export let name;
        </script>

        <p>{name}</p></Cat
    >
    ```

    Even though the nested Cat component, and the outer CatsList component both utilize the p tag, only the CatsList component's p tag will be styled in a red color.

## Last Build Block, I Swear

You need one more component that will handle displaying our social links on our `/connect` page.

Create the following component `./src/components/ConnectIcon.svelte` and fill it with the contents of SNIPPETS/11.txt

There isn't anything too crazy or new going on here, other than the usage of css variables for styling the component. This allows you to set custom background colors and text colors on each item from the list of data in `socials.ts`. It's important to note that some of the colors you've seen used with Tailwind JIT, like `text-[#2c2c2c]` seem like they could be used to populate the colors in this case. This is not the case as something like `text-[${social.color}]` doesn't get evaluated until after Tailwind has already compiled it's custom css.

## All this UI and No Data

So far you've pulled together almost all of the components that you'll need to drive your new portfolio page, but you need to have some data as well. This is one of the superpowers ⚡ of SvelteKit. I mentioned before that SvelteKit uses a file system based router. Everything in `./src/routes` that ends in `.svelte` will represent a routable page in your app (unless it starts with an \_ which denotes a private module.) SvelteKit's router isn't limited to serving up pages though, it can also serve up **endpoints**. Endpoints are modules writting in .js (or in your case .ts) files that export functions corresponding to HTTP methods. More details about the implementation of endpoints is available [here](https://kit.svelte.dev/docs#routing-endpoints).

Create the following structure underneath your `./src/routes` folder:

<pre>
- 📂src
  ...
  - 📂 routes
    - 📂 <b>posts</b>
      - 📃 <b>[slug].json.ts</b> (Endpoint at <em>/posts/[slug].json</em>)
      - 📃 <b>index.json.ts</b> (Endpoint at <em>/posts.json</em>)
      - 📃 <b>recent-posts.json.ts</b> (Endpoint at <em>/posts/recent-posts.json</em>)
</pre>

The previous files can be filled with the following snippets:

-   `/src/routes/posts/[slug].json.ts` - Fill this with SNIPPETS/12.txt
    -   This endpoint is an HTTP get that returns information for a single post, based on the dynamic slug parameter being provided.
-   `/src/routes/posts/index.json.ts` - Fill this with SNIPPETS/13.txt
    -   This endpoint is an HTTP get that returns information for all posts.
-   `/src/routes/posts/recent-posts.json.ts` - Fill this with SNIPPETS/14.txt
    -   This endpoint is an HTTP get that returns information for recent posts.

All of the above endpoints depend on scripts and functions in `./src/lib`. To see what a function in the endpoint is doing, click on it and hit F12 to go to the functions definition.

In your case, your endpoints are going to be turned into Netlify Serverless functions via the Netlify Adapter defined in our svelte.config.js. More information on the Netlify adapter is available [here](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify).

## Time To Compose Our Pages

Now that you've got your components, and your endpoints ready to go, you can start to compose your home page.

Start by replacing the contents of `./src/routes/index.svelte` with the contents of SNIPPETS/15.txt.

Things of note on your home page:

-   You're telling SvelteKit that you want to prerender this page via the following code:
    ```html
    <script context="module">
        export const prerender = true;
        ...
    </script>
    ```
-   The `load` function that you've defined is getting data from our `/posts/recent-posts.json` endpoint that you created to populate the Blog Snippets on the home page. It's important that you use SvelteKit's provided fetch method to prevent duplicate requests to the endpoint. Loading in SvelteKit is a complex topic, and more information and details can be found in [SvelteKit Docs](https://kit.svelte.dev/docs#loading).
-   You're finally ready to import and consume your `Hero` and `BlogSnippets` components which will be displayed on the page.

⭐ Action Item - Replace the title and subtitle on the Hero component implementation to reflect who you are.

```html

```

At this point you should be able to run `npm run dev` and see your home page live and in action at http://localhost:3000.

## Finishing Up Our Other Pages

Time to get going with the blog list page. This page at `/blog/[page]` will display all of the articles of content that you have published.

Go ahead and replace the contents of `./src/routes/blog/[page].svelte` with the contents of SNIPPETS/16.txt.

Looking at the code that's provided for your blog list page, you can see a couple different things going on here:

-   Inside your `load` function, you're taking in the page number being requested via the `page.params.page`. This is where your dynamics parameters from the route `[page].svelte` end up, available for your consumption.
-   We're getting data back from your endpoint for this page of blog articles, and doing a little bit of js trickery to provide the pages to our Pager component.
-   If you don't get a successful response from your endpoint, you're returning the error, which will prevent the blog list from loading. In a production environment it's best to obscure the error from the client, which is why you're just returning a generic error message. You can also define a custom error page (or scoped pages) for your SvelteKit app. More information on how to do that in the SvelteKit docs [here](https://kit.svelte.dev/docs#layouts-error-pages).
-   You're reusing our BlogSnippets component to display the page of data for your blog list. Component reuse is what makes these frameworks so awesome to work with.

Next you'll handle the single page article and it's contents.

Go ahead and replace the contents of `./src/routes/article/[slug].svelte` with the contents of SNIPPETS/17.txt.

Things to note about the article page:

-   You're using your endpoints to retrieve the data for the single post that you're loading.
-   If you don't get a successful response from your endpoint, you're returning the error, which will prevent the article from loading. You're doing the same thing here with your obscure error message back to the client.
-   Introducing your first built in Svelte element `<svelte:head>...</svelte:head>`. This element allows you to insert elements into the head of your document. Since we're sending rendered pages back to the client, this allows us to set things in the head dynamically for SEO and link unfurling.
-   You're taking the markdown that you retrieve from your postdata for the article, and converting it to html with [marked](https://www.npmjs.com/package/marked).

Again, you should be able to run `npm run dev` and open your single post to see it in all it's glory.

## Getting Social

When people make it to your personal portfolio online, you should give them an easy way to connect with you on the social media platforms you utilize. This repo provides you with a file called `./src/lib/socials.ts` which contains a list of a handful of social platforms that I've preloaded names, and color schemes for. Any of them that you want to list for yourself, should be uncommented, and you should add your personal url (full urls, example for twitter: https://twitter.com/heyjoshpierce).

Make sure to save the socials.ts file and then continue on to creating your /connect page.

Go ahead and replace the contents of `./src/routes/connect.svelte` with the contents of SNIPPETS/18.txt.

-   This component is simply ingesting the list of social sites you have turned on in the previous step, and displaying them as links for people to go and connect with you online.
-   Also, this page makes use of Netlify's automatic form handling.
    > Note: Currently there is an issue with the form on this page that I'm awaiting a response from Netlify on. I will update this repo once I have an answer, so like and subscribe (shameless plug).

That's it, we have our portfolio site running on Svelte With SvelteKit and TailwindCSS. Congratulations! 🎉.

## But Wait There's More

"If you don't ship it, it doesn't count". This has never been more true and is one of the areas I find people getting hung up on a regular basis. Going from a project that you build locally, and run locally, to deploying to the web can be a scary and daunting task.

Fortunately, you've got things all setup for you and it should be as easy as 1... 2... 3... website.

To verify that your build **should** work when we ship it to Netlify, you can run the following 2 commands in your terminal:

```bash
# Build your project locally for production
npm run build

# Run the built files locally, so you can test on localhost:3000.
npm run preview
```

Double check that everything builds correctly, and appears to be working when you navigate to localhost:3000.

At this point, if you haven't commited your changes back to your remote repository on GitHub, you should do that with the following commands in your terminal.

```bash
# Stage all your files to be checked in
git add -- .

# Commit to your local repository the changes that you've made
git commit -m "Time To Go Live!"

# Push your commit to your repository
git push origin main
```

Now that you have your source files all loaded into your GitHub repository, you can head over to https://netlify.com and get signed into your account. It should go without saying that if you don't have an account at this point, you'll need one to continue this tutorial.

Once you're in your account, you should see a fairly large green button labeled `New site from Git`. Go ahead and click on that to start setting up your new site.

Your first step here is going to be to connect to your Git provider. If you've been following step-by-step through this tutorial, you should be choosing the GitHub option. Netlify will ask you to authenticate your GitHub account so that it can access your source files.

Once you've authenticated, you should be on step two of the Netlify setup process, and you'll need to choose the repo where you've stored your Personal-Portfolio-Tutorial (or whatever you change the name to, if you change the name early on).

After selecting your repository, Netlify is going to ask you for some properties about your build and deploy. You're going to add a few environment variables that will help your solution to build properly.

-   Click the button labeled `Show Advanced`.
-   Under Advanced build settings, click the button labeled `New Variable` **3 Times**.
-   Add the following Variable Names and Values to your sites environment variables.
    -   **LD_LIBRARY_PATH** - /var/task/node_modules/canvas/build/Release/libz.so.1:/lib64:/usr/lib64:$LAMBDA_RUNTIME_DIR:$LAMBDA_RUNTIME_DIR/lib:$LAMBDA_TASK_ROOT:$LAMBDA_TASK_ROOT/lib:/opt/lib
        -   We'll cover what this piece is for in more detail later on in this tutorial.
    -   **NODE_VERSION** - 12.22.3
    -   **NPM_VERSION** - 6.14.13

Okay, take a deep breath, and click the big green button labeled `Deploy site`.

Now that you've said "go netlify go", Netlify is going to do the following things:

-   Check out your latest code from your `main` branch.
-   Install NPM dependencies.
-   Run the build command defined in your `netlify.toml`.
-   Deploy the output assets from /build and /functions respectively.

You can navigate to the Deploys tab of your brand new netlify site to see the build in action and know when it's been deployed.

Once your build and deploy have completed, on the `Site Overview`tab you'll see the custom url that netlify has provisioned for your site. It generally is something along the lines of `https://[three part name].netlify.app`. Navigating to this URL should display your brand new portfolio page.

## Putting a Custom URL In Front of Your Site

Lastly, it's going to be difficult to tell someone "yeah you can find me online at https://adventurous-platypus-51640.netlify.app". You can use Netlify to handle a custom domain, but I prefer using a third-party to acquire and hold my domain names when possible. Namecheap is a quality vendor that sells domain names for a reasonable price. If you already have acquired a domain name for your new site, you can skip the next set of steps.

If you want a custom domain name and don't already own one, or own one you want to use for your portfolio, follow this quick set of steps.

-   Head to https://namecheap.com
-   Use the search to find a domain name that you can use for your portfolio.
-   Add the domain to your cart and purchase it. I typically only reserve my domain names for a year at a time and would recommend the same until you're fully commited to keeping things up and running.
-   Buy the domain name.

After you've purchased a domain name, you will need to follow these remaining steps to get things pointed to your brand new netlify app.

-   Open https://netlify.com and login.
-   Click on your new site in your list of Sites.
-   Click on the gray button labeled `domain settings`.
-   Click on the green button labeled `Add custom domain`.
-   Type in your new domain name (without the www. subdomain), and click the green button labeled `Verify`.
-   Netlify is going to say `[your domain name here] already has an owner. Is It You?`
-   Choose `Yes, add domain`.

This will add the custom domain to your netlify app and now all we need to do is point your domain name at your new Netlify app, and for that we're going to use Cloudflare.

-   Head over to https://cloudflare.com
-   Log in if you already have an account, or sign up if you still need an account.
-   Once you're logged into your account, you should see a big blue button labeled `+ Add a Site`. Click it.
-   Cloudflare will ask you what the domain name is. Enter it, again without the www. subdomain and click `Add Site`.
-   Choose the bottom option for the free plan this should be plenty for your personal portfolio page.
-   Click the `Continue` button.
-   Delete any entries that come back as defaults (imported from your current DNS settings on NameCheap.). For options that just list an `Edit` option, you can choose `Edit` > `Delete` > `Delete`.
-   Add the following two records to your list (clicking the blue `Save` button after each addition):
<pre>
Type    Name          Target

---

CNAME @ https://[your-site-name].netlify.app
CNAME www https://[your-site-name].netlify.app

</pre>
- Click the big blue `Continue` button at the bottom of the page.

-   Cloudflare will then walk you through the steps to change your NameServers for your URL on namecheap. Follow those steps to complete your setup.

Now as with any DNS based solution, it can take some time for things to propogate across the web, but in very short order, your new personal portfolio should be online, at your custom domain name, and ready for you to share it with the world!

If you have any issues along the path of this tutorial, please create an issue [here](https://github.com/joshpierce/personal-portfolio-tutorial/issues).

## One Other Item to talk about

One of the big
