import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import RootNavigator from './src/navigation/RootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </View>
  );
}
