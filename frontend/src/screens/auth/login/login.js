import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import {useSelector,useDispatch} from 'react-redux';
import { userLogin,userRegister } from '../../../redux/userRelated/userHandle';
import {useMutation} from "@tanstack/react-query";
import { authSuccess, currentUserDetails } from '../../../redux/userRelated/userSlice';

const Login = (props) => {

  const dispatch = useDispatch();

  const {loading, response, userDetails, loggedin} = useSelector(state => state.user);

  const initform = {
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""
  }
  const [signup, setSignup] = useState(false);
  const [form,setForm] = useState(initform)
  

  const handleFields=(e)=>{
    const field = e.target.id;
    setForm({...form, [field]:e.target.value})
  }

  const {mutate:fields} = useMutation({
    mutationFn:(signup)?userRegister:userLogin,
    onSuccess:(d)=>{
      console.log(d);
      dispatch(authSuccess(d.data.message))
      dispatch(currentUserDetails(d.data.user))
    },
    onError:(error)=>{
      console.log(error);
      // dispatch(authError(error.response.data.message))
    },
  })

  const login= (e)=>{
    e.preventDefault();
    fields({
      email:form.email,
      password:form.password
    })
  }

  const register=(e)=>{
    e.preventDefault();
    fields(form);
  }

  return (
    <>
      {
        (props.showPopup)?
        <div className='fixed popup-wrapper'>
          <div className='shadow-lg popup-container flex-col rounded justify-center items-center p-5 z-10 bg-white'>
            <button onClick={props.close} className='absolute top-3 right-4'><IoCloseSharp size={25}/></button>
            <h1 className='text-2xl text-center mb-5 font-bold'>{(signup)?"SIGNUP":"LOGIN"}</h1>
            <form onSubmit={(signup)?register:login}>
            {
              (signup)?
              <>
              <label htmlFor='name' >Name</label>
              <input className='input-field mb-4' onChange={handleFields} value={form.name} id='name' type='text' />
              </>
              :<></>
            }
            
            <label htmlFor='email' >Email</label>
            <input className='input-field mb-4' id='email' onChange={handleFields} value={form.email} type='email' />
            {
              (signup)?
              <>
              <label htmlFor='phone'>Phone Number</label>
              <input className='input-field mb-4' type='phone' onChange={handleFields} value={form.phone} id='phone'/>
              </>
              :<></>
            }
            <label htmlFor='password'>password</label>
            <input className={`input-field ${(signup)?"mb-4":""}`} onChange={handleFields} value={form.password} type='password' id='password'/>
            {
              (signup)?
              <>
              <label htmlFor='cpassword'>Confirm password</label>
              <input className='input-field mb-4' type='password' onChange={handleFields} value={form.cpassword} id='cpassword'/>
              </>
              :<></>
            }
            {(signup)?<></>:<a href='/' className='text-[13px] text-blue-500 hover:underline'>forgot password?</a>}              
            <button type='submit' className='px-3 py-1 bg-rose-600 h-[35px] rounded text-white w-full mt-4' >{(signup)?"SIGNUP":"LOGIN"}</button>
            </form>
            <hr className='my-5 border'/>
            <p onClick={(signup)?()=>{setSignup(false);setForm(initform)}:()=>{setSignup(true);setForm(initform)}} className='text-center'>{(signup)?"Already a Member?":"Not a Member?"} <span className='text-blue-600 hover:underline cursor-pointer'>{(signup)?"login":"Signup now"}</span></p>
          
          </div>
        </div>
        :<></>
      }

    </>
  )
}

export default Login;
