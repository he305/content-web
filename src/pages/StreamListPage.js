import React, {useEffect} from 'react'
import StreamList from '../components/StreamList/StreamList'

function StreamListPage() {
  useEffect(() => {
    document.title = "Stream list";
  }, [])
  return (
    <StreamList></StreamList>
  )
}

export default StreamListPage