<script>
	import Image from "svelte-image";
	import { imgRotate,initialPageNumber } from '../store';
	import { onMount } from "svelte";

	let blur=0.75

	import img1 from '$lib/assets/recipe2.webp?webp&srcset&fit=cover';
	import img2 from '$lib/assets/recipe4.jpg?webp&srcset&fit=cover';
	import img3 from '$lib/assets/recipe6.jpg?webp&srcset&fit=cover';
	import img4 from '$lib/assets/recipe9.jpg?webp&srcset&fit=cover';
	import img5 from '$lib/assets/recipe11.jpg?webp&srcset&fit=cover';
	

	
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
		loaded=[5]
		on:pageChange={
    event => $initialPageNumber = JSON.stringify({page:event.detail})
			}>
			

			{#each items as item,index}
			<div key={index} class="banner" style="width:100%; position:relative; overflow:hidden">


					<img use:onload class="selfImg" srcset={item} alt="baner_image"width="100%" height="100%" />			
			
			</div>
			
			{/each} 
		</svelte:component>
					
	<style>
		img{
				object-fit: cover; 
				object-position: center top; 
				overflow: hidden;
		}
		.banner{
			height:45vh;
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
