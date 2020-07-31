import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../assets/Styles';

export default class StepFive extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.titleText }>
                    {"\n"}{"\n"}
                    Supaprastinta Identifikacija Užskaityta
                </Text>
            </View>
        );
    }
}
