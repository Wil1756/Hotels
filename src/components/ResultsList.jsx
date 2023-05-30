import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';

const ResultsList = () => {
  return (
    <View>
      <Text>{name}</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={''}
        keyExtractor={() => { }}
        renderItem={() => {
          return (
            <TouchableOpacity>
              <ResultDetail />
            </TouchableOpacity>
          )
        }}

      />
    </View>
  )
}

export default ResultsList