import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function AllergensModal() {
  const commonAllergens = [
    { name: 'Peanuts', icon: '🥜', note: 'Found in Mafe' },
    { name: 'Fish & Seafood', icon: '🐟', note: 'Found in Thieboudienne & Fataya' },
    { name: 'Dairy & Milk', icon: '🥛', note: 'Found in Thiakry' },
    { name: 'Gluten', icon: '🌾', note: 'Found in Fataya pastry' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.warningCard}>
        <Text style={styles.warningIcon}>⚠️</Text>
        <View style={styles.warningContent}>
          <Text style={styles.warningTitle}>Food Allergy Notice</Text>
          <Text style={styles.warningText}>
            Our meals are freshly prepared in a kitchen where allergens are present. Please inform staff of any allergies before ordering.
          </Text>
        </View>
      </View>

      <Text style={styles.listTitle}>Common Allergens in Our Menu</Text>

      <View style={styles.allergenList}>
        {commonAllergens.map((item) => (
          <View key={item.name} style={styles.allergenRow}>
            <Text style={styles.allergenIcon}>{item.icon}</Text>
            <View style={styles.allergenDetails}>
              <Text style={styles.allergenName}>{item.name}</Text>
              <Text style={styles.allergenNote}>{item.note}</Text>
            </View>
          </View>
        ))}
      </View>

      <Pressable style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  warningCard: {
    flexDirection: 'row',
    backgroundColor: '#fffbeb',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fef3c7',
    marginBottom: 24,
  },
  warningIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  warningContent: {
    flex: 1,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 4,
  },
  warningText: {
    fontSize: 13,
    color: '#b45309',
    lineHeight: 18,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  allergenList: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    marginBottom: 28,
  },
  allergenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  allergenIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  allergenDetails: {
    flex: 1,
  },
  allergenName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  allergenNote: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  closeButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
