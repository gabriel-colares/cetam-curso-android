import { Image, Text, View } from "react-native";
import { filmes } from "../../lib/filmes";
import { styles } from "../../styles/home";

export default function App() {
  const destacado = filmes[6];

  return (
    <View style={styles.container}>
      <View>
        <Text>Stream</Text>
        <Text>Em todo lugar</Text>
      </View>

      <Image
        source={{
          uri: "https://i.ibb.co/pjgYcKhy/WALL-E-poster.jpg",
        }}
        style={{ width: "100%", height: 350 }}
      />
    </View>
  )
}
