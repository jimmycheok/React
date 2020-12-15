import React from 'react'
import logo from './nomadrental.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const topBar = ({

}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-xs-9 col-md-6  align-items-center justify-content-start">
        <img className="width-143 opacity-50" src={logo} />
      </div>
      <div className="col-xs-9 col-md-6 d-flex align-items-center justify-content-end">
        <p className="font-openSans font-grey">Choose a city</p>
        <button className="font-grey"><FontAwesomeIcon className="margin-icon" icon={faBars}/></button>
      </div>
    </div>
  )
}

export default topBar