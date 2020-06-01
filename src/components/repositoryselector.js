import React, {useState} from 'react'

const RepositorySelector = ({onClick})=>{
    const [userType, setUserType] = useState('user')
    const [userName, setUserName] = useState('')
    return(
        <div>
            <select onBlur={(e)=> setUserType(e.target.value)}>
                <option value="user">user</option>
                <option value="organization">organization</option>
            </select>
            <input type='text' placeholder={userType + ' name'} onChange={(e) => setUserName(e.target.value)}></input>
            <button disabled={!userName} onClick={onClick}>Search</button>
        </div>
        
    )
}

export default RepositorySelector;