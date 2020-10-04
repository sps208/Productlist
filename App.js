import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

class App extends Component {
    render(){
      return(
        <View>
          <Header title="Product list"/>
          <ProductList />
        </View>
      );
    }
}

export default App;