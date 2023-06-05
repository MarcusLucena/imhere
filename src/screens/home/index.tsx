import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Participant } from "../../components/Participant";
import { styles } from "./styles";
import {useState} from "react";

export  function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [name, setName] = useState<string>("");

    function handleParticipateAdd() {
        if (participants.includes(name)) {
            return Alert.alert("Participante existente", "Participante já cadastrado");
        }
        setParticipants([...participants, name])
        setName("")
    }

    function handleParticipateRemove(name: string) {
        Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [ { text: "Não", style: "cancel" }, { text: "Sim", onPress: () => Alert.alert("Removido") } ]);
        const search = participants.indexOf(name);
        const remove: string[] = participants.splice(search, 1);
        setParticipants(remove)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Quinta, 11 de maio de 2023
            </Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#6B6B6B"}
                    cursorColor={"red"}
                    keyboardType={"default"}
                    onChangeText={setName}
                    value={name}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipateAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant name={item} handleParticipateRemove={(name) => handleParticipateRemove(name)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text style={styles.eventDate}>Nenhum participante cadastrado</Text>}
            />
        </View>
    );
}
