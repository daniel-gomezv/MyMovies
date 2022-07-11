import React,{FC,useContext,useState,useEffect} from 'react';
import { View, Text,StyleSheet, TextInput, Image ,FlatList,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Block from '../components/Block';


    interface Props {
        navigation: any;
        route: any;
    }

    const Search: React.FC<Props> = ({
        navigation,
        route,
    }) =>{
           

        const theme = useContext(ThemeContext);
        const Movie = useContext(MovieHomeContext);
        const [searchTerm, setSearchTerm] = useState("a")
        const [content, setContent] = useState([])
        const [isloading, setIsloading] = useState(true)
    
        const SearchMovie = (text:string ) => {
            if(text != ""){
                setSearchTerm(text);
                setIsloading(true);
            }
        }

        const detailsMovie = (obj:object) =>{  
      
            navigation.navigate('DetailsMovie', JSON.stringify(obj));
            
        }


         useEffect(() => {
                const timer = setTimeout(() =>  Movie.requestAxios(Movie.moviesRequest.Search + searchTerm,'get').then(resp => {
              
                    setContent(resp.data.results)
                    setIsloading(false);
                        }).catch(err => {
                    setIsloading(false);
                        
                       
                    }), 800);

                return () => clearTimeout(timer);
            }, [searchTerm]);


            return(
           
                <Container style={styles.customContainer}>
                  
                     <View style={styles.inputContainer} >
                            <TextInput
                                style={theme.TextInput}
                                placeholderTextColor={theme.primaryColor}
                                placeholder="Buscar..."
                                onChangeText={SearchMovie}
                            />

                            {
                                (isloading) &&
                                    <View style={styles.icon3}>
                                    <Image source={require('../assets/img/spinner.gif')} style={{ width: wp(10), height: wp(10) }} />
                                     </View> 
                            }
                                                                


                        </View>
                       
                    
                
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
                            
                                />
                </Container>   
          
            )
}

export default Search;


const styles = StyleSheet.create({
    
    
    customContainer: { backgroundColor: '#000' , flex:1,  alignItems: 'center', justifyContent: 'space-between'},
    imagesPoster: {width: wp('28%'), height: wp('40%'), resizeMode: 'stretch'},
    block:{ maxHeight:wp('50%'), marginRight:10, justifyContent:'center'},
    icon3: {
        paddingTop: wp(3),
        marginRight: wp(3),
        position: 'absolute',
        zIndex: 2,
        right: 0,
      },
});
