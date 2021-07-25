import type { EndpointOutput } from '@sveltejs/kit';
import { getAllPostFiles, sortPostsByDate, getPostsPage, getPostsData } from '../../lib/posts';

const pageSize = 9;

export async function get({ query }): Promise<EndpointOutput> {
    const pageNum = +query.get('page') || 1;

    console.log(`GET: /posts.json > page = ${pageNum}`);
    const posts = getAllPostFiles();
    const sortedPosts = sortPostsByDate(posts);
    const recentPosts = getPostsPage(sortedPosts, pageNum, pageSize);
    const recentPostsWithData = getPostsData(recentPosts);

    if (recentPosts) {
        return {
            body: JSON.stringify({
                pages: Math.ceil(sortedPosts.length / pageSize),
                posts: recentPostsWithData
            })
        };
    }
}
