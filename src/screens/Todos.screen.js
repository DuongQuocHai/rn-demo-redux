import React, { useState } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo } from '../actoins/todos.action';
import TodosList from '../shares/components/Todos/TodosList';


const TodosScreen = () => {
    const [bodyTodo, setBodyTodo] = useState('')
    const todosList = useSelector(state => state.todos.list)
    const dispatch = useDispatch();
    const randomId = () => {
        return 1000 + Math.trunc(Math.random() * 9000)
    }

    const handleAddTodo = () => {
        const id = randomId();
        const newTodo = {
            id: id,
            body: bodyTodo,
            status: 'Active'
        }
        setBodyTodo('');
        ToastAndroid.showWithGravity(
            'Add success',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
        const action = addNewTodo(newTodo);
        dispatch(action);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}> TODOS LIST ({todosList.length}) </Text>
            <TodosList todosList={todosList} />
            <View style={styles.warpperBottom}>
                <TextInput
                    placeholder='todo'
                    style={styles.input}
                    value={bodyTodo}
                    onChangeText={(value) => setBodyTodo(value)}
                />
                <TouchableOpacity
                    onPress={() => handleAddTodo()}
                    style={styles.button}>
                    <Text style={styles.txtButton}>ADD TODO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default TodosScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1abc9c',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    warpperBottom: {
        width: '100%',
        alignItems: 'center'

    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ecf0f1',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 5,
        marginBottom: 20,
        borderWidth: 2,
        color: '#2c3e50',
        borderColor: '#95a5a6'
    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: '#2c3e50',
        borderRadius: 5
    },
    txtButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }

});
