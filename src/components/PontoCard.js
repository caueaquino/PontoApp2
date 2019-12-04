import React from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePonto} from '../actions/pontoActions';

class PontoCard extends React.Component {
  render() {
    const {ponto, onNavigate} = this.props;
    return (
      <View style={style.resume}>
        <View style={style.outBox}>
          <TouchableOpacity onPress={onNavigate}>
            <View style={style.pointHour}>
              <View>
                <Text style={style.text2}>Código: {ponto.code}</Text>
                <Text style={style.text2}>Data: {ponto.date}</Text>
                <Text style={style.text3}>Localização: {ponto.location}</Text>
              </View>

              <View>
                <TouchableOpacity style={style.buttonStyle}>
                  <Button
                    onPress={() => {
                      this.props.deletePonto(ponto);
                    }}
                    title="X"
                    color="#F2C12E"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  resume: {
    height: '100%',
    backgroundColor: '#A0B9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 2,
    borderRadius: 30,
    backgroundColor: '#F2C12E',
  },
  seeoc: {
    marginTop: 5,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  falt: {
    padding: 5,
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    minWidth: '76%',
    marginTop: 10,
    borderRadius: 10,
  },
  occurrences: {
    backgroundColor: 'white',
    minWidth: '96%',
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text1: {
    color: '#244673',
    fontSize: 18,
    fontWeight: '700',
  },
  text2: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
  },
  text3: {
    color: 'gray',
    fontSize: 10,
    fontWeight: '600',
  },
  text4: {
    color: '#244673',
    fontSize: 22,
    fontWeight: '900',
  },
  buttonOccurrences: {
    minWidth: '96%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  hourBank: {
    marginTop: 10,
    marginBottom: 10,
    padding: 30,
    width: '96%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  recentPoint: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minWidth: '98%',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 50,
    marginBottom: 5,
  },
  pointHour: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    minWidth: '83%',
    width: '96%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 5,
    backgroundColor: 'white',
  },
});

export default connect(
  null,
  {deletePonto},
)(PontoCard);
