import React,{Component} from 'react';
import {connect} from 'react-redux';
import {searchBeer,cancelSearchBeer} from '../actions';

class INPUT extends Component {
    onChange = (e) => {
      this.props.searchBeer(e.target.value);
    }
    renderWait = () => {
      if(!this.props.loadingState){
        return ''
      }
      else{
        return 'Wait'
      }
    }
    cancelClick = () => {
      this.props.cancelSearchBeer();
    }
    renderError = () => {
      if(this.props.error === ''){
        return ''
      }
      else{
        return this.props.error
      }
    }

    renderCancel = () => {
      if(this.props.cancel === ''){
        return ''
      }
      else{
        return this.props.cancel
      }
    }

    rednerInfo = () => {
      if(this.props.individualBeer.length <= 0 ){
        return;
      }
      else if(this.props.individualBeer.length > 0){
        return this.props.individualBeer.map((value,index) => {
          return(
            <div key={index}>
              {value.name}
              {value.tagline}
            </div>
          )
        })
      }
    }

    render() {
        return (
            <div className="INPUT">
                <input
                type='text'
                placeholder='Search for a beer'
                value={this.props.text}
                onChange={this.onChange}
                />
                <button onClick={this.cancelClick}>Stop</button>
                <div>{this.renderWait()}</div>
                <div>{this.rednerInfo()}</div>
                <div>{this.renderError()}</div>
                <div>{this.renderCancel()}</div>
            </div>
        );
    }
}

function mapStateToProps({beer}) {
  const {loadingState, text,individualBeer,error,cancel} = beer;
  return{loadingState, text,individualBeer,error,cancel}
}

export default connect(mapStateToProps,{searchBeer,cancelSearchBeer})(INPUT)
