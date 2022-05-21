<script>
	import {paginatedStore} from '../store'
	import { paginate, LightPaginationNav} from 'svelte-paginate'
	import Icon from '@iconify/svelte';
	import Image from "svelte-image";


	export let recipes;
	
	
			$: items = recipes
			$: currentPage = JSON.parse($paginatedStore)?.currentPage
			$: pageSize = JSON.parse($paginatedStore)?.pageSize
			$: paginatedItems = paginate({ items, pageSize, currentPage })


</script>

<!-- HTML SECTION -->
 
<div class="recipes">
	{#each [...new Map(paginatedItems.map((item) => [item['title'], item])).values()] as recipe}
		<a sveltekit:prefetch class="recipe_link" href='{recipe.id}'>
			<div class="recipe_card">
				<!-- ========================= -->
				<img class="recipe__image" srcset={recipe.image_url.replace('http', 'https')} alt={recipe.title} src={recipe.image_url.replace('http', 'https')}/>

				<div class="recipe__title">{recipe.title.split(/,|&|#|:/g)[0]}</div>

				<!-- =========================== -->
				<div class="recipe__text">
					<div class="recipe__icon-container">
						<Icon icon="ant-design:dollar-circle-outlined" />
						<span> spend less </span>
					</div>

					<div class="recipe__icon-container">
						<Icon icon="ant-design:clock-circle-outlined" />
						<span> save time</span>
					</div>

					<div class="recipe__icon-container">
						<Icon icon="emojione:credit-card" />
						<span> pay online </span>
					</div>

					<div class="recipe__icon-container">
						<Icon icon="bytesize:location" />
						<span> your door </span>
					</div>

					<!-- ===================== -->
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="paginate_buton">


	<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  on:setPage="{(e) => {
				currentPage = e.detail.page
				$paginatedStore = JSON.stringify({ currentPage, pageSize })		
		}}"
/>

</div>


<!-- STYLE SECTION -->
<style>

	a {
		text-decoration: none;
		color: #615551;
	}

	.recipes {
		display: grid;
		grid-template-columns: repeat(3, .7fr);
		overflow-x: scroll;
		padding:	2rem 3rem;
		gap:2rem 3rem;
		margin: 0 auto;
		min-height: 50vh;
		width:90%;
			-ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */

	}

.recipes::-webkit-scrollbar{
			display: none;
		 width: 0px;
   background: transparent; /* make scrollbar transparent */
	}
	@media screen and (max-width: 56.25em) {  /* 900px => 56.25em*/
		.recipes {
			grid-template-columns: repeat(2, 1fr);		
			width: 95%;
			padding:	2rem;
		}
	}

	@media screen and (max-width: 35.7em) { /*  660px => 35.7 500px => 31.25 */
		.recipes {
			display:flex;
			flex-direction: column;
			flex-wrap: wrap;
			width: 95%;
				padding:	2rem 0rem;
		}
	}



	.recipe_card {
		height: 100%;
	
		border-radius: 0.5rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

		margin: auto;
	}

	.recipe__image {
		width: 100%;
		object-fit: cover;
		height: 30.46rem;
		display: block;
		/* top-left | top-right | bottom-right | bottom-left */
		border-radius: 0.5rem 0.5rem 0px 0px;
	}

	.recipe__text {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		padding: 2rem 0rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 600;
	}


	.recipe__title {
		font-size: 1.3rem;
		padding: 1rem 0.5rem;
		letter-spacing: 0.1rem;
		white-space: nowrap;
		width: 30rem;
		text-overflow: ellipsis;
		overflow: hidden;
		margin: 0 auto;
		text-align: center;
		color: #222;
		font-family: 'Tapestry', cursive;
	}

	.recipe__icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.recipe__icon-container span {
		font-size: 1.4rem;
		letter-spacing: 0.1rem;
		text-transform: capitalize;
	}
	:global(svg, path) {
		font-size: 1.7rem;
		margin-right: 0.7rem;
	}
	.paginate_buton{
		width: 30rem;
		margin: 1.5rem auto;
	}
		@media screen and (max-width: 50em) {
		.paginate_buton{
				width: 60%;
	}
	}

</style>
