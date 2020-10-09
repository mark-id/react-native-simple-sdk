import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../assets/Styles';
import axios from 'axios';
import { StepFinishUrl } from '../../config';
import { IdentificationStatus } from '../../WidgetSteps';

export default class StepFive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAgentAnswerNotified: false,
            identificationStatus: IdentificationStatus.INITIALIZATION
        }
    }

    componentDidMount() {
        this.handleRequestFinishResponse();
    }

    handleRequestFinishResponse = () => {
        setTimeout( () => {
            this.getRequestAction();
        }, 1000);
    }

    getRequestAction = () => {
        clearTimeout(null);
        axios({
            method: 'GET',
            url: StepFinishUrl + '?request=' + this.props.dataResults.requestEntity.request,
        })
            .then((response) => {
                if (response.data.status === 'success') {
                    this.setState({
                        isAgentAnswerNotified: true,
                        identificationStatus: IdentificationStatus.WAITING_AGENT
                    });
                } else {
                    setTimeout( () => {
                        this.getRequestAction();
                    }, 3000);
                }
            })
            .catch(() => {
                this.setState({
                    isAgentAnswerNotified: false,
                    identificationStatus: IdentificationStatus.INITIALIZATION
                });
            });
    }

    render() {
        return (
            <View style={ styles.container }>
                {!this.state.isAgentAnswerNotified &&
                <Text style={ styles.titleText }>
                    { this.props.dataResults.messages.stepFiveTextH1 }
                    {"\n"}
                    {"\n"}
                </Text>
                }
                {!this.state.isAgentAnswerNotified &&
                <Image source={require('../../assets/loading.gif')}/>
                }
                {this.state.isAgentAnswerNotified && this.state.identificationStatus === IdentificationStatus.WAITING_AGENT &&
                <Text style={ styles.titleText }>
                    {"\n"}{"\n"}
                    Supaprastinta Identifikacija Užskaityta
                </Text>
                }
            </View>
        );
    }
}
