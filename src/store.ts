import { configureStore } from '@reduxjs/toolkit'
import { test1Slice, test2Reducer } from './components/myTest/testSlice'
import { productSlice } from './components/products/productSlice'


export const store = configureStore({
  reducer: {
    test1: test1Slice.reducer,
    test2: test2Reducer,
    product: productSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch