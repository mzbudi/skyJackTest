import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Button} from 'react-native-elements';

class Home extends Component {
  static navigationOption = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref="map"
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: -6.6453504,
            longitude: 106.7778048,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}>
          <Marker
            coordinate={{
              latitude: -6.6453504,
              longitude: 106.7778048,
            }}
          />
        </MapView>
        <Button title="Search" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonStyle: {
    marginBottom: 10,
  },
});
export default Home;
