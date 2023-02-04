import React, {useState} from "react";
import Card from "../UI/Card";
import './UserForm.css';
import Button from "../UI/Button";

const UserForm = (props) => {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEntredAge] = useState('');

    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEntredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredUser.trim() === 0 || enteredAge.trim() === 0){
            return;
        }
        if(enteredAge < 1){
            return;
        }

        props.onSaveUserdata(enteredUser, enteredAge)
        // console.log(enteredUser, enteredAge);
        setEntredAge('');
        setEnteredUser('');
    }
    return (
        <Card>
            <form className="input" onSubmit={submitHandler}>
                <div>
                    <label 
                    htmlFor="username" 
                    className="input label">Username</label>
                    <input
                        className="input input"
                        id="username"
                        type="text"
                    value={enteredUser}
                    onChange={userChangeHandler}
                    />
                    <label 
                    htmlFor="age" 
                    className="input label">Age(years)</label>
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

    )
}
export default UserForm;