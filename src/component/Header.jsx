import React from 'react'

function Header({onInputChange, expanded}) {
    return (
        <div className="header">
            {/* <h1 className="head-title">Name It!</h1> */}
            <img src="https://millennium-city.at/wp-content/uploads/2019/04/nameit_cmyk-2.jpg" className={`banner ${expanded ? ' banner-expanded':' banner-contracted'}`}/>

            <input type="text" className="search-box" onChange={(e) =>onInputChange(e.target.value)} placeholder="Type Keyboard" />
        </div>
    )
}
export default Header;