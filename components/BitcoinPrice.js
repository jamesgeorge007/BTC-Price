import React, {Component} from 'react';

class BitcoinPrice extends Component{
  constructor(props){
    super(props);
    this.state = {
      currency: 'USD'
    };
  }
  render(){
    let price_desc;
    if(this.state.currency === 'USD') {
      price_desc = <li className="list-group-item">
      Bitcoin rate for {this.props.bpi.USD.description}: <strong>{this.props.bpi.USD.rate}</strong> <span className="badge badge-warning">{this.props.bpi.USD.code}</span></li>
    } else if(this.state.currency === 'GBP') {
      price_desc = <li className="list-group-item">
      Bitcoin rate for {this.props.bpi.GBP.description}: <strong>{this.props.bpi.GBP.rate}</strong> <span className="badge badge-warning">{this.props.bpi.GBP.code}</span></li>
    } else if(this.state.currency === 'EUR') {
      price_desc = <li className="list-group-item">
      Bitcoin rate for {this.props.bpi.EUR.description}: <strong>{this.props.bpi.EUR.rate}</strong> <span className="badge badge-warning">{this.props.bpi.EUR.code}</span></li>
}
    return (
      <div className="jumbotron" style={{boxShadow: '2px 3px 11px #333'}}>
      <ul className="list-group">
        {price_desc}
      </ul>
      <br />
        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default BitcoinPrice;
