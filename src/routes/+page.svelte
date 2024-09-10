<script lang="ts">
	import Pages from 'svelte-page-links'

	let page = 1
	let total = 100
	let ends = 1
	let adjacent = 1
</script>

<svelte:head>
	<title>svelte-page-links</title>
</svelte:head>

<h1 class="text-gray-700 font-extrabold tracking-tight text-3xl">
	svelte-page-links
	<a href="https://www.npmjs.com/package/svelte-page-links">
		<svg class="inline size-4" fill="#CB3837" role="img" viewBox="0 0 24 24">
			<title>npm</title>
			<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"></path>
		</svg>
	</a>
</h1>

<p class="mt-2 text-gray-600">
	Pagination links for Svelte
</p>

<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
	<div class="sm:col-span-2">
		<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Current Page</label>
		<input class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" inputmode="numeric" bind:value={page} min="0" max={total} />
	</div>

	<div class="sm:col-span-2">
		<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Total Pages</label>
		<input class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" inputmode="numeric" bind:value={total} min="1" />
	</div>

	<div class="sm:col-span-2">
		<label for="email" class="block text-sm font-medium leading-6 text-gray-900">End Links</label>
		<input class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" inputmode="numeric" bind:value={ends} min="0" max="10" />
	</div>

	<div class="sm:col-span-2">
		<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adjacent Links</label>
		<input class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" inputmode="numeric" bind:value={adjacent} min="0" max="10" />
	</div>
</div>

<nav class="mt-8 flex rounded-md shadow-sm -space-x-px select-none" aria-label="Pagination">
	<Pages {page} {total} {ends} {adjacent}>
		{#snippet prev(num: number)}
			<button
				class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:text-gray-300"
				disabled={page <= 1}
				title="page {page}"
				onclick={() => (page = num)}
			>
				<span class="sr-only">Previous</span>
				<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{/snippet}

		{#snippet next(num: number)}
			<button
				class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:text-gray-300"
				disabled={page >= total}
				title="page {num}"
				onclick={() => (page = num)}
			>
				<span class="sr-only">Next</span>
				<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{/snippet}

		{#snippet link(num: number)}
			<button
				class="relative inline-flex items-center px-4 py-2 border text-sm font-medium tabular-nums {num === page
					? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
					: 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}"
				title="page {num}"
				onclick={() => (page = num)}>{num}</button
			>
		{/snippet}

		{#snippet divider(num: number)}
			<button
				class="relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
				title="page {num}"
				onclick={() => (page = num)}>&hellip;</button
			>
		{/snippet}
	</Pages>
</nav>
