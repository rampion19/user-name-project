import React from "react";
import Card from "../UI/Card";
import './UserList.css'
// import Button from "../UI/Button";

const UserList = (props) => {
    return (
        <Card>
            <ul className="users ul">
                {props.users.map((user) => (
                    <li key={user.id} className="users li">
                        {user.name} ({user.age} years old)
                        {/* <Button type ='delete'>Delete user</Button> */}
                    </li>
                  
                ))}
            </ul>
        </Card>
    );
};

export default UserList;