<script>
    export let title;
    export let subTitle;
</script>

<div class="py-[180px] bg-hero bg-cover bg-center flex flex-col">
    <div class="flex flex-col justify-self-center items-center">
        <img
            class="rounded-full h-48 mb-8"
            src="/images/avatar.png"
            alt="Josh's Face"
        />
        <h2 class="text-2xl sm:text-4xl px-4 font-bold mb-2 text-white text-shadow text-center">
            {title}
        </h2>
        <h3 class="sm:text-xl px-4 mb-8 text-white text-center">{@html subTitle}</h3>
    </div>
</div>
