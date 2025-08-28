import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

type data = {
  id: string;
  title: string;
};
const ApiExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error :', error);
      }
    };
    getData();
  }, []);

  const renderTodo: ListRenderItem<data> = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>
          {item.id}. {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default ApiExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
