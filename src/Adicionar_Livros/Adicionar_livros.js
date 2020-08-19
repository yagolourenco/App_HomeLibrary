import React, { useState, useEffect } from 'react';
import {Alert,Text, StyleSheet, View, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import styles from '../styles/stylesAdiciona_Livro';
import firebase from '../database/firebaseConnection';

export default function adiciona_Livros({navigation}) {

    const [nome_livro, setNome_livro] = useState('');
    const [autor, setAutor] = useState('');
    const [num_iden, setNum_iden] = useState('');

    //pega o id de quem está logado no app
      async function identifica_usuario(){
      let userId = firebase.auth().currentUser.uid;
      let key_livros = await firebase.database().ref('users').child(userId);
      let chave = key_livros.push().key;

      alert("Adicionado")
    //adicona coisas dentro do Uid de certo usuario
       await firebase.database().ref('users').child(userId).child('Livros').child(chave).set({
         Nome_do_Livro: nome_livro,
         Autor: autor,
         N_identificador: num_iden,
         Favorito: 'nao'
       });
      }

    return(
    <View style={styles.container}>
      <Image
      source={require('../assets/HomeLibraryLogo.png')}
      style={styles.logo}
      />

      <TextInput
      style={styles.input}
      placeholder="Nome do livro"  
      onChangeText={(texto) => setNome_livro(texto)}
      value={nome_livro}
      />

     <TextInput
      style={styles.input}
      placeholder="Autor"
      onChangeText={(texto) => setAutor(texto)}
      value={autor}
      />

      <TextInput
      style={styles.input}
      placeholder="Numero Identificador"
      onChangeText={(texto) => setNum_iden(texto)}
      value={num_iden}
      />

      <TouchableOpacity style={styles.botao} onPress={identifica_usuario}>
        <Text style={styles.botaoText}>Adicionar Livro</Text>
      </TouchableOpacity>
    </View>
    )
  

}

