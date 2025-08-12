import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Review } from "../../types/Review"

type reviewState = {
    reviews: Review[]
}

const initialState: reviewState = {
    reviews: []
}

const reviewSlice = createSlice({
    name:'review',
    initialState,
    reducers:{
        addReviews:(state, action: PayloadAction<{userReview:Review}>) =>{
            state.reviews.push(action.payload.userReview)
        }
    }
})

export const { addReviews } = reviewSlice.actions
export default reviewSlice.reducer