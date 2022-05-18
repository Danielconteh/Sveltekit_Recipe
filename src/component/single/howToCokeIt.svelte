<script>
 import Icon from '@iconify/svelte';
export let data;

</script>


<div class="guide">
 <h1>how to cook it</h1>

 <div class="guide_instruction">
  <p>This recipe was carefully designed and tested by <span>{data.publisher}</span>. Please check out directions at their website.</p>

  <a class="guide_instruction_link" href={data.source_url} target="">
   <span class="guide_instruction_flex">
    <span class="direction">Directions</span>
    <Icon icon="bi:arrow-right" color="white" />

   </span>
  </a>

 </div>
</div>


<style>
 .guide{
  display: flex;
  align-items: center;
  flex-direction: column;
 }
 .guide h1{
  text-transform: uppercase;
  letter-spacing: .12rem;
  padding: 1.2rem;
  color:brown;
 }
 .guide_instruction{
  font-size: 1.5rem;
  letter-spacing: .1rem;
  color: #615551;
  text-align: center;
  padding:.6rem 3rem;
 }
 @media screen and (max-width: 500px) {
      .guide_instruction{
        font-size: 1.3rem;
        padding:.6rem 1.2rem;
        line-height: 2rem;
      }
    }
 .guide_instruction p span{
  color: #222;
 }

 /* LINK */
 .guide_instruction_link{
  text-decoration: none;
  display:inline-flex;
  background: brown;
  padding: 1.25rem 2rem;
  color:#fff;
  margin:2rem 0rem;
  border-radius: 10rem;
  transition: all .2s;
  cursor: pointer;
  vertical-align: middle;
  font-weight: 600;
  margin-bottom: 4rem;
 }
 .guide_instruction_flex{
  display:flex;
  align-items: center;
 }
 .guide_instruction_flex span{
  margin-right: 1rem;
 }

 .guide_instruction_link:hover{
   transform: scale(1.05);
 }
</style>