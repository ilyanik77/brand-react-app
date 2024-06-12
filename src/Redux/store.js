import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import catalogReducer from './catalogSlice'
import productsReducer from './productsSlice'
import productItemReducer from './productItemSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		catalog: catalogReducer,
		products: productsReducer,
		productItem: productItemReducer,
	},
})
