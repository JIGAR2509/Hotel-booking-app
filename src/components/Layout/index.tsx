/* eslint-disable react-native/no-inline-styles */
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import styles from './styles';
import Colors from '../../utils/Colors/colors';

type LayoutType = {
  children: ReactNode;
  backgroundColor?: boolean;
  scrollable?: boolean;
  keyboardAvoidingView?: boolean;
  safeAreaView?: boolean;
  style?: StyleProp<ViewStyle>;
} & ScrollViewProps &
  Pick<SafeAreaViewProps, 'edges'>;

const Layout = ({
  children,
  style,
  contentContainerStyle,
  edges,
  backgroundColor,
  scrollable,
  keyboardAvoidingView,
  safeAreaView,

  ...rest
}: LayoutType) => {
  return (
    <>
      {scrollable && (
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: !backgroundColor ? Colors.white : '' },
          ]}
          edges={edges}
        >
          <ScrollView
            style={[style]}
            contentContainerStyle={[
              styles.contenteContainerStyle,
              contentContainerStyle,
              { backgroundColor: !backgroundColor ? Colors.white : '' },
            ]}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            {...rest}
          >
            {children}
          </ScrollView>
        </SafeAreaView>
      )}
      {safeAreaView && (
        <SafeAreaView
          style={[
            style,
            styles.container,
            { backgroundColor: !backgroundColor ? Colors.white : '' },
          ]}
          edges={edges}
        >
          {children}
        </SafeAreaView>
      )}
      {keyboardAvoidingView && (
        <KeyboardAvoidingView
          style={[
            styles.container,
            { backgroundColor: !backgroundColor ? Colors.white : '' },
          ]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'android' ? -20 : -30}
        >
          <SafeAreaView style={[style, styles.container]} edges={edges}>
            <ScrollView
              contentContainerStyle={[
                styles.contenteContainerStyle,
                contentContainerStyle,
                { backgroundColor: !backgroundColor ? Colors.white : '' },
              ]}
              bounces={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              {...rest}
            >
              {children}
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      )}
    </>
  );
};
export default Layout;
