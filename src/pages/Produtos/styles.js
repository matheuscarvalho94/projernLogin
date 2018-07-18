import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  empty: {
    alignSelf: 'center',
    color: colors.white,
    marginTop: 25,
    fontSize: 17,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 20,
  },
});

export default styles;
