import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, TextStyle ,TextInput} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';


interface Props {
    navigation: any;
   
  }


const LoginScreen: React.FC<Props> = ({
    navigation,
}) =>{
 
   const theme = useContext(ThemeContext);
 

    return(

        <Container navigation={navigation} >
            <Text style={[theme.title,styles.title]}>Iniciar sesion</Text>
           
        </Container>

    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    title:{
        textAlign:'center',
    },
    
    
});
