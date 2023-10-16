import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const WorkerContext = createContext('hello')

export const WorkerProvider = ({ children }) => {
  return <WorkerContext.Provider value={{}}>{children}</WorkerContext.Provider>
}
