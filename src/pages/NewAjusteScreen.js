import React from 'react';
import {StyleSheet, View, TextInput, Alert, Text, Button} from 'react-native';

import Moment from 'moment';

import {connect} from 'react-redux';
import {saveAjuste, setFieldAjuste} from '../actions/newAjusteActions';
import {TouchableOpacity} from 'react-native-gesture-handler';

class NewAjusteScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {ajusteForm, setFieldAjuste, saveAjuste, navigation} = this.props;

    return (
      <View style={styles.ajusteStyle}>
        <View style={styles.rowStyle}>
          <Text style={styles.title1Style}>Registro</Text>
          <Text style={styles.title2Style}>Ajuste</Text>
        </View>
        <View>
        <Text style={styles.textStyle}>Código:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Código"
            value={ajusteForm.code}
            onChangeText={value => setFieldAjuste('code', value)}
            numberOfLines={5}
            multiline={true}
          />

          <Text style={styles.textStyle}>
            Data: {Moment(new Date()).format('DD/MM/YYYY hh:mma')}
          </Text>

          <Text style={styles.textStyle}>Justificativa:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Justificativa"
            value={ajusteForm.justification}
            onChangeText={value => setFieldAjuste('justification', value)}
            numberOfLines={5}
            multiline={true}
          />
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Button
            title="Registrar"
            color="#F2C12E"
            style={styles.buttonStyle}
            onPress={async () => {
              this.setState({isLoading: true});

              try {
                await saveAjuste(ajusteForm);
                navigation.goBack();
              } catch (error) {
                Alert.alert('Erro', error.message);
              } finally {
                this.setState({isLoading: false});
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Button
            title="Cancelar"
            style={styles.buttonStyle}
            color="#F2C12E"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
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
  ajusteStyle: {
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

const mapStateToProps = state => {
  return {
    ajusteForm: state.ajusteForm,
  };
};

const mapDispatchToProps = {
  setFieldAjuste,
  saveAjuste,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAjusteScreen);
