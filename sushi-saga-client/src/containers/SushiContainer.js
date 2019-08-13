import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  const {sushis, sliceValue, nextSushi, eatSushi} = props
  const sushisList = () => {
    return sushis.slice(sliceValue[0], sliceValue[1]).map(sushi => {
      return <Sushi sushi={sushi} eatSushi={eatSushi}/>
    })
  }
  return (
    <Fragment>
      <div className="belt">
        {
          sushisList()
        }
        <MoreButton nextSushi={nextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer