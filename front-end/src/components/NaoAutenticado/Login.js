import React, { useState} from 'react';
import { Text, View, Animated } from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { globalStyles , inputTheme} from '../../styles/global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import api from '../../services/api'

export default function Login({ navigation, route }) {

    const [logoStats] = useState(new Animated.ValueXY({ x: 170, y: 170 }));
    const [tituloApp] = useState(new Animated.ValueXY({ x: 260, y: 40 }));

    const [dadosLogin, setDadosLogin] = useState({
        username: "",
        password: ""
    });

    async function logIn(){

        try {

            const responseUser = await api.get("/users", dadosLogin);
            
            const existe = responseUser.data.find( user => user.nome === dadosLogin.username && user.senha === dadosLogin.password );
            if(existe != undefined){
                console.log(existe)
                navigation.navigate("Tela Inicial");
            }
            else alert("Usuario ou senha incorretos");
        } catch (responseUser) {
            alert("Não foi possivel efetuar o cadastro. Tente Novamente." + JSON.stringify(responseUser.data));
        }
        
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