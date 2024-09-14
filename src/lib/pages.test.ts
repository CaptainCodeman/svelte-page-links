import { pages, type Link } from './pages.js'

// render to a string for less verbose test definition
function render(links: Generator<Link>) {
	let results = []
	for (const link of links) {
		switch (link.type) {
			case 'prev':
				results.push(`<${link.page}`)
				break
			case 'next':
				results.push(`${link.page}>`)
				break
			case 'divider':
				results.push(`.${link.page}.`)
				break
			case 'link':
				results.push(`${link.page}`)
				break
		}
	}
	return results.join()
}

describe('10 pages, 2 end, 1 adjacent', () => {
	test.each([
		{
			page: 1,
			total: 10,
			expected: '<1,1,2,.5.,9,10,2>',
		},
		{
			page: 2,
			total: 10,
			expected: '<1,1,2,3,.6.,9,10,3>',
		},
		{
			page: 3,
			total: 10,
			expected: '<2,1,2,3,4,.6.,9,10,4>',
		},
		{
			page: 4,
			total: 10,
			expected: '<3,1,2,3,4,5,.7.,9,10,5>',
		},
		{
			page: 5,
			total: 10,
			expected: '<4,1,2,3,4,5,6,.7.,9,10,6>',
		},
		{
			page: 6,
			total: 10,
			expected: '<5,1,2,.4.,5,6,7,8,9,10,7>',
		},
		{
			page: 7,
			total: 10,
			expected: '<6,1,2,.4.,6,7,8,9,10,8>',
		},
		{
			page: 8,
			total: 10,
			expected: '<7,1,2,.5.,7,8,9,10,9>',
		},
		{
			page: 9,
			total: 10,
			expected: '<8,1,2,.5.,8,9,10,10>',
		},
		{
			page: 10,
			total: 10,
			expected: '<9,1,2,.6.,9,10,10>',
		},
	])('pages($page, $total) -> $expected', ({ page, total, expected }) => {
		expect(render(pages(page, total, 2))).deep.eq(expected)
	})
})

describe('5 pages, 2 end, 0 adjacent', () => {
	test.each([
		{
			page: 1,
			total: 5,
			expected: '<1,1,2,3,4,5,2>',
		},
		{
			page: 2,
			total: 5,
			expected: '<1,1,2,3,4,5,3>',
		},
		{
			page: 3,
			total: 5,
			expected: '<2,1,2,3,4,5,4>',
		},
		{
			page: 4,
			total: 5,
			expected: '<3,1,2,3,4,5,5>',
		},
		{
			page: 5,
			total: 5,
			expected: '<4,1,2,3,4,5,5>',
		},
	])('pages($page, $total) -> $expected', ({ page, total, expected }) => {
		expect(render(pages(page, total, 2, 0))).deep.eq(expected)
	})
})
