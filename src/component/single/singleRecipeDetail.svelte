

<script>
// @ts-nocheck
  import Icon from '@iconify/svelte';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  export let data;

</script>


<!-- RECIPE DETAIL -->
 <div class="recipe_container__detail">

    <div class="recipe__detail">
              
      <div class="recipe__detail_list">
          <Icon style="margin-right:.4rem;" icon="ant-design:clock-circle-outlined" color="brown" width="1.75rem" />
          <span>{data.cooking_time}</span>
          <span>minutes</span>
      </div>

        <div class="recipe__detail_list">
          <Icon style="margin-right:.4rem; margin-left:1rem" icon="carbon:user-multiple" color="brown" width="1.75rem" />
          <span>{data.servings}</span>
          <span>servings</span>

          <!-- <Icon style="margin-left:1rem; cursor:pointer; " icon="akar-icons:circle-minus" color="brown" width="1.75rem" />
          <Icon style="cursor:pointer;margin-left:1rem;" icon="akar-icons:circle-plus" color="brown" width="1.75rem" />    -->
      </div>
    
   </div>

   
   <div class="recipe_bookmark">
    
    {#if typeof window != 'undefined'}
   <LottiePlayer
			    src="/preparing-food.json"
					autoplay="{true}"
					loop="{true}"
					controls="{false}"
					renderer="svg"
					width={70}
					background="#f9f5f3"
					height="auto"	
				/>
    {/if}

   </div>

 </div>


    <style>
      /* RECIPE DETAIL SECTION */

    .recipe_container__detail{
      padding: 2.7rem 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
     @media screen and (max-width: 50em) {
		 .recipe_container__detail{
       margin-top: 2.5rem;
       gap: 1.5rem;
     }
	}
    @media screen and (max-width: 31.25em) {
		 .recipe_container__detail{
       flex-direction: column;
       gap: 2rem;
     }
	}

   @media screen and (max-width: 18.75em) {
		 .recipe_container__detail{
       flex-direction: column;
       gap: .5rem;
     }
	}

    .recipe__detail{
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }
    .recipe__detail_list{
      display: flex;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: .12rem;
      color: #222;
    }
    .recipe__detail_list span{
      margin-right: .8rem;
      vertical-align: middle;
      font-size: 1.25rem;
    }
    @media screen and (max-width: 50em) {
      .recipe__detail_list span{
        margin-right: .6rem;
      }
    }
    @media screen and (max-width: 31.25em) {
      .recipe__detail_list span{
        margin-right: .4rem;
        font-size: 1.15rem;

      }
    }

   @media screen and (max-width: 18.75em) {
		 .recipe__detail_list span{
        margin-right: .3rem;
        font-size: 1rem;

      }
	}
    
    .recipe_bookmark{
      display: flex;
      align-items: center;
      transform:translateY(-8px)
    }

    </style>