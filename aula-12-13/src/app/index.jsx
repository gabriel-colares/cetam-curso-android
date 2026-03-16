import {
  View, Text, TouchableOpacity,
  StyleSheet, Image, StatusBar,
  Alert, ScrollView, TextInput
} from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  let palavras = "";

  function atualizarText(text) {
    palavras = text;
  }

  function redirecionar(link) {
    router.push(link)
  }

  function falar() {
    let msgWpp = `https://wa.me/5592992214370?text=${palavras}`
    redirecionar(msgWpp);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView
        contentContainerStyle={{
          gap: 24,
          paddingBottom: 64
        }}
      >
        <View style={styles.profileCard}>
          {/* <View style={styles.avatar}>
          <Text style={styles.avatarText}>GC</Text>
        </View> */}
          <Image
            source={require("../../assets/images/stitch.webp")}
            width={64}
            height={64}
            style={styles.avatar}
          />

          <Text style={styles.title}>Gabriel Soares Colares</Text>
          <Text style={styles.subtitle}>Developer • Links pessoais</Text>
        </View>

        <View style={styles.linksCard}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite a sua mensagem"
            placeholderTextColor={"#FFF"}
            onChangeText={atualizarText}
          />

          <TouchableOpacity onPress={falar} style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Conversar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linksCard}>
          <TouchableOpacity onPress={() => redirecionar("https://github.com/gabriel-colares")} style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => redirecionar("https://www.linkedin.com/in/gabriel-colares/")} style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => redirecionar("https://www.instagram.com/gcolares.me")} style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => redirecionar("https://www.gabrielcolares.com.br")} style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Site</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
    paddingHorizontal: 24,
    marginVertical: 24,
    paddingTop: 32,
    gap: 24,
  },

  profileCard: {
    width: "100%",
    backgroundColor: "#1b1b1b",
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#7c3aed",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  avatarText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#a1a1aa",
    marginTop: 6,
    textAlign: "center",
  },

  linksCard: {
    width: "100%",
    backgroundColor: "#1b1b1b",
    borderRadius: 24,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },

  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "#7c3aed",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  inputText: {
    backgroundColor: "#313131",
    paddingHorizontal: 20,
    height: 48,
    borderRadius: 16,
    color: "#FFF"
  }
});