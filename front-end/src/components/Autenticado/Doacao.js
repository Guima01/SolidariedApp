import React, { useState} from 'react';
import { StyleSheet, Text, View, Animated,ScrollView} from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { globalStyles , inputTheme} from '@/../../src//styles//global';
import Icon from 'react-native-vector-icons/Entypo';




export default function Doacao({ navigation, route }) {

    const [logoStats] = useState(new Animated.ValueXY({ x: 100, y: 100 }));
    const [tituloApp] = useState(new Animated.ValueXY({ x: 170, y: 35 }));
    


    return(
        
            <ScrollView style={globalStyles.containerCompleto}>
                <View style={globalStyles.logoView}>
                    <Animated.Image style={{ width: logoStats.x, height: logoStats.y, alignSelf: 'center'}}
                        source={require('@/../../assets/icone_solidariedApp.jpg')}/>
                    <Animated.Image style={{ width: tituloApp.x, height: tituloApp.y, alignSelf: 'center', }}
                        source={require('@/../../assets/tituloApp.png')}/>
                </View>

                <View style={globalStyles.campoDados}>

                    <Icon name ='credit' size={20} style={{paddingBottom:'-150%'}}/>
                    <TextInput style={globalStyles.inputsDoacao}
                        label='Valor'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                       
                    />
                    <Icon name ='man' size={20} style={{paddingBottom:'-150%'}}/>
                    <TextInput style={globalStyles.inputsDoacao}
                        label='Nome do Cartão'
                        mode='outlined'
                        theme={inputTheme}
                        autoCapitalize='none'
                        
                    />

                
                    <Icon name ='credit-card' size={20} style={{paddingBottom:'-150%'}}/>
                    <TextInput style={globalStyles.inputsDoacao}
                        
                        label='Numero do Cartão'
                        mode='outlined'
                        theme={inputTheme}
                       
                    />
                    <Icon name ='key' size={20} style={{paddingBottom:'-150%'}}/>
                    <View style={{flexDirection:'row'}}>

                    
                    <TextInput style={{marginBottom: '5%',marginTop:'1%',width:'45%',marginRight:'5%',}}
                        secureTextEntry = {true}
                        label='CVV'
                        mode='outlined'
                        theme={inputTheme}
                        
                        
                    />
                     <TextInput style={{marginBottom: '5%',marginTop:'1%',width:'45%',marginLeft:'5%',}}
                        secureTextEntry = {true}
                        label='Validade'
                        mode='outlined'
                        theme={inputTheme}
                        
                        
                    />
                    </View>

                </View>
            
                <View style={{flexDirection:"row"}}>
            

                    <Button
                        style={{marginBottom: '5%',marginTop:'1%',width:'40%',marginLeft:'5%',marginRight:"5%"}}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>navigation.navigate('Tela Inicial')}
                        >
                        <Text>Cancelar</Text>
                    </Button>

                    <Button
                        style={{marginBottom: '5%',marginTop:'1%',width:'40%',marginLeft:'5%',marginRight:"5%"}}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>alert("Comprovante Enviado para o seu e-mail")}
                        
                        >
                        <Text>Doar</Text>
                    </Button>
                </View>
                </ScrollView>

        

    );
}