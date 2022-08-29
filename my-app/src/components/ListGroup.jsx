import React from 'react';

export default function ListGroup(props) {

    let arr = null;
    for(let p in props){
        arr = props[p];
    }

    console.log(arr)

    return (
        <ul class="list-group">
            {arr.map((todo) => (
                <li class="list-group-item">{todo}</li>
            ))}
        </ul>
    );
}
