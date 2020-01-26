import React from "react";
import './css/nav.css';
import Nav_Item from './nav_item'

class Nav_Bar extends React.Component {
    render() {
        var subList = [
            {name:'Save', onClick:()=>{
                console.log('Hurro!');
            }},
            {name:'Save As..'},
            {name:'Close'}
        ];
        return(
            <div id='nav_bar'>
                <ul>
                    <li className='banner-ov'>
						<div id='banner'>Math JS</div>
					</li>
                    <Nav_Item name='File' sub_items={subList} />
                    <Nav_Item name='Edit' onClick={function(){console.log('hi')}} />
                    
                    <Nav_Item name='Run' />
                </ul>
            </div>
        )
    }
}


module.exports = Nav_Bar;