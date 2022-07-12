import React,{FC,useContext,useState,useEffect} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import {saveToken} from '../functions/Realmio';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import validator from 'validator';
import axios from 'axios';

interface Props {
    navigation: any;
   
  }

  interface loginInterface{
    email: string,
    password: string,
  };

    const LoginScreen: React.FC<Props> = ({
        navigation,
    }) =>{
 
   const theme = useContext(ThemeContext);
   const [userEmail, setUserEmail] = useState<string>("");
   const [userPassword, setUserPassword] = useState<string>("");
   const [textAlert, setTextAler] = useState<string>("");

   const getUserEmail = (userEml: string) => {
       setUserEmail(userEml);
       (validator.isEmail(userEmail)) && setTextAler('');
    }

    const getUserPassword = (userPass: string) =>{
       setUserPassword(userPass);
       (!validator.isEmpty(userPass)) && setTextAler('');
   }

   const LoginRequest = () => {

       (!validator.isEmail(userEmail)) ? setTextAler('Ingrese un correo electronico valido.') : setTextAler('');
       (validator.isEmpty(userEmail) || validator.isEmpty(userPassword) ) && setTextAler('Es necesario completar todos los campos.');

        let bodyRequest:loginInterface = {
            email: userEmail,
            password: userPassword
        };

        if(textAlert == ''){
                
                axios({
                  method: 'post',
                  url: 'https://reqres.in/api/login',
                  data: bodyRequest
                 }).then((resultAxios) => {
                    saveToken(resultAxios.data.token);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'PrivateNavigation' }],
                      });
                }).catch(function (error) {
                    console.log(error)
                });
        }

   } 

    return(

        <Container navigation={navigation} >
            <Image source={require('../assets/img/logo.png')} style={styles.imgLogo} />
            
            <TextInput
                style={theme.TextInput}
                placeholderTextColor={theme.primaryColor}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                onChangeText={getUserEmail}
            />

            <TextInput
                style={theme.TextInput}
                placeholderTextColor={theme.primaryColor}
                placeholder="Contraseña"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={getUserPassword}
            />

            <Text style={theme.styleAlert}>{textAlert}</Text>

            <TouchableOpacity
                style={theme.btn}
                onPress={LoginRequest}  
            >
                <Text style={[theme.text,styles.title]} >Iniciar sesion</Text>
            </TouchableOpacity>
    
        </Container>

    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    title:{
        textAlign:'center',
    },
    imgLogo:{
        width: wp('100%'),
        height: wp('30%'),
    }
    
    
});
