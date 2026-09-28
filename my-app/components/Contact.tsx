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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.447761369979!2d18.461206076471463!3d-33.98103097318404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc43005a118f55%3A0xe4a33c1b26349c65!2sCavendish%20Mall!5e0!3m2!1sen!2sza!4v1790603520556!5m2!1sen!2sza" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <View style={contactStyles.mapPin} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={contactStyles.cardHeading}>Visit Us:</Text>
            <Text style={globalStyles.bodyText}>24 Mavin Avenue, Sandton, Johannesburg</Text>
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

