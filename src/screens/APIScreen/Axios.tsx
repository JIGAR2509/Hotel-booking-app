import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type DataProps = {
  id: string;
  title: string;
};
const Axios = () => {
  const [data, setData] = useState<DataProps[]>([]);

  const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {data.map(todo => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </View>
  );
};

export default Axios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
