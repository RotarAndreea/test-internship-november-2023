import React, { useState } from 'react'
import './home.css'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

const Home = () => {
    const [searchedWord,setSearchedWord]=useState('');
    const [getTime, setGetTime]=useState('');
    const [displayedData,setDisplayedData]=useState([]);
    const [allData,setAllData]=useState({
        data:{},
        date:''
    })
    const [toggleModal, setToggleModal]=useState(false);
    const [toggleDeleteModal, setToggleDeleteModal]=useState(false);

    const card=
        <div className='card-container'> 
            <button onClick={()=>console.log((new Date()).getMinutes())}>data</button>
        </div>
    

    const searchInputWord=async(event)=>{
        event.preventDefault();
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
        try {
            const response = await fetch(url);
            var result = await response.json();
            setGetTime(new Date());
            console.log(result)
            console.log(getTime)
        }catch (error) {
            console.error(error);
        }
        const updatedTable=[...displayedData, result];
       
        setDisplayedData(updatedTable)
        console.log(displayedData)
    }


    const tableData=displayedData.map((data,index)=>{
        return (
            <div className='table-content'
                 key={index}
            >
                <p className='word-container'>{data[0].word}</p>
                <p className='date-container'>data</p>
                <div className='actions-container'>
                    <button onClick={()=>setToggleModal(true)}>View </button>
                    <button onClick={()=>setToggleDeleteModal(true)}>Delete</button>
                </div>
                {
                    toggleModal && 
                        <div className='modal-container'>
                            <div className='closeButton-container'>
                                <button  className='close-button'
                                        onClick={()=>setToggleModal(false)}
        
                                >X</button>
                            </div>
                            <div className='modal-text'>
                                {JSON.stringify(data)}
        
                            </div>
                        </div>
                    
                }
          
            </div>
        )
    })


    return (
    <div className='principal-layout'>
        {toggleDeleteModal &&
        <div className='delete-modal'>
        <div>
            Are you sure you want to delete this session?
        </div>
        <div className='choice-buttons'>
            <div>yes</div>
            <div onClick={()=>setToggleDeleteModal(false)}>no</div>
        </div>
    </div>
        }
        
        <NavBar/>
            <div className='form-container'>
                <form className='form'
                      onSubmit={(e)=>searchInputWord(e)}
                >
                    <input  type='text'
                            name='searchedWord'
                            value={searchedWord}
                            onChange={(e)=>setSearchedWord(e.target.value)}
                            required
                    />
                    <button type='submit'>Search Word</button>
                </form>
            </div>
            <div className='table-container'>
                <p>Word</p>
                <p>Datetime</p>
                <p>Actions</p>
            </div>
            <div>
                {displayedData && tableData}
            </div>
           
        <Footer/>
    </div>
  )
}

export default Home