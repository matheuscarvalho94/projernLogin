import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding * 1,
  },

  Logo: {
    width: 250,
    height: 80,
  },
  loading: {
    color: colors.white,
    marginTop: 30,
  },
  description: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    marginTop: metrics.baseMargin / 2,
    textAlign: 'center',
  },

  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: 'stretch',
  },

  input: {
    height: 50,
    marginBottom: metrics.baseMargin / 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.dark,
    fontSize: 18,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    height: 50,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 22,
  },

  footer: {
    paddingBottom: metrics.basePadding,
  },

  footerLink: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
