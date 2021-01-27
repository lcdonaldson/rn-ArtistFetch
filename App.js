
import React, {Component} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    };
  }
  onPressFunction = () => {
    let artist = 'Elvis'
    axios.get(`https://itunes.apple.com/search?term="${artist}"`)
    .then(response => {
        this.setState({
          itemList: response.data.results
        });
        // console.log("Data", this.state.itemList);
      })
      .catch(error => console.log(error));
  }
  render() {
    {console.log('MYDATA', this.state.itemList)}
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <View>
              <Pressable 
              style={styles.btnLayout} 
              onPress={this.onPressFunction}
              >
                <Text style={styles.btnText}>Show Records</Text>
              </Pressable> 
            </View>
            <View style={styles.listWrapper}>
              <Text>SANITY TEXT 1</Text>
              <FlatList
                data={this.state.itemList}
                
                renderItem={({item}) => {
                  <Text style={styles.listText}>{item}</Text>;
                }}
                keyExtractor={item => item.data.results}
              />
              <Text>SANITY TEXT 2</Text>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  btnLayout: {
    backgroundColor: 'blue', 
    minWidth: 320, 
    padding: 5, 
    alignSelf: 'center', 
    marginTop: 25
  },
  listWrapper: {
    padding: 12,
    marginTop: 25,
    backgroundColor: '#ccc'
  },
  listText: {
    fontSize: 20, 
    color: '#000', 
    width: 200, 
    height: 50
  },
  btnText: {
    fontSize: 20, 
    color: '#fff', 
    textAlign: 'center'
  }
});

