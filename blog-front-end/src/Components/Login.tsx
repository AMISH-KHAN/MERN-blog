import { FormEvent, useState } from "react"
import { ChangeEventHandler } from 'react'
import { Link } from "react-router-dom"
import { userObject } from "../types/types"
import { useDispatch } from "react-redux"
import { findUser, getUser } from "../Store/ActionCreators/UserActionCreator"

export default function Login() {
   
    const userInitalState = {
        email: "",
        password:""
    }

    const dispatch = useDispatch()
    
    let [user, setUser] = useState<userObject>(userInitalState)
    
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let name:string=e.target.name
        let value:string=e.target.value
        setUser((old) => {
            return {
                ...old,
                [name]:value
            }
        })

    }
     

    const formChange:( e:FormEvent<HTMLFormElement>)=>void = (e) => {
        e.preventDefault()
        dispatch(findUser(user))
    }

  return (
    <>
          {/* login */}
          <div>
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto lg:w-[40%]">
		<div
			className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="w-full mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Welcome Back</h1>
				</div>
				<div className="divide-y divide-gray-200">
                        <form onSubmit={formChange} >
                                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autoComplete="off" onChange={handleChange} id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
							<label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input autoComplete="off" onChange={handleChange} id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                          </div>
                                          
						<div className="relative">
							<button className=" bg-gray-700 hover:bg-gray-900 focus:bg-gray-900 text-white rounded-md px-2 py-1">Submit</button>
						</div>
                                      <h1>Dont have an account <Link to={"/signup"} className=" text-blue-600 underline">Signup</Link></h1>
                                      </div>
                                      </form>
				</div>
			</div>
		</div>
	</div>
</div>
          </div>
    </>
  )
}
