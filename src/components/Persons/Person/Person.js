import React, {Component} from 'react';
import Aux from '../../../hoc/Auxilary'
import classes from './Person.module.css';
import PropTypes from 'prop-types'

class Person extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>
                        I'm {this.props.name} and I am {this.props.age} years old!
                    </p>
                    <p>{this.props.children}</p>
                    <input
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name}/>
                </div>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;