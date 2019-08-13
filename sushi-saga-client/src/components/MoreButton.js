import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.showMoreSushis()}>
            More sushi!
          </button>
}

export default MoreButton