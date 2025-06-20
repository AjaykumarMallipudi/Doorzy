import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Ionicons,
  MaterialIcons,
  Feather,
  Entypo,
  SimpleLineIcons
} from '@expo/vector-icons';

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.Images],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          console.log('User logged out');
        }
      }
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri: profileImage || 'https://via.placeholder.com/100'
            }}
            style={styles.avatar}
          />
          <View style={styles.editIcon}>
            <MaterialIcons name="edit" size={16} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>Andrew Ainsley</Text>
        <Text style={styles.phone}>+1 111 467 378 399</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuList}>
        <MenuItem icon="user" label="Edit Profile" />
        <MenuItem icon="location-pin" label="Address" />
        <MenuItem icon="notifications" label="Notification" />
        <MenuItem icon="payment" label="Payment" />
        <MenuItem icon="shield" label="Security" />
        <MenuItem icon="language" label="Language" rightText="English (US)" />
        
        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Feather name="moon" size={20} color="#555" />
            <Text style={styles.menuLabel}>Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <MenuItem icon="policy" label="Privacy Policy" />
        <MenuItem icon="help" label="Help Center" />
        <MenuItem icon="users" label="Invite Friends" />
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, label, rightText }) {
  const getIcon = (name) => {
    switch (name) {
      case 'user':
        return <Feather name="user" size={20} color="#555" />;
      case 'location-pin':
        return <Entypo name="location-pin" size={20} color="#555" />;
      case 'notifications':
        return <Ionicons name="notifications-outline" size={20} color="#555" />;
      case 'payment':
        return <MaterialIcons name="payment" size={20} color="#555" />;
      case 'shield':
        return <MaterialIcons name="security" size={20} color="#555" />;
      case 'language':
        return <Ionicons name="language-outline" size={20} color="#555" />;
      case 'policy':
        return <MaterialIcons name="policy" size={20} color="#555" />;
      case 'help':
        return <Feather name="help-circle" size={20} color="#555" />;
      case 'users':
        return <SimpleLineIcons name="user-follow" size={20} color="#555" />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        {getIcon(icon)}
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <View style={styles.menuRight}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        <Ionicons name="chevron-forward" size={20} color="#888" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  editIcon: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    padding: 5,
    position: 'absolute',
    top: 70,
    right: -5
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12
  },
  phone: {
    fontSize: 14,
    color: '#555',
    marginTop: 4
  },
  menuList: {
    marginTop: 16
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 12
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightText: {
    marginRight: 8,
    fontSize: 14,
    color: '#777'
  },
  logoutButton: {
    marginTop: 24,
    alignItems: 'center',
    padding: 12,
  backgroundColor: '#fdd', // TEMPORARY TO TEST
  borderRadius: 8
    
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
  }
});
