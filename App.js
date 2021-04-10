import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState(`rgb(19, 109, 151)`);

  const changeBgHandler = () => {
    let color = `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
      )`;

    setRandomColor(color);
  };

  const resetHandler = () => {
    setRandomColor(`rgb(19, 109, 151)`);
  };
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBgHandler}>
          <Text style={styles.text}>Change BG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetHandler}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: 40,
    paddingVertical: 20,

    backgroundColor: '#000',
    color: '#fff',

    fontSize: 25,
    fontWeight: 'bold',
  },
  reset: {
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,

    backgroundColor: '#ee4e4e',
    color: '#ffffff',

    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
