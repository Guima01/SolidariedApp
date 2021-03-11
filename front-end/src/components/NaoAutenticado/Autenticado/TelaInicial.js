import React, { useState } from 'react';
import { Animated, Text, View,  StyleSheet,Image } from 'react-native';
import { Button, TextInput,Card,List,Divider } from 'react-native-paper';
import { globalStyles, inputTheme } from '../../../styles/global';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TelaInicial({ navigation, route }) {

    
    
    let data = [{
        value: 'Associação Central da Solidariedade',
    }];

    let tipo = [{
        value: 'Entidade filantropica',
    }];
  

    return(
        
            <View style={globalStyles.containerCompleto}>
                
                <View style={styles.mainView}>
                <View style={{alignItems: 'center',width: '100%'}}>

                <View style={styles.profileHeaderView}>


                    <View style={styles.avatarImage}>
                      
                        <Image style={{width: 100,height: 100,marginTop: '250%', backgroundColor: '#fff',borderRadius:999999,marginLeft:'-250%',borderColor:'#00a19b',borderWidth:5
                      }} source={require('../../../../assets/tia.jpg') } onPress={()=> navigation.navigate('Perfil Usuario')}/>
                    
                      <Icon2 name='heart' size={30} style={{marginLeft:'-245%',paddingTop:10}} color='#00a19b' onPress={()=>navigation.navigate('PefilUser')}> </Icon2>
                      <Text style={{marginLeft:'-255%'}}> Perfil </Text>
                      
                     
                    </View>

                    </View>
                </View>
                </View>
                

                <View style={{ width: '90%', alignSelf: 'center',paddingBottom:10 }}>

                            <Card>
                                <List.Item
                                    titleStyle={{ fontSize: 16 }}
                                    style={{ backgroundColor: '#f9f9f9' }}
                                    title="Informações Básicas"
                                />

                            <Dropdown
                              containerStyle={{ 
                                  backgroundColor: '#fff',
                                  width: '95%',
                                  height: 70,
                                  marginTop: 8,
                                  marginBottom: 20,
                                  justifyContent: 'center',
                                  paddingLeft: 15,
                                  paddingRight:-5,
                                  paddingBottom: 0,
                                  borderWidth: 1,
                                  borderRadius: 2,
                                  borderColor: '#00a19b',
                              }}
                              itemColor={'#00a19b'}
                              pickerStyle={{ borderBottomColor: '#00a19b', borderWidth: 0 }}
                              dropdownOffset={{ 'top': 27, 'left': 10 }}
                              label='Tipo de Entidade'
                              data={tipo}
                            />

                                
                                
                            </Card>

                      </View>

                      <View style={{ width: '90%', alignSelf: 'center', paddingBottom: -30,marginBottom:'45%',height:'10%' }}>

                            <Card>
                                <List.Item
                                    titleStyle={{ fontSize: 16 }}
                                    style={{ backgroundColor: '#f9f9f9' }}
                                    title='Entidades'
                                />

                                <Dropdown
                                  containerStyle={{ 
                                      backgroundColor: '#fff',
                                      width: '95%',
                                      height: 70,
                                      marginTop: 8,
                                      marginBottom: 20,
                                      justifyContent: 'center',
                                      paddingLeft: 15,
                                      paddingRight:-5,
                                      paddingBottom: 0,
                                      borderWidth: 1,
                                      borderRadius: 2,
                                      borderColor: '#00a19b',
                                  }}
                                  itemColor={'#00a19b'}
                                  pickerStyle={{ borderBottomColor: '#00a19b', borderWidth: 0 }}
                                  dropdownOffset={{ 'top': 27, 'left': 10 }}
                                  label='Entidades'
                                  data={data}
                              />

                                
                                
                            </Card>

                      </View>


                
                
                

                <View style={globalStyles.campoBotoes}>
                    <Button
                        style={globalStyles.botao}
                        theme={inputTheme} 
                        mode="contained"
                        labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
                        onPress={()=>navigation.navigate('Perfil Entidade')}
                        >
                        <Text>Prosseguir</Text>
                    </Button>

                    
                </View>

            </View>
        

    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    mainView: {
      flex: 1,
    },
    profileHeaderView: {
      alignItems: 'center',
      width: '100%',
      marginBottom:15,
    },
    profileBanner: {
      width: 500,
      height: 150
    },
    avatarImage: {
      flexDirection: 'column',
      marginTop: '-14%',
      backgroundColor: '#fff',
      width: 110,
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999999,
    },
    profileNameView: {
      marginTop: '3%',
    },
    profileNameText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    profileButtonView: {
      marginTop: 4,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      height: 50,
    },
    profileButtonStyle: {
      width: '35%',
    },
    modalOverlay: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      flex: 1,
      justifyContent: 'center',
    },
    mapViewTop: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%'
    },
    mapViewTitle: {
      color: '#606060',
      fontSize: 16,
      textAlignVertical: 'center',
      marginTop: 3,
      marginLeft: 10,
    },
    mapViewClose: {
      borderWidth: 1,
      marginLeft: '42%',
      marginTop: 10,
      borderColor: '#909090'
    },
    mapOverlay: {
      borderRadius: 5,
      width: '95%',
      alignSelf: 'center'
    },
    mapWrap: {
      height: 500,
      width: '100%',
    },
    mapView: {
      height: '100%',
      width: '100%',
    },
    modalOverlay: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      flex: 1,
      justifyContent: 'flex-end',
  },cadastrandoAjudaView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  cadastroHabilidadeTop: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: '1%'
  },
  cadastroHabilidadeTitle: {
    color: '#606060',
    fontSize: 16,
    textAlignVertical: 'center',
    marginTop: 3,
    marginLeft: 10,
  },
  cadastrandoAjudaClose: {
    borderWidth: 1,
    marginLeft: '42%',
    marginTop: 10,
    borderColor: '#909090'
  },
  inputData: {
    width: '100%',
    marginBottom: '1%',
    color: '#320232',
    height: 50,
  },
  footerButton: {
    width: '45%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  footerButtonContent: {
    height: 40,
  },
  footerButtonRow: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '3%',
    alignSelf: 'center',
  },
  footerButtonRowEditSave: {
    paddingTop: '10%',
    paddingStart: '4%',
    paddingEnd: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '3%',
  },
  editView: {
    height: 35,
    flexDirection: 'row',
    alignContent: 'center',
  },
  editText: {
    alignSelf: 'center',
    color: '#505050',
    marginRight: -8,
  },

  standardListItemLeftText: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#000',
    marginLeft: 10
  },
  standardListItemRightText: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#909090'
    
  },
  });