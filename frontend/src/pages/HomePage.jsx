import React from 'react'
import { useQuery } from '@tanstack/react-query'
import UserCard from '../components/ui/UserCard'
import { Grid2 } from '@mui/material'


const Homepage = () => {
  
  const { data: users, isLoading, error } = useQuery({ queryKey: ['users'], 
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/users");
      const data = await res.json();
      return data;
    }
  });

  console.log(users);
  const [visibleUsers, setVisibleUsers] = React.useState(20);
  
  const handleLoadMore = () => {
    setVisibleUsers((prev) => prev + 6);
  };

  let displayedUsers = [];
  if (users) {
    displayedUsers = [...users].slice(0, visibleUsers);
  }

  return (
    <>
      <div className='flex flex-col w-full min-h-screen bg-gray'>
        <div className='mt-10 ml-10 text-4xl font-bold'>
          Discover students of MAIS
        </div>
        <div className='flex flex-row justify-evenly space-around w-[90%] mx-auto mt-10'>
          <div className=''>
            <Grid2 container spacing={2} columns={12} >
              {displayedUsers.map((user) => (
              <Grid2 
                xs={12} // 1 column on extra-small screens
                sm={4}  // 2 columns on small screens and up
                key={user.id}
                className="mx-auto"
              >
                <UserCard user={user}/>
              </Grid2>
              ))}
            </Grid2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage