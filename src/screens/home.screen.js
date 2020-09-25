import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actoins/hobby.action';
import HobbyList from '../shares/components/Home/HobbyList';


const HomeScreen = ({ navigation }) => {
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch();
    const randomNumber = () => {
        return 1000 + Math.trunc(Math.random() * 9000)
    }
    const handleAddHobby = () => {
        const newId = randomNumber();
        console.log(newId);
        const newHobby = {
            id: newId + '',
            title: `Hobby ${newId}`,
        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    return (
        <View style={{ flex: 1 }}>
            <Button
                onPress={() => handleAddHobby()}
                title="add hobby"
                color="#34495e"
            />

            <HobbyList
                hobbyList={hobbyList}
            />
            <Button
                style={{ position: 'absolute', bottom: 0 }}
                onPress={() => navigation.navigate('TodosScreen')}
                title="Todos Screen"
                color="#2c3e50"
            />
        </View>
    );
}

export default HomeScreen
