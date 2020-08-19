import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styleFavoritos from '../styles/styleFavoritos';
import firebase from '../database/firebaseConnection';

export default function App() {
 
    const [items, setItems] = useState([]);
    
   useEffect(()=> {
  
    async function loadTasks(){
      let userId = firebase.auth().currentUser.uid;
        let uidlivro = firebase.database().ref('users').child(userId).child('Livros');
        await firebase.database().ref('users').child(userId).child('Livros').orderByChild('Favorito').equalTo('sim').once('value').then(snapshot =>{
         
        snapshot.forEach((child)=>{
         
          items.push({
            Autor: child.val().Autor,
            N_identificador:child.val().N_identificador,
            Nome_do_Livro:child.val().Nome_do_Livro,
            Favorito: child.val().Favorito,
            key: child.key,
            });
           
            console.log('nome do bagui',{items});
        })
        });
    }
    loadTasks();
   }, []);
  
  
    async function deletar_favorito(key){
      var fav = key;
      console.log('O ID É ESSE:',{fav});
      alert({fav});
         //Remove do favorito
         let userId = firebase.auth().currentUser.uid;
         await firebase.database().ref('users').child(userId).child('Livros').child(fav).update({
            Favorito: 'nao'
          })
    }
    
    return(
      
      <View style={styleFavoritos.container}>
          
         <View style={styleFavoritos.header}>
          <Text style={styleFavoritos.headerText}>
          <Text style={styleFavoritos.headerTextBold}></Text>
          </Text>
          </View>
          <View style={styleFavoritos.titulos}>
          <Text style={styleFavoritos.title}>Meus Favoritos</Text>
          <AntDesign name="book" style={styleFavoritos.ant_dois} />
          </View>
          <Text style={styleFavoritos.description}>Veja seus Livros Favoritados</Text>
  
          <FlatList
          data={items}
          style={styleFavoritos.Lista}
          keyExtractor={item => item.key}
          renderItem={ ({ item }) => (
              
              <View style={styleFavoritos.cartaolista}>
                  <Text style={styleFavoritos.titulo}>Nome:</Text>
                  <Text style={styleFavoritos.conteudo}>{item.Nome_do_Livro}</Text>
                  
                  <Text style={styleFavoritos.titulo}>Autor:</Text>
                  <Text style={styleFavoritos.conteudo}>{item.Autor}</Text>
                 
                  <Text style={styleFavoritos.titulo}>N.Identificador:</Text>
                  <Text style={styleFavoritos.conteudo}>{item.N_identificador}</Text>
  
                  <TouchableOpacity 
                  style={styleFavoritos.botao_ml}
                  onPress={() => {deletar_favorito(item.key)}}
                  >
                    <Text style={styleFavoritos.deletar_botao}>Deletar dos favoritos</Text>
                       <AntDesign name="close" size={16} color="#ff0000" />
                  </TouchableOpacity>
              </View>
          )}
          />
          </View>
       
  );
  
  }