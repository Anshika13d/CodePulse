import React, { useContext, useEffect, useState } from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import Level from './Level';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import LockedBtn from '../components/LockedBtn';
import { AuthContext } from '../context/AuthContext';
import robot from '../assets/robot.png'
import Footer from '../components/Footer/Footer';
 
function Practice() {

  const [lock, setLock] = useState(true)
  const {setUser, user} = useContext(AuthContext);

  // useEffect(async () => {
      
  //     setLock(res);
  // }, [])

  if(!user){
    return (
      <div className='bg-gradient-to-r from-gray-800 to-black min-h-screen flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <img src={robot} className='w-32 sm:w-40' alt="Robot" />
        </div>
        <div className="w-full flex flex-col items-center justify-center px-4">
          <h1 className='text-2xl sm:text-4xl mb-8 text-center text-white'>
            Hey! You need to Login first...
          </h1>
          <div className='flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0 justify-center'>
            <Link to='/login'>
              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-40 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-40 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>

    )
  }

  return (
    <>
    <div className='min-h-screen bg-gradient-to-r from-gray-800 to-black flex flex-col items-center justify-center mb-10'>
      <p className='text-white mt-7 text-4xl text-center  mb-8'>Unlock Each Level of Your Success!</p>

      <div className='container w-1/2 items-start  mb-14 mt-9'>
        <Link to='/level'>   
          <button 
            className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
              Level 1
          </button>
        </Link>
      </div>

      <div className='container w-1/2  flex justify-end  mb-14'>
      {lock == true? 
          <LockedBtn/> :  <button 
                            className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2  transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                              <Link to='/level'> Level 2 </Link>
                          </button>
      }  
      </div>

      <div className='container w-1/2 flex items-start  mb-14'>
      {lock == true? <LockedBtn/> :  
                                      <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                        <Link to='/level'> Level 3 </Link> 
                                      </button>
      }
      </div>

      <div className='container w-1/2  flex justify-end  mb-14'>
        {lock? <LockedBtn /> : <button 
                                  className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2  transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                    <Link to='/level'> Level 4  </Link>
                                </button> 
        } 
      </div>
      <div className='container w-1/2  items-start  mb-14 mt-9'>
      {lock? <LockedBtn/> : <Link to='/level'>
                              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                Level 5
                              </button>
                            </Link>
      }
        
      </div>

      <div className='container w-1/2  flex justify-end  mb-14'>
        {lock? 
          <LockedBtn/> : <button 
                            className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2  transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                <Link to='/level'>    Level 6  </Link>
                          </button>
        }
        
          
      </div>
      <div className='container w-1/2  items-start  mb-14'>
          {lock? <LockedBtn/> : <Link to='/level'>
                              <button className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                  
                                    Level 7
                                
                                </button>
                                </Link>
          }
      </div>
      <div className='container w-1/2  flex justify-end  mb-14'>
        {lock? <LockedBtn/> : <button 
                                className='bg-gradient-to-r from-gray-700 to-gray-800 h-12 w-1/2 transition-all duration-300 ease-in-out hover:shadow-glow-purple rounded-lg text-white font-bold'>
                                  <Link to='/level'>    Level 8   </Link>
                            </button>
        }
      </div>
    </div>

      <Routes>
        <Route path="/level" element={<Level />} />
      </Routes>

      <Footer />
</>
  );
}

export default Practice;
