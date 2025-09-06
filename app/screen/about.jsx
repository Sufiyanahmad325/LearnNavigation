import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const about = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='Go back' onPress={() => router.back()} />
    </View>
  )
}

export default about

const styles = StyleSheet.create({})