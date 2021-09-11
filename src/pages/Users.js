import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/ui/LoadingSpinner'

import UsersList from '../components/user/UsersList'
import { useHttp } from '../hooks/useHttp'

function Users() {
  const { isLoading, error, sendRequest } = useHttp()
  const [loadedUsers, setLoadedUsers] = useState([])

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        )

        setLoadedUsers(data.users)
      } catch (err) {
        // console.log(err)
      }
    }

    fetchRequest()
  }, [sendRequest])

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && <UsersList users={loadedUsers} />}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default Users
