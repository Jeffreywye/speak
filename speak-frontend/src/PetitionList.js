import React, { Component } from 'react';
import PetitionListElement from './PetitionListElement';
import { Accordion } from 'react-bootstrap';

class PetitionList extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          petitions: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);

  }
  
  componentDidMount() {
      fetch('/Petitions')
/*      .then( function(response) {
          window.alert(JSON.stringify(response));
      });*/
      .then( response => response.json())
      .then( petitions => 
          this.setState(
              {petitions}
          )
       );
  }
  
  render() {
    return (
      <div className="PetitionList">
        <h2>Petitions</h2>
        <Accordion>
          {this.state.petitions.map(petition =>
            <div key={petition.id}>
                <Accordion>
                <PetitionListElement title={petition.title} description={petition.description}/>
                </Accordion>
            </div>)}
        </Accordion>
      </div>
    );
  }
}

export default PetitionList;
