import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


const Account = () => {

    const auth = getAuth();

    const navigate = useNavigate();

    const [name, setname] = useState(`Sing up`)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);

            setname(user.displayName)
        }
    });


    const logOut = async () => {
        await auth.signOut().then(console.log("signed out."));
        localStorage.clear(auth);
        navigate('/loging')
    }

    return (
        <>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">Awesome Todo List</h1>
            </header>

            <div className="flex justify-end space-x-4 mb-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    <Link to={name == `Sing up` ? `/singUp` : ""}> {name}</Link>
                </button>


                {
                    name == `Sing up`
                        ?
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                            <Link to={`/loging`}>Login</Link>
                        </button>
                        :
                        <button onClick={logOut} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                            Log Out
                        </button>
                }



            </div>
        </>
    )
}

export default Account