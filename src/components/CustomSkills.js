import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table} from 'reactstrap';
import {changeCustomData} from '../actions';

class CustomSkills extends React.Component {
    state = {name: '', type: '', characteristic: ''};

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        event.preventDefault();
    };

    handleSet = (event) => {
        const {customSkills, changeCustomData} = this.props;
        const {name, type, characteristic} = this.state;
        let obj = {...customSkills};
        obj[name.replace(/\s/g, '')] = {name, type, characteristic};
        changeCustomData(obj, 'customSkills');
        this.setState({name: '', type: '', characteristic: ''});
        event.preventDefault();
    };

    handleDelete = (event) => {
        const {customSkills, changeCustomData} = this.props;
        changeCustomData('', 'customSkills');
        let obj = {...customSkills};
        delete obj[event.target.name];
        changeCustomData(obj, 'customSkills');
        event.preventDefault();
    };

    handleEdit = (event) => {
        const {customSkills} = this.props;
        const skill = customSkills[event.target.name];
        this.setState({name: skill.name, type: skill.type, characteristic: skill.characteristic});
    };

    render() {
        const {customSkills, handleClose, modal} = this.props;
        const {name, type, characteristic} = this.state;
        return (
            <Modal isOpen={modal} toggle={handleClose}>
                <ModalHeader toggle={handleClose}>Custom Skills</ModalHeader>
                <ModalBody className='m-1 text-left'>
                    <Row className='m-1 align-items-center'>
                        <Col sm='3'><b>NAME:</b></Col>
                        <Col>
                            <Input type='text' value={name} name='name' maxLength='25'
                                   onChange={this.handleChange}/>
                        </Col>
                    </Row>
                    <Row className='m-1 align-items-center'>
                        <Col sm='3'><b>TYPE:</b></Col>
                        <Col>
                            <Input type='select' value={type} name='type' onChange={this.handleChange}>
                                <option value=''/>
                                {['General', 'Combat', 'Social', 'Magic', 'Knowledge'].map((key) =>
                                    <option value={key} key={key}>{key}</option>
                                )}
                            </Input>
                        </Col>
                    </Row>
                    <Row className='m-1 align-items-center'>
                        <Col sm='3'><b>CHAR:</b></Col>
                        <Col>
                            <Input type='select' value={characteristic} name='characteristic'
                                   onChange={this.handleChange}>
                                <option value=''/>
                                {['Brawn', 'Agility', 'Intellect', 'Cunning', 'Willpower', 'Presence'].map((key) =>
                                    <option value={key} key={key}>{key}</option>
                                )}
                            </Input>
                        </Col>
                    </Row>
                    <Row className='m-1 justify-content-end'>
                        <Button onClick={this.handleSet}
                                disabled={name === '' || type === '' || characteristic === ''}>Add</Button>
                    </Row>

                    <Table>
                        <thead>
                        <tr>
                            <th>NAME</th>
                            <th>TYPE</th>
                            <th>CHAR</th>
                            <th/>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(customSkills).map((key) =>
                            <tr key={key}>
                                <td>
                                    {customSkills[key].name}
                                </td>
                                <td>
                                    {customSkills[key].type}
                                </td>
                                <td>
                                    {customSkills[key].characteristic}
                                </td>
                                <td>
                                    <Button name={key} onClick={this.handleEdit}>Edit</Button>
                                </td>
                                <td>
                                    <Button name={key} onClick={this.handleDelete}>Delete</Button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>
            </Modal>
        )
            ;
    }
}

function mapStateToProps(state) {
    return {
        customSkills: state.customSkills,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changeCustomData}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(CustomSkills)
