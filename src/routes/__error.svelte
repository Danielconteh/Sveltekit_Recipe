<script context="module">
  export function load({ error, status }) {
      return {
          props: {
              message: error.message,
              status // same as status: status
          }
      };
  }
</script>

<script>
import ErrorScreen from "../component/errors/ErrorScreen.svelte";

import NotFoundScreen from "../component/errors/NotFoundScreen.svelte";
import {goto} from '$app/navigation';

 
 export let message;
  export let status;
    $:console.log({ error, status })


  $:if(message === 'error loading dynamically imported module')  goto('/')
  

</script>

{#if status.startsWith('4')} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFoundScreen />
{:else}
  <ErrorScreen {message} {status} />
{/if}
