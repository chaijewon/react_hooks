// TextInput.js
import React,{useState} from 'react'

// useState => class에서 사용하는 state를 함수형 컴포넌트애서 사용
// 사용법 ==> const [변수명,setXxx]=useState('')
function TextInput() {
    const [text,setText]=useState('')
    const onChange=(e)=>{
       setText(e.target.value)
    }
    const onReset=()=>{
       setText('')
    }
    return (
        <div>
            <input type={"text"} value={text} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:{text}</b>
            </div>
        </div>
    )
}

export default TextInput