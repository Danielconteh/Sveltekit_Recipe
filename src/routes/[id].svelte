<script>
// @ts-nocheck


  import { QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";

  const queryClient = new QueryClient();

  import Home from "../component/single/Home.svelte";
</script>

<QueryClientProvider client={queryClient}>
	<Home/>
</QueryClientProvider>