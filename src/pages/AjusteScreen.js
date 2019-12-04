import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AjusteCard from '../components/AjusteCard';
import {connect} from 'react-redux';
import {watchAjustes} from '../actions';

const registerAjuste = props => {
  Alert.alert(
    'Ajustes',
    'Deseja inserir um novo ajuste?',
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
          props.navigation.navigate('AddAjuste');
        },
      },
    ],
    {cancelable: false},
  );
};

class AjusteScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.watchAjustes();
  }

  renderList() {
    if (this.props.ajustes === null) {
      return (
        <View style={style.view}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <FlatList
          style={style.flatList}
          data={[...this.props.ajustes]}
          renderItem={({item, index}) => {
            return (
              <AjusteCard
                onNavigate={() =>
                  this.props.navigation.navigate('AjusteDetails', {
                    ajuste: item,
                  })
                }
                ajuste={item}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      );
    }
  }

  render() {
    return (
      <View style={style.view}>
        <View style={style.header}>
          <Button
            title="☰"
            color="#F2C12E"
            onPress={() => {
              this.props.navigation.openDrawer();
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
                registerAjuste(this.props);
              }}>
              <Text style={style.textTab}>Registrar Ajuste</Text>
            </TouchableOpacity>
          </View>

          <View style={style.recentPoint}>
            <Text style={style.text1}>AJUSTES RECENTES</Text>
          </View>

          {this.renderList()}
        </View>
      </View>
    );
  }
}

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
    marginTop: 8,
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

const mapStateToProps = state => {
  const {listaAjustes} = state;

  if (listaAjustes === null) {
    return {ajustes: listaAjustes};
  }

  const keys = Object.keys(listaAjustes);
  const listaAjustesWithId = keys.map(key => {
    return {...listaAjustes[key], id: key};
  });
  return {ajustes: listaAjustesWithId};
};

export default connect(
  mapStateToProps,
  {watchAjustes},
)(AjusteScreen);
