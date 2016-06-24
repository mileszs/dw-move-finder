import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

export default class MoveFinder extends Component {
  render() {
    let items = []
    let itemsHTML = ''
    if (_.isArray(this.props.moves)) {
      items = this.props.moves.map((text) => {
        return <MoveItem move={text} yourMove={this.props.yourMove} key={text} />
      })
      itemsHTML = <MovesList items={items} key='moveslist'/>
    } else {
      items = _.keys(this.props.moves).map((text) => {
        return <CategoryLink key={text} choose={this.props.actions.chooseMove} text={text} />
      })
      itemsHTML = <CategoryList items={items} />
    }

    return (
      <div className='row'>
        <div className='col-md-12'>
          <p>Based on the series of articles at RPG Alchemy, Hard Moves & GM Intrusions, here is a tool to help you quickly find a hard move in the heat of the moment for your game.</p>

          <p>How does it work?</p>

          <p>Simply ask yourself 'What best describes the current situation?' Click the button with the answer. Do that again until you're presented with a hard move to use.</p>

          <p>A list of possible moves for your situation is included, in case the bolded one plucked from that list for you isn't to your liking.</p>
        </div>
        <div className='col-md-6'>
          {itemsHTML}
        </div>
        <YourMove move={this.props.yourMove} key='yourmove' />
      </div>
    );
  }
}

class CategoryList extends Component {
  render() {
    return (
      <div className='list-group'>
        {this.props.items}
      </div>
    )
  }
}

class CategoryLink extends Component {
  render() {
    return (
      <a className='list-group-item' key={this.props.text} onClick={_.partial(this.props.choose, this.props.text)} href='#'>{this.props.text}</a>
    )
  }
}

class YourMove extends Component {
  render() {
    if (_.isEmpty(this.props.move)) {
      return <div />
    } else {
      return (
        <div className='col-md-6'>
          <div className="card-panel brown white-text">
            <span className="card-title">Your Move</span>
            <p>{this.props.move}</p>
          </div>
        </div>
      )
    }
  }
}

class MovesList extends Component {
  render() {
    return (
      <ul className='list-group'>
        {this.props.items}
      </ul>
    )
  }
}

class MoveItem extends Component {
  classnames() {
    return classNames(
      'list-group-item',
      { 'active': this.props.move === this.props.yourMove }
    )
  }

  render() {
    return (
      <li className={this.classnames()}>{this.props.move}</li>
    )
  }
}
