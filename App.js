/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height

export default class App extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: -33.40032,
          longitude: -70.560092,
          latitudeDelta: 0.00522,
          longitudeDelta: 0.00522 * ASPECT_RATIO,
        }}
      >
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
