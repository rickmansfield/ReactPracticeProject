import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import styles from '../UI/Button';
import Button from '../UI/Button'

const AddUser = (props) => {
  const [entereUserdName, setEntereUserdName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const userNameChangeHandler = (e) => {
    setEntereUserdName(e.target.value)
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('name and age', entereUserdName, enteredAge);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type='text'
          value={entereUserdName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id='age'
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button className={styles.button} type='submit'>Add User</Button>
      </form >
    </Card>
  )
};

export default AddUser;
