import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Feature extends Component{
    getInitialState() {
        console.log('test')
        console.log(stock)
        return {
            stock: null 
        };
    }
    componentWillMount(){
        this.props.fetchMessage();

    }

    handleFormSubmit({ ticker_symbol }){
        console.log( ticker_symbol );
        this.props.getStock({ticker_symbol});
    }
    render(){
        const { handleSubmit, fields: { ticker_symbol }} = this.props;
        return (
    <div>
        <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
                <label> Ticker Symbol: </label>
                <input {...ticker_symbol} className="form-control" />
             </fieldset>
             <button action="submit" className="btn btn-primary"> Get Quote </button>
        </form>
        <h1></h1>
    </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state.stock.stock, 'hello');
    return { message: state.stock.message, 
    stock: state.stock.stock};
}

export default reduxForm({
    form: 'getstock',
    fields: ['ticker_symbol']
}, mapStateToProps, actions)(Feature);