import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export const COLORS = {
  bgBackground: '#0B0C10',
  surfaceCard: '#1F2833',
  accentBlue: '#00D2FF',
  accentPurple: '#7B2CBF',
  textMain: '#FFFFFF',
  textSecondary: '#C5C6C7',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBackground,
    paddingHorizontal: isDesktop ? '10%' : 20,
    paddingTop: 40,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  // Typography
  titleLarge: {
    fontSize: isDesktop ? 36 : 26,
    fontWeight: 'bold',
    color: COLORS.textMain,
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.accentBlue,
    marginBottom: 16,
    marginTop: 12,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  // Components
  card: {
    backgroundColor: COLORS.surfaceCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.accentPurple,
    // Soft neon glow effect
    shadowColor: COLORS.accentPurple,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: COLORS.bgBackground,
    borderWidth: 1.5,
    borderColor: COLORS.accentBlue,
    borderRadius: 8,
    padding: 12,
    color: COLORS.textMain,
  },
  buttonPrimary: {
    backgroundColor: COLORS.accentPurple,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.accentBlue,
  },
  buttonText: {
    color: COLORS.textMain,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  // Layout Helpers
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  webSplitLayout: {
    flexDirection: isDesktop ? 'row' : 'column',
    justifyContent: 'space-between',
  },
  webColumn: {
    flex: isDesktop ? 0.48 : 1,
    width: '100%',
  },
});
