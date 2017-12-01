import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser,fetchHackerNews} from '../actions';
import INPUT from './Input';

class APP extends Component {
    onCLick =() => {
      this.props.fetchUser()
    }
    onClickHackerNews = () => {
      this.props.fetchHackerNews()
    }


    renderWaitNews = () => {
      if(!this.props.newsLoadingState){
        return;
      }
      else{
        return 'Please Wait for news'
      }
    }

    renderNews = () => {
      if(this.props.newsCurrent === null){
        return;
      }
      else{
        return this.props.newsCurrent.map((value,index) => {
          return (
            <div key={index}>
              {value.by}
            </div>
          )
        })
      }
    };




    render() {
        return (
            <div className="APP">
                <button
                onClick={this.onCLick}
                >click</button>
                <button
                onClick={this.onClickHackerNews}
                >hackerNews</button>
                <p>{this.props.clickman || ''}</p>
                <p>{this.renderWaitNews()}</p>
                <div>{this.renderNews()}</div>
                <INPUT/>
            </div>
        );
    }
}

function mapStateToProps({clickman,user,news}) {
  const {newsLoadingState,newsCurrent} = news;
  const  {loadingState,current} = user;
  return{clickman,loadingState,current,newsLoadingState,newsCurrent}
}

export default connect(mapStateToProps,{fetchUser,fetchHackerNews})(APP)
