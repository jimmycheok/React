import React from 'react'
import './index.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { faInbox, faBed,  faUserCog, faLifeRing, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideMenu = ({
}) => {
  return (
    <div className="col-md-3 margin-top-5 min-h-45">
      <div className="style-purple">
        <p className="style-purple-text font-openSans-16 margin-10">JD</p>
      </div>
      <div className="item-margin">
        <p className="margin-0 font-openSans">John Doe</p>
        <p className="margin-0 font-grey font-avenirNext">Premium Nomad</p>
      </div>
      <div className="item-margin">
        <div className="selected-item">
          <p className="margin-0 width-100 font-openSans"><FontAwesomeIcon className="margin-icon" icon={faInbox}/>Bookings</p>
        </div>
        <p className="margin-left-5 width-100 font-openSans font-grey"><FontAwesomeIcon className="margin-icon" icon={faBed}/>Refer and
            Earn</p>
        <p className="margin-left-5 width-100 font-openSans font-grey"><FontAwesomeIcon className="margin-icon" icon={faUserCog}/>Account Settings</p>
      </div>
      <div className="item-margin">
        <p className="font-openSans font-grey">Support</p>
        <p className="margin-left-5 width-100 font-openSans font-grey"><FontAwesomeIcon className="margin-icon" icon={faLifeRing}/>Contact
            Us</p>
        <p className="margin-left-5 width-100 font-openSans font-grey"><FontAwesomeIcon className="margin-icon" icon={faExternalLinkAlt}/>FAQ
          </p>
      </div>
      <div className="d-flex div-bottom">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span></label>
        <p className="font-openSans font-grey">Sign out</p>
      </div>
    </div>
  )
}

export default SideMenu