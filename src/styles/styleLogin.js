import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff'
},
logo:{
  width: 200,
  height: 200,
  borderRadius: 100
},

input:{
  marginTop:10,
  width: 300,
  backgroundColor: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  borderRadius: 3
},

botao:{
  width:300,
  height:42,
  marginTop:10,
  borderRadius:4,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3cb371'
},

botaoText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#fff'
},

botao_cadastrar:{
  width:300,
  height:42,
  marginTop:20,
  borderRadius:4,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3cb371'
},

texto_carregar:{
  marginTop:30,
  borderRadius:4,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3cb371'
},

});

export default styles;

