<script context="module">
    export const prerender = true;
</script>

<script>
    import socials from '../lib/socials';
    import ConnectIcon from '../components/ConnectIcon.svelte';
</script>

<div class="container mx-auto flex-grow px-8">
    <h1 class="text-3xl mt-8 md:mt-16">Connect With Me</h1>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-5 lg:max-w-none">
        {#each socials as social}
            <ConnectIcon
                name={social.name}
                icon={social.icon}
                url={social.url}
                bgColor={social.bgColor}
                color={social.color}
            />
        {/each}
    </div>
    <h1 class="text-3xl mt-8 md:mt-16">Contact Me</h1>
    <p class="my-4 lg:w-1/2">
        I do my best to respond to all in-bound messages quickly, generally within a day or two of
        arrival. If I'm currently on vacation in the Amazon, Time-to-Response may be delayed.
    </p>

    <form
        name="Contact Form"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="lg:w-1/2"
        enctype="application/x-www-form-urlencoded"
    >
        <p class="hidden">
            <label>Your Other Name: <input type="text" name="bot-field" /></label>
        </p>
        <div class="">
            <label class="block text-sm text-gray-00 mb-1" for="con_name">Name</label>
            <input
                class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded border-none"
                id="con_name"
                name="con_name"
                type="text"
                required
                placeholder="Your Name"
                aria-label="Name"
            />
        </div>
        <div class="mt-3">
            <label class="block text-sm text-gray-00 mb-1" for="con_email">Email</label>
            <input
                class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded border-none"
                id="con_email"
                name="con_email"
                type="email"
                required
                placeholder="Your Email Address"
                aria-label="Email"
            />
        </div>
        <div class="mt-3">
            <label class="block text-sm text-gray-00 mb-1" for="con_phone">Phone</label>
            <input
                class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded border-none"
                id="con_phone"
                name="con_phone"
                type="tel"
                placeholder="Your Phone Number"
                aria-label="Phone"
            />
        </div>
        <div class="mt-3">
            <label class="block text-sm text-gray-00 mb-1" for="con_message">Message</label>
            <textarea
                rows="6"
                class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded border-none"
                id="con_message"
                name="con_message"
                required
                placeholder="Your Message"
                aria-label="Message"
            />
        </div>
        <p>
            <button
                type="submit"
                class="bg-blog-primary text-white font-bold mt-2 py-2 px-4 rounded">Submit</button
            >
        </p>
    </form>
</div>