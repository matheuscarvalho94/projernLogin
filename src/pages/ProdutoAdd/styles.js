import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: metrics.basePadding,
  },
  TxtIntro: {
    fontSize: 16,
    color: colors.white,
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
  loading: {
    color: colors.white,
    marginTop: 30,
  },
  iconebutton: {
    fontSize: 20,
    color: colors.white,
    marginRight: 10,
  },
  inputDescription: {
    height: 250,
    marginBottom: metrics.baseMargin / 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.dark,
    fontSize: 18,
    paddingHorizontal: metrics.basePadding,
  },

  inputcol50: {
    height: 50,
    width: '49%',
    marginBottom: metrics.baseMargin / 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.dark,
    fontSize: 18,
    paddingHorizontal: metrics.basePadding,
  },

  Boxcol50: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
  },

  button: {
    height: 50,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    marginBottom: 60,
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
});

export default styles;
