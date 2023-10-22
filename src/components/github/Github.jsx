import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/rajabca04')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl row-auto'>Github followers: {data.followers}
    
    <p>Name: {data.name}</p>
    <p> Login: {data.login}</p>
    <p> Bio: {data.bio}</p>
    <p> Location: {data.location}</p>
    <p>{data.blog}</p>
    <p>{data.company}</p>
    <p>{data.email}</p>
    <p>{data.hireable}</p>
    <p>{data.html_url}</p>
    <p>{data.public_repos}</p>
    <img style={{marginTop: '-250px'}} src={data.avatar_url} alt="Git picture" width={300} />

    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://github.com/rajabca04')
//     return response.json()
// }