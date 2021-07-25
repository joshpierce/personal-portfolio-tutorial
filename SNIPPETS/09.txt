<script lang="ts">
    import BlogSnippet from './BlogSnippet.svelte';
    import Pager from './Pager.svelte';

    export let posts;
    export let pages = [];
    export let pageNum = 1;
    export let title: string = undefined;
</script>

<div class="relative bg-gray-50 pt-12 pb-16 px-4 sm:px-6 lg:pt-12 lg:pb-20 lg:px-8">
    <div class="relative max-w-7xl mx-auto">
        {#if title}
            <div class="text-center">
                <h2 class="text-2xl tracking-tight font-bold text-gray-900 sm:text-4xl">
                    {title}
                </h2>
            </div>
        {/if}
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {#each posts as post}
                <BlogSnippet {post} />
            {/each}
        </div>
    </div>
    {#if pages.length > 0}
        <Pager {pages} {pageNum} />
    {/if}
</div>
