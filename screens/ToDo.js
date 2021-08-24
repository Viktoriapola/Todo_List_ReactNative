import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import Form from '../components/Form';

export default function ToDo() {

  const [toDoItems, setToDoItems] = useState([]);

  const addToDo = (newItem) => {
    setToDoItems([
      ...toDoItems,
      {...newItem}
    ]);
  };

  const deleteToDo = (id) => {
    setToDoItems((newList) => {
      return newList.filter(toDoItems => id != toDoItems.id);
    });
  };

  return (
    <SafeAreaView>
      <Text style={style.lago}>Заметки</Text>
          <Form addToDo={addToDo} />
            {toDoItems.length ? <Text style={style.textLength}>Всего: [ {toDoItems.length} ]</Text> : null}
            {toDoItems.length
            ?<FlatList
            data={toDoItems}
            keyExtractor={item => item.id}
            renderItem={ ({ item }) => (
            <ToDoItem
              item={item}
               deleteToDo={deleteToDo}
            />
            )}
          />
           : <Image 
              source={require('../assets/bg.png')} 
              style={style.img}
            />}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    lago:{
      fontSize: 30,
      padding: 15,
      textAlign: 'center',
      color: '#9bbc0e'
    },
    img: {
      opacity: .1,
      width: '100%',
      height: '80%'
    },
    textLength: {
      margin: 15,
      fontSize: 18,
      color: '#9bbc0e',
    },
});