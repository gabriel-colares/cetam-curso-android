import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/home";

export default function Explorer() {
  function irHome() {
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorer</Text>
      <Text style={styles.subtitle}>Voce esta acessando a rota Explorer</Text>

      <Link href={"/"}>
        <Text style={styles.link}>Ir para Home</Text>
      </Link>

      <TouchableOpacity onPress={irHome}>
        <Text style={styles.link}>Ir para Home</Text>
      </TouchableOpacity>
    </View>
  )
}
