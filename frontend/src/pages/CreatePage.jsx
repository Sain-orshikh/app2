import React, {useState} from 'react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { MdCloudUpload } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";


const CreatePage = () => {

  const { mutate: createUser } = useMutation({
    mutationFn: async (newUser) => {
      console.log(newUser.picture);
      try {
        const res = await fetch("http://localhost:9000/users/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
  
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.message || "Something went wrong!");
        }
  
        return data; 
      } catch (error) {
        console.error(error);
        throw error; 
      }
    },
    onSuccess: () => {
      toast.success("User created successfully!");
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!");
    }
  });

  const [newUser, setNewUser] = React.useState({
    username: '',
    email: '',
    password: '',
    picture: '',
    bio: '',
    badges: [],
    achievements: [],
  });
  
    console.log(newUser.picture);
    const [options, setOptions] = useState(["1", "2", "3"]);
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleChange = (e) => {
      const selectedBadge = e.target.value;
  
      setNewUser((prevState) => ({
          ...prevState,
          badges: [...prevState.badges, selectedBadge],
      }));
  
      setOptions((prevOptions) => prevOptions.filter((option) => option !== selectedBadge));
  
      setSelectedOption("");
    };

  const [achievement, setAchievement] = useState('');

  const handleAdd = () => {
    setNewUser((prevState) => ({
      ...prevState,
      achievements: [...prevState.achievements, achievement],
    }));
    setAchievement('');
  }

  const handleCreateUser = () => {
    createUser(newUser);
    setNewUser({
      username: '',
      email: '',
      password: '',
      picture: '',
      bio: '',
      badges: [],
      achievements: [],
    });
    setOptions(["1", "2", "3"]);
  }

  return (
    <>
      <div className='w-full min-h-screen bg-gray'>
        <div className='text-5xl font-bold text-center pt-7'>
          Create a new user
        </div>
        <div className='w-[80%] sm:w-[70%] mx-auto mt-10 flex flex-col items-center justify-center'>
          <div className='flex flex-col sm:flex-row justify-between w-full'>
            <input
              type='text'
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              placeholder='Username'
              className='w-full sm:w-[47%] bg-white border rounded-md p-2'
            />
            <input
              type='email'
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder='Email'
              className='w-full sm:w-[47%] mt-2 sm:mt-0 bg-white border rounded-md p-2'              
            />
          </div>
          <div className='flex flex-col sm:flex-row justify-between w-full mt-3'>
            <input
              type='password'
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              placeholder='Password'
              className='w-full sm:w-[47%] bg-white border rounded-md p-2'
            />
            <input
              type='bio'
              value={newUser.bio}
              onChange={(e) => setNewUser({ ...newUser, bio: e.target.value })}
              placeholder='Bio'
              className='w-full sm:w-[47%] mt-2 sm:mt-0 bg-white border rounded-md p-2'              
            />
          </div>
          <div className='flex flex-col sm:flex-row justify-between w-full mt-3'>
            <select
              className="w-full sm:w-[47%] bg-white border rounded-md p-2"
              value={selectedOption}
              onChange={handleChange} // Listen for change
            >
              <option value="" disabled>
                Select a badge
              </option>
              {options.map((badge) => (
                <option value={badge} key={badge}>
                  Badge {badge}
                </option>
              ))}
            </select>
            <div className='flex flex-row w-full sm:w-[47%] bg-white mt-2 sm:mt-0 border rounded-md pl-2 group focus-within:outline'>
              <input
                type='achievement'
                value={achievement}
                onChange={(e) => {setAchievement(e.target.value)}}
                placeholder='Achievement'
                className='w-[90%] py-2 focus:outline-none'              
              />
              <button onClick={handleAdd} className='border-l group-focus-within:outline hover:bg-gray-200 rounded-r-md flex justify-center items-center w-[10%]'>
                <MdOutlineAdd className='text-3xl'/>
              </button>
            </div>
          </div>
          {/*newUser.picture && (
          <img
            src={newUser.picture}
            alt="profile"
            className="w-[10rem] h-[10rem] rounded-full mt-3"
          />
          )  
          */}
          <button className={`flex flex-col w-full h-[10rem] border rounded-md mt-3 bg-white hover:bg-gray-200 items-center justify-center cursor-pointer`}>
            <span>
              <MdCloudUpload className="text-8xl text-center" />
            </span>
            <input
                type='picture'
                value={newUser.picture}
                onChange={(e) => setNewUser({ ...newUser, picture: e.target.value })}
                placeholder='Picture'
                className='w-[50%] p-2 mb-3 border rounded-md'              
              />
          </button>
          {/*}
          <label
            htmlFor="fileInput"
            className={`${
              newUser.picture ? `hidden` : `block`
            } w-full h-[10rem] border rounded-md mt-3 bg-white hover:bg-gray-200 flex items-center justify-center cursor-pointer`}
          >
            <span>
              <MdCloudUpload className="text-8xl text-center" />
            </span>

            {<input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleImgChange(e, "picture")}
              className="hidden"
            />
          </label>*/}
          <button
            onClick={() => handleCreateUser()}
            className='w-full sm:w-[50%] text-xl font-semibold hover:bg-gray-200 bg-white border rounded-md p-2 mt-3 mb-3'
          >
            Create
          </button>
        </div>
      </div>
    </>
  )
}

export default CreatePage