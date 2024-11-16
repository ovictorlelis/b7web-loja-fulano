import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout(){
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#164E85' }}>
      <Tabs.Screen 
        name="home" 
          options={{ 
            title: 'Início', 
            tabBarIcon: ({ color }) => <FontAwesome 
              size={28} 
              name="home" 
              color={color} /> 
          }}
      />
      <Tabs.Screen 
        name="categories" 
          options={{ 
            headerShown: false,
            title: 'Categorias', 
            tabBarIcon: ({ color }) => <FontAwesome 
              size={28} 
              name="archive" 
              color={color} /> 
          }}
      />
      <Tabs.Screen 
        name="profile" 
          options={{ 
            title: 'Perfil', 
            tabBarIcon: ({ color }) => <FontAwesome 
              size={28} 
              name="user" 
              color={color} /> 
          }}
      />
    </Tabs>
  )
}