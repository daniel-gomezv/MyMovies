import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, TextStyle ,TextInput,TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderBottomColor:'#f69411',
                    color:'#FFF'
                }}
                placeholderTextColor={'#fff'}
                placeholder="Correo electrónico"
                keyboardType="email-address"
            />

            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderBottomColor:'#f69411',
                    color:'#FFF'
                }}
                placeholderTextColor={'#fff'}
                placeholder="Contraseña"
                keyboardType="default"
                secureTextEntry={true}
            />

           
            <TouchableOpacity
                style={{ 
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
                }}
                
                onPress={() => {
                  
                  }}
                  
            >
                <Text style={[theme.text,styles.title]} >Entrar</Text>
            </TouchableOpacity>
    
        </Container>

    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    title:{
        textAlign:'center',
    },
    
    
});
