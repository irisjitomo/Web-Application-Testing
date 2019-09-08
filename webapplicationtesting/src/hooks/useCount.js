import React, {useState} from 'react';


export const useCount = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const changeValue = updatedValue => {
        setValue(updatedValue)
    }

    return [value, setValue, changeValue]
}