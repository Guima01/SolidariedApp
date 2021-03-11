import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated,KeyboardAvoidingView} from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { globalStyles , inputTheme} from '../../styles/global';


import api from '../../services/api'

export default function Cadastro({ navigation, route }) {

    const [logoStats] = useState(new Animated.ValueXY({ x: 170, y: 170 }));
    const [tituloApp] = useState(new Animated.ValueXY({ x: 260, y: 40 }));

    const [dadosCadastro, setDadosCadastros] = useState({
        name: "",
        email:"",
        password:"",
        passwordConfirm:""
    });

    function cadastros(){
        if( dadosCadastro.username == "tata" && 
            dadosCadastro.email == "tata@tama.com" &&
            dadosCadastro.password == "fota" &&
            dadosCadastro.passwordConfirm == "fota")
            console.log("Credenciais corretas , logando...")
      //navigation.navigate('')
    }


    return(
        
            <View style={globalStyles.containerCompleto}>
                <View style={globalStyles.logoView}>
                    <Animated.Image style={{ width: logoStats.x, height: logoStats.y, alignSelf: 'center'}}
                        source={require('../../../assets/icone_solidariedApp.jpg')}/>
                    <Animated.Image style={{ width: tituloApp.x, height: tituloApp.y, alignSelf: 'center', }}
                        source={require('../../../assets/tituloApp.png')}/>
                </View>
            <KeyboardAvoidingView behavior="position" >
                <View style={globalStyles.campoDados}>
                    <TextInput style={globalStyles.inputs}
                        label='Nome'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                        onChangeText={value => setDadosCadastros({ ...dadosCadastro, username: value })}
                        value={dadosCadastro.username}
                    />
                    <TextInput style={globalStyles.inputs}
                        label='Email'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                        onChangeText={value => setDadosCadastros({ ...dadosCadastro, email: value })}
                        value={dadosCadastro.email}
                    />
                    <TextInput style={globalStyles.inputs}
                        secureTextEntry = {true}
                        label='Senha'
                        mode='outlined'
                        theme={inputTheme}
                        onChangeText={value => setDadosCadastros({ ...dadosCadastro, password: value })}
                        value={dadosCadastro.password}
                    />
                    <TextInput style={globalStyles.inputs}
                        secureTextEntry = {true}
                        label='Confirmar Senha'
                        mode='outlined'
                        theme={inputTheme}
                        onChangeText={value => setDadosCadastros({ ...dadosCadastro, passwordConfirm: value })}
                        value={dadosCadastro.passwordConfirm}
                    />
                </View>
            </KeyboardAvoidingView>
                <View style={globalStyles.campoBotoes}>
            

                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>cadastros()}
                        >
                        <Text>Cadastrar</Text>
                    </Button>
                </View>

            </View>
        

    );
}