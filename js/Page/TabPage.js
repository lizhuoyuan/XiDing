/**
 * Created by 李卓原 on 2018/6/16.
 * email: zhuoyuan93@gmail.com
 * tabBar对应的页面
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';


export default class TabPage extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {


    }

    _keyExtractor = (item, index) => index + '';

    render() {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 22, 22, 1, 1, 1, 1, 1, 1, 1];
        for (let i = 0; i < 100; i++) {
            a.push(i + 'a')
        }
        return (
            <View style={{backgroundColor: 'red'}}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={a}
                    renderItem={({item}) => <Text>{item}</Text>}
                    onScroll={this.props.onScroll}
                    overScrollMode={'never'}
                />

            </View>
        );
        x``
    }


}

const styles = StyleSheet.create({});