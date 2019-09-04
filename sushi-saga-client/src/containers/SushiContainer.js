import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => props.eatenSushi.includes(sushi) ? <Sushi sushi={{...sushi, sushiEaten: true}} eatSushi={props.eatSushi}/> : <Sushi sushi={sushi} eatSushi={props.eatSushi}/>)
          
        }
        <MoreButton handleClick={props.handleClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer