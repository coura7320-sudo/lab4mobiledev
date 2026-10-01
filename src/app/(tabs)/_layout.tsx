import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ea580c',
        tabBarInactiveTintColor: '#6b7280',
        headerStyle: { backgroundColor: '#ea580c' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Menu',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>🍽️</Text>,
        }}
      />
      <Tabs.Screen
        name="specials"
        options={{
          title: "Today's Special",
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>⭐</Text>,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>❤️</Text>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Hours & Info',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>🕒</Text>,
        }}
      />
    </Tabs>
  );
}
