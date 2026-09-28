import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, COLORS } from './Styles';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.scrollContainer}>
        
        {/* Hero Section */}
        <View style={[globalStyles.card, homeStyles.heroCard]}>
          <Text style={homeStyles.heroText}>NEXT LEVEL GAMING</Text>
          <Text style={homeStyles.welcomePrompt}>WELCOME</Text>
        </View>

        {/* Explore Categories */}
        <Text style={globalStyles.sectionTitle}>EXPLORE</Text>
        <View style={homeStyles.gridRow}>
          {['HIGH END PC\'s', 'CONSOLES', 'ESPORTS'].map((cat, index) => (
            <View key={index} style={homeStyles.gridItem}>
              <View style={homeStyles.iconPlaceholder} />
              <Text style={homeStyles.gridLabel}>{cat}</Text>
            </View>
          ))}
        </View>

        {/* Upcoming Events */}
        <Text style={globalStyles.sectionTitle}>Upcoming Events</Text>
        
        <View style={homeStyles.eventRow}>
          <View style={homeStyles.eventThumb} />
          <View style={homeStyles.eventDetails}>
            <Text style={homeStyles.eventTitle}>EVENT 1</Text>
            <Text style={globalStyles.bodyText}>Event information will be inserted here.</Text>
          </View>
        </View>

        <View style={homeStyles.eventRow}>
          <View style={homeStyles.eventThumb} />
          <View style={homeStyles.eventDetails}>
            <Text style={homeStyles.eventTitle}>EVENT 2</Text>
            <Text style={globalStyles.bodyText}>Event information will be inserted here.</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  heroCard: {
    paddingVertical: 40,
    alignItems: 'center',
    borderColor: COLORS.accentBlue,
  },
  heroText: {
    fontSize: 16,
    color: COLORS.textMain,
    letterSpacing: 2,
    marginBottom: 10,
  },
  welcomePrompt: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.accentBlue,
    letterSpacing: 4,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    flex: 0.3,
    backgroundColor: COLORS.surfaceCard,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.accentPurple,
  },
  iconPlaceholder: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.accentBlue,
    borderRadius: 6,
    marginBottom: 8,
  },
  gridLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.textMain,
    textAlign: 'center',
  },
  eventRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceCard,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  eventThumb: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.bgBackground,
    borderRadius: 6,
    marginRight: 12,
  },
  eventDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: 4,
  },
});
