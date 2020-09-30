import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editCurrentTodo } from '../actions/todos.action';

const windowWidth = Dimensions.get('window').width;
const TodosDetailScreen = ({ navigation }) => {
    const [todo, setTodo] = useState({
        id: '',
        body: '',
        status: ''
    });
    const list = useSelector(state => state.todos.list);
    const currentTodo = useSelector(state => state.todos.current);
    const dispatch = useDispatch();
    console.log('currentTodo', currentTodo);

    useEffect(() => {
        setTodo(list[currentTodo])
    }, [])

    const editTodo = () => {
        const action = editCurrentTodo(todo, currentTodo);
        dispatch(action);
        ToastAndroid.showWithGravity(
            'Update success',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txtId}>ID: {todo.id}</Text>
            <TextInput
                style={styles.textInput}
                value={todo.body}
                autoFocus={true}
                onChangeText={(val) => setTodo({ ...todo, body: val })}
            />
            <Text style={styles.txtStatus}>Status: {todo.status}</Text>
            <View style={styles.warpperButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.button, { backgroundColor: '#7f8c8d' }]}>
                    <Text style={styles.txtButton}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => editTodo()}
                    style={[styles.button, { backgroundColor: '#27ae60' }]}>
                    <Text style={styles.txtButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TodosDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },

    warpperButton: {
        position: 'absolute',
        bottom: 0,
        width: windowWidth - 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (windowWidth - 70) / 2,
        height: 50,
        borderRadius: 5
    },
    txtButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInput: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#bdc3c7',
        borderRadius: 5,
        fontSize: 25,
        marginBottom: 10
    },
    txtId: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    txtStatus: {
        fontSize: 25,
    }
});
