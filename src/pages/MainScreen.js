import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import PontoScreen from './PontoScreen';
import AjusteScreen from './AjusteScreen';

const MainScreen = createAppContainer(
  createDrawerNavigator(
    {
      Ponto: PontoScreen,
      Ajuste: AjusteScreen,
    },
    {
      initialRouteName: 'Ponto',
      style: {
        backgroundColor: '#A0B9D9',
      },
      contentOptions: {
        activeTintColor: '#F2E205',
        inactiveTintColor: 'white',
        labelStyle: {
          fontSize: 30,
        },
      },
    },
  ),
);

export default MainScreen;
