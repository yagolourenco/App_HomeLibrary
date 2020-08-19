import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({

body:{
    flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff'

},

    botao:{
      width:300,
      height:100,
      alignSelf: "center",
      marginTop:5,
      borderRadius:50,
      alignItems: 'center',
      backgroundColor: '#3cb371',
      flexDirection: 'row',
      justifyContent: 'space-between',
  },

  botao_dois:{
    width:300,
    height:100,
    alignSelf: "center",
    marginTop:5,
    borderRadius:50,
    alignItems: 'center',
    backgroundColor: '#3cb371',
    flexDirection: 'row',
    justifyContent: 'space-between',


  },

  botao_tres:{
    width:300,
    height:100,
    alignSelf: "center",
    marginTop:5,
    borderRadius:50,
    alignItems: 'center',
    backgroundColor: '#3cb371',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  botao_quatro:{
    width:300,
    height:100,
    alignSelf: "center",
    marginTop:5,
    borderRadius:50,
    alignItems: 'center',
    backgroundColor: '#3cb371',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 70
  },

  ant: {
    width:200,
    height:100,
    borderRadius:50,
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },

  ant_dois: {
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize:40,
    right: 30
  },

  logo:{
    width: 200,
    height: 200,
    borderRadius: 100
  },
  
});

export default styles;
