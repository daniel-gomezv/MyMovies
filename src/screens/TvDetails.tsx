import React,{FC,useContext,useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text,StyleSheet,ImageBackground, Image ,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Container from '../components/Container';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import axios from 'axios';
import Block from '../components/Block';
import Tvcard from '../components/Tvcard';
import {formatDate,rateVote,filterMap} from '../functions/Functions';
import Category from '../components/Category';

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

     const inRute = (type:string) =>
     navigation.navigate("List",{ filter: type})

        useEffect(() => {
        
        }, [])


    return(
        <>
        <ScrollView style={theme.background}>
            <Container style={styles.customContainer}>
                <Block>
                    <ImageBackground source={require('../assets/img/loading.png')} resizeMode="cover" >
                        <Image source={{ uri: MovieHomeDefault.Movies.imglink  + data.backdrop_path}} style={{
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
                                
                                <Block>
                                    <Text style={theme.text}>{data.overview}</Text>
                                </Block>

                    
                                <Block>
                                <View style={styles.ContainerSinopsis}>
                            
                                    <View style={styles.itemPoster}>
                                    <Image source={{ uri: MovieHomeDefault.Movies.imglink  + data.poster_path}} style={{
                                            height:wp('40%'),
                                            width:wp('25%'),
                                            }}/>
                                    </View>


                                    <View style={styles.item}>

                                         <Block mb={hp('0.3%')}>
                                             <View style={styles.ContainerSinopsis}>
                                                {rateVote(data.vote_average).component.map((item,index)=>{
                                                    return (
                                                        item
                                                        ) 
                                                })}
                                             </View>
                                        </Block>   
                                        
                                        <Block mb={hp('0.3%')}>
                                            <Text style={theme.small}>{formatDate(data.release_date)}</Text>
                                        </Block>

                                        <Block>
                                            <Category filter={filterMap(data.genre_ids,'id')}/>
                                        </Block>
                                          
                                    </View>
                                
                                </View>
                                </Block>

                                <Block  mt={hp('1%')} mb={hp('5%')}>

                                        <Block  mt={1} style={styles.blockContentCustom}>
                                        <Text style={theme.subtitle}>Puede gustarte</Text>
                                            <TouchableOpacity onPress={() => inRute("type == 'Popular'")}>
                                                <Image source={require('../assets/img/goto.png')}   style={styles.goImages}/>
                                            </TouchableOpacity>
                                        </Block>
                                        <Block>
                                             <Tvcard filter="" navigation={navigation}/>
                                        </Block>
                                </Block>
                            
                    </Block>
            </Container>
        </ScrollView>
        </>
    )
}

export default List;


const styles = StyleSheet.create({
    
   customContainer: { backgroundColor: '#000' , flex:1,  alignItems: 'stretch', justifyContent: 'space-between'},
   detailsContainer: { backgroundColor: '#000' ,flex:2, alignItems: 'center', justifyContent: 'space-between'},
   ContainerSinopsis:{ flexDirection: "row",  flexWrap: 'wrap'},
   itemPoster:{ width:'35%'},
   item:{ width:'65%'},
   blockContentCustom : {flexDirection:'row', justifyContent:'space-between', alignItems:'center'},
   goImages:{  width: 25, height: 25}
});
