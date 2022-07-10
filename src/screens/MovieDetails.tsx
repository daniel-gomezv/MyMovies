import React,{FC,useContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text,StyleSheet,ImageBackground, Image ,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import axios from 'axios';
import Block from '../components/Block';

    interface Props {
        navigation: any;
        route: any;
    }



    const List: React.FC<Props> = ({
        navigation,
        route,
    }) =>{
 
        
        
    const theme = useContext(ThemeContext);
    const MovieHomeDefault = useContext(MovieHomeContext);
    const data = JSON.parse(route.params);

    console.log(data);

    return(
        <>
        
        <Container style={styles.customContainer}>
            <Block>
                <ImageBackground source={require('../assets/img/loading.png')} resizeMode="cover" >
                    <Image source={{ uri: data.backdrop_path}} style={{
                            height:wp('50%'),
                            width:wp('100%'),
                            }}/>
                </ImageBackground>
            </Block>
        </Container>

        <Container style={styles.detailsContainer}>
                <Block>
                           <Block>
                                <Text style={theme.subtitle}>{data.original_title}</Text>
                            </Block>
                
                        <View style={styles.ContainerSinopsis}>
                        
                        <View style={styles.itemPoster}>
                        <Image source={{ uri: data.poster_path}} style={{
                                height:wp('30%'),
                                width:wp('20%'),
                                }}/>
                        </View>


                        <View style={styles.item}>
                                <Text style={theme.small}>{data.overview}</Text>
                        </View>
                           
                            
                            
                        </View>
                </Block>
        </Container>
        </>
    )
}

export default List;


const styles = StyleSheet.create({
    
   customContainer: { backgroundColor: '#000' , flex:1,  alignItems: 'stretch', justifyContent: 'space-between'},
   detailsContainer: { backgroundColor: '#000' ,flex:2, alignItems: 'center', justifyContent: 'space-between'},
   ContainerSinopsis:{ flexDirection: "row",  flexWrap: 'wrap'},
   itemPoster:{ width:'25%'},
   item:{ width:'75%'}
});
