import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, COLORS } from './Styles';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.scrollContainer}>
        
        <Text style={globalStyles.titleLarge}>ABOUT NEXT LEVEL GAMING</Text>
        
        <View style={aboutStyles.imageBannerPlaceholder} />
        
        <Text style={aboutStyles.authorTag}>Jason Naidoo</Text>
        <Text style={[globalStyles.bodyText, { marginBottom: 24 }]}>
          A local SME would like to have a mobile app and web page developed to advertise their business, 
          recieve booking requests from potential customers as well as quotas for events ands gaming experiences.
        </Text>

        <Text style={globalStyles.sectionTitle}>What We Offer:</Text>
        
        <View style={aboutStyles.offerGrid}>
          {[
            'HIGH PERFORMANCE PCS',
            'TOURNAMENTS',
            'VIRTUAL REALITY',
            'RACING SIMULATOR'
          ].map((item, index) => (
            <View key={index} style={aboutStyles.offerCard}>
              <View style={aboutStyles.miniIcon} />
              <Text style={aboutStyles.offerText}>{item}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={globalStyles.buttonPrimary}>
          <Text style={globalStyles.buttonText}>NEXT ➔</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const aboutStyles = StyleSheet.create({
  imageBannerPlaceholder: {
    height: 160,
    backgroundColor: COLORS.surfaceCard,
    borderRadius: 12,
    marginBottom: 16,
  },
  authorTag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accentBlue,
    marginBottom: 8,
  },
  offerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  offerCard: {
    width: '48%',
    backgroundColor: COLORS.surfaceCard,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.accentPurple,
  },
  miniIcon: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.accentPurple,
    borderRadius: 4,
    marginBottom: 8,
  },
  offerText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMain,
    textAlign: 'center',
  },
});
