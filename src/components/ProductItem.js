import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './Card'
import CardSection from './CardSection';

class ProductItem extends Component {
    
    const style = StyleSheet.create({
        productImage: {
            flex: 1,
            height: 300
        },
        productName: {
            flex: 1,
            fontSize: 18
        },
        productPrice: {
            width: 100,
            textAlign: 'right',
            fontsize: 18,
            color: 'navy' 
        }

    })


    getPricedFormatted(price) {
        if (price) {
            const pricedFormatted = price
            .toString()
            .split('')
            .reverse()
            .reduce((a,c,i) => c + (i && i % 3 == 0 ? '.' : '') + a, '');
            return `Rp${pricedFormatted}`;

        }
        return 'Rp0';
    }


    render(){
        const { name, image, price, actionlink } = this.props.product

      return(
        <Card>
            <CardSection>
                <Image style={ style.productImage } source= { { uri:image } } /> 
            </CardSection>
            <CardSection>
                <Text  style={ style.productName }>
                { name }
                </Text>
                <Text  style={ style.productPrice }>
                    { this.getPricedFormatted(price) }
                </Text>
            </CardSection>
        </Card>
      );
    }
}

export default ProductItem;