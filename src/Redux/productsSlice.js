import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	countProductsOnHomePage: 6,
	products: [
		{
			id: 1,
			img: 'product1.jpg',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 52,
		},
		{
			id: 2,
			img: 'product2.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 51,
		},
		{
			id: 3,
			img: 'product3.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 35,
		},
		{
			id: 4,
			img: 'product4.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 48,
		},
		{
			id: 5,
			img: 'product5.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 29,
		},
		{
			id: 6,
			img: 'product6.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 19,
		},
		{
			id: 7,
			img: 'product7.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 100,
		},
		{
			id: 8,
			img: 'product8.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 29,
		},
		{
			id: 9,
			img: 'product9.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 90,
		},
		{
			id: 10,
			img: 'product10.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 69,
		},
		{
			id: 11,
			img: 'product11.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 70,
		},
		{
			id: 12,
			img: 'product2.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 49,
		},
		{
			id: 13,
			img: 'product13.png',
			title: "'ELLERY X M'O CAPSULE'",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 77,
		},
	],
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
})

export const {} = productsSlice.actions

export default productsSlice.reducer
