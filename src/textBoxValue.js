import {useState} from 'react';

function useTextBoxValue(initialValue){
    const [inputName, setInputName] = useState(initialValue);

    function handleChange(e){
        setInputName(e.target.value)
    }

    return{
        value: inputName,
        onChange: handleChange
    }
}

export {useTextBoxValue};