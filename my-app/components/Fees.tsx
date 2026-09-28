import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, COLORS } from './Styles';

export default function Fees() {
  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.scrollContainer}>
        <Text style={globalStyles.titleLarge}>CALCULATE FEES</Text>

        <View style={globalStyles.inputGroup}>
          <Text style={globalStyles.inputLabel}>Number Of People</Text>
          <TextInput 
            style={globalStyles.textInput} 
            placeholder="Insert Number here" 
            placeholderTextColor={COLORS.textSecondary}
            keyboardType="numeric"
          />
        </View>

        <View style={globalStyles.inputGroup}>
          <Text style={globalStyles.inputLabel}>Experience Type</Text>
          <TextInput 
            style={globalStyles.textInput} 
            placeholder="Eg: Virtual Reality" 
            placeholderTextColor={COLORS.textSecondary}
          />
        </View>

        {/* Discount Policy Section */}
        <View style={[globalStyles.card, feesStyles.discountCard]}>
          <Text style={feesStyles.discountTitle}>BOOKING DISCOUNT RATES</Text>
          <Text style={feesStyles.discountLine}>1 Booking: No discount</Text>
          <Text style={feesStyles.discountLine}>2 Bookings: 5% discount</Text>
          <Text style={feesStyles.discountLine}>3 Bookings: 10% Discount</Text>
          <Text style={feesStyles.discountLine}>+3 Bookings: 15% Discount</Text>
        </View>

        {/* Bookings Stack */}
        <Text style={globalStyles.sectionTitle}>Your Bookings</Text>
        {[1, 2, 3].map((num) => (
          <View key={num} style={[globalStyles.card, globalStyles.rowSpaceBetween, feesStyles.bookingRow]}>
            <Text style={feesStyles.bookingText}>1x [Your Experience Type]:</Text>
            <Text style={feesStyles.priceBracket}>R [   ]</Text>
          </View>
        ))}

        {/* Totals Summary */}
        <View style={globalStyles.card}>
          <Text style={feesStyles.calcTitle}>Calculations</Text>
          <View style={[globalStyles.rowSpaceBetween, { marginBottom: 12 }]}>
            <Text style={globalStyles.bodyText}>Subtotal:</Text>
            <Text style={feesStyles.priceBracket}>R [   ]</Text>
          </View>
          <Text style={globalStyles.bodyText}>Applied Discount</Text>
          <Text style={feesStyles.subDetail}>[Bookings] x Amount</Text>

          <TouchableOpacity style={globalStyles.buttonPrimary}>
            <Text style={globalStyles.buttonText}>Send Inquiries</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const feesStyles = StyleSheet.create({
  bookingRow: {
    paddingVertical: 12,
  },
  bookingText: {
    color: COLORS.textMain,
    fontSize: 13,
  },
  priceBracket: {
    color: COLORS.accentBlue,
    fontWeight: 'bold',
  },
  discountCard: {
    borderColor: COLORS.accentBlue,
  },
  discountTitle: {
    color: COLORS.accentBlue,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discountLine: {
    color: COLORS.textMain,
    fontSize: 13,
    marginBottom: 6,
  },
  calcTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: 14,
  },
  subDetail: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
    marginTop: 2,
  },
});

