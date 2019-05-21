import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {


  constructor(props) {
    super(props);
    this.state = {
      classActive: ''
    };
  }



  render() {

    return (
      <div className="container">
        <br/>
        <div className='row'>
          <div className='col-md-6'>
            <h4>
              Footbal Player Finder
            </h4>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    
  }
};

export default connect(mapStateToProps, null)(Header);

