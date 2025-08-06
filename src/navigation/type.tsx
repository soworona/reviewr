import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    App: undefined; //BottomTab
}

export type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Wishlist: undefined;
    Profile: undefined;
}


export type RootStackScreenProp<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, T>