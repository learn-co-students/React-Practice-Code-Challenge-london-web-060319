import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi} money={props.money}/>)
          
        }
        <MoreButton showMoreSushis={props.showMoreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer