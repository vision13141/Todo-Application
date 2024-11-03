import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchTod } from '../redux/TodoSlice'

const Search = () => {

    const dispatch = useDispatch()

    let searchTrm = useSelector((state) => state.TodoArr.searchTrm)

    return (
        <div className="mb-6">
            <div className="flex gap-2 relative">
                <input
                    type="text"
                    onChange={(e) => dispatch(searchTod(e.target.value))}
                    value={searchTrm}
                    placeholder="Search todos..."
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg
                        className={`w-5 h-5 text-gray-400 ${searchTrm ? 'animate-pulse' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Search