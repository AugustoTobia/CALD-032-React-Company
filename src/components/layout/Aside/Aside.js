import React, { Component } from 'react';
import './aside.css';

export class Aside extends Component {
    render() {
        return (
            <aside>
                <div>
                    <h2 className="caldar">CaldAR</h2>
                </div>
                <div className="asideList">
                    <ul>
                        <li>
                            <a href=".">Buildings</a>
                        </li>
                        <li>
                            <a href=".">Boilers</a>
                        </li>
                        <li>
                            <a href=".">Technicians</a>
                        </li>
                        <li>
                            <a href=".">Reports</a>
                        </li>
                        <li>
                            <a href=".">Settings</a>
                        </li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default Aside
