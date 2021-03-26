import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ls from 'local-storage';

const App = function() {
    const [users, setUsers] = useState(null);

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        axios
            .get("/api/users")
            .then((users) => setUsers(users.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(users);

    function submitForm() {
        if (username === "") {
            alert("Please fill the username field");
            return;
        }
        if (phone === "") {
            alert("Please fill the email field");
            return;
        }
        let t_number = Math.floor(Math.random() * 100);  
        axios
            .post("/api/users", {
                name: username,
                phone: phone,
                t_number: t_number
            })
            .then(function() {
                ls.set('t_number', t_number)
                alert("Account created successfully");
               
                
            })
            .catch(function() {
                alert("Could not creat account. Please try again");
            });
    }
    return ( 
            <>
                <h1> My Project </h1>
                {users === null ? ( <p> Loading... </p>) : users.length === 0 ? ( <p> No user available </p>) : 
                ( <>
                    <h2> Available Users </h2> <ol> {
                users.map((user, index) => ( <li key = { index }>
                    Name: { user.name } - Phone: { user.phone } - T_number: {user.t_number} </li>
                ))
            } </ol> </>
        )
    }

    <form onSubmit = { submitForm }>
        <input onChange = {
            (e) => setUsername(e.target.value)
        }
    type = "text"
    placeholder = "Enter your username" />
        <input onChange = {
            (e) => setPhone(e.target.value)
        }
    type = "text"
    placeholder = "Enter your phone number" />
        <input type = "submit" />
        </form> </>
);
};
export default App