import React from 'react';

export const ListGroup = ({children}) => {

    return (
        <ul className="list-group">
            {children.map((todo) => (
                <li className="list-group-item">{todo}</li>
            ))}
        </ul>
    );
}

export default ListGroup;
