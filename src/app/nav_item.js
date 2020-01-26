import React from "react";


class Nav_Item extends React.Component {
    render() {
        var SubItemsList = null;
        if(this.props.sub_items){
            SubItemsList = this.props.sub_items.map((items,i)=>{return (
                <li key={i} onClick={items.onClick}>
                    <a href='#'>
                        {items.name}
                    </a>
                </li>
            )});
        }
        
        return(
            <li onClick={this.props.onClick}>
                <a href="#">{this.props.name}</a>
                <ul>
                    {SubItemsList}
                </ul>
            </li>  
        )
    }
}


module.exports = Nav_Item;