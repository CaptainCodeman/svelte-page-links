export async function load({ url }) {
	const params = url.searchParams

	const page = parseInt(params.get('page') ?? '1')
	const total = parseInt(params.get('total') ?? '100')
	const ends = parseInt(params.get('ends') ?? '1')
	const adjacent = parseInt(params.get('adjacent') ?? '1')

	return {
		page,
		total,
		ends,
		adjacent,
	}
}
