import {Alert} from "react-native";

type AlertPropsDto = {
    title : string,
    message: string
}

export default function showAlert({title, message} : AlertPropsDto){
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ],
    )};