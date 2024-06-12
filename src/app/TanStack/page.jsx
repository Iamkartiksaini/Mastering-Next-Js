'use client';

import { useQuery } from 'react-query';

const fetchUserData = async (id) => {
    const [postsResponse, usersResponse] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    ]);

    const postsData = await postsResponse.json();
    const usersData = await usersResponse.json();
    return { postsData, usersData };
};

const Page = ({ searchParams }) => {
    const id = searchParams?.id || 1;
    const { isLoading, error, data } = useQuery(['userData', id], () => fetchUserData(id), {
        staleTime: 300000, // 5 minutes
        cacheTime: 300000, // 5 minutes
        enabled: !!id, // Ensure the query only runs when `id` is available
    });

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;


    return (
        <div className='data'>
            <h1>{data.usersData.name}</h1>
            <strong>✨ {data.usersData.username}</strong>
            <br />
            <p>{data.postsData.body}</p>
        </div>
    );
};

export default Page;
