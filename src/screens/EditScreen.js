import React, {useContext, useState} from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'


const EditScreen = ({navigation}) => {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'))
  const [ title, setTitle ] = useState(blogPost.title)
  const [ content, setContent ] = useState(blogPost.content)
  const { editBlogPost } = useContext(Context)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Update Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)} />
        <Text style={styles.label}>Update Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)} />
        <Button
          title="Update" 
          onPress={()=>editBlogPost(
            blogPost.id,
            title,
            content,
            ()=>{navigation.goBack()}
          )}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    marginBottom:20
  },
  card:{
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  label:{
    fontWeight:'bold'
  },
  container:{
    padding:10,
    flex:1,
    backgroundColor:'#fc0'
  }
})

EditScreen.navigationOptions = ({ navigation }) => {
  return{
    title:`Edit Post ${navigation.getParam('id')}`
  }
};

export default EditScreen
