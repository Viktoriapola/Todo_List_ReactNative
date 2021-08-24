import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToDoItem = ({ item, deleteToDo }) => {
  return (
    <TouchableOpacity 
      style={style.todo}
      onLongPress={ () => deleteToDo(item.id)}
    >
      <Text style={style.text}>
        {item.text}
      </Text>
      <TouchableOpacity
        onPress={ () => deleteToDo(item.id)}
      >
        <Text> &#128465; </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

export default ToDoItem;

const style = StyleSheet.create({
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    marginTop: 0,
    backgroundColor: 'rgba(155, 188, 14, .3)',
  },
  text: {
    fontSize: 18,
    color: '#9bbc0e',
  },
});

