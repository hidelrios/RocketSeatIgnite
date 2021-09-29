import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>to.do</Text>
      <Text style={styles.subtitle}>
        {'Seu aplicativo \n favorito de afazeres'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257E5',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 60,
    fontWeight: 'bold',

    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 8,

    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
  },
});

export default Splash;
