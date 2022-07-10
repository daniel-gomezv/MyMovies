import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        navigation: any;
    }



    const List: React.FC<Props> = ({
        navigation,
    }) =>{
 
        
        
    const defaultContext = useContext(ThemeContext);
    const MovieHomeDefault = useContext(MovieHomeContext);


    return(
            <>

            </>
    )
}

export default List;


const styles = StyleSheet.create({
    
   
});
