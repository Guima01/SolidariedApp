import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated,KeyboardAvoidingView} from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { globalStyles , inputTheme} from '@/../../src//styles//global';




export default function Doacao({ navigation, route }) {

    const [logoStats] = useState(new Animated.ValueXY({ x: 230, y: 230 }));
    const [tituloApp] = useState(new Animated.ValueXY({ x: 300, y: 50 }));

    


    return(
        
            <View style={globalStyles.containerCompleto}>
                <View style={globalStyles.logoView}>
                    <Animated.Image style={{ width: logoStats.x, height: logoStats.y, alignSelf: 'center'}}
                        source={require('@/../../assets/icone_solidariedApp.jpg')}/>
                    <Animated.Image style={{ width: tituloApp.x, height: tituloApp.y, alignSelf: 'center', }}
                        source={require('@/../../assets/tituloApp.png')}/>
                </View>
            <KeyboardAvoidingView behavior="position" >
                <View style={globalStyles.campoDados}>
                    <TextInput style={globalStyles.inputs}
                        label='Nome'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                       
                    />
                    <TextInput style={globalStyles.inputs}
                        label='Email'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                        
                    />
                    <TextInput style={globalStyles.inputs}
                        secureTextEntry = {true}
                        label='Senha'
                        mode='outlined'
                        theme={inputTheme}
                       
                    />
                    <TextInput style={globalStyles.inputs}
                        secureTextEntry = {true}
                        label='Confirmar Senha'
                        mode='outlined'
                        theme={inputTheme}
                        
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