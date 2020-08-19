import React, { useState, useEffect } from 'react';
import {Alert,Text, StyleSheet, View, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import styles from '../styles/stylesCompras';
import { Value } from 'react-native-reanimated';
import firebase from '../database/firebaseConnection';

export default function h_Compras({navigation}) {

    const [nome_livro, setNome_livro] = useState('');
    const [preco, setPreco] = useState('');
    const [data, setData] = useState('');

  //pega o id de quem está logado no app
    async function identifica_usuario(){
      let userId = firebase.auth().currentUser.uid;
      
      let key_livros = await firebase.database().ref('users').child(userId);
      let chave = key_livros.push().key;

      alert(userId)
      //adiciona coisas dentro do Uid de certo usuario
       await firebase.database().ref('users').child(userId).child('Histórico de Compras').child(chave).set({
         Nome_do_Livro: nome_livro,
         Preço: preco,
         Data: data
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
      placeholder="Preço"
      onChangeText={(texto) => setPreco(texto)}
      value={preco}
      />

      <TextInput
      style={styles.input}
      placeholder="Data"
      onChangeText={(texto) => setData(texto)}
      value={data}
      />

      <TouchableOpacity style={styles.botao} onPress={identifica_usuario}>
        <Text style={styles.botaoText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao_dois} onPress={() => navigation.navigate('Visualizar_Historico')}>
        <Text style={styles.botaoText}>Visualizar Histórico</Text>
      </TouchableOpacity>
    </View>
    )
  

}


