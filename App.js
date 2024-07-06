import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button, PaperProvider, Text } from 'react-native-paper';
import CalculatorButton from './CalculatorButton';
import { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState("0");
  function handleClick(value) {

    if (value == "C") {
      setDisplay("0")
    }
    else if (value == "=") {
      try {
        setDisplay(eval(display))
      }
      catch {
        setDisplay("???")
      }
    }
    else {
      if (display == "0") setDisplay(value)
      else setDisplay(display + value)
    }

  }

  return (
    <PaperProvider>
      <Appbar.Header>
    <Appbar.Content title="Calculadora" />
  </Appbar.Header>
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <Text style={styles.displayText} variant='displayLarge'>{display}</Text>
        </View>

        <View style={styles.keyboardContainer}>
          <View style={styles.buttonsContainer}>
            <CalculatorButton title='7' funcaoDoClick={handleClick} />
            <CalculatorButton title='8' funcaoDoClick={handleClick} />
            <CalculatorButton title='9' funcaoDoClick={handleClick} />
            <CalculatorButton title='/' buttonColor='orange' funcaoDoClick={handleClick} />
          </View>
          <View style={styles.buttonsContainer}>
            <CalculatorButton title='4' funcaoDoClick={handleClick} />
            <CalculatorButton title='5' funcaoDoClick={handleClick} />
            <CalculatorButton title='6' funcaoDoClick={handleClick} />
            <CalculatorButton title='*' buttonColor='orange' funcaoDoClick={handleClick} />
          </View>
          <View style={styles.buttonsContainer}>
            <CalculatorButton title='1' funcaoDoClick={handleClick} />
            <CalculatorButton title='2' funcaoDoClick={handleClick} />
            <CalculatorButton title='3' funcaoDoClick={handleClick} />
            <CalculatorButton title='-' buttonColor='orange' funcaoDoClick={handleClick} />
          </View>
          <View style={styles.buttonsContainer}>
            <CalculatorButton title='0' funcaoDoClick={handleClick} />
            <CalculatorButton title='C' funcaoDoClick={handleClick} />
            <CalculatorButton title='=' funcaoDoClick={handleClick} />
            <CalculatorButton title='+' buttonColor='orange' funcaoDoClick={handleClick} />
          </View>
        </View>
      </View>
    </PaperProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayContainer: {
    height: "25%",
    margin: 12,
    flexDirection: "row"
  },
  displayText: {
    flexGrow: 1,
    textAlignVertical: 'bottom',
    textAlign: 'right'
  },
  keyboardContainer: {
    flexGrow: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 2,
    flexGrow: 1
  }
});
