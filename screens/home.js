import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleCategoryPress = (label) => {
    // Pass the label to the next screen if needed
    navigation.navigate('HelpInput', { category: label });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Ionicons name="menu" size={24} color="#000" style={styles.menuIcon} />
          <TextInput
            placeholder="Search who need?"
            style={styles.searchInput}
          />
        </View>

        {/* Main Categories */}
        <View style={styles.grid}>
          <Category icon={<FontAwesome5 name="user-shield" size={28} />} label="Soldier" onPress={handleCategoryPress} />
          <Category icon={<FontAwesome5 name="tools" size={28} />} label="Mechanic" onPress={handleCategoryPress} />
          <Category icon={<MaterialIcons name="medical-services" size={28} />} label="Doctor" onPress={handleCategoryPress} />
          <Category icon={<FontAwesome5 name="motorcycle" size={28} />} label="Drop" onPress={handleCategoryPress} />
          <Category icon={<Entypo name="home" size={28} />} label="Home" onPress={handleCategoryPress} />
          <Category icon={<Ionicons name="arrow-forward" size={28} />} label="View All" onPress={handleCategoryPress} />
        </View>

        {/* Recent Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
          <View style={styles.recentCard} />
          <View style={styles.recentCard} />
          <View style={styles.recentCard} />
        </ScrollView>

        {/* Home Services */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>HOME services</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </View>
        <View style={styles.grid}>
          <Category icon={<FontAwesome5 name="tools" size={28} />} label="AC Repair" onPress={handleCategoryPress} />
          <Category icon={<Entypo name="plug" size={28} />} label="Electricien" onPress={handleCategoryPress} />
          <Category icon={<FontAwesome5 name="broom" size={28} />} label="Clean" onPress={handleCategoryPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Category({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.category} onPress={() => onPress(label)}>
      {icon}
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

// ...styles remain unchanged


const styles = StyleSheet.create({
  container: {
    flex :1,
    padding: 16,
    backgroundColor: '#fff',
  },
  safeArea: {
  flex: 1,
  backgroundColor: '#fff',
},
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  category: {
    alignItems: 'center',
    width: '30%',
    marginVertical: 12,
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentScroll: {
    marginBottom: 24,
  },
  recentCard: {
    width: 100,
    height: 100,
    backgroundColor: '#DDEEFF',
    borderRadius: 12,
    marginRight: 12,
  },
});
