import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => String(blogPost.id)}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})} >
                <Text style={styles.h1}>{item.title} - {item.id}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                <FontAwesome name='trash' size={20}/>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc0',
    flex: 1,
    padding: 20,
  },
  h1:{
    fontSize:18,
  },
  row:{
    padding:10,
    borderTopWidth:1,
    borderColor:'grey',
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default IndexScreen
