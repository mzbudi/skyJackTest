import React, {Component, Fragment} from 'react';
import {Text, StyleSheet, View, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Button, Icon} from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';

class Home extends Component {
  state = {
    latitude: 0,
    longitude: 0,
  };

  async componentDidMount() {
    const hasLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'SkyJack',
        message: 'SkyJack access to your location ',
      },
    );
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
      );
    }
  }

  static navigationOptions = {
    header: null,
    headerShown: false,
  };

  handleMove = () => {
    this.refs.map.animateToRegion(
      {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      2000,
    );
  };

  render() {
    const {latitude, longitude} = this.state;
    console.log(latitude, longitude);
    return (
      <Fragment>
        <View style={styles.container}>
          <MapView
            ref="map"
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={{
              latitude: -6.1825093,
              longitude: 106.8276039,
              latitudeDelta: 0.015,
              longitudeDelta: 0.015,
            }}>
            {latitude && longitude ? (
              <Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
              />
            ) : null}
          </MapView>
          <Icon
            raised
            name="gps-fixed"
            type="MaterialIcons"
            color="#f50"
            containerStyle={{position: 'absolute', right: 50, bottom: 80}}
            onPress={() => this.handleMove()}
          />
          <Button
            icon={
              <Icon type="foundation" name="marker" size={15} color="white" />
            }
            title="Location"
            onPress={this.handleMove}
          />
        </View>
      </Fragment>
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
