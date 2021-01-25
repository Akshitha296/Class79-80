import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Alert, Image, Modal, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/myHeader'
import db from '../config'
import firebase from 'firebase'

export default class DonationScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            requestedBooksList: []
        }
        this.requestRef = null;
    }

    getRequestedBooksList = () => {
        this.requestRef = db.collection('requested_books').onSnapshot((snapshot) => {
            var requestedBooksList = snapshot.docs.map(document => document.data)
            this.setState({
                requestedBookList: requestedBookList,
            })
        })
    }

    componentDidMount(){
        this.getRequestedBooksList()
    }

    componentWillMount(){
        this.requestRef()
    }

    keyExtraactor = (item, index) => index.toString()
    renderItem = ({item, i}) => {
        return(
            <ListItem
                key = {i}
                title = {item.book_name}
                subtitle = {item.reason_to_request}
                titleStyle = {{color: 'black', fontWeight: 'bold',}}
                rightElement = {
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{color: 'white'}}>
                            View
                        </Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    render(){
        return(
            <View style = {{flex: 1,}}>
                <MyHeader
                title = "Donate Books"
                />
            <View style = {{flex: 1,}}> 
                {this.state.requestedBooksList.length === 0 ? (
                    <View style = {styles.subContainer}>
                        <Text style = {{fontSize: 20,}}>
                            List Of All Requested Books
                        </Text>
                    </View>
                ): (
                    <Flatlist
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.requestedBooksList}
                        renderItem = {this.renderItem}
                    />
                )}
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
    },
    button: {
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})