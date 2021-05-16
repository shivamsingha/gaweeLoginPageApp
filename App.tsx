/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#fff',
  };

  const [tab, changeTab] = useState('jobseeker');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Image source={require('./assets/logo.jpg')} style={styles.logo} />
        <View style={styles.tabContainer}>
          <Pressable
            onPress={() => changeTab('jobseeker')}
            style={[
              styles.tabs,
              tab === 'jobseeker' ? styles.activeTab : styles.inactiveTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                tab === 'jobseeker'
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              JOB SEEKER
            </Text>
          </Pressable>
          <Pressable
            onPress={() => changeTab('company')}
            style={[
              styles.tabs,
              tab === 'company' ? styles.activeTab : styles.inactiveTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                tab === 'company'
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              COMPANY
            </Text>
          </Pressable>
        </View>
        <Text style={styles.signinText}>
          Sign in to your registered account
        </Text>
        <TextInput style={styles.textInputs} placeholder="User Name" />
        <TextInput
          style={styles.textInputs}
          placeholder="Password"
          secureTextEntry
        />
        <Pressable
          onPress={() => null}
          style={[styles.buttons, styles.buttonLogin]}
          android_ripple={{borderless: false}}>
          <Text style={[styles.buttonText, styles.buttonTextLogin]}>LOGIN</Text>
        </Pressable>
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot your password? </Text>
          <Pressable onPress={() => null} android_ripple={{borderless: true}}>
            <Text style={styles.resetText}>Reset here</Text>
          </Pressable>
        </View>
        <View style={styles.forgotContainer}>
          <Text style={styles.signWithText}>Or sign in with</Text>
          <Image
            source={require('./assets/icons.jpg')}
            style={styles.signinIcons}
          />
        </View>
        <Pressable
          onPress={() => null}
          style={[styles.buttons, styles.buttonCreate]}
          android_ripple={{borderless: false}}>
          <Text style={[styles.buttonText, styles.buttonTextCreate]}>
            CREATE ACCOUNT
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingHorizontal: 30,
  },
  logo: {
    marginVertical: 30,
    width: '100%',
    height: 45,
    resizeMode: 'contain',
  },
  tabContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  tabs: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderBottomWidth: 2,
  },
  activeTab: {
    borderBottomColor: '#9337e4',
  },
  inactiveTab: {
    borderBottomColor: '#cecece',
  },
  tabText: {
    marginVertical: 10,
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  activeTabText: {
    color: '#9337e4',
  },
  inactiveTabText: {
    color: '#7da7fe',
  },
  signinText: {
    fontSize: 20,
    paddingVertical: 20,
    fontFamily: 'Poppins',
  },
  forgotContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    display: 'flex',
    flexShrink: 1,
  },
  resetText: {
    color: '#9337e4',
    fontSize: 16,
    fontFamily: 'Poppins',
    display: 'flex',
    flexShrink: 1,
  },
  signWithText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    display: 'flex',
    flexGrow: 1,
  },
  signinIcons: {
    display: 'flex',
    flexShrink: 1,
  },
  textInputs: {
    width: '100%',
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    marginVertical: 10,
    padding: 20,
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  buttons: {
    width: '100%',
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    marginVertical: 10,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  buttonLogin: {
    backgroundColor: '#9337e4',
  },
  buttonCreate: {
    borderColor: '#9337e4',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignContent: 'center',
  },
  buttonTextLogin: {
    color: '#fff',
  },
  buttonTextCreate: {
    color: '#9337e4',
  },
});

export default App;
