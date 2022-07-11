import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import Moviecard from '../components/Moviecard';
import Tvcard from '../components/Tvcard';
import Block from '../components/Block';
import Category from '../components/Category';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        navigation: any;
    }



    const Home: React.FC<Props> = ({
        navigation,
    }) =>{
 
        
        
    const defaultContext = useContext(ThemeContext);
    const MovieHomeDefault = useContext(MovieHomeContext);


    const inRute = (type:string,filter:string,endpoint:string, shema:string) =>
     navigation.navigate("List",{ filter: filter, type:type , endpoint: endpoint, shema:shema})
   

    return(
    <ScrollView style={defaultContext.background}>
        <MovieHomeContext.Provider value={MovieHomeDefault}>
                <Container navigation={navigation} >
                         <Block  mt={hp('1%')} mb={hp('5%')}>
                        <Text style={defaultContext.small}>Lo más popular</Text>

                        <Block  mt={1} style={styles.blockContentCustom}>
                            <Text style={defaultContext.subtitle}>Peliculas</Text>
                            <TouchableOpacity onPress={ () => inRute("Popular","type == 'Popular'", "Popular", "Movies")}>
                                <Image source={require('../assets/img/goto.png')}   style={styles.goImages}/>
                            </TouchableOpacity>
                        </Block>
                            <Moviecard filter="type == 'Popular'" navigation={navigation}/>
                </Block>

                <Block  mt={hp('1%')} mb={hp('5%')}>
                <Text style={defaultContext.small}>Lo más popular</Text>
                         <Block  mt={1} style={styles.blockContentCustom}>
                            <Text style={defaultContext.subtitle}>Programas</Text>
                            <TouchableOpacity onPress={ () => inRute("Popular", "type == 'Popular'", "Tvpopular", "Tv")}>
                                <Image source={require('../assets/img/goto.png')}   style={styles.goImages}/>
                            </TouchableOpacity>
                        </Block>
                            <Tvcard filter="" navigation={navigation}/>
                </Block>

                <Block  mt={hp('1%')} mb={hp('5%')}>
                <Text style={defaultContext.small}>Lo más popular</Text>
                        <Block  mt={1} style={styles.blockContentCustom}>
                        <Text style={defaultContext.subtitle}>Tendencias</Text>
                        <TouchableOpacity onPress={ () => inRute("TopRated","type == 'TopRated'","Toprated", "Movies")}>
                                <Image source={require('../assets/img/goto.png')}   style={styles.goImages}/>
                            </TouchableOpacity>
                        </Block>
                            <Moviecard filter="type == 'TopRated'"  navigation={navigation}/>
                </Block>


                <Block  mt={hp('1%')} mb={hp('5%')}>
                    <Text style={defaultContext.subtitle}>Categorias</Text>
                    <Block>
                        <Category />
                    </Block>
                </Block>

                </Container>
        </MovieHomeContext.Provider>
    </ScrollView>
    )
}

export default Home;


const styles = StyleSheet.create({
    
    blockContentCustom : {flexDirection:'row', justifyContent:'space-between', alignItems:'center'},
    goImages:{  width: 25, height: 25}
});
