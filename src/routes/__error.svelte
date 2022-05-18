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

 
 export let message;
  export let status;
</script>

{#if status == 404} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFoundScreen />
{:else}
  <ErrorScreen {message} {status} />
{/if}
