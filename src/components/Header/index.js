import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
function Header() {
    return (
        <div>
            <h1>Google</h1>
            <div className="relative">
                <input type='search' className=" rounded-xl py-3 px-4"/>
                <div className=" absolute left-2 top-2"><AiOutlineSearch /></div>
            </div>
            <div className=" text-center space-x-4">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <div className="text-center flex">
                <p>Google offered in:  </p>
                <ul className=" flex space-x-3">
                    <li>हिन्दी</li>
                    <li>বাংলা</li>
                    <li>తెలుగు</li>
                    <li>मराठी</li>
                    <li>தமிழ்</li>
                    <li>ગુજરાતી</li>
                    <li>ಕನ್ನಡ</li>
                    <li>മലയാളം</li>
                    <li>ਪੰਜਾਬੀ</li>
                </ul>
            </div>
        </div>
    )
}

export default Header