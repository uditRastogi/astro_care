import React from "react";
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";

import { Icon, Drawer as DrawerCustomItem } from '../components/';
import { Images, materialTheme, tabs } from "../constants/";


function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    tabs.HOME,
    tabs.WALLET,
    tabs.REPORTS,
    tabs.SUPPORT,
    tabs.CONTACT_US,
    tabs.ABOUT_US
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block row flex={0.10} style={styles.header_text}>
        <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
        <Text color={ materialTheme.COLORS.SECONDARY}>
              AstroLyf
        </Text>
      </Block>
      
      <Block flex={0.25} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile")}
        >
          <Block flex row style={styles.profile}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
            <Block flex>
                <Text h5 color={"white"}>
                    {profile.name}
                </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
      <Block flex style={{ paddingLeft: 7, paddingRight: 14, paddingTop:10 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0
            }
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
      <Block flex={0.3} style={{ paddingLeft: 7, paddingRight: 14 }}>
        <DrawerCustomItem
          title="Sign In"
          navigation={navigation}
          focused={state.index === 8 ? true : false}
        />
        <DrawerCustomItem
          title="Sign Up"
          navigation={navigation}
          focused={state.index === 9 ? true : false}
        />
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.BLOCK
  },
  header_text:{ 
      paddingLeft: 10,
      paddingTop: 20
  },
  header: {
    backgroundColor: materialTheme.COLORS.ACTIVE,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: 'flex-end'
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: theme.SIZES.BASE,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: 16,
  }
});

export default CustomDrawerContent;