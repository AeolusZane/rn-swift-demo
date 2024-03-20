/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  requireNativeComponent,
  UIManager,
  findNodeHandle
} from 'react-native';

const CounterView = requireNativeComponent("CounterView") as any

export default function App(){
  const [count, setCount] = useState(1)
  const counterRef = React.useRef<typeof CounterView>(null)

  const increment = () => {
    setCount(c=>c+1)
  }
  
  const update = (e:any) => {
    setCount( e.nativeEvent.count)
  }

  const updateNative = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(counterRef.current),                     // 1
      (UIManager as any)["CounterView"].Commands.updateFromManager, // 2
      [count*2]                                   // 3
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.wrapper, styles.border]}
        onPress={increment}
        onLongPress={updateNative}
      >
        <Text style={styles.button}>
          {count}
        </Text>
      </TouchableOpacity>
      <CounterView style={styles.wrapper}
        count={count}
        onUpdate={update}
        ref={counterRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "stretch"
  },
  wrapper: {
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  border: {
    borderColor: "#eee", borderBottomWidth: 1
  },
  button: {
    fontSize: 50, color: "orange"
  }
});
