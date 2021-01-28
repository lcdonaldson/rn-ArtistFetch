
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
  handleClick = () => {
    let artist = 'Elvis'
    axios.get(`http://itunes.apple.com/search?term=${artist}`)
    .then(response => {
      this.setState({
        itemList: response.data.results
      });
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
              onPress={this.handleClick}
              >
                <Text style={styles.btnText}>Show Records</Text>
              </Pressable> 
            </View>
            <View style={styles.listWrapper}>
              <FlatList
                data={this.state.itemList}
                
                renderItem={({item}) => {
                  return (
                    <View style={styles.infoWrapper}>
                      <Text style={styles.primaryText}>{item.artistName}</Text>
                      <View style={styles.row}>
                        <View style={styles.flexLeft}>
                          <Text style={styles.lText}>Title:  {item.trackName}</Text>
                          <Text style={styles.lText}>Cost:  {item.trackPrice}</Text>
                        </View>
                        <View style={styles.flexRight}>
                          <Text style={styles.rText}>Genre:  {item.primaryGenreName}</Text>
                          <Text style={styles.rText}>Released on:  {item.releaseDate}</Text>
                        </View>
                      </View>
                    </View>
                  )
                }}
                keyExtractor={item => item.trackId}
              />
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
  },
  infoWrapper: {
    backgroundColor: 'lightblue',
    borderColor: 'white',
    borderWidth: 2,
    flex: 1,
    display: 'flex',
    padding: 10
  },
  primaryText: {
    fontSize: 30, 
    color: '#000',
    width: '100%',
    display: 'flex',
    borderBottomColor: 'teal',
    borderBottomWidth: 2,
    marginBottom: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  flexRight: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  lText: {paddingBottom: 10},
  rText: {paddingBottom: 10},
  btnText: {
    fontSize: 20, 
    color: '#fff', 
    textAlign: 'center'
  }
});

