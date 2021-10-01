import React from 'react';

const UserCard = ({userData}) => {
    return (
        <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{`${userData.firstName} ${userData.lastName}`}</h5>
                <p className="card-text">{userData.email}</p>
            </div>
        </div>
    </div>
    );
};

export default UserCard;