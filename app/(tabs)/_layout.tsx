import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Transactions",
                headerShown: false

            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: "Cards",
                headerShown: false

            }}
        />
        <Tabs.Screen
            name="budget"
            options={{
                title: "Budget",
                headerShown: false

            }}
        />
    </Tabs>
  )
}

export default _layout