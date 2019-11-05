import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Heading from './components/Heading';
import Hero from './components/Hero';
import LatestMembers from './components/LatestMembers';
import Mosaic from './components/Mosaic';
import data from './data';

const App = () => {
  const [data1, setData] = useState(data);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Heading />
            <Hero />
            <LatestMembers />
          </View>
          <View style={{height: 35}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Monday</Text>
          </View>
          <Mosaic />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              marginTop: 10,
              paddingLeft: 6,
            }}>
            News
          </Text>
          <FlatList
            style={{width: '100%'}}
            data={data1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.rowStyles}>
                <View style={styles.imgContainer}>
                  <Image source={{uri: item.image_link}} style={styles.image} />
                </View>
                <View style={styles.rightSide}>
                  <Text
                    style={{
                      width: 90,
                      backgroundColor: '#7bed9f',
                      width: 90,
                      textAlign: 'center',
                      borderRadius: 7,
                      paddingVertical: 4,
                    }}>
                    {item.type}
                  </Text>
                  <Text style={styles.headline}>{item.headline}</Text>

                  <View style={styles.avtarCaption}>
                    <Image
                      style={{height: 24, width: 24, borderRadius: 12}}
                      source={{uri: item.user_avatar}}
                    />
                    <Text style={{paddingLeft: 10}}>{item.username}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  rowStyles: {
    flexDirection: 'row',
    borderRadius: 7,
    backgroundColor: '#dfe4ea',
    padding: 5,
    margin: 5,
  },
  imgContainer: {
    margin: 3,
    height: 120,
    width: Dimensions.get('window').width / 3 - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  rightSide: {
    paddingLeft: 10,
    width: Dimensions.get('window').width / 1.5,
    paddingLeft: 8,
  },
  headline: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  avtarCaption: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15,
  },
});

export default App;
