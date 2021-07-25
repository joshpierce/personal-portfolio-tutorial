<script>
    import Navbar from '../components/Navbar.svelte';    
    import '../app.postcss';
</script>

<div class="flex flex-col h-full">
    <Navbar />
    <slot />    
</div>
