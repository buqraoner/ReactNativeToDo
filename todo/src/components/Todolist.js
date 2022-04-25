import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";


// Custom components
import Button from "./Button";
import Input from "./Input";



const TodoList = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Learn React Native",
            completed: false
        },
        {
            id: 2,
            title: "Learn Firebase",
            completed: false
        },
        {
            id: 3,
            title: "Learn Redux",
            completed: false,
        },
    ]);


    const [inputText, setinputText] = useState("");


    const handleAddPress = () => {
        if (inputText.length > 0) { // Boş text göndermemesi için
            setTodos([
                ...todos,
                {
                    id: todos.length + 1, //Random id atmak yerine todos.length + 1 yapılabilir.
                    title: inputText,   //inputText değişkeni içerisinde tutulan değer
                    completed: false   //false değerini todos değişkeni içerisinde tutar.
                }
            ]);
            setinputText("");   //inputText değişkenini boş yapar.
        }

    };

    const handleDeletePress = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };



    // console.log(todos);

    return (
        <View>




            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style=
                            {styles.taskText}
                        >
                            {item.title}
                        </Text>
                        <TouchableOpacity
                            style={styles.TaskDelete}
                            onPress={() => handleDeletePress(item.id)}
                        >
                            <Text
                                style={styles.taskDeleteText}>
                                X
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <View style={styles.TodoAddContainer}>
                <Input
                    placeHolder="Enter task your here"
                    onChangeText={setinputText}
                    value={inputText}
                />
                <Button style={styles.TodoAddButton}
                    text="Ekle" onPress={handleAddPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    /* Todolist için gerekli olan stil */

    taskContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        borderBottomWidth: 1,
        height: 50,
    },
    taskText: {
        fontSize: 20,
    },
    TaskDelete: {
        width: 23,
        height: 23,
        borderRadius: 50,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",

    },
    taskDeleteText: {
        backgroundColor: "red",
        fontSize: 17,
        borderRadius: 15,
        color: "white",
        height: 25,
        

    },
    TodoAddContainer: {
        backgroundColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 15,


    },



});


export default TodoList;