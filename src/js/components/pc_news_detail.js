import React from 'react';
import {Row,Col} from 'antd';

export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newItem:''
        }
    };
    render(){
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}