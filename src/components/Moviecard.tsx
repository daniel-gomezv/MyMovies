import React,{FC,useContext,use} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        filter:string,
        navigation:any,
    }

   

    const Moviecard: React.FC<Props> = ({
        filter='',
        navigation
    }) =>{
 
    
    const theme = useContext(ThemeContext);
    const MovieHome = useContext(MovieHomeContext);


    const detailsMovie = (obj:object) =>{  
      
        navigation.navigate('DetailsMovie', JSON.stringify(obj));
    }

    

    return(
        <SafeAreaView>
            <FlatList
             showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}
            data={MovieHome.getMoviesFilter(filter)}
            initialNumToRender={10}
            horizontal={true}
            renderItem={({ item }) => {
                try {
                    
                    return (

                        <TouchableOpacity
                        onPress={() => {
                            detailsMovie(item);
                        }}
                        >
                            <Image source={{ uri: MovieHome.Movies.imglink + item.poster_path}}   style={{width: 150, height: 200,  resizeMode: 'contain'}} />
                        </TouchableOpacity>
                    )
                } catch (error) {
                    
                }}}
            keyExtractor={(item) => item.id}
            />
      </SafeAreaView>
    )
}

export default Moviecard;


const styles = StyleSheet.create({
  
});
