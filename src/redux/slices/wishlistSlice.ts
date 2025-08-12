import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type wishlistState = {
    moviesIds: number[];
}

const initialState : wishlistState = {
    moviesIds: [] 
}

const wishlistSlice = createSlice({
        name:'wishlist',
        initialState,
        reducers:{
            addToWishlist : (state, action: PayloadAction<{movieId:number}>) =>{
                state.moviesIds.push(action.payload.movieId);
            }
        }
})

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer