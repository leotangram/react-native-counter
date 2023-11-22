import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { DimensionScree } from './src/presentation/screens/DimensionScree';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        <DimensionScree />
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
