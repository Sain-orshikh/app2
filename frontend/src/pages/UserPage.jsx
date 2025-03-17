import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Grid2 } from '@mui/material'

const UserPage = () => {

    const { id } = useParams();

    const {data: user, isLoading, isError} = useQuery({ queryKey: ["user"], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/users/${id}`)
            const data = await res.json()
            if(!res.ok) {
                throw new Error(data.message || "Something went wrong!")
            }
            return data;
        }
    });
    
    const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";

    const User = user || {};

    return (
        <>
            <div className='w-full min-h-screen bg-gray'>
                <div className='flex flex-row justify-between w-[90%] sm:w-[70%] mx-auto'>
                    <div className='flex flex-col w-[25%] mt-10'>
                        <img
                            src={User.picture || fallbackImage}
                            alt="user"
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop if fallback fails
                                e.target.src = fallbackImage; // Fallback image URL
                            }}
                            className="w-full aspect-square rounded-full border-2 border-gray-400"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="flex flex-col w-full mt-5">
                            <span className="font-semibold text-start text-3xl whitespace-normal">{User.username}</span>
                            <span className="text-start text-md break-words">{User.email}</span>
                        </div>
                        <div className='mt-3'>
                            {User.bio}
                        </div>
                        <div className='w-full border border-gray-300 mt-3'/>
                        <div className='mt-3 font-bold'>
                            Badges
                        </div>
                        <Grid2 container columns={12} className='mt-3 w-full'>
                            <Grid2 
                                xs={12} // 1 column on extra-small screens
                                sm={4}  // 2 columns on small screens and up
                                className="mx-auto"
                            >
                                <div className='w-[5rem] h-[5rem] rounded-full border flex items-center justify-center bg-white'>
                                    1#
                                </div>
                            </Grid2>
                            <Grid2 
                                xs={12} // 1 column on extra-small screens
                                sm={4}  // 2 columns on small screens and up
                                className="mx-auto"
                            >
                                <div className='w-[5rem] h-[5rem] rounded-full border flex items-center justify-center bg-white'>
                                    2#
                                </div>
                            </Grid2>
                            <Grid2 
                                xs={12} // 1 column on extra-small screens
                                sm={4}  // 2 columns on small screens and up
                                className="mx-auto"
                            >
                                <div className='w-[5rem] h-[5rem] rounded-full border flex items-center justify-center bg-white'>
                                    3#
                                </div>
                            </Grid2>
                        </Grid2>
                    </div>
                    
                    <div className='flex flex-col w-[73%] border'>

                    </div>
                </div>
            </div>
        </>
    )

}

export default UserPage