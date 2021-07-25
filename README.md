# Personal Portfolio Tutorial

This repository [joshpierce/personal-portfolio-tutorial](https://github.com/joshpierce/personal-portfolio-tutorial) was originally created for a workshop presentation at THAT Conference 2021 - Wisconsin Dells, WI. The repository as it stands is a ready-to-pull starter kit for building out your own Personal Portfolio online.

Technology Used In This Tutorial

-   [SvelteKit](https://kit.svelte.dev) - This is the UI ([Svelte](https://svelte.dev)) and App Framework for the portfolio.
-   [TailwindCSS](https://tailwindcss.com) - This is the CSS Framework used for style composition.
-   []

# What Will You Build?

Your finished product will look and feel very similar to my own [personal portfolio](https://joshuapierce.com). I'm personally excited to see what people will build based on this starter project, please share your finished projects with me [here](https://joshuapierce.com/connect).

# How Long Will It Take?

You should be able to compile all the snippets and read through the content in approximately 4 hours time. This is not a guarantee. Proceed at your own peril.

# Things You'll Need Installed

-   [Node/NPM](https://nodejs.org) - Personally, I use NVM (because it's the 🐐) but for this tutorial, the LTS version should work.
-   [GIT](https://git-scm.com/downloads) - Latest version ought to do.
-   [Visual Studio Code](https://code.visualstudio.com) - This is where we'll be editing our source files.
    **Suggested Extensions** (Not Required, But Nice To Have):
    -   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code Formatter.
    -   [Svelte For VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - Helper extension for authoring Svelte apps in VS Code.
    -   [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Just makes finding files by type easier in the Explorer.
-   A Terminal - If you are using Visual Studio Code, this will be built in (`Top Menu > Terminal > New Terminal Window.`). You can always use your built in system terminal as well.
    > I also have to advocate for [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab). Microsoft did a killer job here and I've been incredibly impressed.

# Accounts You'll Need To Complete This Tutorial

-   [GitHub](https://github.com) - This is where you'll be publishing your code and tracking your source.
-   [Netlify](https://netlify.com) - This is the JAMStack provider that we'll be using to deploy our site.

### Optional

-   [NameCheap](https://namecheap.com) - You can technically use any domain name provider, pick your poison.
-   [Cloudflare](https://cloudflare.com) - Again, there are lots of ways to do DNS, and we'll be using cloudflare to point our domain at our newly hosted Netlify site.

# Let's get started

To get started you'll need to bring this repository down locally and run a few commands to get everything ready to go.

You'll want your own copy of this repository. Get yours by [Forking This Repo](https://github.com/joshpierce/personal-portfolio-tutorial/fork).

> Note: after forking the repo, you can click the ⚙ icon, and the first setting available should give you the option to rename your repo however you'd like.

Next we'll wnat to create or navigate to a folder where you'd like to keep this project. Then run the following commands in order.

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

Inside of this repo, I've included some assets that will help you to get moving. I've added a list below of the things that are included above and beyond a vanilla SvelteKit app initialization. Don't worry if there are things in this list that are unfamiliar now, they'll become more clear as we continue forward in the tutorial.

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
-   **TypeScript Helpers** - We could blow this tutorial out to a full week course if we wanted to get that deep in the weeds, but for the time being, I've included some basic TypeScript helpers in the `./src/lib` folder. Descriptions of each file are below
    -   **additional-svelte-jsx.d.ts** - Typings file for allowing our "click outside to close" handler for our navbar to get along with TypeScript.
    -   **clickOutside.ts** - Handlers for the "click outside to close" handler for our navbar.
    -   **navbar-links.ts** - Navigation definitions file for our navbar and footer.
    -   **posts.ts** - Library of functions for retrieving, paging, and sorting posts from the markdown files included in `postdata`.
    -   **socials.ts** - Social Media definitions file for our footer and /connect pages.
-   **Hero Background Image** - I've included a hero background image in `./static/images` that you are welcome to use, or replace with your own hero-background. The source image is from unsplash by [Ryan Hutton](https://unsplash.com/@ryan_hutton_): https://unsplash.com/photos/Jztmx9yqjBw.
-   **Netlify Build Config File** - I've included a `netlify.toml` in the root of the repo that will be used by netlify when deploying our solution to the web. This also contains the command to copy the Canvas Dependencies mentioned above.

## Other Modified Files

-   **.gitignore** - Added `/build`, `/functions`, `/static/postimages` and `/deploy/dist` so that they wouldn't be committed to the repo.
-   **.prettierrc** - Forced use of spaces (because spaces > tabs) and tabWidth of 4.

# SvelteKit Routes

Your new portfolio page is going to have the following different routes.

-   / - Your portfolios home page.
-   /blog/[pageNumber] - A list of all the articles and content that you post to your portfolio. Each [pageNum] will contain sorted, and paged out snippets of your articles for ease of access.
-   /article/[slug] - A single article of content that you post to your portfolio.
-   /connect - A page that prominently displays where people can find you on social media, and a form to contact you using netlify forms.

### How Do I Add a Route to my SvelteKit app?

SvelteKit uses a filesystem based router, where each route corresponds to a svelte component. You place these components inside of the `src/routes` folder. You can see that the repo has already given you a index.svelte file which corresponds to the `/` route. This is your home page.

## Creating The File Structure

Let's go ahead and create a few svelte components so we can get our routing off the ground. Create the following folders and files (marked in **bold** below).

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
-   `/src/routes/index.svelte` - Fill this with SNIPPETS/04.txt

Once you've copied the snippets into their respective files, you should be able to open a terminal window, and run `npm run dev` to start your server. Navigating to the following urls, you should see your pages you just created.

-   http://localhost:3000/
-   http://localhost:3000/connect
-   http://localhost:3000/article/hello
-   http://localhost:3000/blog/1

Cool, we've got pages! Now let's give our end users a way to navigate our portfolio.

## Adding Navigation

Every great portfolio page has a centralized way to navigate to different parts of the site / app. We're going to add a Navbar component to our Svelte app.

Inside of `./src/components` create a new file called `Navbar.svelte`, and fill it with the contents of **SNIPPETS/05.txt**

Now is a good time for us to talk about the structure of a component in Svelte (these .svelte files). A svelte component can contains javascript for functionality, css for styling, and html for structure. Typically a Svelte component will be laid out like the following:

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

Our `Navbar.svelte` component contains both javascript and structure, but not styles, as we're mainly using TailwindCSS for composing our styles. That's just fine.

Take a minute to read through the comments in Navbar.svelte to better understand what's going on under the hood.
