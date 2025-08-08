import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={28} color="#8B5CF6" />
        <Text style={styles.headerTitle}>Outbreak Alerts</Text>
        <View style={styles.notificationBadge}>
          <Ionicons name="notifications" size={24} color="#3B82F6" />
        </View>
      </View>

      {/* Welcome Card */}
      <View style={styles.welcomeCard}>
        <View style={styles.welcomeHeader}>
          <Text style={styles.welcomeText}>Welcome, User</Text>
          <View style={styles.alertBadge}>
            <Ionicons name="notifications" size={20} color="#fff" />
          </View>
        </View>

        <View style={styles.alertInfo}>
          <View style={styles.alertRow}>
            <Ionicons name="warning" size={20} color="#EF4444" />
            <Text style={styles.alertText}>Dengue Detected</Text>
          </View>

          <View style={styles.dateRow}>
            <Ionicons name="calendar" size={20} color="#3B82F6" />
            <Text style={styles.dateText}>August 1, 2025</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.viewDetailsButton}
          onPress={() =>
            router.push({
              pathname: '/(tabs)/outbreakdetails',
              params: {
                disease: 'Dengue',
                date: 'August 1, 2025',
                riskLevel: 'High',
                totalCases: '156',
                newCases: '12',
                area: 'Bagmati',
              },
            })
          }
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Support Card */}
      <View style={styles.emergencyCard}>
        <Text style={styles.emergencyTitle}>Emergency Support</Text>

        <View style={styles.emergencyContent}>
          <View style={styles.phoneIconContainer}>
            <Ionicons name="call" size={24} color="#3B82F6" />
            <Ionicons name="medical" size={16} color="#3B82F6" style={styles.medicalIcon} />
          </View>

          <Text style={styles.emergencyTitle}>Emergency Hotline</Text>
          <Text style={styles.emergencyNumber}>Call - 103</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  notificationBadge: {
    position: 'relative',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  welcomeCard: {
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
  },
  alertBadge: {
    backgroundColor: '#1E40AF',
    borderRadius: 20,
    padding: 6,
  },
  alertInfo: {
    marginBottom: 20,
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
    fontWeight: '500',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  viewDetailsButton: {
    backgroundColor: '#1E40AF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emergencyCard: {
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 20,
  },
  emergencyContent: {
    alignItems: 'center',
  },
  phoneIconContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  medicalIcon: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 2,
  },
  emergencyNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#EF4444',
    marginTop: 8,
    textAlign: 'center',
  },
});
