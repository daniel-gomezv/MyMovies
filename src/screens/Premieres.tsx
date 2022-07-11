import React,{FC,useContext,useState,useEffect} from 'react';
import { View, Text,StyleSheet, Image ,FlatList,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Block from '../components/Block';
import {SaveMovies} from '../functions/Realmio'


    interface Props {
        navigation: any;
        route: any;
    }

 
     let data:obj =  {endpoint: "Popular", filter: "type == 'Popular'", type: "Popular", shema:"Moviews"}

    const Premieres: React.FC<Props> = ({
        navigation,
        route,
    }) =>{
           
        
        
        const theme = useContext(ThemeContext);
        const Movie = useContext(MovieHomeContext);

        const [content, setContent] = useState([])
    

        useEffect(() => {
         
         
                setContent(Movie.getMoviesFilter(data.filter));
       
        }, [])


        const loadMore = () => {

        
            setContent(Movie.getMoviesFilter(data.filter));
            

        }

        
         const detailsMovie = (obj:object) =>{  
      
            navigation.navigate('DetailsMovie', JSON.stringify(obj));
            
        }
        
            return(
           
                <Container>

                    <Block mt={hp('10%')}>
                        <Text style={theme.title}>Estrenos</Text>
                    </Block>

                                <FlatList
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={content}
                                horizontal={false}
                                numColumns={3}
                                renderItem={({ item }) => {

                                    try {
                                        
                                        return (

                                            <TouchableOpacity
                                            onPress={() => {
                                                detailsMovie(item);
                                            }}
                                            >
                                                <Block mb={wp('0.3%')} style={styles.block}>
                                                    <Image source={{ uri: Movie.Movies.imglink + item.poster_path}}   style={styles.imagesPoster} />
                                                </Block>
                                            </TouchableOpacity>
                                        )
                                    } catch (error) {
                                        
                                    }}}
                                keyExtractor={(item) => item.id}
                                onEndReached={loadMore}
                                onEndReachedThreshold={0.7}
                                />
                </Container>   
          
            )
}

export default Premieres;


const styles = StyleSheet.create({
    
    imagesPoster: {width: wp('28%'), height: wp('40%'), resizeMode: 'stretch'},
    block:{ maxHeight:wp('50%'), marginRight:10, justifyContent:'center'}
   
});
