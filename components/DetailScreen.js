import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Style';

const Header = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.headerDetails}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const DetailScreen = ({ route, navigation }) => {

    const { item } = route?.params
    return (
        <SafeAreaView>
            <Header navigation={navigation} />
            <View style={styles.detailsContainer}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.detailsTitle} >Title : </Text>
                 <Text style={styles.detailsTitle} >{item.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.detailsTitle} >Price : </Text>
                 <Text style={styles.detailsTitle} >{item.price}</Text>
                </View>
                <View >
                <Text style={styles.detailsTitle} >Description : </Text>
                <Text numberOfLines={10} style={styles.detailsBody}>{item.description}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen