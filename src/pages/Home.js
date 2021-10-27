import React from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Home.css'
import Search from '../components/Search'

const Home = () => {
    return (
        <div className="homepage">
            <div className="homepage__header">
                <div className="header__left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="header__right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="homepage__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                <div className="homepage__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home

