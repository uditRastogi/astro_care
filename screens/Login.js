import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native';
import { Card, Block, Button , Input} from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Icon from '../components/Icon';


export default class LoginComponent extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.conatiner}>
          <Block flex row center>
                <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
          </Block>
          <Block flex row>
            <Card
                flex
                style={styles.card}>
                 <Block flex row>
                    <Input
                        borderless
                        placeholder="Enter Email"
                        placeholderTextColor="grey"
                        color="black"
                        left
                        icon="person"
                        family="Ionicons"
                        iconSize={24}
                        iconColor="black"
                        type="email-address"
                        />
                 </Block>
                 <Block flex row>
                    <Input
                            borderless
                            placeholder="Enter Password"
                            placeholderTextColor="grey"
                            color="black"
                            left
                            icon="lock"
                            family="fontAwesome"
                            iconSize={24}
                            iconColor="black"
                            password={true}
                            />

                 </Block>
                 <Block flex row>

                 </Block>
            </Card>

          </Block>
          <Block flex center>
              <Button
                shadowless
                style={styles.signInButton}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('SignIn')}>
                Login
              </Button>
          </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: materialTheme.COLORS.BLOCK,
  },
  card: {
    borderRadius: 50,
    paddingLeft:30,
    backgroundColor: materialTheme.COLORS.WHITE,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 10,
        height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
  signInButton:{
    marginTop:20,
    width: width - 100,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 10,
        height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  }
});
