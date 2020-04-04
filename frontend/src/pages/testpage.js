import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { GetUsers } from '../services/data'

export default function Page2() {
    const [users, setUsers] = useState([]);
    
    const loadUsers = async () => {
        setUsers(await GetUsers());
    }

    return (
        <div>
            Olá eu sou a página 2
            <Button onClick={loadUsers}>Load Users</Button>
            <ul>
                {users.map(u => (
                    <li key={u.id}>
                        {u.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}