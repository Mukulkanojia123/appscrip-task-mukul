import React, { useState, useEffect } from 'react'
import FilterBar from './FilterBar'
import MainContainer from './MainContainer'
import SideBar from './SideBar'

const Body = () => {



    return (
        <div className='body'>
            <FilterBar />
            <div className='sidebarandconatainer'>
                <SideBar />
                <MainContainer />
            </div>

        </div>
    )
}

export default Body