import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text style={{ color: 'white' }}>Hello!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    borderWidth: 10,
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 30,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});
