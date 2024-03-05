import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragrafo}>Olá 4TADS!</Text>
      <TextInput placeholder="Digite aqui..." style={styles.textInput} />
      <Image
        source={require("./assets/ninja.gif")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1421407573/ifsulbagelogo_400x400.png",
        }}
        style={{ width: 100, height: 100 }}
      />

      <Button class="button" title="Enviar" />
      <Pressable style={styles.botao}>
        <Text style={styles.botaoText}>ENVIAR</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paragrafo: {
    color: "pink",
    fontSize: 25,
  },
  textInput: {
    height: 40,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    backgroundColor: "#ebbce4",
    marginTop: 10,
  },
  botao: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#de4bc8",
    marginTop: 10,
  },
  botaoText: {
    color: "white",
  },
});
