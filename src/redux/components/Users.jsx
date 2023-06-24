import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../users/usersSlice';
import User from './User';

const Users = () => {
    const {users, loading, error} = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && users.map((user, index) => <User key={index} user={user} />)}
    </div>
  )
}

export default Users
