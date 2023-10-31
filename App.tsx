import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HelloWorldScreen name="Leonardo Omaña" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;

// create styles here with types
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
