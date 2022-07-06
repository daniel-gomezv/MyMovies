import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        navigation: any;
    }

    const Home: React.FC<Props> = ({
        navigation,
    }) =>{
 
  
    const defaultContext = useContext(ThemeContext);

    return(

        <Container navigation={navigation} >

          <Text style={defaultContext.title}>Mas popular</Text>
          
         
        </Container>

    )
}

export default Home;


const styles = StyleSheet.create({
  
});
