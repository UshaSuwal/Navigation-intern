import React from 'react'
import { Button, View } from 'react-native'
import { useAppDispatch } from '../../store/hooks'
import { decrement, increment, incrementByAmount, reset } from '../../store/counterSlice'
import { DisplayCount } from './DisplayCount'

export function Counter() {
  const dispatch = useAppDispatch()

  return (
    <View>
      <View>
        <Button
        title='Increment'
        onPress={() => {dispatch(increment())}}   
        />
        
        <DisplayCount/>
        <Button
        title='Decrement'
        onPress={() => {dispatch(decrement())}}
        />

        <Button
        title='Increment by 5'
        onPress={() => {dispatch(incrementByAmount(5))}}
          
        />
        <Button
        title='Reset'
        onPress={() => {dispatch(reset())}}
          
        />
      </View>
    </View>
  )
}