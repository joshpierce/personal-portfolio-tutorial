<script>
    import Fa from 'svelte-fa';
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    const pagesToDisplay = 5;

    export let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    export let pageNum = 1;

    let startingPage = 1;
    if (pageNum >= 3 && pageNum <= pages.length - 2) {
        startingPage = pageNum - 2;
    } else if (pageNum >= pages.length - 1) {
        startingPage = pages.length >= pagesToDisplay ? pages.length - 4 : 1;
    }

    let displayPages = Array(pages.length > pagesToDisplay ? pagesToDisplay : pages.length)
        .fill(startingPage)
        .map((i, idx) => startingPage + idx);
</script>

<div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        {#if pageNum > 1}
            <a class="h-8 w-8" href={`/blog/${+pageNum - 1}`} rel="external">
                <div class="h-8 w-8 flex justify-center items-center rounded-full cursor-pointer">
                    <Fa icon={faChevronLeft} />
                </div>
            </a>
        {/if}
        <div class="flex h-8 font-medium rounded-full">
            {#each displayPages as displayPage}
                <a href={`/blog/${displayPage}`} class="h-8 w-8 mx-1" rel="external">
                    <div
                        class={`w-8 h-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full ${
                            pageNum == displayPage ? 'bg-blog-primary text-white' : ''
                        }`}
                    >
                        {displayPage}
                    </div>
                </a>
            {/each}
        </div>
        {#if pageNum < pages.length}
            <a class="h-8 w-8" href={`/blog/${+pageNum + 1}`} rel="external">
                <div class="h-8 w-8 flex justify-center items-center rounded-full cursor-pointer">
                    <Fa icon={faChevronRight} />
                </div>
            </a>
        {/if}
    </div>
</div>
