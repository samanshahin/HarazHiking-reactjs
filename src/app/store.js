import { configureStore } from '@reduxjs/toolkit'
import ItemsReducer from '../Items/ItemsSlice'

export default configureStore({
    reducer: {
      items: ItemsReducer
    },
  })