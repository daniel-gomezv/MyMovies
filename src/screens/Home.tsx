import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import axios from 'axios';
import Moviecard from '../components/Moviecard';

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
    const MovieHomeDefault = useContext(MovieHomeContext);

   

    return(
    <ScrollView style={defaultContext.background}>
        <MovieHomeContext.Provider value={MovieHomeDefault}>
                <Container navigation={navigation} >
                        <Text style={defaultContext.title}>Estrenos</Text>
                            <Moviecard type='Popular'/>

                        <Text style={defaultContext.title}>Mas visto</Text>
                            <Moviecard type='TopRated'/>

                        <Text style={defaultContext.title}>Tendencias</Text>
                            <Moviecard type='Popular'/>
                </Container>
        </MovieHomeContext.Provider>
    </ScrollView>
    )
}

export default Home;


const styles = StyleSheet.create({
  
});
