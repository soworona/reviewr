import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    App: undefined; //BottomTab
    Details: {movie_id:number}
}

export type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Wishlist: undefined;
    Profile: undefined;
}

export type RootStackScreenProp<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, T>

export type BottomTabsProp<T extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
