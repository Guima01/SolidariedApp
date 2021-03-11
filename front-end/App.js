import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/NaoAutenticado/Login'
import Cadastro from './src/components/NaoAutenticado/Cadastro'
import TelaInicial from './src/components/NaoAutenticado/Autenticado/TelaInicial'
import PerfilUser from './src/components/NaoAutenticado/Autenticado/PerfilUser'
import PerfiEntidade from './src/components/NaoAutenticado/Autenticado/PerfilEntidade'
import Doacao from './src/components/NaoAutenticado/Autenticado/Doacao'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
      <Stack.Screen name="Perfil Usuario" component={PerfilUser}/>
      <Stack.Screen name='Perfil Entidade' component={PerfiEntidade}/>
      <Stack.Screen name='Doacao' component={Doacao}/>
     
  
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      
    </NavigationContainer>
  );
}