import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, Image,TouchableOpacity} from 'react-native';
import firebase from '../database/firebaseConnection';
import adiciona_Livros from '../Adicionar_Livros/Adicionar_livros';
import styleMeusLivros from '../styles/styleMeusLivros';

console.disableYellowBox=true;

export default function App() {
 
  const [items, setItems] = useState([]);

 useEffect(()=> {

  async function loadTasks(){
    let userId = firebase.auth().currentUser.uid;
      let uidlivro = firebase.database().ref('users').child(userId).child('Livros');
      await firebase.database().ref('users').child(userId).child('Livros').once('value').then(snapshot =>{
        
      snapshot.forEach((child)=>{
       
        items.push({
          Autor: child.val().Autor,
          N_identificador:child.val().N_identificador,
          Nome_do_Livro:child.val().Nome_do_Livro,
          key: child.key,
          });
          
      })
    });
  }
  loadTasks();
 }, []);

  async function favorito(key){
    var fav = key;
    console.log('O ID É ESSE:',{fav});
    alert({fav});
       //Remove um nó
       let userId = firebase.auth().currentUser.uid;
       //Atualiza o campo favorito para: sim
      await firebase.database().ref('users').child(userId).child('Livros').child(fav).update({
      Favorito: 'sim'
    })
  }

  async function deletar(key){
    var fav = key;
    console.log('O ID É ESSE:',{fav});
    alert({fav});
       //Remove um nó
       let userId = firebase.auth().currentUser.uid;
    await firebase.database().ref('users').child(userId).child('Livros').child(fav).remove();
  }
 
  
  return(
    
    <View style={styleMeusLivros.container}>
        
       <View style={styleMeusLivros.header}>
        <Text style={styleMeusLivros.headerText}>
        <Text style={styleMeusLivros.headerTextBold}></Text>
        </Text>
        </View>
        <View style={styleMeusLivros.titulos}>
        <Text style={styleMeusLivros.title}>Meus Livros</Text>
        <AntDesign name="book" style={styleMeusLivros.ant_dois} />
        </View>
        <Text style={styleMeusLivros.description}>Veja seus Livros Cadastrados</Text>

        <FlatList
        data={items}
        style={styleMeusLivros.Lista}
        
        keyExtractor={item => item.key}
        renderItem={ ({ item }) => (
            <View style={styleMeusLivros.cartaolista}>
                <Text style={styleMeusLivros.titulo}>Nome:</Text>
                <Text style={styleMeusLivros.conteudo}>{item.Nome_do_Livro}</Text>
                
                <Text style={styleMeusLivros.titulo}>Autor:</Text>
                <Text style={styleMeusLivros.conteudo}>{item.Autor}</Text>
               
                <Text style={styleMeusLivros.titulo}>N.Identificador:</Text>
                <Text style={styleMeusLivros.conteudo}>{item.N_identificador}</Text>
                
                <TouchableOpacity 
                style={styleMeusLivros.botao_ml}
                onPress={() => {favorito(item.key)}}
                >
                  <Text style={styleMeusLivros.texto_botao}>Favoritar</Text>
                     <AntDesign name="star" size={16} color="#ffd700" />
                </TouchableOpacity>

                <TouchableOpacity 
                style={styleMeusLivros.botao_ml}
                onPress={() => {deletar(item.key)}}
                >
                  <Text style={styleMeusLivros.deletar_botao}>Deletar</Text>
                     <AntDesign name="close" size={16} color="#ff0000" />
                </TouchableOpacity>
            </View>
        )}
        />
        </View>
     
);

}

