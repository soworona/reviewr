import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { getWishlist } from '../../utils/MovieService';

type wishlistState = {
  movieIds: number[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | null
};

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', 
    async () => { 
        const wishlist = await getWishlist();
        return wishlist
    }
)

const initialState: wishlistState = {
  movieIds: [],
  status:'idle',
  error:null
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ movieId: number }>) => {
      state.movieIds.push(action.payload.movieId);
      Toast.show({
        type: 'success',
        text1: 'Added to wishlist',
        text2: 'Your wishlist has been updated.',
      });
    },
    removeFromWishlist: (state, action: PayloadAction<{ movieId: number }>) => {
      state.movieIds = state.movieIds.filter(
        id => id !== action.payload.movieId,
      );
      Toast.show({
        type: 'success',
        text1: 'Removed from wishlist',
        text2: 'Your wishlist has been updated.',
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWishlist.pending, state => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieIds = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});



export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
