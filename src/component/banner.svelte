<script>

  let items = ['./recipe1.jpg','./recipe2.webp','./recipe4.jpg','./recipe5.jpg','./recipe6.jpg','./recipe9.jpg','./recipe10.jpg','./recipe11.jpg','./recipe12.jpeg']
</script>





{#each items as item}

		<div class="banner" style="position: relative;object-position: center top; cursor:pointer;">
						<img src={item} alt="baner_image" srcset="" width="100%" height="100%"  style="object-fit: cover; object-position: center top;">				
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
