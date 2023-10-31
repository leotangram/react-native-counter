import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HelloWorldScreenProps {
  name?: string;
}

export const HelloWorldScreen: FC<HelloWorldScreenProps> = ({
  name = 'World',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        Hello, {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
