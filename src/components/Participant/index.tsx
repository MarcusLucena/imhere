import {View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

interface Props {
    name: string;
    handleParticipateRemove: (name: string) => void;
}

export function Participant({name, handleParticipateRemove}: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => handleParticipateRemove(name)}
        >
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}
