import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { globalStyles, COLORS } from './Styles';

export default function Fees() {
  // 1. Define State Hooks for user inputs
  const [numberOfPeople, setNumberOfPeople] = useState<string>('');
  const [experienceType, setExperienceType] = useState<string>('');

  // 2. Define State Hooks for mathematical outputs
  const [subtotal, setSubtotal] = useState<number>(0);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // Business Constant
  const BASE_PRICE_PER_PERSON = 150;

  // 3. Calculation Side-Effect Engine
  useEffect(() => {
    const peopleCount = parseInt(numberOfPeople, 10);

    // If input is empty or invalid, clear all values
    if (isNaN(peopleCount) || peopleCount <= 0) {
      setSubtotal(0);
      setDiscountPercent(0);
      setDiscountAmount(0);
      setTotal(0);
      return;
    }

    // Calculate initial base subtotal cost
    const rawSubtotal = peopleCount * BASE_PRICE_PER_PERSON;
    setSubtotal(rawSubtotal);

    // Dynamic Tier Discount Evaluator
    let currentDiscountTier = 0;
    if (peopleCount === 2) {
      currentDiscountTier = 0.05; // 5%
    } else if (peopleCount === 3) {
      currentDiscountTier = 0.10; // 10%
    } else if (peopleCount > 3) {
      currentDiscountTier = 0.15; // 15%
    }
    
    setDiscountPercent(currentDiscountTier * 100);

    // Process ultimate final values
    const totalSaved = rawSubtotal * currentDiscountTier;
    setDiscountAmount(totalSaved);
    setTotal(rawSubtotal - totalSaved);

  }, [numberOfPeople]); // Listens exclusively to number modifications

  // 4. Action submission handler
  const handleSendInquiry = () => {
    if (!numberOfPeople || !experienceType || total === 0) {
      Alert.alert('Incomplete Fields', 'Please select an experience and type a valid number of attendees.');
      return;
    }

    Alert.alert(
      'Inquiry Sent!',
      `Your request for ${numberOfPeople} slots for "${experienceType}" has been filed. Final quote: R ${total.toFixed(2)}.`
    );
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.scrollContainer}>
        <Text style={globalStyles.titleLarge}>CALCULATE FEES</Text>

        {/* Input Blocks */}
        <View style={globalStyles.inputGroup}>
          <Text style={globalStyles.inputLabel}>Number Of People</Text>
          <TextInput 
            style={globalStyles.textInput} 
            placeholder="Insert Number here" 
            placeholderTextColor={COLORS.textSecondary}
            keyboardType="numeric"
            value={numberOfPeople}
            onChangeText={(text) => setNumberOfPeople(text.replace(/[^0-9]/g, ''))} // Strips decimal/letters
          />
        </View>

        <View style={globalStyles.inputGroup}>
          <Text style={globalStyles.inputLabel}>Experience Type</Text>
          <TextInput 
            style={globalStyles.textInput} 
            placeholder="Eg: Virtual Reality" 
            placeholderTextColor={COLORS.textSecondary}
            value={experienceType}
            onChangeText={setExperienceType}
          />
        </View>

        {/* Discount Policy Structural Card */}
        <View style={[globalStyles.card, feesStyles.discountCard]}>
          <Text style={feesStyles.discountTitle}>BOOKING DISCOUNT RATES</Text>
          <Text style={feesStyles.discountLine}>1 Booking: No discount</Text>
          <Text style={feesStyles.discountLine}>2 Bookings: 5% discount</Text>
          <Text style={feesStyles.discountLine}>3 Bookings: 10% Discount</Text>
          <Text style={feesStyles.discountLine}>+3 Bookings: 15% Discount</Text>
        </View>

        {/* Dynamic Ticket Row Output */}
        <Text style={globalStyles.sectionTitle}>Your Bookings</Text>
        <View style={[globalStyles.card, globalStyles.rowSpaceBetween, feesStyles.bookingRow]}>
          <Text style={feesStyles.bookingText}>
            {numberOfPeople ? `${numberOfPeople}x` : '0x'} [{experienceType || 'Your Experience Type'}]
          </Text>
          <Text style={feesStyles.priceBracket}>
            R {subtotal > 0 ? subtotal.toFixed(2) : '0.00'}
          </Text>
        </View>

        {/* Dynamic Calculations Summary Output Box */}
        <View style={globalStyles.card}>
          <Text style={feesStyles.calcTitle}>Calculations</Text>
          
          <View style={[globalStyles.rowSpaceBetween, { marginBottom: 10 }]}>
            <Text style={globalStyles.bodyText}>Subtotal:</Text>
            <Text style={feesStyles.priceValue}>R {subtotal.toFixed(2)}</Text>
          </View>

          <View style={[globalStyles.rowSpaceBetween, { marginBottom: 10 }]}>
            <Text style={globalStyles.bodyText}>Applied Discount ({discountPercent}%):</Text>
            <Text style={[feesStyles.priceValue, { color: '#FF4D4D' }]}>
              - R {discountAmount.toFixed(2)}
            </Text>
          </View>

          <View style={[feesStyles.divider, { marginVertical: 8 }]} />

          <View style={[globalStyles.rowSpaceBetween, { marginBottom: 16 }]}>
            <Text style={[globalStyles.bodyText, { fontWeight: 'bold', color: COLORS.textMain }]}>
              Total Estimate:
            </Text>
            <Text style={feesStyles.priceBracketLarge}>R {total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={globalStyles.buttonPrimary} onPress={handleSendInquiry}>
            <Text style={globalStyles.buttonText}>Send Inquiries</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const feesStyles = StyleSheet.create({
  bookingRow: {
    paddingVertical: 14,
  },
  bookingText: {
    color: COLORS.textMain,
    fontSize: 13,
    fontWeight: '500',
  },
  priceBracket: {
    color: COLORS.accentBlue,
    fontWeight: 'bold',
  },
  priceBracketLarge: {
    color: COLORS.accentBlue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceValue: {
    color: COLORS.textMain,
    fontSize: 14,
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
  divider: {
    height: 1,
    backgroundColor: COLORS.accentPurple,
    opacity: 0.5,
  },
});
