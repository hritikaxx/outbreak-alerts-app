import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
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
        <Text style={styles.headerTitle}>Outbreak Alerts</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Welcome Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Welcome, User</Text>
            <View style={styles.alertBadge}>
              <Ionicons name="notifications" size={20} color="#fff" />
            </View>
          </View>

          <View style={styles.infoSection}>
            <View style={styles.row}>
              <Ionicons name="warning" size={20} color="#c40000ff" />
              <Text style={styles.rowText}>Dengue Detected</Text>
            </View>

            <View style={styles.row}>
              <Ionicons name="calendar" size={20} color="#1E40AF" />
              <Text style={styles.rowText}>August 1, 2025</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
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
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Support Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Emergency Support</Text>

          <View style={styles.centeredContent}>
            <View style={styles.iconStack}>
              <Ionicons name="call" size={24} color="#1E40AF" />
              <Ionicons name="medical" size={16} color="#1E40AF" style={styles.medicalIcon} />
            </View>

            <Text style={styles.cardSubtitle}>Emergency Hotline</Text>
            <Text style={styles.emergencyNumber}>Call - 103</Text>
          </View>
        </View>

      </ScrollView>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20, 
  },
  card: {
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#1E40AF',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
  },
  alertBadge: {
    backgroundColor: '#1E40AF',
    borderRadius: 20,
    padding: 6,
  },
  infoSection: {
    marginBottom: 20,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#1E40AF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  centeredContent: {
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  iconStack: {
    position: 'relative',
    marginBottom: 8,
  },
  medicalIcon: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 2,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  emergencyNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#c40000ff',
  },
});