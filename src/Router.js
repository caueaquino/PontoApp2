import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';
import NewPontoScreen from './pages/NewPontoScreen';
import NewAjusteScreen from './pages/NewAjusteScreen';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'PontoApp',
      },
    },
    AddPonto: {
      screen: NewPontoScreen,
      navigationOptions: {
        title: 'AddPonto',
      },
    },
    AddAjuste: {
      screen: NewAjusteScreen,
      navigationOptions: {
        title: 'AddAjuste',
      },
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
