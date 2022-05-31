
<script>
  import { page } from '$app/stores'
 
import SingleRecipIngredient from './singleRecipIngredient.svelte';
import SingleRecipeDetail from './singleRecipeDetail.svelte';
import HowToCokeIt from './howToCokeIt.svelte';

 import { useQuery } from "@sveltestack/svelte-query";
 import axios from 'axios'
 import ErrorScreen from '../errors/ErrorScreen.svelte'
	import Icon from '@iconify/svelte';



const queryResult =  useQuery($page?.url?.pathname.replace('/',''), ()=>  axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${$page?.url?.pathname.replace('/','')}?key=2b6e977f-717b-462d-9ddd-0191e4dd46bc`,),{
			cacheTime:60 * 60 *24,
			refetchOnWindowFocus:true
		})


</script>

  <svelte:head>
  <title>{$queryResult?.data?.data?.data?.recipe?.title || ''}</title>
  </svelte:head>

	//|| $queryResult.isFetching

    {#if $queryResult.isLoading}
    	<div class="spinner">
  		<Icon icon="ei:spinner" width="70" height="70" color="#fff" />

		</div>
  {/if}


  {#if $queryResult.isError}
     <ErrorScreen error={$queryResult?.error?.message}/>
  {/if}

  <div class="sigle_recipe_wraper">
  {#if $queryResult?.data?.data?.data?.recipe && !$queryResult.isLoading}


  <div class="container_space">

    <div class="single_recipe_container">

      <div class="recipe_img">
          <img  src={$queryResult?.data?.data?.data?.recipe?.image_url.replace('http', 'https')} alt={$queryResult?.data?.data?.data?.recipe?.title} srcset="" width="100%" height="300px" style="object-fit: cover;border-radius: .2rem;">

          <h1 class="recipe__title">
            <span>{$queryResult?.data?.data?.data?.recipe?.title}</span>
          </h1>

         <div class="overlayer"></div>

      </div>


      <!-- RECIPE DETAIL -->
      <SingleRecipeDetail data = {$queryResult?.data?.data?.data?.recipe}/>
      <!-- RECIPE DETAIL -->


        <!-- RECIPE  INGREDIENT -->
          <SingleRecipIngredient data = {$queryResult?.data?.data?.data?.recipe}/>
      <!-- RECIPE  INGREDIENT -->

      <!-- HOW TO COOK IT -->
            <HowToCokeIt data ={$queryResult?.data?.data?.data?.recipe}/>
      <!-- HOW TO COOK IT -->

   </div>

  </div>

  
  {/if}
</div>



<style>
.spinner{

  position: absolute;
  z-index: 1;
  width:100%
	padding0rem 3rem; 
	animation: spinner 700ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

@keyframes spinner {
 0%{transform: rotate(0deg);}
	100%{transform: rotate(360deg);}
}

  .sigle_recipe_wraper{
    background:linear-gradient(0deg, rgba(1, 1, 1, .75), rgba(1, 1, 1, 0.75)),url(src/lib/assets/recipe10.jpg);
    width: 100vw;
    min-height: 100vh;
    display: flex;
    position:relative; 
  }

  .container_space{
      margin:2rem auto; 
      width: 60%;
    }

  @media screen and (max-width: 81.25em) {
		 .container_space{
       margin:0rem auto;
      width: 70%;
    }
	}


  @media screen and (max-width: 62.5em) {
		 .container_space{
       margin:0rem auto;
      width: 100%;
    }
	}
  .single_recipe_container{
    background-color: #f9f5f3;
    height: auto;
    margin: auto;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
    border-radius: .4rem;
    overflow-x: hidden;
    }
  

    .recipe_img{
      position: relative;
    }
    .recipe__title{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%,20%) skewY(-6deg);
      color: #fff;
      font-weight: 700;
      font-size: 2.25rem;
      text-transform: uppercase;
      width: 50%;
      line-height: 1.95;
      text-align: center;
      z-index: 1;
    }
    @media screen and (max-width: 50em) {
      .recipe__title{
        width:100%
      }
    }

    .recipe__title span{
      -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        padding: 1.3rem 2rem;
        background-image: linear-gradient(to right bottom,#fbdb89,#f48982);
    }
     @media screen and (max-width: 50em) {
       .recipe__title span{
       padding: 1.3rem.1.5rem;
      }
    }

    .overlayer{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to right bottom,#fbdb89,#f48982);
      opacity: .6;
      overflow: hidden;
    }

   
   
    

</style> -->

