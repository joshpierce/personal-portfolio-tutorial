import type { EndpointOutput } from '@sveltejs/kit';
import { getPostData, getPostBySlug, Post } from '../../lib/posts';

export async function get({ params }): Promise<EndpointOutput> {
    console.log(`GET: /posts/[slug].json -> [slug] = ${params.slug}`);
    const post: Post = getPostBySlug(params.slug);

    const postWithData = getPostData(post);

    if (postWithData) {
        return {
            body: JSON.stringify(postWithData)
        };
    }
}
