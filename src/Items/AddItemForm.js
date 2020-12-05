import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { unwrapResult } from '@reduxjs/toolkit'

import { itemAdded, hardness, AdminCode } from './ItemsSlice'

export const AddItemForm = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [hardness, setHardness] = useState('')
  const [dist, setDistance] = useState('')
  const [imglnk, setImgLnk] = useState('')
  const [maplnk, setMapLnk] = useState('')
  const [admincode, setAdminCode] = useState('')

  const hardnessOpts = useSelector(state => state.items.hardness)
  const adncode = useSelector(state => state.items.AdminCode)

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onDescChanged = (e) => setDesc(e.target.value)
  const onHardnessChanged = (e) => setHardness(e.target.value)
  const onDistChanged = (e) => setDistance(e.target.value)
  const onImgLnkChanged = (e) => setImgLnk(e.target.value)
  const onMapLnkChanged = (e) => setMapLnk(e.target.value)
  const onAdminCodeChanged = (e) => setAdminCode(e.target.value)

  const canSave = [title, desc, hardness, dist, imglnk, maplnk].every(Boolean)

  const onSaveItemClicked = () => {
    if (canSave && admincode == adncode) {
      dispatch(itemAdded({ title, desc, hardness, dist, imglnk, maplnk }))
      setTitle('')
      setDesc('')
      setHardness('')
      setDistance('')
      setImgLnk('')
      setMapLnk('')
    }
  }

  const hardnessOptions = hardnessOpts.map((item) => (
    <option key={item.title} value={item.title}>
      {item.title}
    </option>
  ))


  return (
    <section>
      <h3 className="mb-3" className="text-white">Track Information</h3>
      <form className="needs-validation" novalidate>
        <label htmlFor="trackTitle" className="text-white">Track Title:</label>
        <input
          type="text"
          id="trackTitle"
          className="form-control"
          name="trackTitle"
          placeholder="From-To Places"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="desc" className="text-white">Description:</label>
        <textarea
          type="text"
          id="desc"
          className="form-control"
          name="Description"
          placeholder="Add Description"
          value={desc}
          onChange={onDescChanged}
        />
        <label htmlFor="hardness" className="text-white">Hardness:</label>
        <select
          id="hardness"
          className="custom-select d-block w-100"
          value={hardness}
          onChange={onHardnessChanged}>
          <option value=""></option>
          {hardnessOptions}
        </select>
        <label htmlFor="distance" className="text-white">Distance:</label>
        <input
          type="text"
          id="distance"
          className="form-control"
          name="Distance"
          placeholder="Distance in km"
          value={dist}
          onChange={onDistChanged}
        />
        <label htmlFor="imglnk" className="text-white">Image Link:</label>
        <input
          id="imglnk"
          className="form-control"
          name="imglnk"
          value={imglnk}
          onChange={onImgLnkChanged}
        />
        <label htmlFor="maplnk" className="text-white">Map Link:</label>
        <input
          id="maplnk"
          className="form-control"
          name="maplnk"
          value={maplnk}
          onChange={onMapLnkChanged}
        />
        <label htmlFor="admincode" className="text-white">AdminCode:</label>
        <input
          id="admincode"
          className="form-control"
          name="admincode"
          value={admincode}
          onChange={onAdminCodeChanged}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={onSaveItemClicked}
          disabled={!canSave}>
          Save Item
        </button>
      </form>
    </section>
  )
}
