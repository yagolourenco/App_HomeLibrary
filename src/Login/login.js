import {Alert,Text, StyleSheet, View, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import styles from '../styles/styleLogin';

import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../database/firebaseConnection';
import AppRoutes from '../Pages/app_routes';


export default function Logar() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Funcao para logar o usario
  async function login(email, password){
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then(async (value)=>{
        let uid = value.user.uid;
        await firebase.database().ref('users').child(uid).once('value')
        .then((snapshot)=>{
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };
            navigation.navigate('Home')
            setUser(data);
            storageUser(data);
        })
    })
    .catch((error)=> {
        alert(error.code);
    });
}


  function handleLogin(){
    login(email, password);
  }

    return(
    <View style={styles.container}>
      <Image
      source={require('../assets/HomeLibraryLogo.png')}
      style={styles.logo}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite seu email"  
      onChangeText={(texto) => setEmail(texto) }
      value={email}
      />

     <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="Digite sua senha"
      onChangeText={(texto) => setPassword(texto) }
      value={password}

      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao_cadastrar} onPress={() => navigation.navigate('Cadastro') }>
        <Text style={styles.botaoText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    )
  

}


