import React, { Component } from 'react'

export class item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.grade}</p>
        <p>{this.props.item.collection}</p>
        <p>{this.props.item.rare}</p>
        <h4>{this.props.item.price}</h4>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default item