import { useCallback, useState, useEffect, useRef } from 'react'

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const activeHttpReq = useRef([])

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true)

      const httpAbort = new AbortController()
      activeHttpReq.current.push(httpAbort)

      try {
        const res = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbort.signal,
        })

        const data = await res.json()

        activeHttpReq.current = activeHttpReq.current.filter(
          req => req !== httpAbort
        )

        if (!res.ok) {
          throw new Error(data.message)
        }
        setIsLoading(false)
        return data
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
        throw err
      }
    },
    []
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(null)
    }, 5000)
    return () => {
      clearInterval(timeout)
    }
  }, [error])

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpReq.current.forEach(abortCtrl => abortCtrl.abort())
    }
  }, [])

  return { isLoading, error, sendRequest }
}
