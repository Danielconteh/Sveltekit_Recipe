


<script>
import Icon from "@iconify/svelte";


 export let message;

	import {goto} from '$app/navigation';

const refresher = ()=> goto('/',{
    replaceState: true,
    noscroll: true
})
</script>

<div class="refersh_container">
<div class="error_container">
	 <p>sorry <Icon icon="clarity:sad-face-solid" color="blue" /> something went wrong.</p>
 <!-- <p>{status}</p> -->
	<p>{message}</p>
	<button on:click={refresher}>refersh</button>
</div>
</div>






<style>
 /* refersh_container */
	.refersh_container{
		display: flex;
		color:#222;
		flex-direction: column;
		align-items: center;
  justify-content: center;
		font-size: 1.4rem;
		text-transform: capitalize;
		letter-spacing: .12rem;
		font-family: Roboto;
		height: 100vh;
	}
.error_container{
	margin:	auto;
	text-align: center;
	
}
	.refersh_container button{
		text-transform: capitalize;
		text-decoration: none;
		color:dodgerblue;
		display: inline-block;
		padding:.7rem 1.7rem; 
		font-size:1.85rem;
		border:1px solid brown;
		border-radius: 1rem;
		font-family: Tapestry;
		background: transparent;
		cursor: pointer;
	}
</style>