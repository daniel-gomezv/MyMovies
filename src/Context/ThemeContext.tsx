import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ThemeContextData {
  background : object,
  title: object,
  text: object
  primaryColor:string,
  secondaryColor:string
  btn:object
  TextInput:object
  styleAlert:object
  }
  
  const defaultState = {
    background : { backgroundColor: '#000'},
    title: { color: '#FFFFFF', fontSize: wp('8%')},
    text: { color: '#FFFFFF'},
    primaryColor:'#FFFFFF',
    secondaryColor:'#f69411',
    btn: {
                    marginTop:wp('5%'),
                    backgroundColor: '#f69411',
                    padding: wp('3.5%'),
                    alignItems: "center",
                    borderRadius: 20,
                    shadowColor: '#f69411',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 3,
    },
    TextInput :{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBottomColor:'#f69411',
        color:'#FFF'
    },
    styleAlert:{
      color:'#f69411',
      paddingLeft: wp('4%')
    }
  };
  
  const ThemeContext = React.createContext(defaultState);

  
  export const ProviderTheme = ThemeContext.Provider;
  export const ConsumerTheme = ThemeContext.Consumer;
  
  export default ThemeContext;