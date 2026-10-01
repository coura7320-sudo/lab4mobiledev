import { View, Text, FlatList, StyleSheet } from 'react-native';
import { dishes } from '../../data/dishes';
import DishRow from '../../components/DishRow';

export default function SpecialsScreen() {
  const specials = dishes.filter((d) => d.special);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>🌟 Chef's Daily Selection</Text>
        <Text style={styles.bannerSubtitle}>Freshly prepared specials at discounted cafeteria prices!</Text>
      </View>
      <FlatList
        data={specials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DishRow dish={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  banner: {
    backgroundColor: '#fff7ed',
    padding: 16,
    margin: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c2410c',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: '#9a3412',
  },
  listContent: {
    paddingBottom: 24,
  },
});
