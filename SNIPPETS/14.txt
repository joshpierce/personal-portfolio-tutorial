import type { EndpointOutput } from '@sveltejs/kit';
import { getAllPostFiles, sortPostsByDate, getPostsPage, getPostsData } from '../../lib/posts';

export async function get(): Promise<EndpointOutput> {
    console.log('GET: /posts/recent-posts.json');
    const posts = getAllPostFiles();
    const sortedPosts = sortPostsByDate(posts);
    const recentPosts = getPostsPage(sortedPosts, 1, 3);
    const recentPostsWithData = getPostsData(recentPosts);

    if (recentPosts) {
        return {
            body: JSON.stringify(recentPostsWithData)
        };
    }
}
