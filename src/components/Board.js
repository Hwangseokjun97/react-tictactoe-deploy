// import React, { useState } from 'react'
import Square from './Square'
import './Board.css'


const Board = ({squares, onClick}) => {

  const renderSqare = (i) => {
    return <Square value={squares[i]}
      onClick={() => onClick(i)} />
  }

  return (
    <div className='board-wrapper'>
      <div className='board-row'>
        {renderSqare(0)}
        {renderSqare(1)}
        {renderSqare(2)}
      </div>
      <div className='board-row'>
        {renderSqare(3)}
        {renderSqare(4)}
        {renderSqare(5)}
      </div>
      <div className='board-row'>
        {renderSqare(6)}
        {renderSqare(7)}
        {renderSqare(8)}
      </div>
    </div>
  )
}

export default Board;