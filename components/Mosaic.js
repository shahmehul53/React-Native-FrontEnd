import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import data from '../data';

const Mosaic = () => {
  const [data1, setData] = useState(data);

  const mosaic = () => {
    return data1.map(singleData => {
      return (
        <View
          key={singleData.id}
          style={{height: 250, margin: 3, flexBasis: '48%'}}>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            source={{uri: singleData.image_link}}
            style={{
              height: 250,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                paddingLeft: 15,
                color: '#fff',
              }}>
              {singleData.headline}
            </Text>
          </ImageBackground>
        </View>
      );
    });
  };
  return <View style={styles.container}>{mosaic()}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 800,
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Mosaic;
