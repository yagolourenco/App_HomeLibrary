import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, Image,TouchableOpacity} from 'react-native';
import styles from '../styles/styleCadastro';

import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../database/firebaseConnection';
import AppRoutes from '../Pages/app_routes';

export default function cadastrar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Cadastrar usuario
  async function Cadastrar(email, password){
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(async (value)=>{
        let uid = value.user.uid;
        await firebase.database().ref('users').child(uid).set({
            email: email
        })

        //cria um nó com o nome do usuario
       /* await firebase.database().ref('users').child(uid).child('livros').set({
          novo: 0,
          nome: nome
      })*/

    })
    .catch((error)=> {
        alert(error.code);
    });
}

  function handleCadastrar(){
    Cadastrar(email, password);
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
  
      <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
        <Text style={styles.botaoText}>Cadastrar</Text>
      </TouchableOpacity>
  
    </View>
    );
}

