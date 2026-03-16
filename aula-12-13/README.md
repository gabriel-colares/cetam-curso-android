# Aula 12–13 — JSX, Componentes e Core Components (Expo + React Native)

Nesta aula construímos uma tela simples em React Native usando Expo (com Expo Router), praticando JSX, organização de componentes e os principais Core Components.

O projeto é basicamente um “Linktree” (uma tela com links/atalhos) com:

- Card de perfil com imagem e textos
- Campo de texto para digitar uma mensagem
- Botão que abre um link do WhatsApp com a mensagem digitada
- Botões para abrir links externos (GitHub, LinkedIn, Instagram, Site)

## Materiais (arquivos da aula)

- Tela principal:
  - [src/app/index.jsx](./src/app/index.jsx)
- Componente extra (SVG):
  - [src/components/icones.jsx](./src/components/icones.jsx)
- Imagens usadas no app:
  - [assets/images/](./assets/images/)
- Configurações do projeto:
  - [package.json](./package.json)
  - [app.json](./app.json)

## Como criar o app Expo

Criando um projeto novo com Expo:

```bash
npx create-expo-app@latest aula-12-13
cd aula-12-13
npm install
npm run start
```

Criando já com Expo Router (estrutura de rotas/pastas):
s
```bash
npx create-expo-app@latest aula-12-13 --template expo-router
cd aula-12-13
npm install
npm run start
```

## O que foi praticado

- JSX e estrutura de componentes em React Native
- Core Components:
  - `View`, `Text`, `ScrollView`
  - `Image`
  - `TextInput`
  - `Button`
  - `TouchableOpacity`
  - `StatusBar`
- Alertas nativos:
  - `Alert.alert(titulo, mensagem)`
- Estilização com `StyleSheet` (cards, espaçamentos, cores, bordas e tipografia)
- Navegação/abertura de links com Expo Router:
  - `useRouter()` + `router.push(url)`
- Montagem de URL com parâmetro de texto (ex.: `wa.me` para WhatsApp)

## Props (propriedades) vistas na prática

- `ScrollView`
  - `contentContainerStyle` para espaçamento e padding do conteúdo
- `Image`
  - `source={require(...)}`
  - `style` para tamanho e bordas
- `TextInput`
  - `placeholder`, `placeholderTextColor`
  - `onChangeText` para capturar texto digitado
- `TouchableOpacity`
  - `onPress` para clique/toque
  - `activeOpacity` para feedback visual
- `Text`
  - `style` para cor, tamanho e peso

## Exemplo: Button + Alert.alert

```jsx
import { View, Button, Alert } from "react-native";

export default function Exemplo() {
  function avisar() {
    Alert.alert("Aviso", "Você clicou no botão!");
  }

  return (
    <View>
      <Button title="Mostrar alerta" onPress={avisar} />
    </View>
  );
}
```

## Estrutura do app (resumo)

- O arquivo [index.jsx](./src/app/index.jsx) exporta o componente `App`.
- A tela usa um `ScrollView` para permitir rolagem e organiza o conteúdo em dois “cards”:
  - Card de perfil (imagem + nome + descrição)
  - Card de ações (campo de mensagem + botões de links)

## Personalização rápida

- Trocar a foto do perfil:
  - Edite o `require(...)` em [index.jsx](./src/app/index.jsx) para apontar para outra imagem em [assets/images/](./assets/images/).
- Trocar os links dos botões:
  - Ajuste as URLs passadas para `redirecionar(...)` em [index.jsx](./src/app/index.jsx).
- Ajustar o destino do WhatsApp:
  - Atualize a URL montada em `falar()` em [index.jsx](./src/app/index.jsx) (número e/ou mensagem).
