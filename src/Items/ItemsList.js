import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  adminUsrname, itemsData
} from './ItemsSlice'

export const ItemsList = () => {

  //const admin = useSelector(adminUsrname)
  const items = useSelector(state => state.items.itemsData)

  const content = items.map(item => (
      <div key={item.title} className='col-md-4'>
        <div className='card mb-4 shadow-sm'>
          <img src={item.imageLink} width='100%' height='100%' />
          <div className='card-body'>
            <h3> {item.title} </h3>
            <p className='card-text'>{item.desc}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <button type='button' className='btn btn-sm btn-danger'>{item.hardness}</button>
                <button type='button' className='btn btn-sm btn-success'>{item.distance} km</button>
                <button type='button' className='btn btn-warning btn-sm'>
                  <a href={item.mapLink} target="_blank">Show On Map</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  ))

  return (
    <div className='row'>
      {content}
    </div>
  )
}
