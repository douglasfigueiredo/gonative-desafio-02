import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

export default StyleSheet.create({
  container: {
    ...general.box,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },

  data: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.basePadding,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },

  organiztion: {
    fontSize: 12,
    color: colors.regular,
  },

  icon: {
    color: colors.light,
  },
});
