import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
        backgroundColor: '#218F76',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerDetails: {
        height: 80,
        backgroundColor: '#218F76'
    },
    backArrow:{
        color:'#fafafa',
        fontSize:55,
        fontWeight:'900'
    },
    headerText: {
        color: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 35,
    },
    mainContainer: {
        alignItems: 'center',
        marginTop: 15,
    },
    itemCard: {
        borderRadius: 5,
        width: '95%',
        borderStyle: 'solid',
        borderColor: '#DAE0E2',
        borderWidth: 1,
        backgroundColor: '#EAF0F1',
        padding: 10,
        marginBottom: 8,
        shadowColor: '#FF3E4D',
    },
    titleText: {
        fontSize: 17,
        fontFamily: 'sans-serif',
        fontWeight: '500',
        color: '#333945',
        textTransform: 'capitalize'
    },
    bodyText: {
        fontSize: 14,
    },
    flatList: {
        marginRight: 0,
        width: '90%'

    },
    detailsContainer: {
        padding: 20,
        width: '90%',
        margin: 'auto',
        alignContents: 'center',
        justifyContent: 'center'
    },
    detailsTitle: {
        fontSize: 18,
        color: '#2C3335',
        marginBottom: 10,
        fontWeight: '500'
    },
    detailsBody: {
        color: '#333945',
        fontSize: 14
    },
    searchContainer: {
        flexDirection: 'row',
        width: '90%',
        paddingHorizontal: 10,
        marginRight: 18,
        marginTop: 20
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 5,
        borderRadius: 4,
        backgroundColor: '#fafafa'
    }
})
export default styles