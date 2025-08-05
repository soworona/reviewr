import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Home: undefined
}

export type RootStackScreenProp<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, T>