<script>
// @ts-nocheck
  import { useQuery } from "@sveltestack/svelte-query";


 	import {goto} from '$app/navigation';
		import { browser} from '$app/env';

		const refresher = ()=> goto('/',{
						replaceState: true,
		})

	import axios from 'axios'
	import { fly } from 'svelte/transition';
	import { store } from '../store';
	import Recipes from '../component/recipes.svelte';
	import FilterRecipe from '../component/filterRecipe.svelte';
	import { onMount } from "svelte";

	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	import Icon from '@iconify/svelte';

	import Banner from '../component/banner.svelte';
	import Header from '../component/header.svelte'

	let Carousel;

  onMount(async () => {
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });

		
		const fetchRecipe = (q)=> `https://forkify-api.herokuapp.com/api/v2/recipes?search=${q}&key=2b6e977f-717b-462d-9ddd-0191e4dd46bc`


		$: queryResult = useQuery(['recipe', JSON.parse($store)?.name],  () => axios.get(fetchRecipe(JSON.parse($store)?.name)), {
			cacheTime:60 * 60 *24,
			retry:10,
			refetchOnWindowFocus:true
		});

		$: if($queryResult?.data?.data?.data?.recipes && !$queryResult.isLoading ) {
			$store = JSON.stringify({name:JSON.parse($store)?.name})
		}
		let ani = true;
		
		$: if(browser){
			 window.addEventListener('load', ()=>{
					ani = true;
				console.log('object')
			})
		}
	
	
	
</script>

<!-- HTML SECTION -->
{#if browser}
	 <!-- content here -->
		<Header/>
		
		<svelte:component this={Carousel} arrows={false} autoplay={ani}  pauseOnFocus={true} dots={false} duration={600} autoplayDuration={9000} timingFunction='ease-in' style='overflow: hidden;'>
			
			<Banner/>
					
</svelte:component>



<FilterRecipe/>

{/if}

<!-- isLoading or status === 'loading' - The query has no data and is currently fetching -->

{#if $queryResult.isLoading}
		<div class="spinner">
					<Icon icon="ei:spinner-2" color="#999" width="50" />
		</div>
{/if}



{#if $queryResult?.data?.data?.data?.recipes && !$queryResult.isLoading }

	<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>


		<Recipes recipes={$queryResult?.data?.data?.data?.recipes} />


		{#if typeof window != 'undefined'}
		<div class='cooking_ani'>

			<LottiePlayer
							src="src/lib/assets/cooking.json"
							autoplay="{true}"
							loop="{true}"
							controls="{false}"
							renderer="svg"
							width={300}
							background="#fff"
							height="auto"	
					/>
		</div>
			{/if}


		<footer class="footer">
				<p>Created By Daniel Conteh</p>
				<p>copyright &copy; {new Date().getFullYear()}</p>
				<p>built with sveltekit <a href="/"> danico.com</a></p>
		</footer>
	</section>

{/if}  


<!-- isError or status === 'error' - The query encountered an error -->

{#if $queryResult.isError}

<div class="refersh_container">
	<!-- THROW EROR TO GLOBAL EROR HANDLER -->
			<p>something went wrong! please try again</p>
			<button on:click={refresher}>refersh</button>
</div>

{/if}




<!-- STYLE CSS -->
<style>

	
.spinner{
	display: flex;
	justify-content: center;
	overflow: hidden;
	overflow-x: hidden;
	margin-top: 2rem;
	width:100%
	padding0rem 3rem;
	animation: spinner 900ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

@keyframes spinner {
 0%{transform: rotate(0deg);}
	100%{transform: rotate(360deg);}
}

	.footer {
		padding: 5rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		flex-direction: column;
		color: #222;
		text-transform: capitalize;
		 
	}
	.footer p a {
		text-decoration: none;
		color: gray;
	}
	.cooking_ani{
		padding:.7rem 0rem; 
		display:flex; 
		justify-content: center;
	}

	/* refersh_container */
	.refersh_container{
		display: flex;
		color:#222;
		flex-direction: column;
		align-items: center;
		font-size: 1.4rem;
		text-transform: capitalize;
		letter-spacing: .12rem;
		font-family: Roboto;
	}

	.refersh_container button{
		text-transform: capitalize;
		text-decoration: none;
		color:dodgerblue;
		display: inline-block;
		padding:.7rem 1.7rem; 
		font-size:1.85rem;
		border:1px solid rgb(36, 9, 9);
		border-radius: 1rem;
		font-family: Tapestry;
		background:transparent;
	}
</style>
