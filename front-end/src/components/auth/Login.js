import React from 'react';
import loginImg from '../assets/LoginAssets/login-2.jpg'
import cocoonImg from '../assets/LoginAssets/logococoon.png'
import {FcGoogle} from 'react-icons/fc'
import juiceImg from '../assets/LoginAssets/juice.png'
import pizzaImg from '../assets/LoginAssets/pizza.png'
import burgerImg from '../assets/LoginAssets/burger.png'

export default function Login3(){
    return (
        
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 sm:w-[350px] m-auto md:w-[750px] h-[580px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-lg bg-bgMain'>
                <div className='absolute hidden md:block border-8 border-main-50 bg-bgmain p-10 ml-5 w-[700px] h-[500px] my-12 rounded-lg  shadow-lg shadow-gray-600'>
                </div>
                <div className='justify-between hidden md:block w-full h-[580px] bg-main rounded-lg'>
                    
                </div>
                <div className='p-4 flex flex-col justify-around bg-bgmain relative'>
                    <img src = {cocoonImg} className= 'max-w-[200px] absolute top-0 right-0'/>
                    <form>
                        <h2 className='text-4xl font-bold text-center '>Login</h2>
                        <div className='flex flex-col'>
                            <label>Email</label>
                            <input className = 'border p-2 mr-8' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label>Password</label>
                            <input className = 'border p-2 mr-8' type="password" />
                        </div>
                        <p className='mt-2'><input className='mr-2' type="checkbox"/>Remember Me</p>
                        <button className='md:w-[300px] w-full py-2 mt-4 bg-main text-white border rounded-lg'>Sign In</button>
                        <button className=' flex justify-center md:w-[300px] w-full py-2 mt-4 bg-google text-white border rounded-lg'><FcGoogle className='mx-4 my-auto'/>Continue with Google</button>
                        <div className='flex justify-center mt-4 mr-5'>
                            
                            <p>Don't have an account? <button className='text'>Sign Up</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}