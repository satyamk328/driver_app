import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome';  

export default class index extends Component{  
    render() {  
        return(  
            <View>  
                <Text>This is Home Screen</Text>  
                <Icon  
                name={'home'}  
                color={'red'}  
                size={25}  
            /> 
            </View>  
        )  
    }  
}  
 