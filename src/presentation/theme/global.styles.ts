import { StyleSheet } from 'react-native';
import { isAndroid } from '../../utils/platformOS';

export const globalStyles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 80,
    fontWeight: '300',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: isAndroid ? 15 : 0,
  },
});
