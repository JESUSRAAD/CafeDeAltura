"use client";
import React, { useContext, useEffect, useState,  } from 'react';
import UserCard from './UserCard';
import { UserContext } from '@/context/UserContex';
import UserSearch from './UserSearch';

const UserList = () => {
 
    const { dataUsers,setdataUsers, filterUsers, setFilterUsers } = useContext(UserContext);
    




    return (
        <div className='flex flex-col gap-5 items-center'>
       <UserSearch/>

            <div className='flex flex-wrap gap-3'>
                {filterUsers.map((user) => (
                    <UserCard  key={user.telf} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;