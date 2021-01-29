
import React, { Component } from 'react';
import axios from 'axios';
import Artists from './src/components/Artists';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
  FlatList,
  ActivityIndicator,
  TextInput
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      isLoading: false,
      inputValue: ""
    };
  }

  handleClick = async () => {
    this.setState({ isLoading: true });
    let artist = this.state.inputValue;
    await axios.get(`http://itunes.apple.com/search?term=${artist}`)
    .then(response => {
      this.setState({
        itemList: response.data.results
      });
    })
    .catch(error => console.log(error));
    this.setState({ isLoading: false });
  }
  
  dateFormat = (time) => {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let formattedTime = (new Date(time)).toLocaleDateString('en-US', DATE_OPTIONS)
    return formattedTime
  }

  render() {
    console.log(this.state.itemList)
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <View>
              <TextInput placeholder="Artist name" onChangeText={(inputValue) => this.setState({inputValue})} style={styles.input}/>
              <Pressable 
                style={styles.btnLayout} 
                onPress={this.handleClick}
              >
                <Text style={styles.btnText}>Show Records</Text>
              </Pressable> 
            </View>
            <ActivityIndicator animating={this.state.isLoading} size="large" color="red" />
            <View style={styles.listWrapper}>
              <FlatList
                data={this.state.itemList}
                renderItem={({item}) => {
                  let time = item.releaseDate
                  return (
                    <Artists
                      name={item.artistName}
                      title={item.trackName}
                      cost={item.trackPrice}
                      genre={item.primaryGenreName}
                      date={this.dateFormat(time)}
                    />
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
  btnText: {
    fontSize: 20, 
    color: '#fff', 
    textAlign: 'center'
  },
  input: {
    alignSelf: 'center',
    width: 200,
    minHeight: 20,
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  }
});

