<script>
	import { imgRotate } from '../store';

	import img1 from '$lib/assets/recipe2.webp';
	import img2 from '$lib/assets/recipe4.jpg';
	import img3 from '$lib/assets/recipe6.jpg';
	import img4 from '$lib/assets/recipe9.jpg';
	import img5 from '$lib/assets/recipe11.jpg';
	let items = [img1,img2,img3,img4,img5]

// simple trick
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


// $:console.log($imgRotate)



</script>





{#each items as item}

		<div class="banner" style="position: relative;object-position: center top; cursor:pointer;">
						<img use:onload src={item} alt="baner_image" srcset="" width="100%" height="100%"  style="object-fit: cover; object-position: center top;">				
		</div>

	{/each} 
					
	<style>
		.banner{
			height:45vh;
		}
			@media screen and (min-width: 50em) {
		.banner{
			height:60vh;
		}
	}
	</style>
