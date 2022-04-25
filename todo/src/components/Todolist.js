import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { windowHeight, windowWidth } from "./util/Dimensions/Dimensions";

// Custom components
import Button from "./Button";
import Input from "./Input";



const TodoList = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Learn React Native",
            completed: false,
        },
        {
            id: 2,
            title: "Learn Firebase",
            completed: true,
        },
        {
            id: 3,
            title: "Learn Redux",
            completed: false,
        },
    ]);


    const [inputText, setinputText] = useState("");


    const handleAddPress = () => {
        if (inputText.length > 0 && todos.length < 6) { // Boş text göndermemesi için
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

    const handleCompletePress = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }));
    };


    const todosLength =  todos.filter(todo => !todo.completed).length;




    // console.log(todos);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Yapilacaklar}>
                <Text style={styles.YapilacaklarText}>Yapılacaklar</Text>
                <Text style={styles.TodosLong}>({todosLength
                   })</Text>
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleCompletePress(item.id)}>
                        <View style={
                            {
                                margin: 5,
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                                backgroundColor: item.completed ? "#462F71" : "lightslategrey"
                            }
                        }>
                            <View style={styles.taskContainer}>
                                <Text style={
                                    {
                                        fontSize: 20,
                                        textDecorationLine: item.completed ? "line-through" : "none"
                                    }
                                }
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
                        </View>
                    </TouchableOpacity>

                )
                }
            />
            < View style={styles.TodoAddContainer} >
                <Input
                    placeHolder="Enter task your here"
                    onChangeText={setinputText}
                    value={inputText}
                />
                <Button style={styles.TodoAddButton}
                    text="Ekle" onPress={handleAddPress} />
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    /* Todolist için gerekli olan stil */
    container: {
        flex: 1,
    },

    taskContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        height: 50,

    },
    taskText: {
        fontSize: 20,
    },
    TaskDelete: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",

    },
    taskDeleteText: {
        textAlign: "center",
        backgroundColor: "red",
        fontSize: 17,
        borderRadius: 15,
        color: "white",
        height: 25,
        width: 25,


    },
    TodoAddContainer: {
        backgroundColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 15,



    },
    Yapilacaklar: {
        fontSize: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 15,
        marginTop: 15,
        marginRight: 25,
        marginLeft: 9,

    },
    YapilacaklarText: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
    },
    TodosLong: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",


    },



});


export default TodoList;