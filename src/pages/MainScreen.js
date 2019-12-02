import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import PontoScreen from './PontoScreen';

const MainPage = createAppContainer(
  createDrawerNavigator(
    {
      Ponto: PontoScreen,
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

export default MainPage;
