<script>
    import dayjs from 'dayjs';
    import marked from 'marked';
    import { getSnippet } from '../lib/post-helpers';

    export let post;
</script>

<div
    class="flex flex-col overflow-hidden border-[1px] border-t-[5px] border-t-blog-primary border-x-[#cccccc] border-b-[#bbbbbb] rounded-lg"
>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <a href="/article/{post.slug}" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{post.title}</p>
                <p class="mt-3 text-base text-gray-500">
                    {getSnippet(marked(post.content), 30)}
                </p>
            </a>
        </div>
        <div class="mt-3 flex items-center">
            <div>
                <p class="text-sm font-medium text-gray-600">
                    <a href="/" class="hover:underline">{post.author}</a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime={dayjs(post.date).format('YYYY-DD-MM')}
                        >{dayjs(post.date).format('MMM D, YYYY')}</time
                    >
                    <span aria-hidden="true"> &middot; </span>
                    <span> {post.readTimeMinutes} min read </span>
                </div>
            </div>
        </div>
    </div>
</div>
