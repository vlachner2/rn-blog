import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'


const CreateScreen = ({navigation}) => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const { addBlogPost } = useContext(Context)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Enter Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)} />
        <Text style={styles.label}>Enter Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)} />
        <Button title="Save" onPress={()=>addBlogPost(title,content, ()=>{
          navigation.navigate('Index')
        })}/>
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

export default CreateScreen
