import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏫 Campus Cafeteria</Text>
        <Text style={styles.cardSubtitle}>
          Serving traditional meals, snacks, and fresh drinks every school day.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>🕒 Opening Hours</Text>
        <View style={styles.row}>
          <Text style={styles.day}>Monday – Friday</Text>
          <Text style={styles.hours}>7:30 – 17:00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.day}>Saturday</Text>
          <Text style={styles.hours}>8:00 – 14:00</Text>
        </View>
        <View style={[styles.row, styles.noBorder]}>
          <Text style={styles.day}>Sunday</Text>
          <Text style={[styles.hours, styles.closed]}>Closed</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>📍 Location</Text>
        <Text style={styles.infoText}>Main Campus Building, Ground Floor</Text>
        <Text style={styles.infoTextSecondary}>Next to the Student Center & Library</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>💳 Payment Methods</Text>
        <Text style={styles.infoText}>Student ID Card, Wave, Orange Money, Cash</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff7ed',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fed7aa',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c2410c',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#7c2d12',
    lineHeight: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  day: {
    fontSize: 15,
    color: '#4b5563',
  },
  hours: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  closed: {
    color: '#ef4444',
  },
  infoText: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '500',
  },
  infoTextSecondary: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
});
