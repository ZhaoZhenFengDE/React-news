import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
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
                <PCHeader current={this.props.params.category}/>
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
                            <PCNewsImageBlock count={6} type={this.props.params.category} width="400px" imageWidth="112px"/>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={20} type={this.props.params.category} width="100%" borderd="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs class='tabs_product'>
                            <TabPane tab="React News产品" key="1">
                                <PCProduct/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={30} type={this.props.params.category} width="100%" imageWidth="112px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
            </div>
        )
    }
}