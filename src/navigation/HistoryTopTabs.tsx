import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllTasksScreen from '../screens/History/AllTasksScreen';
import IncompleteTasksScreen from '../screens/History/IncompleteTasksScreen';
import CompletedTasksScreen from '../screens/History/CompletedTasksScreen';

const Tab = createMaterialTopTabNavigator();

const HistoryTopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={AllTasksScreen} />
      <Tab.Screen name="Incomplete" component={IncompleteTasksScreen} />
      <Tab.Screen name="Completed" component={CompletedTasksScreen} />
    </Tab.Navigator>
  );
};

export default HistoryTopTabs;
