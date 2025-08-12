import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { getWishlist } from '../../utils/MovieService';

type wishlistState = {
  moviesIds: number[];
};

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', 
    async () => { 
        const wishlist = await getWishlist();
        return wishlist
    }
)

const initialState: wishlistState = {
  moviesIds: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ movieId: number }>) => {
      state.moviesIds.push(action.payload.movieId);
      Toast.show({
        type: 'success',
        text1: 'Added to wishlist',
        text2: 'Your wishlist has been updated.',
      });
    },
    removeFromWishlist: (state, action: PayloadAction<{ movieId: number }>) => {
      state.moviesIds = state.moviesIds.filter(
        id => id !== action.payload.movieId,
      );
      Toast.show({
        type: 'success',
        text1: 'Removed from wishlist',
        text2: 'Your wishlist has been updated.',
      });
    },
  },
});



export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
