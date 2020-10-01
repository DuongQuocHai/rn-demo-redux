import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
    TextInput,
    TouchableOpacity,
    Dimensions, StatusBar
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosList } from '../actions/todos.action';
import TodosList from '../shares/components/Todos/TodosList';

const windowWidth = Dimensions.get('window').width;

const TodosScreen = ({ navigation }) => {
    const data = useSelector(state => state.todos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodosList())
        console.log('data: ', data)
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}> TODOS LIST ({data.data ? data.data.length : 0}) </Text>
            {/* <View style={styles.warpperButton}>
                <TouchableOpacity
                    onPress={() => { filterTodos(status) }}
                    style={[styles.btn, status === 'Active' ? { backgroundColor: '#e67e22' } : { backgroundColor: 'grey' }]}>
                    <Text style={styles.txtBtn}>Filter status</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => getData()}
                    style={[styles.btn, { backgroundColor: '#130f40' }]}>
                    <Text style={styles.txtBtn}>Refresh</Text>
                </TouchableOpacity>
            </View> */}
            <TextInput
                placeholder='Search'
                style={styles.input}
                onChangeText={(value) => searchTodos(value)}
            />
            <TodosList
                navigation={navigation}
                todosList={data.data} />
            <View style={styles.warpperBottom}>
                <TextInput
                    placeholder='Todo'
                    style={styles.input}
                // value={bodyTodo}
                // onChangeText={(value) => setBodyTodo(value)}
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
        color: 'white',
        marginBottom: 20
    },
    warpperBottom: {
        width: '100%',
        alignItems: 'center',

    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ecf0f1',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 2,
        color: '#2c3e50',
        borderColor: '#95a5a6'
    },
    button: {
        backgroundColor: '#2c3e50',
        borderRadius: 5,
        width: windowWidth - 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        marginTop: 20,
    },
    txtButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    warpperButton: {
        width: windowWidth - 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (windowWidth - 50) / 2,
        height: 50,
        borderRadius: 5
    },
    txtBtn: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});