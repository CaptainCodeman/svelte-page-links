<script lang="ts">
	import type { Snippet } from 'svelte'
	import { pages } from './pages.js'

	interface Props {
		page: number
		total: number
		ends?: number
		adjacent?: number
		prev?: Snippet<[number]>,
		next?: Snippet<[number]>,
		link: Snippet<[number]>,
		divider?: Snippet<[number]>,
	}

	let { page, total, ends = 1, adjacent = 1, prev, next, link, divider }: Props = $props()
	let pageLinks = $derived(pages(page, total, ends, adjacent))
</script>

{#each pageLinks as pageLink}
	{#if pageLink.type === 'prev' && prev}
		{@render prev(pageLink.page)}
	{/if}

	{#if pageLink.type === 'next' && next}
		{@render next(pageLink.page)}
	{/if}

	{#if pageLink.type === 'link'}
		{@render link(pageLink.page)}
	{/if}

	{#if pageLink.type === 'divider' && divider}
		{@render divider(pageLink.page)}
	{/if}
{/each}
