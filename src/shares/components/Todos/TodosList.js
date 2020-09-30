import React, { useState } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch } from 'react-redux';
import { getCurrentTodo, removeCurrentTodo, editCurrentTodo } from '../../../actions/todos.action';

const TodosList = ({ todosList, navigation }) => {
    console.log('todosList: ', todosList);
    const dispatch = useDispatch();
    const editItem = (item) => {
        const action = getCurrentTodo(item.index)
        dispatch(action);
        navigation.navigate('TodosDetailScreen');
    }

    const removeItem = (index) => {
        console.log('index', index);
        const action = removeCurrentTodo(index)
        dispatch(action);
        ToastAndroid.showWithGravity(
            'Delete success',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }

    // const updateStatus = (item) => {
    //     const status = item.item.status === 'Active' ? 'Done' : 'Active'
    //     const newTodo = { ...item.item, status }
    //     const action = editCurrentTodo(newTodo, item.index);
    //     dispatch(action);
    // }

    const renderItem = (item) => {
        console.log('item: ', item.item);
        return (
            <View style={styles.item}>
                <TouchableOpacity
                    // onPress={() => updateStatus(item)}
                    style={[styles.btnBody,
                    item.item.completed ?
                        { backgroundColor: '#7f8c8d' } :
                        { backgroundColor: '#e67e22' }]
                    }>
                    <Text style={styles.txtItem}>{item.item.id}. {item.item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => editItem(item)}
                    style={[styles.btnAction, { backgroundColor: '#f1c40f', marginRight: 10 }]}>
                    <Text style={styles.txtBtn}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => removeItem(item.index)}
                    style={[styles.btnAction, { backgroundColor: '#c0392b' }]}>
                    <Text style={styles.txtBtn}>Del</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            style={{ marginVertical: 20, width: '100%' }}
            data={todosList}
            renderItem={(item) => renderItem(item)}
            keyExtractor={item => item.id + ''}
        />
    )
}

export default TodosList;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnBody: {
        flex: 1,

        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginRight: 10,
        minHeight: 50,
        justifyContent: 'center'
    },
    btnAction: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 50,
        height: 50
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold',

    },
    txtItem: {
        color: '#fff',
        fontSize: 18,
    }
});