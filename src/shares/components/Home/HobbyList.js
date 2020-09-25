import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'

const HobbyList = ({ hobbyList }) => {

    return (
        <FlatList
            style={{ backgroundColor: '#3498db', padding: 30 }}
            data={hobbyList}
            renderItem={({ item }) => (
                <Text style={{ color: '#fff', fontSize: 20 }} > - { item.title}</Text >
            )}
            keyExtractor={item => item.id}
        />
    )
}

export default HobbyList;