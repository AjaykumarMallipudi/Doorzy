import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {
  Ionicons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const banners = [
  require('../assets/banners/B1-1.png'),
  require('../assets/banners/B1-2.png'),
  require('../assets/banners/B1-3.png'),
];


export default function HomeScreen() {
  const navigation = useNavigation();
  const flatRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;


  const handleCategoryPress = (label) => {
    navigation.navigate('HelpInput', { category: label });
  };
  
  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
  };



  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
<View style={styles.header}>
  <View style={styles.leftHeader}>
    <Text style={styles.greeting}>Hello Ajay</Text>
    <Text style={styles.location}>Ramalingswaram vijyawada..</Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  <Image source={require('../assets/icons/ajay.jpg')} style={styles.profilePic} />
</TouchableOpacity>
</View>

<View style={styles.searchBar}>
  <Ionicons name="search" size={18} color="#aaa" />
  <TextInput
    style={styles.searchInput}
    placeholder="Search who need?"
    placeholderTextColor="#aaa"
  />
  <TouchableOpacity>
    <Ionicons name="options-outline" size={20} color="#aaa" />
  </TouchableOpacity>
</View>

        {/* Main Categories */}
     <View style={styles.grid}>
  <Category imageSource={require('../assets/icons/Hero.jpg')} label="Soldier" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/Mech.jpg')} label="Mechanic" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/Doctor.jpg')} label="Doctor" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/bike.png')} label="Food services" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/EEE.jpg')} label="Electrician" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/Hero.jpg')} label="View All" onPress={handleCategoryPress} />
</View>
        {/* Banner Carousel */}
        <View style={styles.bannerWrapper}>
          <FlatList
            ref={flatRef}
            data={banners}
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item} style={styles.bannerImage} />
            )}
          />
          <View style={styles.dotWrapper}>
            {banners.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  activeIndex === i && styles.activeDot,
                ]}
              />
            ))}
          </View>
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
  <Category imageSource={require('../assets/icons/Hero.jpg')} label="AC Repair" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/Hero.jpg')} label="Electrician" onPress={handleCategoryPress} />
  <Category imageSource={require('../assets/icons/Hero.jpg')} label="Clean" onPress={handleCategoryPress} />
</View>


        {/* Popular Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
          <View style={styles.recentCard} />
          <View style={styles.recentCard} />
          <View style={styles.recentCard} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

function Category({ imageSource, label, onPress }) {
  return (
    <TouchableOpacity style={styles.category} onPress={() => onPress(label)}>
      <Image source={imageSource} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 5,
  paddingTop: 5,
  paddingBottom: 5,
  backgroundColor: '#fff',
},

leftHeader: {
  flexDirection: 'column',
},

greeting: {
  fontSize: 22,
  fontWeight: '800',
  color: '#1E73BE',
},

location: {
  fontSize: 14,
  color: '#777',
  marginTop: 4,
},

profilePic: {
  width: 40,
  height: 40,
  borderRadius: 20,
},

searchBar: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f1f1f1',
  marginTop: 14,
  marginHorizontal: 20,
  borderRadius: 14,
  paddingHorizontal: 12,
  paddingVertical: 8,
  gap: 8,
  width: '99%',
  alignSelf: 'center',

},

searchInput: {
  flex: 1,
  fontSize: 14,
  color: '#333',
},
 grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginVertical: 20,
  paddingTop:10,
},

category: {
  width: '30%', // 3 items per row
  aspectRatio: 1, // makes square cards
  backgroundColor: '#f9f9f9',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  marginBottom: 16,
  padding: 10,
  elevation: 2,
},

categoryImage: {
  width: 60,
  height: 60,
  marginBottom: 8,
},
  categoryLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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
  bannerWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  bannerImage: {
    width: Dimensions.get('window').width - 40,
    height: 160,
    borderRadius: 14,
    marginHorizontal: 5,
    resizeMode: 'cover',
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1E73BE',
    width: 10,
    height: 10,
  }
});
