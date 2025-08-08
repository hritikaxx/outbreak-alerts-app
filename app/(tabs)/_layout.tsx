// app/(tabs)/_layout.tsx

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#0284C7',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';

          if (route.name === 'index') {
            iconName = 'home-outline';
          } else if (route.name === 'outbreakdetails') {
            iconName = 'warning'; // Changed icon
          } else if (route.name === 'safetytips') {
            iconName = 'shield'; // Changed icon
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      {/* Outbreak Details Tab (moved to center) */}
      <Tabs.Screen
        name="outbreakdetails"
        options={{
          title: 'Outbreak Details',
        }}
      />

      {/* Safety Tips Tab (moved to right) */}
      <Tabs.Screen
        name="safetytips"
        options={{
          title: 'Safety Tips',
        }}
      />
    </Tabs>
  );
}
