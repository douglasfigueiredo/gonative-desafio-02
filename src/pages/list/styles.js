import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  listContainer: {
    paddingVertical: metrics.basePadding,
  },
});
