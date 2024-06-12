import { createSlice } from '@reduxjs/toolkit'

const productItemSlice = createSlice({
	name: 'productItem',
	initialState: {
		currentProductItem: null,
	},
	reducers: {
		setCurrentProductItem: (state, action) => {
			state.currentProductItem = action.payload
		},
	},
})

export const { setCurrentProductItem } = productItemSlice.actions
export default productItemSlice.reducer
