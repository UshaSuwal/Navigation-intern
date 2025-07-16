import { Text } from "react-native";
import { useAppSelector } from "../../store/hooks";



export const DisplayCount = () => {

    const count = useAppSelector((state) => state.counter.value);
    return (
        <Text style={{ backgroundColor:'white', padding: 50}}>{count}</Text>
    );
    }