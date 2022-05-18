<script>
// @ts-nocheck
  import { QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";


import Home from "../component/Home.svelte";

  const queryClient = new QueryClient();

</script>


<svelte:head>
	<title>Home | Recipes Center</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Home/>
</QueryClientProvider>
