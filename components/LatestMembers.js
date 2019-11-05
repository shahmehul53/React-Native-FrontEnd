import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import data from '../data';

const LatestMembers = () => {
  const [data1, setData] = useState(data);
  console.log(data1);

  const latestMembers = () => {
    return data1.map(singleData => {
      return (
        <View key={singleData.id} style={{alignItems: 'center', padding: 5}}>
          <Image
            source={{uri: singleData.user_avatar}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              marginHorizontal: 20,
            }}
          />
          <Text>{singleData.username}</Text>
        </View>
      );
    });
  };

  return (
    <View style={{height: 150}}>
      <View>
        <Text style={styles.textStyle}>Latest Members</Text>
      </View>
      <View style={styles.container}>
        {/* <Text style={styles.textStyle}>{data1}</Text> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {latestMembers()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#a4b0be',
    marginVertical: 8,
    borderRadius: 8,
    paddingVertical: 5,
  },
});
export default LatestMembers;
