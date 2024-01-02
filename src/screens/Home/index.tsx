import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log(`clicou no add`);
  }

  function handleParticipantRemove() {
    console.log(`clicou no remove`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 2 de janeiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Marcelo" onRemove={handleParticipantRemove} />
      <Participant name="Joao" onRemove={handleParticipantRemove} />
      <Participant name="Maria" onRemove={handleParticipantRemove} />
    </View>
  );
}
