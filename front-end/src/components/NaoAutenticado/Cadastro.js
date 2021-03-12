import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { globalStyles, inputTheme } from '../../styles/global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import api from '../../services/api'

export default function Cadastro({ navigation, route }) {

    const [logoStats] = useState(new Animated.ValueXY({ x: 170, y: 170 }));
    const [tituloApp] = useState(new Animated.ValueXY({ x: 260, y: 40 }));

    const [dadosCadastro, setDadosCadastros] = useState({
        nome: "",
        email: "",
        senha: ""
    });



    async function cadastros() {
        try {

            const responseUser = await api.post("/users", dadosCadastro);
            navigation.navigate('Tela Inicial')
        } catch (responseUser) {
            alert("Não foi possivel efetuar o cadastro. Tente Novamente." + JSON.stringify(responseUser.data));
        }
    }


    return (

        <View style={globalStyles.containerCompleto}>
            <KeyboardAwareScrollView style={globalStyles.containerCompleto}>
                <View style={globalStyles.logoView}>
                    <Animated.Image style={{ width: logoStats.x, height: logoStats.y, alignSelf: 'center' }}
                        source={require('../../../assets/icone_solidariedApp.jpg')} />
                    <Animated.Image style={{ width: tituloApp.x, height: tituloApp.y, alignSelf: 'center', }}
                        source={require('../../../assets/tituloApp.png')} />
                </View>

                <View style={globalStyles.campoDados}>
                    <TextInput style={globalStyles.inputs}
                        label='Login'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                        onChangeText={value => setDadosCadastros({ ...dadosCadastro, nome: value })}
                        value={dadosCadastro.nome}
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
                        secureTextEntry={true}
                        label='Senha'
                        mode='outlined'
                        theme={inputTheme}
                        onChangeText={value => setDadosCadastros({ ...dadosCadastro, senha: value })}
                        value={dadosCadastro.senha}
                    />
                    <TextInput style={globalStyles.inputs}
                        secureTextEntry={true}
                        label='Confirmar Senha'
                        mode='outlined'
                        theme={inputTheme}
                    //onChangeText={value => setDadosCadastros({ ...dadosCadastro, passwordConfirm: value })}
                    //value={dadosCadastro.passwordConfirm}
                    />
                </View>

                <View style={globalStyles.campoBotoes}>


                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme}
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={() => cadastros()}
                    >
                        <Text>Cadastrar</Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </View>



    );
}