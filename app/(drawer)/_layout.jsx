import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
   <Drawer>
    <Drawer.Screen name="(tabs)" options={{title: 'Home'}} />
    <Drawer.Screen name="explore" options={{title: 'Explore'}} />
   </Drawer>
  )
}

export default DrawerLayout

const styles = StyleSheet.create({})