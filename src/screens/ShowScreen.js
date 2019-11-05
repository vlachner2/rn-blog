import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'))

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  title:{
    fontWeight:'bold',
    fontSize:20
  },
  container:{
    padding:10,
    flex:1,
    backgroundColor:'#fc0'
  }
})

ShowScreen.navigationOptions = ({ navigation }) => {
  return{
    headerRight:
    <TouchableOpacity onPress={() => navigation.navigate('Edit', {id:navigation.getParam('id')})}>
        <FontAwesome name="edit" size={20} style={{marginRight:10}}/>
    </TouchableOpacity>
  }
};

export default ShowScreen
