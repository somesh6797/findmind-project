import React from 'react'

const newContext=React.createContext()

const DataProvider=newContext.Provider
const DataConsumer=newContext.Consumer

export {DataProvider,DataConsumer}