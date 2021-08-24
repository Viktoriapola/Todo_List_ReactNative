import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

const Form = ({ addToDo }) => {

  const [inputValue, setInputValue] = useState('');

  return(
    <View>
      <TextInput 
        placeholder="Введите название задачи"
        style={style.textInput}
        onChangeText={ text => setInputValue(text) }
        value={inputValue}
      />
      <TouchableOpacity
        style={style.border}
        onPress={() => {
          addToDo({
            id: Math.floor((Math.random()*1000000)+1),
            text: inputValue,
          })
          setInputValue('')
        }}
      >
        <Text style={style.btn}>Добавить</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Form;

const style = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 15,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .3,
    shadowRadius: 3,
  },
  btn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 8,
    backgroundColor: '#9bbc0e',
  },
  border: {
    margin: 15,
    marginTop: 0,
  },
});
