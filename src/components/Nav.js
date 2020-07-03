import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/" exact >Return</Link>
            </ul>
        </div>
    )
}