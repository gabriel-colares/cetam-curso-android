import Feather from '@expo/vector-icons/Feather';
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          title: "Início",
        }}
      />
      <Tabs.Screen
        name="(tabs)/explorer"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
          title: "Explorer"
        }}
      />
      <Tabs.Screen
        name="(tabs)/settings"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="settings" size={size} color={color} />,
          title: "Settings"
        }}
      />
    </Tabs>
  )
}

// import { Stack } from "expo-router"

// export default function Layout() {
//   return (
//     <Stack screenOptions={{}}>
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "Tela principal",
//           animation: "slide_from_right"
//         }}
//       />
//       <Stack.Screen
//         name="explorer"
//         options={{
//           title: "Explorer",
//           headerTintColor: "#ff0000",
//           animation: "slide_from_right"
//         }}
//       />
//     </Stack>
//   )
// }
