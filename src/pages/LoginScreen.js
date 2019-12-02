import React from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {processLogin} from '../actions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: '',
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBtGEQYEBf5_QzfQYrm6NbN3H37uXBfxD8',
      authDomain: 'pontoapp-dc705.firebaseapp.com',
      databaseURL: 'https://pontoapp-dc705.firebaseio.com',
      projectId: 'pontoapp-dc705',
      storageBucket: '',
      messagingSenderId: '390072954845',
      appId: '1:390072954845:web:e65b827a33a1feedd9d034',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler = (field, valor) => {
    this.setState({
      [field]: valor,
    });
  };

  processLogin() {
    this.setState({isLoading: true});
    const {email, password} = this.state;

    this.props
      .processLogin({email, password})
      .then(user => {
        if (user) {
          this.props.navigation.replace('Main');
        } else {
          this.setState({
            isLoading: false,
            message: '',
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          message: this.getMessageByError(error.code),
        });
      });
  }

  renderLoginButton = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <TouchableOpacity style={style.buttonStyle}>
        <Button
          onPress={() => this.processLogin()}
          title="Login"
          color="#F2C12E"
        />
      </TouchableOpacity>
    );
  };

  getMessageByError = code => {
    switch (code) {
      case 'auth/user-not-found':
        return 'E-mail don´t exists.';

      case 'auth/wrong-password':
        return 'Wrong password.';

      default:
        return 'Error.';
    }
  };

  renderMessage = () => {
    const {message} = this.state;

    if (!message) {
      return null;
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={style.loginStyle}>
        <View style={style.rowStyle}>
          <Text style={style.title1Style}>Ponto</Text>
          <Text style={style.title2Style}>App</Text>
        </View>

        {this.renderMessage()}

        <Text style={style.textStyle}>E-mail:</Text>
        <TextInput
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={valor => {
            this.onChangeHandler('email', valor);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          style={style.inputStyle}
        />

        <Text style={style.textStyle}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={valor => {
            this.onChangeHandler('password', valor);
          }}
          secureTextEntry={true}
          placeholder="Password"
          style={style.inputStyle}
        />

        {this.renderLoginButton()}
      </View>
    );
  }
}
const style = StyleSheet.create({
  loginStyle: {
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
    fontSize: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    marginTop: 10,
    width: '95%',
    borderRadius: 30,
    backgroundColor: '#F2C12E',
  },
});

export default connect(
  null,
  {processLogin},
)(LoginScreen);
