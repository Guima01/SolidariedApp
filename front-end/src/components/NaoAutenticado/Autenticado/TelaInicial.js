import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { globalStyles, inputTheme } from '../../../styles/global';


export default function TelaInicial({ navigation, route }) {

    

  

    return(
        
            <View style={globalStyles.containerCompleto}>
                

                <View style={globalStyles.campoBotoes}>
                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>navigation.navigate('Perfil Entidade')}
                        >
                        <Text>Login</Text>
                    </Button>

                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>navigation.navigate('Perfil Usuario')}
                        >
                        <Text >Perfil Usuario</Text>
                    </Button>
                </View>

            </View>
        

    );
}