import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import axios from 'axios';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        navigation: any;
    }

    let arr:object = {
        top_rated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=34b16de8865cfe7e9f791e016f31ffef',
        popular: 'https://api.themoviedb.org/3/movie/top_rated?api_key=34b16de8865cfe7e9f791e016f31ffef',
      };



    const Home: React.FC<Props> = ({
        navigation,
    }) =>{
 
        
        
    const defaultContext = useContext(ThemeContext);

   

    return(
        <MovieHomeContext.Provider value={{}}>
                <Container navigation={navigation} >

                <Text style={defaultContext.title}>Mas popular</Text>

                <Text style={defaultContext.title}>Mas visto</Text>
                
                </Container>
        </MovieHomeContext.Provider>
    )
}

export default Home;


const styles = StyleSheet.create({
  
});
