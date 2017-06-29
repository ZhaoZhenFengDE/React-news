import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block'

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_2.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_3.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs class="tab_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={20} key={top} width="100%" borderd="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}