import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import moment from 'moment';

export default class PontoDetailsScreen extends React.Component {
  render() {
    const {ponto} = this.props.navigation.state.params;
    return (
      <View style={styles.pontoStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.title1Style}>Registro</Text>
          <Text style={styles.title2Style}>Ponto</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Código: {ponto.code}</Text>

          <Text style={styles.textStyle}>
            Data: {moment(ponto.date).format('DD/MM/YYYY hh:mma')}
          </Text>

          <Text style={styles.textStyle}>Localização: {ponto.location}</Text>
        </View>

        {/* <TouchableOpacity style={styles.buttonStyle}>
          <Button
            title="Cancelar"
            style={styles.buttonStyle}
            color="#F2C12E"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  pontoStyle: {
    backgroundColor: '#244673',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 30,
  },
  title1Style: {
    color: '#F2E205',
    fontSize: 50,
    marginBottom: 20,
  },
  title2Style: {
    color: 'white',
    fontSize: 50,
    marginBottom: 20,
  },
  rowStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: 22,
    minWidth: '90%',
    textAlign: 'left',
    marginBottom: 10,
  },
  inputStyle: {
    backgroundColor: '#A0B9D9',
    color: 'white',
    minWidth: '95%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    marginTop: 10,
    width: 330,
    borderRadius: 30,
    backgroundColor: '#F2C12E',
  },
  buttonStyle1: {
    marginTop: 10,
    marginBottom: 10,
    width: 330,
    borderRadius: 30,
    backgroundColor: '#F2C12E',
  },
  rate: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
});
