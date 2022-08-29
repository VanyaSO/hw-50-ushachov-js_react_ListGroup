import React from 'react';

export default function ListGroup(props) {

    let arr = null;
    for(let p in props){
        arr = props[p];
    }

    console.log(arr)

    return (
        <ul className="list-group">
            {arr.map((todo) => (
                <li className="list-group-item">{todo}</li>
            ))}
        </ul>
    );
}
