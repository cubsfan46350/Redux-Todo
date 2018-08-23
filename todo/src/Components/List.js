import React from 'react';
import { connect } from 'react-redux';
import { add_item, remove_item } from '../Actions';
class List extends Component {

    render() {
        return (
            <ul>
             {this.props.state}
            </ul>
        );

    }
    
}


const mapStateToProps = (state) => {
    return {
        todo: '',
        todos: state
    };
};

export default connect(mapStateToProps, { add_item, remove_item })(List);