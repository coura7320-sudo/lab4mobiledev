import { View, Text, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { dishes } from '../../data/dishes';
import { useFavorites } from '../../data/FavoritesContext';

export default function DishDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { favorites, toggleFavorite } = useFavorites();

  // the detail screen looks the data up with the id
  const dish = dishes.find((d) => d.id === id);

  // not-found state
  if (!dish) {
    return (
      <View style={styles.notFoundContainer}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <Text style={styles.notFoundEmoji}>🍽️</Text>
        <Text style={styles.title}>Dish not found</Text>
        <Text style={styles.notFoundText}>No dish matches the identifier "{id}".</Text>
        <Pressable style={styles.backButton} onPress={() => router.replace('/')}>
          <Text style={styles.backButtonText}>Back to menu</Text>
        </Pressable>
      </View>
    );
  }

  const isFavorite = favorites.includes(dish.id);

  return (
    <ScrollView style={styles.container}>
      {/* header title = dish name */}
      <Stack.Screen options={{ title: dish.name }} />

      <Image source={{ uri: dish.image }} style={styles.heroImage} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.categoryBadge}>{dish.category}</Text>
          {dish.special && (
            <View style={styles.specialBadge}>
              <Text style={styles.specialText}>⭐ Chef's Special</Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>{dish.name}</Text>
        <Text style={styles.price}>{dish.price} FCFA</Text>

        <Text style={styles.sectionLabel}>About this dish</Text>
        <Text style={styles.description}>{dish.description}</Text>

        <View style={styles.buttonGroup}>
          <Pressable
            style={[styles.favoriteButton, isFavorite && styles.favoriteActive]}
            onPress={() => toggleFavorite(dish.id)}
          >
            <Text style={[styles.favoriteButtonText, isFavorite && styles.favoriteActiveText]}>
              {isFavorite ? '❤️ In Favorites (Tap to remove)' : '🤍 Add to Favorites'}
            </Text>
          </Pressable>

          <Pressable style={styles.allergenButton} onPress={() => router.push('/allergens')}>
            <Text style={styles.allergenButtonText}>ℹ️ Allergen Info</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: '#ffedd5',
    color: '#ea580c',
    fontSize: 13,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 8,
    overflow: 'hidden',
  },
  specialBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  specialText: {
    color: '#d97706',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginVertical: 6,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ea580c',
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginTop: 8,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563',
    marginBottom: 24,
  },
  buttonGroup: {
    gap: 12,
  },
  favoriteButton: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#ea580c',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  favoriteActive: {
    backgroundColor: '#ea580c',
  },
  favoriteButtonText: {
    color: '#ea580c',
    fontSize: 16,
    fontWeight: '600',
  },
  favoriteActiveText: {
    color: '#ffffff',
  },
  allergenButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  allergenButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  notFoundEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  notFoundText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
