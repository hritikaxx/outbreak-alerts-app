import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function OutbreakDetails() {
  const {
    disease = 'Dengue',
    date = 'August 1, 2025',
    riskLevel = 'High',
    totalCases = '156',
    newCases = '12',
    area = 'Bagmati',
  } = useLocalSearchParams();

  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Outbreak Details</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Alert Info Card */}
      <View style={styles.alertCard}>
        <View style={styles.alertHeader}>
          <View style={styles.warningIconContainer}>
            <Ionicons name="warning" size={20} color="#fff" />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertText}>{disease} Detected</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </View>

      {/* Status Info Card */}
      <View style={styles.statusCard}>
        <Text style={styles.cardTitle}>Current Status</Text>
        
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Risk Level</Text>
          <Text style={styles.statusValue}>{riskLevel}</Text>
        </View>
        
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Total Cases</Text>
          <Text style={styles.statusValue}>{totalCases}</Text>
        </View>
        
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>New Cases (24hr)</Text>
          <Text style={styles.statusValue}>{newCases}</Text>
        </View>
        
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Affected Areas</Text>
          <Text style={styles.statusValue}>{area}</Text>
        </View>
      </View>

      {/* Safety Tips Button */}
      <TouchableOpacity
        style={styles.safetyButton}
        onPress={() => router.push('/(tabs)/safetytips')}
      >
        <Text style={styles.safetyButtonText}>Safety Tips</Text>
      </TouchableOpacity>
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
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  placeholder: {
    width: 32, // Same width as back button to center title
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
  alertCard: {
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
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningIconContainer: {
    backgroundColor: '#1E40AF',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: '#374151',
  },
  statusCard: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusLabel: {
    fontSize: 16,
    color: '#374151',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  safetyButton: {
    backgroundColor: '#1E40AF',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  safetyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});