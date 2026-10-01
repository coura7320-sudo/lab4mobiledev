import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Dish } from '../data/dishes';

export default function DishRow({ dish }: { dish: Dish }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/dish/${dish.id}`)} // only the id travels
    >
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{dish.name}</Text>
          {dish.special && (
            <View style={styles.specialBadge}>
              <Text style={styles.specialText}>Special</Text>
            </View>
          )}
        </View>
        <Text style={styles.categoryBadge}>{dish.category}</Text>
        <Text style={styles.price}>{dish.price} FCFA</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  specialBadge: {
    backgroundColor: '#ffedd5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 6,
  },
  specialText: {
    color: '#ea580c',
    fontSize: 11,
    fontWeight: '600',
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 6,
    overflow: 'hidden',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ea580c',
  },
});
