import React,{ useState, useEffect }  from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
import { BiCamera } from 'react-icons/bi';
import axios from 'axios';
import Switcher from '../../Switcher';

function Home() {
    const [getData, setgetData] = useState([]);
    const [del, setDel] = useState(false);

    const searchKey=(event) =>{
        console.log(event.target.value);
        let searchText= event.target.value;
        const textForStorage = searchText;
        let key ='AIzaSyCJoiHUtazFb4KJ7DgaspZ2aB1QJWeK8F0';
        let cx = 'f55fd644f08554fde';
        setDel(true)
        if (event.key === 'Enter') {
            console.log('do validate')
        }
        // setter
        sessionStorage.setItem('my-key', JSON.stringify(textForStorage));
        console.log('set', textForStorage);
        if (searchText == ' ' || searchText == null) {
            setDel(false)
            console.log('null data', searchText);
        }else{            
            axios({  
                // Endpoint to send files                
                method: 'GET',
                url: `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchText}`,
                // params: {
                //     query: `${searchText}`,
                //     limit: '10',
                //     related_keywords: 'true'
                // },
                headers: {
                    
                    // Add any auth token here
                    //   authorization: "your token comes here",
                // Accept: 'application/json',
                // 'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
                // 'Access-Control-Allow-Methods': getData,
                // 'Access-Control-Allow-Headers': Content-Type
                // AIzaSyCJoiHUtazFb4KJ7DgaspZ2aB1QJWeK8F0
                },
            
                // Attaching the form data
                // data: formData,
              })
            
                // Handle the response from backend here
                .then((res) => {
                    setgetData(res.data.items);
                    console.log('res', res);
                    console.log('res2', res.data.items);
                    const textFromStorage = JSON.parse(sessionStorage.getItem(...'my-key'));
                    console.log('null',textFromStorage);
                 })
            
                // Catch errors if any
                .catch((err) => { });
        }
        // console.log('set',sessionStorage.setItem("searchTextPrev", pageView));
    }
    const hideResult = (event) =>{
        setDel(false)
    }
    return (
        <div className="flex items-center justify-center flex-col -top-1/2 relative h-screen">         
                   
                   <Switcher />
            <h1 className=" text-8xl font-semibold"><span className="text-[#4285f4]">G</span><span className="text-[#ea4335]">o</span><span className="text-[#fbbc05]">o</span><span className="text-[#4285f4]">g</span><span className="text-[#34a853]">l</span><span className="text-[#ea4335]">e</span></h1>
            <div className="relative mb-5 mt-12 border border-[#dfe1e5] rounded-2xl py-3 pl-6 pr-6 hover:shadow-xl hover:border-slate-200 group/item">
                <div className="flex items-center ">
                    <div className=""><AiOutlineSearch className="text-[#777]"/></div>
                    <input type='search' className="dark:text-white text-black bg-transparent min-w-[500px] align-middle mx-3 border-0 outline-none" onKeyPress={searchKey} onBlur={hideResult}/>
                    <div className="flex items-center space-x-2">
                        <MdKeyboardVoice className="text-[#777]"/>
                        <BiCamera className="text-[#777]"/>
                    </div>
                </div>
                <div className={del ? 'block mt-2 pt-2 border-t' : 'hidden'}>                
                    <ul className=" max-h-40 overflow-y-auto">
                        {getData && getData.map((item) => (                      
                        <li className="flex justify-between items-center py-2" id={item.key}>
                            <div className="flex items-center">
                                <div>
                                    <img />
                                    <AiOutlineSearch/>
                                </div>
                                <p className="pl-2 dark:text-white">{item.title} </p> 
                            </div>
                            <div className="`${del}` ? 'block' : 'none' ">
                                <a href=''>Delete</a>
                            </div>
                        </li>
                        
                        ))}
                    </ul>
                    
                    <div className=" text-center space-x-4 mb-2 pt-4">
                        <button className="hover:border hover:border-gray-300 py-2 px-4 rounded-md border border-transparent">Google Search</button>
                        <button className="hover:border hover:border-gray-300 py-2 px-4 rounded-md border border-transparent">I'm Feeling Lucky</button>
                    </div>
                </div>
            </div>
            <div className="dark:text-white text-black text-center space-x-4 mb-4">
                <button className="hover:border hover:border-gray-300 py-2 px-4 rounded-md border border-transparent">Google Search</button>
                <button className="hover:border hover:border-gray-300 py-2 px-4 rounded-md border border-transparent">I'm Feeling Lucky</button>
            </div>
            
            <div className="flex justify-center">
                <p className="pr-4 dark:text-white">Google offered in:  </p>
                <ul className=" flex space-x-3">
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">हिन्दी</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">বাংলা</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">తెలుగు</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">मराठी</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">தமிழ்</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">ગુજરાતી</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">ಕನ್ನಡ</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">മലയാളം</a></li>
                    <li><a href="" className="dark:text-white text-[#1a0dab] hover:underline">ਪੰਜਾਬੀ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home