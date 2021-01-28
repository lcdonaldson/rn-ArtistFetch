import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Artists = (props) => {
    return (
        <View style={styles.infoWrapper}>
            <Text style={styles.primaryText}>{props.title}</Text>
            <View style={styles.row}>
            <View style={styles.flexLeft}>
                <Text style={styles.lText}>Name:  {props.name}</Text>
                <Text style={styles.lText}>Cost:  {props.cost}</Text>
            </View>
            <View style={styles.flexRight}>
                <Text style={styles.rText}>Genre:  {props.genre}</Text>
                <Text style={styles.rText}>Released on:  {props.date}</Text>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  infoWrapper: {
    backgroundColor: 'lightblue',
    borderColor: 'white',
    borderWidth: 2,
    flex: 1,
    display: 'flex',
    padding: 10,
    marginBottom: 10
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
  lText: {paddingBottom: 10, fontSize: 16},
  rText: {paddingBottom: 10, fontSize: 16}
});

export default Artists