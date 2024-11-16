import { useState } from "react"
import { BiSearch } from "react-icons/bi"

export function SearchBar() {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }
    return (
        <div className="bg-gray-100 h-10 rounded-lg flex items-center gap-2 px-3 w-96">
            <BiSearch className="h-6 w-6 fill-gray-400" />
            <input type="text" placeholder="Search" value={inputValue} onChange={handleInputChange} className="bg-gray-100 h-full w-full focus:outline-none placeholder:text-gray-400" />
        </div>
    )
}