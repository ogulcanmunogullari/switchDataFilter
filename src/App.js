import React, {useState} from 'react';
import {View, Text, Switch, FlatList} from 'react-native';
import data from './data.json';

export default function App() {
  const [isWatched, setIsWatched] = useState(data);
  const [onlyWatched, setOnlyWatched] = useState(false);
  function onlyWatchedChange(isWatchedCB) {
    setOnlyWatched(isWatchedCB);
    isWatchedCB
      ? setIsWatched(isWatched.filter(film => film.isWatched))
      : setIsWatched(data);
  }
  return (
    <View>
      <Text>İzlenenleri Göster</Text>
      <Switch value={onlyWatched} onValueChange={onlyWatchedChange} />
      <Text>Filmler</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
      <Text>İzlenenler</Text>
      {isWatched === data ? null : (
        <FlatList
          data={isWatched}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}
