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

 

    const List: React.FC<Props> = ({
        navigation,
        route,
    }) =>{
           
        
        
        const theme = useContext(ThemeContext);
        const Movie = useContext(MovieHomeContext);
        const data = route.params;
        const [content, setContent] = useState([])
    

        const detailsMovie = (obj:object) =>{  
      
            navigation.navigate('DetailsMovie', JSON.stringify(obj));
        }


        useEffect(() => {
         
            if(data.shema == "Tv"){
                setContent(Movie.getTvFilter(data.filter));
            }else{
                setContent(Movie.getMoviesFilter(data.filter));
            }

        }, [])


        const loadMore = () => {

            Movie.loadmore(data)
          
            if(data.shema == "Tv"){
                setContent(Movie.getTvFilter(data.filter));
            }else{
                setContent(Movie.getMoviesFilter(data.filter));
            }

        }

        
    
            return(
           
                <Container>
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

export default List;


const styles = StyleSheet.create({
    
    imagesPoster: {width: wp('28%'), height: wp('40%'), resizeMode: 'stretch'},
    block:{ maxHeight:wp('50%'), marginRight:10, justifyContent:'center'}
   
});
