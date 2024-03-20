/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{Component} from 'react';
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


export default class App extends Component {

  counterRef:typeof CounterView

  state = {
    count: 1
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  update = (e:any) => {
    this.setState({
      count: e.nativeEvent.count
    })
  }

  updateNative = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.counterRef),                     // 1
      (UIManager as any)["CounterView"].Commands.updateFromManager, // 2
      [this.state.count*10]                                   // 3
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.wrapper, styles.border]}
          onPress={this.increment}
          onLongPress={this.updateNative}
        >
          <Text style={styles.button}>
            {this.state.count}
          </Text>
        </TouchableOpacity>
        <CounterView style={styles.wrapper}
          count={this.state.count}
          onUpdate={this.update}
          ref={(e: any) => this.counterRef = e}
        />
      </View>
    );
  }
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
