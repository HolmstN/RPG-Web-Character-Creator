import React from 'react';
import {connect} from 'react-redux';
import {Card, CardBody, CardHeader, Row} from 'reactstrap';

class Motivations extends React.Component {

    render() {
        const {masterMotivations} = this.props;
        return (
            <div>
                <Row className='justify-content-end'><h5>MOTIVATIONS</h5></Row>
                <hr/>
                <Row className='justify-content-center'>
                    {Object.keys(masterMotivations).map(type => {
                            return (
                                <Card className='m-2' key={type} style={{width: '45%', height: '300px'}}>
                                    <CardHeader>
                                        <b>{`${type}: ${masterMotivations[type].key ? masterMotivations[type].key : ''}`}</b>
                                    </CardHeader>
                                    <CardBody>
                                        {masterMotivations[type] ? masterMotivations[type].description : ''}
                                    </CardBody>
                                </Card>
                            )
                        }
                    )}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        masterMotivations: state.masterMotivations,
        motivations: state.motivations,
    };
}


export default connect(mapStateToProps)(Motivations);