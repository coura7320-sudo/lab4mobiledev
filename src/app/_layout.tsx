import { Stack } from 'expo-router';
import { FavoritesProvider } from '../data/FavoritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#ea580c' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="dish/[id]" options={{ title: 'Dish Details' }} />
        <Stack.Screen
          name="allergens"
          options={{ presentation: 'modal', title: 'Allergen Information' }}
        />
      </Stack>
    </FavoritesProvider>
  );
}
