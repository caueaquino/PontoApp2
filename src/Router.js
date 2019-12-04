import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';
import NewPontoScreen from './pages/NewPontoScreen';
import NewAjusteScreen from './pages/NewAjusteScreen';
import PontoDetailsScreen from './pages/PontoDetailsScreen';
import AjusteDetailsScreen from './pages/AjusteDetailsScreen';

console.disableYellowBox = true;

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
    PontoDetails: {
      screen: PontoDetailsScreen,
      navigationOptions: {
        title: 'PontoDetails',
      },
    },
    AjusteDetails: {
      screen: AjusteDetailsScreen,
      navigationOptions: {
        title: 'AjusteDetails',
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
