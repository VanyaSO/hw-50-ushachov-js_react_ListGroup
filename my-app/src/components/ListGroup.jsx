import React from 'react';

export const ListGroup = ({children}) => {

    return (
        <ul className="list-group">
            {children.map((item) => (
                <li className="list-group-item">{item}</li>
            ))}
        </ul>
    );
}

export default ListGroup;
