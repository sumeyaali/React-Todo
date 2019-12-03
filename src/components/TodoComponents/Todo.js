import React from "react"

const Item = props => {
    return (
        <div>
        <p key={props.item.id} onClick= {event => {
            props.toggleComplete(props.item.id)
        }}>
            {props.item.task}
        </p>
        </div>
   );
};
    
export default Item;

