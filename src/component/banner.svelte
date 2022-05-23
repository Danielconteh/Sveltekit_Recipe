<script>
	import { imgRotate,initialPageNumber } from '../store';
	import { onMount } from "svelte";

		let items = ['https://res.cloudinary.com/dbmrdwsfb/image/upload/v1653327682/Recipe/recipe6_ve0p71.jpg','https://res.cloudinary.com/dbmrdwsfb/image/upload/v1653327663/Recipe/recipe1_hyayjc.jpg','https://res.cloudinary.com/dbmrdwsfb/image/upload/v1653327645/Recipe/recipe11_iyysjk.jpg','https://res.cloudinary.com/dbmrdwsfb/image/upload/v1653327666/Recipe/recipe9_nmzwbo.jpg',]



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
			<div key={index} class="banner" style="width:100%; position:relative; overflow:hidden">


					<img use:onload src={item} alt="baner_image"width="100%" height="100%"  style="object-fit:	cover; position:relative;"/>			
			
			
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
