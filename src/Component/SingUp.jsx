import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase';

const SingUp = () => {

    const auth = getAuth()
    const navigate = useNavigate();

    const [fild, setfild] = useState(``)

    const [disibaleBtn, setdisibaleBtn] = useState(false)

    const [data, setdata] = useState({
        name: "",
        email: "",
        pass: "",
        conPass: ""
    })


    const handelSingUp = (e) => {
        e.preventDefault()

        const { name, email, pass, conPass } = data

        if (!name || !email || !pass || !conPass) {
            setfild(`Fill in all fields`)
            return;
        }

        else if (pass !== conPass) {
            setfild(`Password doesn't match`)
        }

        else {

            setfild(``)
            setdisibaleBtn(true)

            createUserWithEmailAndPassword(auth, email, pass)
                .then((res) => {

                    setdisibaleBtn(false)

                    const user = res.user

                    updateProfile(user, {
                        displayName: name,
                    })

                    const localId = res.user.reloadUserInfo.localId

                    set(ref(db, 'users/' + localId), {
                        username: name,
                        email: email,
                        password: pass
                    })

                    navigate(`/`)
                })
                .catch((error) => {
                    setdisibaleBtn(false)
                    setfild(error.message)
                });
        }

        setdata((prev) => ({ ...prev, name: '', email: '', pass: '', conPass: '' }))
    }


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
                    <div>
                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                            Create an Account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Join us today and start your journey
                        </p>
                    </div>

                    <form className="mt-8 space-y-4" action="#" onSubmit={handelSingUp} >
                        <input type="hidden" name="remember" value="true" />

                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="full-name" className="sr-only">Full Name</label>
                                <input value={data.name} onChange={(e) => setdata((prev) => ({ ...prev, name: e.target.value }))} id="full-name" name="name" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input value={data.email} onChange={(e) => setdata((prev) => ({ ...prev, email: e.target.value }))} id="email-address" name="email" type="email" autoComplete="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input value={data.pass} onChange={(e) => setdata((prev) => ({ ...prev, pass: e.target.value }))} id="password" name="password" type="password" autoComplete="new-password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>

                            <div>
                                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                                <input value={data.conPass} onChange={(e) => setdata((prev) => ({ ...prev, conPass: e.target.value }))} id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                            </div>

                            <h3 className="mt-4 text-sm font-medium text-red-600 pt-[1VH]">{fild}</h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="terms" required name="terms" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                    I agree to the Terms and Conditions
                                </label>
                            </div>
                        </div>

                        <div>
                            <button disabled={disibaleBtn} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="text-center">
                        <button className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to={`/loging`} className="font-medium text-teal-600 hover:text-teal-500">
                                Log in
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingUp