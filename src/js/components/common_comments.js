import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    Card,
    notification
} from 'antd';
import {Router, Route, Link, hashHistory} from 'react-router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class CommonComments extends React.Component {
    constructor(){
        super();
        this.state = {
            comments:''
        }
    };
    componentDidMount(){
        var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		});
    };
    addUserCollection(e){
        var myFetchOptions = {
			method: 'GET'
		};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
            if(json){
                return notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
            }else{
                return notification['error']({message: 'ReactNews提醒', description: '收藏此文章失败'});
            }
		});
    }
    handleSubmit(e){
        e.preventDefault();
        const myFetchOptions = {
            method:'GET'
        };
        var formdata = this.props.form.getFieldsValues();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
    };
    render(){
        const {getFieldProps} = this.props.form;
        const comments = this.state.comments;
        const commentList = comments.length?
        comments.map((comment,index)=>(
            <Card key={index} title={comment.UserName} extra={<a href="#">发布于{comment.datetime}</a>}>
                <p>{comment.Comments}</p>
            </Card>
        ))
        :'没有加载到任何评论';
        return  (
            <div>
                <Row>
                    <Col span={24}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            {commentList}
                            <FormItem label="您的评论">
                                <Input type="textarea" placeholder="请输入评论" {...getFieldProps('remark',{initialValue:''})}/>
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>&nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default CommonComments = Form.create({})(CommonComments);