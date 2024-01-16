import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Style'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
              <Icon name="arrow-left" color="#fafafa"  size={30}/>
              </TouchableOpacity>  
            </View>
        </SafeAreaView>
    )
}


export default Header