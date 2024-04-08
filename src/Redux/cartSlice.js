import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: [
		{
			id: 1,
			img: 'product1.jpg',
			title: "ELLERY1 X M'O CAPSULE",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 52,
		},
		{
			id: 2,
			img: 'product2.png',
			title: "ELLERY2 X M'O CAPSULE",
			description:
				'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
			count: 1,
			price: 51,
		},
	],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: state => {
			state.cart = []
		},
		
		
	},
})

export const { clearCart } = cartSlice.actions

export default cartSlice.reducer
