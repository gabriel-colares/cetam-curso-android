import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [email, atualizarEmail] = useState("");
  const [senha, atualizarSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [tentativas, atualizarTentativas] = useState(0);

  const bloqueado = tentativas >= 5;

  const url = autenticado === true
    ? "https://static.wikia.nocookie.net/disney/images/b/b7/Profile_-_Stitch.jpg"
    : "https://img.freepik.com/vetores-gratis/instagram-logo_1199-122.jpg?t=st=1773760673~exp=1773764273~hmac=54ae674ac3198fba53767b9619e6f933e94a025f46b31f5346868ca332f3e1b5&w=740"

  function login(email, senha) {
    atualizarTentativas(tentativas + 1);

    if (bloqueado) return null;

    if (email === "admin@com.br" && senha === "super") {
      setAutenticado(true)
    } else {
      setAutenticado(false)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        width={100}
        height={100}
        source={{
          uri: url
        }}
        style={styles.logo}
      />

      {autenticado && (
        <View style={{ backgroundColor: 'green', borderRadius: 4, paddingHorizontal: 24, paddingVertical: 8 }}>
          <Text style={{ color: "white" }}>Você está autenticado!</Text>
        </View>
      )}

      {bloqueado && (
        <View style={{ backgroundColor: 'red', borderRadius: 4, paddingHorizontal: 24, paddingVertical: 8 }}>
          <Text style={{ color: "white" }}>Você está bloqueado!</Text>
        </View>
      )}


      {!autenticado && (
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(texto) => atualizarEmail(texto)}
        />
      )}

      {!autenticado && (
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={senha}
          onChangeText={(texto) => atualizarSenha(texto)}
          secureTextEntry
        />
      )}

      {(!autenticado || !bloqueado) && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => login(email, senha)}
        >
          <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
// CTRL + J para abrir o terminal, e npm start para iniciar o APP
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32
  },
  logo: {
    borderRadius: "100%",
    marginBottom: 42,
    width: 100,
    height: 100
  },
  input: {
    backgroundColor: "#dfdfdf",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginTop: 12,
    width: "100%"
  },
  button: {
    backgroundColor: "#7610db",
    padding: 16,
    marginTop: 100,
    borderRadius: 100,
    paddingHorizontal: 68
  },
  texto: {
    color: "#FFF",
    fontSize: 18
  }
})

