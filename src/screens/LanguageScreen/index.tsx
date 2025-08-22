import { View } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from './styles';
import OptionBox from '../../components/OptionBox';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Colors from '../../utils/Colors/colors';
import languages from './data';
import CustomHeader from '../../components/Header';
import { en } from '../../translations/en';

const LanguageScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <Layout backgroundColor safeAreaView>
      <CustomHeader headerText={en.common.languages} style={styles.header} />

      <View style={styles.languageContainer}>
        {languages.map((language, index) => (
          <OptionBox
            key={index}
            image={language.image}
            title={language.title}
            endIcon={
              selectedIndex === index ? (faCheck as IconProp) : undefined
            }
            iconColor={Colors.primary}
            onPress={() => setSelectedIndex(index)}
            border={selectedIndex === index}
          />
        ))}
      </View>
    </Layout>
  );
};

export default LanguageScreen;
