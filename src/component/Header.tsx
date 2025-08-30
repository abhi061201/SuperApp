import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface HeaderProps {
  title?: string;
  backgroundColor?: string;
  showBackButton?: boolean;
  backButtonCallback?: () => void;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
const Header = ({
  title = 'Header',
  titleStyle,
  backgroundColor = 'white',
  backButtonCallback,
  showBackButton = true,
  style,
}: HeaderProps) => {
  return (
    <View
      style={[style, { backgroundColor: backgroundColor }, styles.headerStyle]}
    >
      <Text style={[titleStyle]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: 50,
  },
});
