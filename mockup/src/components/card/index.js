import React from 'react'
import './index.scss'

import picture from './sample.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faArrowRight, faCheckCircle, faClock, faCalendarCheck, faReceipt, faStar, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({

}) => {
  return (
    <div className="col-md-9 width-640 text-left">
      <p className="font-openSans40">Bookings</p>
      <p className="font-openSans18">Your current upcoming stays</p>
      <p className="font-openSans-regular font-grey width-499"><FontAwesomeIcon icon={faArrowRight} />Please update with the properity if your travel plans
      should change or if you wishto make any changes to
      your stay.</p>
      <div className="right-item-margin">
        <a className="font-openSans-14 align-item" href="https://www.google.com/" target="_blank">Learn more about our premium subscription.</a>
      </div>
      <div className="d-row d-flex border">
        <div className="fit">
          <img className="width-280 height-403 center img-cover" src={picture} />
        </div>
        <div className="width-100 background-white">
          <div className="margin-10">
            <p className="font-openSans18-semi">The Green View</p>
            <p className="font-openSans-regular font-grey"><FontAwesomeIcon className="margin-icon" icon={faCheckCircle} />Booking
            request received</p>
            <p className="font-openSans-regular font-purple"><FontAwesomeIcon className="margin-icon" icon={faClock} />Awaiting
            confirmation from Hotel</p>
          </div>
          <hr />
          <div className="margin-10">
            <p className="font-openSans18-semi">Superior Premium</p>
            <div className="row flex font-openSans14">
              <div className="col-md-6 flex">
                <i className='far fa-calendar-check  margin-05 font-grey'></i>
                <FontAwesomeIcon className="margin-icon" icon={["far", "calendar-check"]} />
                <div className="d-flex">
                  <FontAwesomeIcon className="font-grey font-openSans-regular margin-icon" icon={faCalendarCheck} />
                  <div>
                    <p className="font-grey font-openSans-regular">Check-in:</p>
                    <p className="font-openSans">July 9th, 2018</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 flex">
                <i className="fal fa-receipt margin-05 font-grey"></i>
                <div className="d-flex">
                  <FontAwesomeIcon className="font-grey font-openSans-regular margin-icon" icon={faReceipt} />
                  <div>
                    <p className="font-grey font-openSans-regular">Reference</p>
                    <p className="font-openSans">#UC311K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="height-118 background-grey">
            <div className="height-50 align-item">
              <label className="font-green width-100 font-openSans margin-left-10"><FontAwesomeIcon className="margin-icon" icon={faStar} />Rate your stay</label>
            </div>
            <div className="height-50 align-item">
              <label className="font-grey width-100 font-openSans margin-left-10"><FontAwesomeIcon className="margin-icon" icon={faPaperPlane} />Email the property</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card