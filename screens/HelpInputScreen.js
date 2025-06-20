import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HelpInputScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help</Text>

        <TouchableOpacity style={styles.dropdown}>
          <Text>For Me ⌄</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.locationBox}>
        <Ionicons name="location-sharp" size={20} color="#007BFF" />
        <Text style={styles.locationText}>Your current Location</Text>
      </View>

      <Text style={styles.label}>Reason</Text>
      <View style={styles.reasons}>
        <TouchableOpacity style={styles.reasonBtn}><Text>Assistence</Text></TouchableOpacity>
        <TouchableOpacity style={styles.reasonBtn}><Text>Buy something</Text></TouchableOpacity>
        <TouchableOpacity style={styles.reasonBtn}><Text>Delivery</Text></TouchableOpacity>
        <TouchableOpacity style={styles.reasonBtn}><Text>Other</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  headerText: { fontSize: 18, fontWeight: 'bold' },
  dropdown: { padding: 8, borderWidth: 1, borderRadius: 20 },
  locationBox: {
    flexDirection: 'row', alignItems: 'center', padding: 12,
    borderWidth: 1, borderColor: '#ccc', borderRadius: 20,
    marginBottom: 20
  },
  locationText: { marginLeft: 8 },
  label: { fontWeight: 'bold', marginBottom: 10 },
  reasons: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  reasonBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10
  },
});
