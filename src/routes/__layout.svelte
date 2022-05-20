<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress css
	import 'nprogress/nprogress.css';


	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}



</script>

<svelte:head>	

	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" 
crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&family=Tapestry&display=swap" rel="stylesheet"> 

</svelte:head>

<main>
	<slot />
</main>

<style>
	/* GLOBAL SCOPE */
	:global(html){
		scroll-behavior: smooth;
			font-size: 62.5%;
		box-sizing: inherit;
	}
  :global(body){
     margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
  
