import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
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
