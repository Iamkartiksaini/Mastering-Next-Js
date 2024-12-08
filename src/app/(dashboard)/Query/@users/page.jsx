"use client"
import Link from 'next/link';
import React from 'react'
import { useQuery } from 'react-query'

const Page = () => {
    const { isLoading, error, data } = useQuery('users', () =>
        fetch(`https://jsonplaceholder.typicode.com/users`).then(res =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="usersList">
            {data.slice(0, 10).map((user) => {
                return (
                    <Link href={`TanStack?id=${user.id}`} key={user.id}>
                        {user.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default Page