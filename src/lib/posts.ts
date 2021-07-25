/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Slim type allowing us to interact with the post on a limited basis
export interface Post {
    date: string;
    slug: string;
    fileName: string;
}

// Full type of a post exposing all required properties
export interface PostWithData extends Post {
    title: string;
    content: string;
    readTimeMinutes: number;
    author: string;
}

// The directory where the posts are stored
const postsDirectory = path.join(process.cwd(), 'postdata');

/**
 * Reads a directory of posts and returns the full list of posts (without details) and their dates.
 * */
export function getAllPostFiles(): Post[] {
    // Get all files in the posts directory.
    const fileNames = fs.readdirSync(postsDirectory);

    // Create an array of posts based on the files in the posts directory.
    const posts = fileNames.map((fileName) => {
        // Splits apart the file name into the post slug and the date.
        let [date, slug] = fileName.split('~');
        slug = slug.replace(/\.md$/, '');

        return { date, slug, fileName };
    });

    return posts;
}

/**
 * Finds a post file by it's slug and returns the post object.
 */
export function getPostBySlug(slug: string): Post | null {
    // Get all files in the posts directory.
    const fileNames = fs.readdirSync(postsDirectory);

    // Check to see if the post exists by the slug requested.
    const postFileName = fileNames.find((fileName) => {
        return fileName.endsWith(`${slug}.md`);
    });

    if (postFileName) {
        // Splits apart the file name into the post slug and the date.
        let [date, slug] = postFileName.split('~');
        slug = slug.replace(/\.md$/, '');

        return { date, slug, fileName: postFileName };
    } else {
        // If the files not found, return null.
        return null;
    }
}

/**
 *  Gets the data for a list of posts.
 */
export function getPostsData(posts: Post[]): PostWithData[] {
    const allPostsData = posts.map((post) => {
        return getPostData(post);
    });

    return allPostsData;
}

/**
 * Gets the data for a single post.
 */
export function getPostData(post: Post): PostWithData | null {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, post.fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data from the markdown file with the data about the file to create the full post.
    let postWithData: PostWithData = {
        slug: post.slug,
        date: post.date,
        fileName: post.fileName,
        author: matterResult.data.author,
        title: matterResult.data.title,
        content: matterResult.content,
        readTimeMinutes: calculateReadTime(matterResult.content)
    };

    return postWithData;
}

// Takes a list of posts and sorts them by date.
export function sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

// Takes a list of posts and returns a page of posts.
export function getPostsPage(posts: Post[], page: number, perPage: number): Post[] {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return posts.slice(startIndex, endIndex);
}

// Calculates the number of minutes it takes to read a post by the number of words divided by 200.
export function calculateReadTime(content: string): number {
    return Math.ceil(content.split(/\s+/).length / 200);
}
