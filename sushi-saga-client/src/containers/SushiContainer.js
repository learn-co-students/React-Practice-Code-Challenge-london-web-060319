import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushisToRender: [0,1,2,3]
  }

  getSushisToRender = () => this.state.sushisToRender.map(index => this.props.sushis[index])

  nextPageOfSushis = () => this.setState({
    sushisToRender: this.state.sushisToRender.map(
      index => 
      index + 4 >= this.props.sushis.length ?
       (index + 4) - this.props.sushis.length :
       index + 4 
      )
  })

  render = () => {
    const {eatSushi} = this.props
    const sushis = this.getSushisToRender()
    console.log(sushis)

    return (
      <Fragment>
        <div className="belt">
          {
            sushis.map((sushi) => <Sushi {...sushi} handleClick={() => eatSushi(sushi)} />)
          }
          <MoreButton handleClick={this.nextPageOfSushis}/>
        </div>
      </Fragment>
    ) 
  }
}

export default SushiContainer;