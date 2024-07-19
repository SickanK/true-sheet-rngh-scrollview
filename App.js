import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const sheet = useRef(null)
  const scrollViewRef = useRef(null)

  const present = async () => {
    await sheet.current?.present()
  }

  const dismiss = async () => {
    await sheet.current?.dismiss()
  }

  return (
    <>
      <View style={styles.container}>
        <Button onPress={present} title="Present" />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <TrueSheet
        ref={sheet}
        sizes={['auto']}
        cornerRadius={24}
        scrollRef={scrollViewRef}
      >
        <GestureHandlerRootView>
          <ScrollView
            ref={scrollViewRef}
            nestedScrollEnabled={true}
          >
            <View style={styles.sheet}>
              <Button onPress={dismiss} title="Dismiss" />
              <Text>True sheet!</Text>
            </View>
          </ScrollView>
        </GestureHandlerRootView>
      </TrueSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheet: {
    marginTop: 20,
    backgroundColor: 'red',
    height: 200,
    flex: 1
  },
});
