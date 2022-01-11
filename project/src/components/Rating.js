import React from 'react'
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Rating = ({value,text,color}) => {
    const rating=[1,2,3,4,5]
    return (
        <span style={{color:color}}>
            {rating.map((rate)=>
                value >= rate ? (
          <FontAwesomeIcon key={rate} icon={faStar} />
        ) : value >= rate - 0.5 ? (
          <FontAwesomeIcon key={rate} icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon key={rate} icon={farStar} />
        )
            )}
            &nbsp;{text&&text}
        </span>
    )
}

export default Rating
