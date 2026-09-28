import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { globalStyles, COLORS } from './Styles';

export default function Contact() {
  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.scrollContainer}>
        
        <Text style={globalStyles.titleLarge}>CONTACT US</Text>
        
        {/* Card 1: Map Element */}
        <View style={[globalStyles.card, contactStyles.flexRow]}>
          <View style={contactStyles.mapGraphicPlaceholder}>
            <View style={contactStyles.mapPin} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={contactStyles.cardHeading}>Visit Us:</Text>
            <Text style={globalStyles.bodyText}>[Location Placeholder], Johannesburg</Text>
          </View>
        </View>

        {/* Card 2: Contact Info */}
        <View style={globalStyles.card}>
          <Text style={contactStyles.cardHeading}>EMAIL & PHONE NUMBER</Text>
          
          <Text style={contactStyles.subLabel}>Our Email:</Text>
          <Text style={[globalStyles.bodyText, { marginBottom: 12 }]}>[Email Address placeholder]</Text>
          
          <Text style={contactStyles.subLabel}>Contact Number:</Text>
          <Text style={globalStyles.bodyText}>[Phone Number Placeholder]</Text>
        </View>

        {/* Card 3: Social Media Links */}
        <View style={globalStyles.card}>
          <Text style={[contactStyles.cardHeading, { textAlign: 'center' }]}>OUR SOCIAL MEDIA</Text>
          <View style={contactStyles.socialRow}>
            {['X', 'IG', 'FB', 'YT', 'DSC'].map((platform, idx) => (
              <View key={idx} style={contactStyles.socialNode}>
                <Text style={contactStyles.socialText}>{platform}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const contactStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapGraphicPlaceholder: {
    width: 65,
    height: 65,
    backgroundColor: COLORS.bgBackground,
    borderRadius: 8,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.accentBlue,
  },
  mapPin: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.accentPurple,
  },
  cardHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.accentBlue,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  subLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 2,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  socialNode: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.bgBackground,
    borderWidth: 1,
    borderColor: COLORS.accentPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  socialText: {
    color: COLORS.textMain,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

