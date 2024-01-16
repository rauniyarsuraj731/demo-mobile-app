import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView, RefreshControl, ActivityIndicator, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Style'
import axios from 'axios';

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <View >
                    <Text style={styles.headerText}>Items List </Text>
                </View>

                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const ListScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://hub.dummyapis.com/products?noofRecords=100&idStarts=1&currency=inr');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const navigateToDetailScreen = (item) => {
        navigation.navigate('DetailScreen', { item })
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={styles.mainContainer}>
                    <FlatList
                        data={data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => navigateToDetailScreen(item)}>
                                <View style={styles.itemCard}>
                                    <Text style={styles.titleText}>{item.name}</Text>
                                    <Text numberOfLines={3}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>}
                        keyExtractor={item => item.id}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        style={styles.flatList}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListScreen