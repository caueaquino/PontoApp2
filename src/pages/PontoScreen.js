import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import pontos from '../../pontos.json';
import PontoCard from '../components/PontoCard';

const registerPonto = () => {
  Alert.alert(
    'Registro',
    'Deseja inserir um novo ponto?',
    [
      {
        text: 'Não',
        onPress: () => {
          //   resolve();
        },
      },
      {
        text: 'Sim',
        onPress: () => {
          // asd
        },
      },
    ],
    {cancelable: false},
  );
};

const MainScreen = props => (
  <View style={style.view}>
    <View style={style.header}>
      <Button
        title="☰"
        color="#F2C12E"
        onPress={() => {
          props.navigation.openDrawer();
        }}
      />

      <View style={style.rowStyle}>
        <Text style={style.title1Style}>Ponto</Text>
        <Text style={style.title2Style}>App</Text>
      </View>
    </View>

    <View style={style.body}>
      <View style={style.selectTab}>
        <TouchableOpacity
          style={style.tab}
          onPress={() => {
            registerPonto();
          }}>
          <Text style={style.textTab}>Registrar Ponto</Text>
        </TouchableOpacity>
      </View>

      <View style={style.hourBank}>
        <Text style={style.text1}>BANCO DE HORAS</Text>
        <Text style={style.text4}>00:00</Text>
      </View>

      <View style={style.recentPoint}>
        <Text style={style.text1}>PONTOS RECENTES</Text>
      </View>

      <FlatList
        style={style.flatList}
        data={pontos}
        renderItem={({item, index}) => {
          return <PontoCard ponto={item} />;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  </View>
);

const style = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: '#A0B9D9',
  },
  flatList: {
    display: 'flex',
    flexDirection: 'column',
  },
  hourBank: {
    marginTop: 10,
    marginBottom: 10,
    padding: 30,
    width: '96%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 8,
  },
  header: {
    padding: 10,
    position: 'absolute',
    width: '100%',
    height: 80,
    backgroundColor: '#244673',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  title1Style: {
    color: '#F2E205',
    fontSize: 50,
  },
  text1: {
    color: '#244673',
    fontSize: 18,
    fontWeight: '700',
  },
  text4: {
    color: '#244673',
    fontSize: 22,
    fontWeight: '900',
  },
  recentPoint: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minWidth: '90%',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 50,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 5,
  },
  title2Style: {
    color: 'white',
    fontSize: 50,
  },
  rowStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '88%',
  },
  selectTab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#CEDEF2',
  },
  tab: {
    backgroundColor: '#A0B9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: 17,
    width: '98%',
    textAlign: 'center',
    borderRadius: 5,
  },
  textTab: {
    color: 'white',
    fontSize: 16,
  },
  body: {
    marginTop: 80,
  },
});

export default MainScreen;
