import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  AppRegistry,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import ColorButton from './components/ColorButton'

export default class colorlist extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor (backgroundColor) {
    this.setState({backgroundColor})
  }

  render () {
    const {backgroundColor} = this.state
    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
          <ColorButton backgroundColor="red" onSelect={this.changeColor} />
          <ColorButton backgroundColor="blue" onSelect={this.changeColor} />
          <ColorButton backgroundColor="green" onSelect={this.changeColor} />
          <ColorButton backgroundColor="white" onSelect={this.changeColor} />
          <ColorButton backgroundColor="black" onSelect={this.changeColor} />
          <ColorButton backgroundColor="salmon" onSelect={this.changeColor} />
          <ColorButton backgroundColor="grey" onSelect={this.changeColor} />
          <ColorButton backgroundColor="magenta" onSelect={this.changeColor} />
          <ColorButton backgroundColor="yellow" onSelect={this.changeColor} />
      </ScrollView>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('colorlist', () => colorlist)