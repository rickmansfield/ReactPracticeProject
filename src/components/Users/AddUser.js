import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import styles from '../UI/Button';
import Button from '../UI/Button'

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value)
  };

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type='text'
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id='age'
          type="number"
        />
        <Button className={styles.button} type='submit'>Add User</Button>
      </form >
    </Card>
  )
};

export default AddUser;
