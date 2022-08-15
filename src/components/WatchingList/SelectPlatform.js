import React, {useState, useEffect} from 'react'
import watchingListService from '../../api/watchingList.service';
import Select from 'react-select'

const SelectPlatform = (props) => {
    const [valueArray, setValueArray] = useState([])
    const {currentValue} = props;

    useEffect(() => {
        watchingListService.getAccountPlatforms().then((response) => {
          let platforms = response.data.platforms;  
          const options = platforms.map(platform => {
              return {
                  value: platform,
                  label: platform
              }
          })
          setValueArray(options)
        
      })
    }, [])
  return (
    <Select value={currentValue} options={valueArray} onChange={(selectedOption) => {
      //setCurrentValue(selectedOption.value);
      props.sendPlatform(selectedOption.value, props.selectPlatformIndex)
    }}/>
  )
}

export default SelectPlatform