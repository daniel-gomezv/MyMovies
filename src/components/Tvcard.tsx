import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        filter:string,
        navigation:any,
    }

   

    const Tvcard: React.FC<Props> = ({
        filter='',
        navigation,
    }) =>{
 
    
    const theme = useContext(ThemeContext);
    const MovieHome = useContext(MovieHomeContext);

    
     const detailsMovie = (obj:object) =>{  
      
        navigation.navigate('TvDetails', JSON.stringify(obj));
    }


    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={MovieHome.getTvFilter(filter)}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={10}
            renderItem={({ item }) => {
                try {
                    
                    return (
                         <TouchableOpacity
                        onPress={() => {
                            detailsMovie(item);
                        }}
                        >
                                <View>
                                    <Image source={{ uri: MovieHome.Movies.imglink + item.poster_path}}   style={{width: 150, height: 200,  resizeMode: 'contain'}} />
                                </View>
                         </TouchableOpacity>
                    )
                } catch (error) {
                    
                }}}
            keyExtractor={(item) => item.id}
            />
      </SafeAreaView>
    )
}

export default Tvcard;


const styles = StyleSheet.create({
  
});
