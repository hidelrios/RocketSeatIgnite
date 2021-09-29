import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>to.do</Text>
      <Text style={styles.subtitle}>
        {'Você tem 3 tarefas'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: '#8257E5',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    height: 50,
    left: 24,
    top: 20,
    position: 'absolute',

    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'right',
    paddingVertical: 10,
    top: 20,
    right: 10,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
  },
});

export default Home;
