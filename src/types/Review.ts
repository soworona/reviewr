import { Timestamp } from "@react-native-firebase/firestore";

export type Review = {
    review: string;
    user_id: string;
    movie_id: string;
    created_at: Timestamp;
}