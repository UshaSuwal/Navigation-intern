import { NavigatorScreenParams } from '@react-navigation/native';
import { Task } from '../types/types';

export type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<BottomTabParamList>; 
  TaskDetail: { task: Task };
};
