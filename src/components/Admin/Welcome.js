import React from 'react'
import "./Dashboard.css";
import Dashboard from './Dashboard';

export default function Welcome() {
  return (
    <>
    <Dashboard />
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <button type="button" class="btn btn-warning" id='start'>Get started</button>
        </div>
    </>
  )
}
