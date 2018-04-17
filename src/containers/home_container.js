import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { artistListAll, artistList } from '../actions';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';
import Artist from '../components/artist';

class HomeContainer extends Component { 


    componentWillMount() {
        this.props.artistListAll();
      
    }


    getKeywords = (event) => {
        let key = event.target.value;
        
        if(key.length >= 3){
        this.props.artistList(key);
        } else 
        if ( key.length === 0 ){
            this.props.artistList(key);
        }
       
    }

    render(){
        console.log('props', this.props)
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistList}/>  
            </div>
        )
    }

}


 function mapStateToProps(state){
    // console.log('artists', state);
     return{
         artists: state.artists
     }
 }

 function mapDispatchToProps(dispatch){
     return bindActionCreators({ artistListAll, artistList }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);