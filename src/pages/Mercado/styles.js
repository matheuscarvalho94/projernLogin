import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    paddingTop: 50,
  },
  empty: {
    alignSelf: 'center',
    color: colors.white,
    marginTop: 20,
    fontSize: 14,
  },
  loading: {
    marginTop: 20,
  },
});

export default styles;
