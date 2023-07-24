import React, { ReactNode } from 'react'

export const TestContext = React.createContext<string>('empty')

// import { AuthProvider } from './auth-context'
// import { TestProvider } from './testContext'

// export const AppProviders = ({children}: { children:ReactNode }) => {
//     console.log("Enter AppProvider")
//     return <AuthProvider children={children} />

// }

// export const AppProviders = ({children}: {children: ReactNode}) => {
//     console.log("enter app provider...")
//     return <TestProvider children={children} />
// }