<script lang="ts">
	import type { Snippet } from 'svelte'
	import { pages, type Link } from './pages.js'

	interface Props {
		page: number
		total: number
		ends?: number
		adjacent?: number
		prev?: Snippet<[Link]>,
		next?: Snippet<[Link]>,
		link: Snippet<[Link]>,
		divider?: Snippet<[Link]>,
	}

	let { page, total, ends = 1, adjacent = 1, prev, next, link, divider }: Props = $props()
	let pageLinks = $derived(pages(page, total, ends, adjacent))
</script>

{#each pageLinks as pageLink}
	{#if pageLink.type === 'prev' && prev}
		{@render prev(pageLink)}
	{/if}

	{#if pageLink.type === 'next' && next}
		{@render next(pageLink)}
	{/if}

	{#if pageLink.type === 'link'}
		{@render link(pageLink)}
	{/if}

	{#if pageLink.type === 'divider' && divider}
		{@render divider(pageLink)}
	{/if}
{/each}
