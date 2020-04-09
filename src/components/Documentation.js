import React from 'react';
import Header from './Header';
import Card from './Card';
import axios from 'axios';
import ReactLoading from 'react-loading';
import './Documentation.css';

export class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [],
      cardList: [],
      loadSize: 4
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('../../data/data.json')
      .then((res) => {
        this.setState({
          allCards: res.data,
          cardList: res.data.slice(0, this.state.loadSize),
          index: 1,
          hasMore: res.data.length > this.state.loadSize
        })
      })
    }, 1000);
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    if(scrollHeight-totalHeight <= 50 
      && this.state.cardList.length < this.state.allCards.length) {
      const count = this.state.cardList.length+this.state.loadSize;
      this.setState({
        cardList: this.state.allCards.slice(0, count)
      })
    }
  }

  render() {
    const cardList = this.state.cardList;
    return (
      <div>
        <Header header='DOCUMENTATION'/>
        <div className="container">
          <div className="row">
            <div className="autodesk-title col-lg-12">
              <h2>APIs &amp; Services</h2>
              <p>Access information on how to use Forge APIs and Services</p>
              <div className="row">
                {cardList.length === 0 ? (
                  <div className="loading">
                    <ReactLoading type='spin' color='#000'/>
                  </div>
                ) :
                  cardList.map(data =>
                    <Card key={data.title} lang={this.props.lang} cardList={data}/>
                )}
              </div>
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default Documentation;
