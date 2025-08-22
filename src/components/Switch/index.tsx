import { Text, View, Switch } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export type SwitchProps = {
  title: string;
  description: string;
};

const CustomSwitch = ({ title, description }: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: '#CCC', true: '#084B83' }}
        thumbColor="#ffffff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;
