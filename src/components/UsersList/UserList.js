import React from 'react';
import UserCard from '../UserCard/UserCard';

const UserList = ({ data }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                data.map(userData => <UserCard userData={userData} />)
            }
        </div>
    );
};

export default UserList;