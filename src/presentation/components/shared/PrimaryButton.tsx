import { FC } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import { isAndroid } from '../../../utils/platformOS';

interface PrimaryButtonProps {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  label,
  onLongPress,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: isAndroid ? '#5856d6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    color: isAndroid ? 'white' : 'black',
  },
  buttonPressed: {
    backgroundColor: isAndroid ? '#4746ab' : 'white',
  },
});
