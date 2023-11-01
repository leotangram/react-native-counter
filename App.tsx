import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name="Leonardo Omaña" /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

// create styles here with types
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
