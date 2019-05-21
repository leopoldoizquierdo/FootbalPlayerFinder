import React, { Component } from 'react';
import SearcherForm from './SearcherForm';
import { connect } from 'react-redux';
import { generalActions } from './../../Actions/GeneralActions';
import { displayButtonLoaderSelector } from './../../Store/Selectors';

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{minHeight: '120px'}}>
        <SearcherForm 
        display_button_loader={this.props.display_button_loader}
        listActionFilterPlayers={this.props.listActionFilterPlayers}/>
      </div>
    );
  }
}




/*
const mapStateToProps = (state) => {
  return {
    display_button_loader: state.generalReducer.display_button_loader
  }
};
*/


const mapStateToProps = (state) => {
  return {
    display_button_loader: displayButtonLoaderSelector(state)
  }
}

export default connect(mapStateToProps, generalActions)(Searcher);

