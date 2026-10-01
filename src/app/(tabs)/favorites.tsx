import { View, Text, FlatList, StyleSheet } from 'react-native';
import { dishes } from '../../data/dishes';
import { useFavorites } from '../../data/FavoritesContext';
import DishRow from '../../components/DishRow';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  // we keep only ids, so we look the dishes up here
  const favoriteDishes = dishes.filter((d) => favorites.includes(d.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteDishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DishRow dish={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>❤️</Text>
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptySubtitle}>
              Tap on any dish from the menu and press "Add to Favorites" to save it here!
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});
