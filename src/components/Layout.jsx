import * as React from 'react';
import Container from 'reactstrap/lib/Container';

export default class Layout extends React.Component{
    render() {
        return <Container fluid className='p-0 pt-5'>{this.props.children}</Container>
    }
}