<script>
	import { imgRotate,initialPageNumber } from '../store';
	import { onMount } from "svelte";


	import img1 from '$lib/assets/recipe2.webp';
	import img2 from '$lib/assets/recipe4.jpg';
	import img3 from '$lib/assets/recipe6.jpg';
	import img4 from '$lib/assets/recipe9.jpg';
	import img5 from '$lib/assets/recipe11.jpg';
	let items = [img1,img2,img3,img4,img5]

// simple trick [waite for the image before the animation start]
	let waiting = 0
    
    const notifyLoaded = () => {
					$imgRotate = JSON.stringify({ rotate: true })
    }
    
    const onload = el => {
					waiting++
					el.addEventListener('load', () => {
									$imgRotate = JSON.stringify({ rotate: false })
            waiting--
            if (waiting === 0) {
                notifyLoaded()
            }
        })
    }


	let Carousel;

			
  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });


</script>



		<svelte:component this={Carousel} 
		arrows={false} 
		autoplay={JSON.parse($imgRotate)?.rotate}  
		pauseOnFocus={true} 
		dots={false}  
		initialPageIndex={JSON.parse($initialPageNumber)?.page}
		on:pageChange={
    event => $initialPageNumber = JSON.stringify({page:event.detail})
			}>
			
			{#each items as item,index}
			<div key={index} class="banner" style="width:90%; position:relative;">
			
				<img use:onload src={item} alt="baner_image" srcset="" width="100%" height="100%"  style="object-fit: cover; object-position: center top; overflow: hidden;">				
			</div>
			
			{/each} 
		</svelte:component>
					
	<style>
		.banner{
			height:45vh;
			/* width:100vw;
			max-width:100vw; */
			width:90%;
			overflow: hidden;
			cursor: pointer;
		}
			@media screen and (min-width: 50em) {
		.banner{
			height:65vh;
		}
	}
	</style>
