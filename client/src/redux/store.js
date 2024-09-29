import { configureStore } from '@reduxjs/toolkit'
import MoviesReducer from './MovieSlice'
import SearchResultReducer from './SearchResultSlice';

// Configure the store
const store = configureStore({
  reducer: {
    movies: MoviesReducer,
    SearchResult: SearchResultReducer,
  },
})

export default store;