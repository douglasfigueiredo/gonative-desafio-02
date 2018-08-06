import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    marginTop: metrics.basePadding,
  },

  loading: {
    marginTop: metrics.basePadding,
  },

  filtersContainer: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
    paddingVertical: 10,
    borderRadius: metrics.baseRadius,
  },

  filterText: {
    color: colors.regular,
  },

  activeFilterText: {
    color: colors.dark,
    fontWeight: 'bold',
  },
});
