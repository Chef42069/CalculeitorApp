import React from 'react';
import {  Button, StyleSheet, Text, View, Alert, TouchableHighlight} from 'react-native';

var impresion = "miau";

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style ={styles.textAnswer}>{impresion}</Text>
            </View>
            <View style={styles.containerRow}>
                <TouchableHighlight onPress={() => input(1)}>
                    <Text style={styles.textStyle}>1</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(2)}>
                    <Text style={styles.textStyle}>2</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(3)}>
                    <Text style={styles.textStyle}>3</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => sumar()}>
                    <Text style={styles.textStyle}>+</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.containerRow}>
                <TouchableHighlight onPress={() => input(4)}>
                    <Text style={styles.textStyle}>4</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(5)}>
                    <Text style={styles.textStyle}>5</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(6)}>
                    <Text style={styles.textStyle}>6</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => multi()}>
                    <Text style={styles.textStyle}>x</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.containerRow}>
                <TouchableHighlight onPress={() => input(7)}>
                    <Text style={styles.textStyle}>7</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(8)}>
                    <Text style={styles.textStyle}>8</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(9)}>
                    <Text style={styles.textStyle}>9</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => divi()}>
                    <Text style={styles.textStyle}>/</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.containerRow}>
                <TouchableHighlight onPress={() => reset()}>
                    <Text style={styles.textStyle}>A</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => input(0)}>
                    <Text style={styles.textStyle}>0</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => igual()}>
                    <Text style={styles.textStyle}>=</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => resta()}>
                    <Text style={styles.textStyle}>-</Text>
                </TouchableHighlight>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow:{
    backgroundColor: '#2B2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  textStyle: {
    color: "#F34D71",
    fontSize : 70,
    marginHorizontal:25,
    marginVertical:10,
  },
  textAnswer: {
      color : "#F34D71",
      fontSize: 70,
      marginBottom: 30,
  }
});


export default WelcomeScreen;