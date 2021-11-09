import React from 'react'
import { Greetings } from './Greetings'
export default {
     title: 'Greetings',
     component: Greetings
}
export const BasicGreetings = () => (
    <Greetings name="Test Name" />
)
export const GreetingsWithWaves = () => (
    <Greetings 
      name="Test Name 2" 
      onSendWaves={() => {}} />
)