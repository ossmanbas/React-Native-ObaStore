import React from 'react';
import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import data from './data.json';
import Urun from './Urun';
function App() {
  const renderUrun = ({item}) => <Urun product={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OBA STORE</Text>

      <FlatList
        ListHeaderComponent={
          <TextInput style={styles.search} placeholder="Ara..."></TextInput>
        }
        numColumns={2}
        data={data}
        renderItem={renderUrun}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  title: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
  },
  search: {
    backgroundColor: '#A2A7B8',
    borderRadius: 10,
    margin: 3,
  },
});
