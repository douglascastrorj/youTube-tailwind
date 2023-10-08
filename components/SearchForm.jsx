import useEnter from "@/hooks/useEnter";
import { useState } from "react";
import { MdMenu, MdSearch, MdNotifications } from 'react-icons/md';



const SearchForm = ({
    handleSubmit
}) => {
    const [search, setSearch] = useState('');

    useEnter(() => {
        handleSubmit(search);
    });

    const onSearchClick = (e) => { 
        e.preventDefault();
        handleSubmit(search);
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <form>
            <label className="flex flex-row relative items-center">
                <MdSearch onClick={onSearchClick} fontSize={24} className="text-gray-300 absolute left-3" />
                <input onChange={onSearchChange} className="px-12 py-1 rounded-full bg-slate-950 text-gray-200 border-gray-300 border outline-none text-sm" type="text" placeholder="Pesquisar" />
            </label>
        </form>
    )
}

export default SearchForm;