import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import track from '../data/data'
import hardness from '../data/hardness'

const ItemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemsData: track,
    AdminUsername: 'AdminUser',
    AdminPassword: 'AdminPass',
    hardness: hardness,
    AdminCode: '7788',
  },
  reducers: {
    itemAdded(state, action) {
      state.itemsData.push(action.payload)
    }
  }
})

export const { itemAdded } = ItemsSlice.actions

export const adminUsrname = state => state.items.AdminUsername
export const AdminCode = state => state.items.AdminCode
export const itemsData = state => state.items.itemsData
export const hardnessOptions = state => state.items.hardness

export default ItemsSlice.reducer

