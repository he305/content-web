import React, {useState, useEffect} from 'react'
import watchingListService from '../../api/watchingList.service';
import Select from 'react-select'

const SelectPlatform = (props) => {
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
    <Select options={valueArray} onChange={(selectedOption) => {
      props.sendPlatform(selectedOption.value, props.selectPlatformIndex)
    }}/>
  )
}

export default SelectPlatform