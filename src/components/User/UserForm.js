import React, { useState } from "react";
import Card from "../UI/Card";
import './UserForm.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const UserForm = (props) => {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEntredAge] = useState('');
    const [error, setError] = useState();

    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEntredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'please enter a valid age (> 0)'
            })
            return;
        }

        props.onSaveUserdata(enteredUser, enteredAge)
        setEntredAge('');
        setEnteredUser('');
    }
    return (
        <div>
            {error && <ErrorModel
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="input">
                        <label htmlFor="username" className="input label" >Username</label>
                        <input
                            className="input input"
                            id="username"
                            type="text"
                            value={enteredUser}
                            onChange={userChangeHandler}
                        />
                        <label htmlFor="age" className="input label">Age(years)</label>
                        <input
                            className="input input"
                            id="age"
                            type='number'
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                        <Button type='submit'>Add user</Button>
                        
                    </div>
                </form>
            </Card>
        </div>

    )
}
export default UserForm;