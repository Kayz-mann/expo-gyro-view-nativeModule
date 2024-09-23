import { StyleSheet, Text, View } from 'react-native';

import * as ExpoGyroView from 'expo-gyro-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoGyroView.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
