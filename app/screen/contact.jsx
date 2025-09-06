import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const contact = () => {
  return (
    <View style={{ flex: 1, gap:10, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        onPress={() => router.push('/screen/about')}
        title='Go to About Page'
      />
      <Button
        onPress={() => router.back()}
        title='Go Back'
      />
    </View>
  )
}

export default contact

const styles = StyleSheet.create({})