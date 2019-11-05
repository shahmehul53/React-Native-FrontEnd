import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

const Hero = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={{height: 250}}
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4',
        }}>
        {/* <LinearGradient
          start={{x: 0.1, y: 0.6}}
          end={{x: 0.1, y: 1}}
          locations={[0, 9]}
          colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'row',
            borderRadius: 10,
          }}> */}
        <View style={{justifyContent: 'flex-end'}}>
          <Text style={styles.textStyle}>
            Booba on fire in his New Gotham Clip
          </Text>
        </View>
        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 10,
    height: 250,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 15,
    alignSelf: 'stretch',
  },
});

export default Hero;
