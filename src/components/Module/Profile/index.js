import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome';  

export default class index extends Component{  
    render(){  
        return(  
            <View>  
                <Text>this is profile screen</Text>  
            </View>  
        )  
    }  
}  
index.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={focused ? 'ios-person' : 'md-person'}  
            color={tintColor}  
            size={25}  
        />  
    )  
}  