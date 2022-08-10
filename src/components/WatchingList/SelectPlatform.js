import React, {useState, useEffect} from 'react'
import watchingListService from '../../api/watchingList.service';
import Select from 'react-select'

function SelectPlatform() {
    const [valueArray, setValueArray] = useState([])

    useEffect(() => {
        const platforms = watchingListService.getAccountPlatforms()
        const options = platforms.map(platform => {
            return {
                value: platform,
                label: platform
            }
        })
        setValueArray(options)
    }, [])
  return (
    <Select options={valueArray} />
  )
}

export default SelectPlatform