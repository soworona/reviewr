import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movies"

type wishlistState = {
    movies: Movie[];
}

const initialState : wishlistState = {
    movies: [] 
}

const wishlistSlice = createSlice({
        name:'wishlist',
        initialState,
        reducers:{
            addToWishlist : (state, action: PayloadAction<{movie:Movie}>) =>{
                state.movies.push(action.payload.movie);
            }
        }
})

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer