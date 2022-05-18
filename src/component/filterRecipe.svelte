<script>
// @ts-nocheck
	import { store,items,paginatedStore } from '../store';
	$: loading = $store;


	const change_recipe =  e => {
		$store = JSON.stringify({name:e?.target?.textContent.replace('_', ' ')})
		$paginatedStore = JSON.stringify({ currentPage:1, pageSize:9 })
	}

	const active = e => {

	const target = e.target;

		Array.from(target?.parentElement.children).forEach(el => {
				el.style.background = ''
				el.style.color = '#222'
		});	
		target.style.background = 'rgb(181, 55, 55)';
			target.style.color = '#fff'
	
	}

	let loadActiveClass = node => {

		
		if(node.outerText.toLowerCase().replace('_', ' ').includes((JSON.parse($store)?.name))) {
	
			node.style.background = 'brown'
			node.style.color = '#fff'
				node.style.fontWeight = 800
			node.parentElement.scrollLeft = parseInt(node.offsetLeft) - (window.innerWidth / 3.5);
			
		}
	}
</script>

<div class="recipe_scroll">
	
	<div class="recipe_scroll_item" >

		<li class="recipe_scroll_item_list">

		{#each items as data}

			<button  disabled={JSON.parse(loading).loading ? true:false} class="recipe_scroll_item_list-button"  on:click={change_recipe} on:click={active} use:loadActiveClass>{data}</button>
			
			{/each}

		</li>
		
	</div>

</div>

<style>
	.recipe_scroll{
		overflow: hidden;
	}

	.recipe_scroll_item{
		display: flex;
		overflow:	hidden;
	
	}

	.recipe_scroll_item_list{
		list-style: none;
		padding: 1.5rem 1rem;
		display: flex;
		align-items: center;
		width: 100%;
		overflow-x: scroll;
			-ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
		padding: 2.5rem 1rem;

	}

.recipe_scroll_item_list::-webkit-scrollbar{
			display: none;
		 width: 0px;
   background: transparent; /* make scrollbar transparent */
	}

	.recipe_scroll_item_list-button{
		font-family: 'Roboto', sans-serif;
		font-weight: 600;
		letter-spacing: .1rem;
		font-size: 1.4rem;
		text-transform: capitalize;
		display: inline-block;
		letter-spacing: .15rem;
		border: 1px solid brown;
		padding: 1rem 1.7rem;
		margin: 0 .5rem;
		cursor: pointer;	
		color: #222;
		background: none;
		appearance: none;
		border-radius: .5rem;
		transition: background ease-in 250ms;
		font-style: italic;

	}
.recipe_scroll_item_list-button:hover{
	background: rgb(181, 55, 55);
	color: #fff !important;
}

</style>
