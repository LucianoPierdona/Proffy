import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {

    const [Favorites, setFavorites] = useState([]);
    
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favoritedTeachers = JSON.parse(res);

                setFavorites(favoritedTeachers);
            }
        });
    }
    useFocusEffect(() => {
        loadFavorites();
    });
    return (
        <View style={styles.container }>
            <PageHeader title="Meus Proffys Favoritos" />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}  
            >
                {Favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;