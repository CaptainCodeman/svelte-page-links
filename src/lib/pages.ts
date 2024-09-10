export const LinkType = ['prev', 'next', 'divider', 'link'] as const

export type LinkType = (typeof LinkType)[number]

export interface Link {
	page: number
	type: LinkType
}

export function* pages(page: number, total: number, ends = 1, adjacent = 1): Generator<Link> {
	// page = current page
	// total = total number of pages
	// ends = number to always have at ends
	// adj = number of adjacent links to current page
	const first = ends // first after start
	const last = total - ends + 1 // last before end
	const left = page - adjacent // left of current
	const right = page + adjacent // right of current

	yield { page: Math.max(page - 1, 1), type: 'prev' }

	let p = 1
	while (p <= total) {
		if (
			// show end pages
			p <= first ||
			p >= last ||
			// show pages adjacent to current page
			(p >= left && p <= right) ||
			// avoid dividers if it's a single page
			(p === left - 1 && p === first + 1) ||
			(p === right + 1 && p === last - 1)
		) {
			yield { page: p, type: 'link' }
			p++
		} else {
			if (p < page) {
				yield { page: Math.ceil((left - first) / 2) + first, type: 'divider' }
				p = left
			} else {
				yield { page: Math.floor(last - (last - right) / 2), type: 'divider' }
				p = last
			}
		}
	}

	yield { page: Math.min(page + 1, total), type: 'next' }
}
