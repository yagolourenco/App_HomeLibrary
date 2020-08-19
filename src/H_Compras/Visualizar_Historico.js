import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, Image,TouchableOpacity} from 'react-native';
import firebase from '../database/firebaseConnection';
import styleVisualizarHistorico from '../styles/styleVisualizarHistorico';

console.disableYellowBox=true;

export default function App() {
 
  const [items, setItems] = useState([]);
  
 useEffect(()=> {

  async function loadTasks(){
    let userId = firebase.auth().currentUser.uid;
      await firebase.database().ref('users').child(userId).child('Histórico de Compras').once('value').then(snapshot =>{
        
      snapshot.forEach((child)=>{
       
        items.push({
          key: child.key,
          Data: child.val().Data,
          Nome_do_Livro:child.val().Nome_do_Livro,
          Preço:child.val().Preço,
          });
      })

      console.log({items});
    });
  }
  loadTasks();
 }, []);

  return(
    
    <View style={styleVisualizarHistorico.container}>
        
       <View style={styleVisualizarHistorico.header}>
        <Text style={styleVisualizarHistorico.headerText}>
        <Text style={styleVisualizarHistorico.headerTextBold}></Text>
        </Text>
        </View>
        <View style={styleVisualizarHistorico.titulos}>
        <Text style={styleVisualizarHistorico.title}>Meu Histórico</Text>
        <AntDesign name="book" style={styleVisualizarHistorico.ant_dois} />
        </View>
        <Text style={styleVisualizarHistorico.description}>Veja seu Histórico Cadastrado</Text>

        <FlatList
        data={items}
        style={styleVisualizarHistorico.Lista}
        keyExtractor={item => item.key}
        renderItem={ ({ item }) => (
            <View style={styleVisualizarHistorico.cartaolista}>
                <Text style={styleVisualizarHistorico.titulo}>Nome do Livro:</Text>
                <Text style={styleVisualizarHistorico.conteudo}>{item.Nome_do_Livro}</Text>
                
                <Text style={styleVisualizarHistorico.titulo}>Preço do Livro:</Text>
                <Text style={styleVisualizarHistorico.conteudo}>{item.Preço}</Text>
               
                <Text style={styleVisualizarHistorico.titulo}>Data de Compra:</Text>
                <Text style={styleVisualizarHistorico.conteudo}>{item.Data}</Text>
               
                
            </View>
        )}
        />
        </View>
     
);
}

