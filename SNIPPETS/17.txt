<script context="module">
    export const prerender = true;

    export async function load({ page, fetch, session, context }) {
        // Retrieve data about the post
        const slug = page.params.slug;
        const url = `/posts/${slug}.json`;
        const res = await fetch(url);

        // If the response is successful, render the post
        if (res.ok) {
            return {
                props: {
                    post: await res.json()
                }
            };
        }

        // Otherwise, return an error
        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    }
</script>

<script>
    import marked from 'marked';
    import Hero from '../../components/Hero.svelte';
    import dayjs from 'dayjs';
    import { getSnippet } from '../../lib/post-helpers';

    export let post;
</script>

<svelte:head>
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content="/postimages/{post.slug}.jpg/" />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={getSnippet(marked(post.content), 30)} />
</svelte:head>

<Hero
    title={post.title}
    subTitle={`By&nbsp;${post.author} | ${dayjs(post.date)
        .format('MMMM D, YYYY')
        .replace(' ', '&nbsp;')} | ${post.readTimeMinutes}&nbsp;min&nbsp;read`}
/>
<div>
    <article class="prose lg:prose-xl px-4 mx-auto mt-5">{@html marked(post.content)}</article>
</div>

<style>
    p {
        padding-top: 0.5rem;
    }
</style>
