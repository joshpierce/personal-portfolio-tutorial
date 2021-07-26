import { getPostData, getAllPostFiles } from '../src/lib/posts';
import { promises as fs, existsSync, mkdirSync } from 'fs';
import path from 'path';
import canvas from 'canvas';
import dayjs from 'dayjs';
const { createCanvas, loadImage } = canvas;

const imagesDir = './static/postimages';

(async () => {
    console.log('Starting Image Generation for Post Images');

    console.log('Checking to see if postimages folder exists');

    if (!existsSync(imagesDir)) {
        mkdirSync(imagesDir);
    }
    // Start out by getting all the posts
    const posts = getAllPostFiles();

    // Loop over the posts and get the data for each one
    const postsWithData = posts.map((post) => {
        return getPostData(post);
    });

    // Generate an image for each post and save it to the postimages folder
    for (const postWithData of postsWithData) {
        const width = 1200;
        const height = 627;
        const titleTextSize = 40;
        const titleTextSpacing = 40;
        const titleMaxLines = 3;
        const titleMaxWidth = 1000;
        const subTitleTextSize = 26;
        const subTitleTextSpacing = 50;
        const avatarWidth = 150;
        const avatarHeight = 150;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        //Start by drawing the background image
        const backgroundImage = await loadImage(
            path.join(process.cwd(), 'static/images/hero-background.jpg')
        );
        context.drawImage(backgroundImage, 0, 0, width, height);

        // Process lines of text that will be drawn on the image
        setFont(context, titleTextSize, 'Menlo', '#fff', true, 'center');
        const titleText = `${postWithData.title}`;
        const titleLines = getLines(context, titleText, titleMaxWidth, titleMaxLines);

        setFont(context, subTitleTextSize, 'Menlo', '#fff', false, 'center');
        const subTitleParts = [
            `By: ${postWithData.author}`,
            `${dayjs(postWithData.date).format('MMMM D, YYYY')}`,
            `${postWithData.readTimeMinutes} min read`
        ];
        let subTitleLine = '';
        for (const part of subTitleParts) {
            if (context.measureText(subTitleLine + part).width <= 1000) {
                subTitleLine += (subTitleLine ? ' | ' : '') + part;
            }
        }

        const titleLineHeight = titleTextSize + titleTextSpacing;
        const subTitleLineHeight = subTitleTextSize + subTitleTextSpacing;
        const totalHeight = avatarHeight + titleLineHeight * titleLines.length + subTitleLineHeight;

        const avatarLeft = width / 2 - avatarWidth / 2;
        const avatarTop = height / 2 - totalHeight / 2;

        const avatarImage = await loadImage(path.join(process.cwd(), 'static/images/avatar.png'));
        context.drawImage(avatarImage, avatarLeft, avatarTop, avatarWidth, avatarHeight);

        const titleLineBottom = avatarTop + avatarHeight + titleLineHeight;
        setFont(context, titleTextSize, 'Menlo', '#fff', true, 'center');
        titleLines.forEach((line, lineIdx) => {
            if (lineIdx <= 2) {
                context.fillText(line, width / 2, titleLineBottom + lineIdx * titleLineHeight);
            }
        });

        if (subTitleLine) {
            const subTitleLineBottom =
                avatarTop + avatarHeight + titleLineHeight * titleLines.length + subTitleLineHeight;
            setFont(context, subTitleTextSize, 'Menlo', '#fff', false, 'center');
            context.fillText(subTitleLine, width / 2, subTitleLineBottom);
        }

        const buffer = canvas.toBuffer('image/jpeg');
        const filePath = `${imagesDir}/${postWithData.slug}.jpg`;
        await fs.writeFile(filePath, buffer);

        console.log(`Created og:image for ${postWithData.title} | ${filePath}`);
    }
})();

// Set's canvas context font size, style, and fill color
function setFont(ctx, fontSize, fontFamily, fillColor, isBold, textAlign) {
    ctx.font = `${isBold ? 'bold ' : ''}${fontSize}pt ${fontFamily}`;
    ctx.textAlign = textAlign || 'center';
    ctx.fillStyle = fillColor;
}

// Gets Lines Given a Passed In Text, and Max Width
function getLines(ctx, text, maxWidth, maxLines) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines.slice(0, maxLines);
}
