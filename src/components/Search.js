import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'

const Search = ({ hideButtons = false }) => {
    const [{}, dispatch] = useStateValue()
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    const handleSearch = e => {
        e.preventDefault();
        
        console.log('hello world')
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: search
        })
        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input onChange={(e) => setSearch(e.target.value)} value={search} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={handleSearch} variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={handleSearch} variant='outlined'>Google Search</Button>
                    <Button className="search__buttonsHidden" variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}

export default Search
