// import React from 'react'
import { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import s from './Clicker.module.css';

class Clicker extends Component {
  static defaultProps = { value: 0 };
  // class Clicker extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { value: props.value };
  //     this.add = this.add.bind(this);
  //   }

  state = {
    value: this.props.value,
    id: '123',
    name: 'ha',
  };

  increase = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  decrease = () => {
    //     this.setState({...this.state, value: 4 });
    //     this.setState({ value: 4 });
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { increase, state } = this;
    const content = state['value'];
    //     console.log('this.props', this.props);
    //     console.log('re-render>>>>>>>>>');
    return (
      <div className='container'>
        <div className={`container ${s.clicker}`}>
          <p className={s.content}>{content}</p>
          <div className={s.buttonBox}>
            <div
              onClick={content ? this.decrease : null}
              style={{ opacity: content ? 1 : 0.4 }}>
              DECREASE
              <IconButton aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            </div>
            <div onClick={increase}>
              INCREASE
              <IconButton
                color='primary'
                aria-label='add to shopping cart'>
                <AddShoppingCartIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Clicker.defaultProps = { value: 1 };

export default Clicker;
