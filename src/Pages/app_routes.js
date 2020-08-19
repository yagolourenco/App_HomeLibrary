import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/home';
import Adicionar_Livros from '../Adicionar_Livros/Adicionar_livros';
import Meus_Livros from '../Meus_Livros/Meus_Livros';
import Favoritos from '../Favoritos/Favoritos';
import H_Compras from '../H_Compras/H_Compras';
import Visualizar_Historico from '../H_Compras/Visualizar_Historico';
import Login from '../Login/login';
import Cadastro from '../Cadastro/cadastro';

const Stack = createStackNavigator();

function AppRoutes(){
  return (
    
      <Stack.Navigator initialRouteName="Login">

    <Stack.Screen name="Login" component={Login} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
          }}
         />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "Cadastrar",
          }}/>

      <Stack.Screen name="Home" component={Home} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
          }} />
        <Stack.Screen name="Adicionar_Livros" component={Adicionar_Livros} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "Adicionar Livros",
          }}/>
        <Stack.Screen name="Meus_Livros" component={Meus_Livros} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "",
          }}/>
        <Stack.Screen name="Favoritos" component={Favoritos} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "",
      
          }}/>
        <Stack.Screen name="H_Compras" component={H_Compras} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "Historico de Compras",
          }}/>

        <Stack.Screen name="Visualizar_Historico" component={Visualizar_Historico} options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "",
          }}/>
      </Stack.Navigator>
    
  );
}

export default AppRoutes;
