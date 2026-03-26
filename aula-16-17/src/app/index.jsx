import { useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Formulario } from "./components/Formulario"
import { Item } from "../components/Item";

export default function App() {
  const [lista, setLista] = useState([
    {
      nome: "Gabriel",
      email: "gabriel.colares.dev@gmail.com",
      telefone: "(92) 99221-4370"
    },
    {
      nome: "Marcus Silva",
      email: "marcus.silva.dev@gmail.com",
      telefone: "(92) 99841-4950"
    },
    {
      nome: "Matheus",
      email: "matheus.eduardo.dev@gmail.com",
      telefone: "(92) 99872-4170"
    },
  ]);

  return (
    <View style={style.container}>
      <ScrollView>
        <Formulario lista={lista} setLista={setLista} />
      </ScrollView>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index + item.nome}
        renderItem={({ item, index }) => (
          <Item
            key={index + item.nome}
            nome={item.nome}
            email={item.email}
            telefone={item.telefone}
          />
        )}
        horizontal={true}
      />


    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
});
