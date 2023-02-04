import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import './UserForm.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";


const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collageInputRef = useRef();
    // const [enteredUser, setEnteredUser] = useState('');
    // const [enteredAge, setEntredAge] = useState('');
    const [error, setError] = useState();

    // const userChangeHandler = (event) => {
    //     setEnteredUser(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEntredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollage = collageInputRef.current.value;

        if (enteredName.trim().length === 0 ||
            enteredAge.trim().length === 0 ||
            enteredCollage.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'please enter a valid age (> 0)'
            })
            return;
        }

        props.onSaveUserdata(enteredName, enteredAge,enteredCollage)
        // setEntredAge('');
        // setEnteredUser('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collageInputRef.current.value = '';
    }
    return (
        <Wrapper>
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
                            ref={nameInputRef}
                        // value={enteredUser}
                        // onChange={userChangeHandler}
                        />
                        <label htmlFor="age" className="input label">Age(years)</label>
                        <input
                            className="input input"
                            id="age"
                            type='number'
                            ref={ageInputRef}
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        />
                        <label htmlFor="collage" className="input label">Collage Name</label>
                        <input
                            className="input input"
                            id="collage"
                            type="text"
                            ref={collageInputRef} />
                        <Button type='submit'>Add user</Button>

                    </div>
                </form>
            </Card>
        </Wrapper>

    )
}
export default UserForm;