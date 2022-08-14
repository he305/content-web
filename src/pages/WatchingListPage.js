import React, {useEffect} from 'react'
import WatchingList from '../components/WatchingList/WatchingList'

function WatchingListPage() {
  useEffect(() => {
    document.title = "Watching list";
  }, [])
  return (
    <WatchingList></WatchingList>
  )
}

export default WatchingListPage