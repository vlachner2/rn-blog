import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';

import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen
  },{
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'React Native Blog'
    }
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider><App/></BlogProvider>
  )
};