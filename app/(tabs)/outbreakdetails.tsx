import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
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
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Outbreak Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Alert Info Card */}
        <View style={styles.card}>
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
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Status</Text>

          <View style={styles.infoList}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Risk Level</Text>
              <Text style={styles.infoValue}>{riskLevel}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Total Cases</Text>
              <Text style={styles.infoValue}>{totalCases}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>New Cases (24hr)</Text>
              <Text style={styles.infoValue}>{newCases}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Affected Areas</Text>
              <Text style={styles.infoValue}>{area}</Text>
            </View>
          </View>
        </View>

        {/* Safety Tips Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)/safetytips')}
        >
          <Text style={styles.buttonText}>Safety Tips</Text>
        </TouchableOpacity>

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
    width: 32,
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
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  warningIconContainer: {
    backgroundColor: '#1E40AF',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertTextContainer: {
    flex: 1,
  },
  alertText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  dateText: {
    fontSize: 14,
    color: '#374151',
    marginTop: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoList: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    color: '#374151',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
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
});