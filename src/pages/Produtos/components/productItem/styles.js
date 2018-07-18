import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 54,
    height: 54,
  },

  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },

  title: {
    fontWeight: 'bold',
  },

  description: {
    marginTop: 3,
    color: colors.dark,
    fontSize: 12,
  },

  button: {
    height: 40,
    backgroundColor: '#f70303',
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  iconebutton: {
    fontSize: 20,
    color: colors.white,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
