import React, { useState } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const TodosList = ({ todosList }) => {

    const renderItem = (item) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity style={styles.btnBody}>
                    <Text style={styles.txtItem}>{item.id}. {item.body}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnAction, { backgroundColor: '#f1c40f', marginRight: 10 }]}>
                    <Text style={styles.txtBtn}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnAction, { backgroundColor: '#c0392b' }]}>
                    <Text style={styles.txtBtn}>Del</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            style={{ marginVertical: 20, width: '100%' }}
            data={todosList}
            renderItem={({ item }) => renderItem(item)}
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
        backgroundColor: '#7f8c8d',
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