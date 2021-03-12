import React, { useState } from 'react';
import { Animated, Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';
import { Button, TextInput, Card, List, Divider } from 'react-native-paper';
import { globalStyles, inputTheme } from '../../styles/global';


export default function PerfilEntidade({ navigation, route }) {





  return (

    <View style={globalStyles.containerCompleto}>

      <View style={styles.mainView}>
        <View style={{ alignItems: 'center', width: '100%' }}>

          <View style={styles.profileHeaderView}>

            <View>
              <Image style={styles.profileBanner} source={require('../../../assets/entidade.jpg')} />
            </View>

            <View style={styles.avatarImage}>
              <Image style={{ width: 120, height: 120, marginTop: '15%', backgroundColor: '#fff', borderRadius: 999999 }} source={require('../../../assets/perfilEntidade.jpg')} />
            </View>

          </View>
        </View>

        <View style={{ width: '96%', alignSelf: 'center', marginTop: '4%', paddingBottom: -10 }}>

          <Card>
            <List.Item
              titleStyle={{ fontSize: 16 }}
              style={{ backgroundColor: '#f9f9f9' }}
              title="Informações Básicas"
            />
            <List.Item

              left={props => <Text style={styles.standardListItemLeftText}>Nome</Text>}
              right={props => <Text style={{ marginRight: 145, alignSelf: 'center', fontSize: 13, color: '#909090' }}>Associação Central da Solidariedade</Text>}
            />
            <Divider />
            <List.Item

              left={props => <Text style={styles.standardListItemLeftText}>O que somos?</Text>}
              right={props => <Text style={{ marginRight: 145, alignSelf: 'center', fontSize: 15, color: '#909090' }}>É uma entidade filantrópica sem fins lucrativos que possui uma equipe composta por neurologista, pediatra, entre outros profissionais.
                            </Text>}
            />
            <Divider />
          </Card>

        </View>

        <View style={{ width: '96%', alignSelf: 'center', marginTop: '4%', paddingBottom: 10 }}>

          <Card>
            <List.Item
              titleStyle={{ fontSize: 16 }}
              style={{ backgroundColor: '#f9f9f9' }}
              title="Contato"
            />
            <List.Item

              left={props => <Icon name='home' size={30} />}
              right={props => <Text style={{ marginRight: 150, alignSelf: 'center', fontSize: 13, color: '#909090' }}>Endereço: Rua José Lourenço Kelmer, s/n - São Pedro, Juiz de Fora - MG, 36036-900</Text>}
            />
            <Divider />
            <List.Item

              left={props => <Icon3 name='old-mobile' size={30} />}
              right={props => <Text style={{ marginRight: 200, alignSelf: 'center', fontSize: 15, color: '#909090' }}>Telefone:(32)3276-6269</Text>}
            />
            <Divider />
          </Card>

        </View>

        <Button
          style={globalStyles.botaow}
          theme={inputTheme}
          mode="contained"
          labelStyle={{ width: '100%', fontSize: 15, padding: 3 }}
          onPress={() => navigation.navigate('Doacao')}
        >
          <Text >Doar</Text>
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
    marginBottom: 10,
  },
  profileBanner: {
    width: 300,
    height: 70,
    alignSelf:"baseline"

  },
  avatarImage: {
    flexDirection: 'column',
    marginTop: '-14%',
    backgroundColor: '#f1f1f1',
    width: 90,
    height: 90,
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
  }, cadastrandoAjudaView: {
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