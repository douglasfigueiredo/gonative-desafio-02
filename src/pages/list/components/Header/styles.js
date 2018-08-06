import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  listHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    marginHorizontal: metrics.basePadding,
    paddingBottom: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },

  headerInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.light,
    paddingHorizontal: 10,
    borderRadius: 3,
    height: 36,
    marginRight: metrics.baseMargin,
  },
});
