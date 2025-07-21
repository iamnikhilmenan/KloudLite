import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

interface NavigationHeaderProps {
  showBackButton?: boolean;
  showLogo?: boolean;
  showMenu?: boolean;
  showSearchIcon?: boolean;
}

export default function NavigationHeader({
  showBackButton,
  showLogo,
  showMenu,
  showSearchIcon,
}: NavigationHeaderProps) {
  const navigate = useNavigation();

  const onBackButtonHandler = () => {
    navigate.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Menu icon */}
      {showMenu && (
        <Image source={require('../assets/menu.png')} style={styles.icons} />
      )}
      {showBackButton && (
        <TouchableOpacity onPress={onBackButtonHandler}>
          <Image
            source={require('../assets/back.png')}
            style={[styles.icons]}
          />
        </TouchableOpacity>
      )}
      {/* Logo */}
      {showLogo && (
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      )}
      {/* Search Icon */}
      {showSearchIcon && (
        <Image source={require('../assets/search.png')} style={styles.icons} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 4,
    shadowColor: '#636363ff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logo: { width: 48, height: 48 },
  icons: {
    height: 24,
    width: 24,
  },
});
