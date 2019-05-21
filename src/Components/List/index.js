import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generalActions } from './../../Actions/GeneralActions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='container'>
        
        {
          this.props.error_getting_data &&
            <div className='row'>
            <div className='col-md-12'>
              <div className="alert alert-danger" role="alert">
                An error has occurred retrieving the data...
              </div>
            </div>
          </div>
        }
        
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Position</th>
              <th scope="col">Team</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list_players.map((elem, index) => (
              <tr key={index}>
                <th>{elem.name}</th>
                <td>{elem.position}</td>
                <td>{elem.nationality}</td>
                <td>{elem.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    list_players: state.generalReducer.list_players,
    error_getting_data: state.generalReducer.error_getting_data,
  }
};

export default connect(mapStateToProps, generalActions)(List);

