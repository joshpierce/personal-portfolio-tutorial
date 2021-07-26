import { convert } from 'html-to-text';

// Retrieves the first X words of the post content. Converts markdown to HTML and strips HTML tags.
export function getSnippet(content, numWords): string {
    // Convert the html content to plain text.
    content = convert(content, {
        selectors: [
            { selector: 'h1', options: { uppercase: false } },
            { selector: 'h2', options: { uppercase: false } },
            { selector: 'h3', options: { uppercase: false } },
            { selector: 'h4', options: { uppercase: false } },
            { selector: 'h5', options: { uppercase: false } },
            { selector: 'h6', options: { uppercase: false } }
        ]
    });

    let snippet = content.split(' ');
    snippet = snippet.slice(0, numWords);
    snippet = snippet.join(' ');
    return snippet;
}
