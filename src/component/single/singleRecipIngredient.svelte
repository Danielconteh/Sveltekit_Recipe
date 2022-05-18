<script>
import Icon from '@iconify/svelte';
export let data;

 
</script>





   <div class="recipe-ingredient_list">
      <h1>Recipe ingredient</h1>

      <ul class="recipe_ingredient">
        {#each data?.ingredients as ingredient}
          <li>
            <Icon style="
            height: 2rem;width: 2rem;margin-right: 1.1rem;flex: 0 0 auto;margin-top: .1rem;" icon="akar-icons:check" color="brown" />
            <div class="recipe_ingredient_quantity">{ingredient?.quantity || ''}</div>
            <div class="recipe_ingredient_unit">{ingredient?.unit || ''}</div>
            <div class="recipe_ingredient_desc">{ingredient?.description || ''}</div>

          </li>
        {/each}
      </ul>
  
    </div>



  <style>

   /* RECIPE INGREDIENT LIST */
    .recipe-ingredient_list{
       background-color: #f7f5f1;;
    }
    .recipe-ingredient_list h1{
      text-align: center;
      color: brown;
      text-transform: uppercase;
      letter-spacing: .12rem;
      padding-top: 2rem;
    }

    @media screen and (max-width: 50em) {
      .recipe-ingredient_list h1{
        padding-top: 1rem;

      }
    }

    @media screen and (max-width: 31.25em) {
      .recipe-ingredient_list h1{
        padding-top: .6rem;

      }
    }

    .recipe_ingredient{
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 2.5rem 3rem;
      list-style: none;
      padding:2rem 6rem;
    }
    @media screen and (max-width: 50em) {
      .recipe_ingredient{
        padding:2rem 1rem;
         gap: 2rem 1rem;
      }
    }

     @media screen and (max-width: 31.25em) {
      .recipe_ingredient{
        grid-template-columns: 1fr;
        padding:2rem 1.5rem;
         gap: 2.5rem 1rem;
      }
    }

    .recipe_ingredient li{
      display:flex;
      font-size: 1.45rem;
      padding:1.5rem;
      color:#222;
      }
  @media screen and (max-width: 50em) {
      .recipe_ingredient li{
        padding: 1.5rem 1rem;
      }
    }
  
     @media screen and (max-width: 31.25em) {
      .recipe_ingredient li{
        font-size: 1.2rem;
      }
    }
  .recipe_ingredient_quantity,.recipe_ingredient_unit{
      margin-right: .5rem;
      flex: 0 0 auto;
    }

  </style>