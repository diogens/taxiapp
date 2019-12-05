import React, {Component} from 'react';

import * as N from 'react-native';
import * as S from './styled';
import Tabs from '../../components/Tabs';
import Icon from 'react-native-vector-icons';

const menu = ['Home', 'Alguma coisa'];

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Diogenes',
      localizacao: 'Feira de santana',
      dataList: null,
      viagens: 0,
      canceladas: 0,
      starClient: 0,
      starProvedor: 0,
    };
  }

  render() {
    const {
      user,
      localizacao,
      dataList,
      canceladas,
      viagens,
      starClient,
      starProvedor,
    } = this.state;
    const {navigate} = this.props.navigation;

    return (
      <S.DashboardWrapper>
        <N.Text style={styles.title}>UBER</N.Text>
        <N.View style={{flexDirection: 'row'}}>
          <N.Text style={styles.font4}>{user}</N.Text>
          <N.Text style={styles.font4}>{localizacao}</N.Text>
          <N.Text style={styles.font4}>{starClient}</N.Text>
          <N.Text style={styles.font4}>{starProvedor}</N.Text>
        </N.View>
        <N.View
          style={[
            styles.card,
            {
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: '#fff',
            },
          ]}>
          <N.Text style={[styles.title, {color: 'tomato', fontSize: 30}]}>
            Lista
          </N.Text>
          <N.View style={{flex: 5}}>
            <N.View
              style={[
                styles.card,
                {
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  backgroundColor: '#fff',
                },
              ]}>
              <N.View style={styles.row}>
                <N.View style={styles.box}>
                  <N.Text style={styles.font1}>{viagens}</N.Text>
                </N.View>
                <N.View style={styles.box}>
                  <N.Text style={styles.font1}>{canceladas}</N.Text>
                </N.View>
              </N.View>
              <N.View style={{flex: 5}} />
              <N.ScrollView horizontal={true} indicatorStyle="">
                {menu.map((value, index) => (
                  <Tabs
                    key={index}
                    title={value.name}
                    icon={value.icon}
                    onpress={() => alert('Oi')}
                  />
                ))}
              </N.ScrollView>
            </N.View>
          </N.View>
        </N.View>
        <N.View style={{flexDirection: 'row'}} />
      </S.DashboardWrapper>
    );
  }
}

const styles = N.StyleSheet.create({
  card: {
    height: '100%',
    minWidth: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 5,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 55,
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  font1: {
    fontSize: 40,
    color: 'red',
  },
  font4: {
    color: '#fff',
  },
});
