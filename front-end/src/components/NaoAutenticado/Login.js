import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { globalStyles , inputTheme} from '../../styles/global';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import api from '../../services/api'

export default function Login({ navigation, route }) {

    const [logoStats] = useState(new Animated.ValueXY({ x: 170, y: 170 }));
    const [tituloApp] = useState(new Animated.ValueXY({ x: 260, y: 40 }));

    const [dadosLogin, setDadosLogin] = useState({
        username: "",
        password: ""
    });

    function logIn(){
        if(dadosLogin.username == "tata" && dadosLogin.password == "fota")
            console.log("Credenciais corretas , logando...")
      //navigation.navigate('')
    }

  

    return(
        <KeyboardAwareScrollView style={globalStyles.containerCompleto}>
            <View style={globalStyles.containerCompleto}>
                <View style={globalStyles.logoView}>
                    <Animated.Image style={{ width: logoStats.x, height: logoStats.y, alignSelf: 'center'}}
                        source={require('../../../assets/icone_solidariedApp.jpg')}/>
                    <Animated.Image style={{ width: tituloApp.x, height: tituloApp.y, alignSelf: 'center', }}
                        source={require('../../../assets/tituloApp.png')}/>
                </View>
                
                <View style={globalStyles.campoDados}>
                    <TextInput style={globalStyles.inputs}
                        label='Login'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                        onChangeText={value => setDadosLogin({ ...dadosLogin, username: value })}
                        value={dadosLogin.username}
                    />
                    <TextInput style={globalStyles.inputs}
                        secureTextEntry = {true}
                        label='Senha'
                        mode='outlined'
                        theme={inputTheme}
                        onChangeText={value => setDadosLogin({ ...dadosLogin, password: value })}
                        value={dadosLogin.password}
                    />
                </View>

                <View style={globalStyles.campoBotoes}>
                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={ () => logIn()}
                        >
                        <Text>Login</Text>
                    </Button>

                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>navigation.navigate('Cadastro')}
                        >
                        <Text >Cadastrar</Text>
                    </Button>
                </View>

            </View>
            </KeyboardAwareScrollView>
        

    );
}