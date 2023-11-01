import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name="Leonardo Omaña" /> */}
        <CounterScreen />
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
