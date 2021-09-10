import { createContext, useCallback, useState } from 'react'

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
  userId: null,
})

const AuthContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loginHandler = useCallback(uid => {
    setIsAuthenticated(true)
    setUserId(uid)
  }, [])
  const logoutHandler = useCallback(() => {
    setIsAuthenticated(false)
    setUserId(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuthenticated,
        login: loginHandler,
        logout: logoutHandler,
        userId: userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
