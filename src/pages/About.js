import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  render() {
    return (
      <View style={style.about}>
        <View style={style.rowStyle}>
          <Text style={style.title2Style}>Sobre</Text>

          <TouchableOpacity
            onPress={() => this.setState({open: !this.state.open})}>
            <Text style={this.state.open ? style.text1 : style.text11}>
              {`Este aplicativo foi desenvolvido durante a disciplina de Desenvolvimento de dispositivos Mobile, na Universidade Tecnológica Federal do Paraná, pelo aluno Cauê Aquino Nogueira. Este aplicativo tem como objetivo realizar o controle de pontos, registrar horas de trabalho. Ele tem duas funções, registrar um ponto, onde o usuário insere o local e o código do ponto, e salva o ponto, e tambem a funcionalidade de gerar ajustes, os ajustes são feitos para compensar pontos não realizados, onde nele pode-se inserir justificativas e um código para o ajuste solicitado.`}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.buttonStyle}>
          <Button
            style={style.buttonStyle}
            title="Voltar"
            color="#F2C12E"
            onPress={() => this.props.navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  about: {
    height: '100%',
    backgroundColor: '#A0B9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  expand: {},
  buttonStyle: {
    marginTop: 60,
    marginLeft: 2,
    minWidth: '86%',
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
  title1Style: {
    color: '#F2E205',
    fontSize: 50,
    marginBottom: 20,
  },
  title2Style: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
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
    fontSize: 22,
    minWidth: '86%',
    width: '86%',
    textAlign: 'justify',
    fontWeight: '700',
    maxWidth: '86%',
  },
  text11: {
    color: '#244673',
    fontSize: 28,
    maxHeight: 60,
    minWidth: '86%',
    width: '86%',
    textAlign: 'justify',
    fontWeight: '700',
    maxWidth: '86%',
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
