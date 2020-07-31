import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Modal, ScrollView } from 'react-native';
import ConditionsTexts from "../modals/ConditionsTexts";
import PrivacyTexts from "../modals/PrivacyTexts";
import StepTwo from '../../screens/Widget/StepTwo';
import styles from '../../assets/Styles';

export default class StepZero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText:  'Tapatybės nustatymo tvarka',
            paragraphText: 'Atliekant tapatybės nustatymą bus daromas vaizdo įrašas, Jūsų bei Jūsų asmens tapatybės dokumento nuotraukos bei generuojama identifikavimo ataskaita. Spausdami mygtuką "Pradėti identifikaciją", Jūs sutinkate su asmens tapatybės nustatymo ',
            buttonText: 'Pradėti Identifikaciją',
            currentStep: 1,
            termsModalVisible: false,
            policyModalVisible: false,
        }
    }

    handleTermsModal = () => {
        this.setState(prevState => ({
            termsModalVisible: !prevState.termsModalVisible
        }));
    }

    handlePolicyModal = () => {
        this.setState(prevState => ({
            policyModalVisible: !prevState.policyModalVisible
        }));
    }

    handleSetCurrentStepZero = () => {
        this.setState({ currentStepTwo: 2});
    }

    render() {
        if (this.state.currentStepTwo === 2) {
            return (<StepTwo dataResults={this.props.dataResults}/>);
        }

        return (
            <View style={ styles.container }>
                <Text style={ styles.titleText }>
                    { this.state.titleText }
                    {"\n"}
                    {"\n"}
                    <Text style={ styles.paragraph }>
                        { this.state.paragraphText }
                        <Text style={ styles.links } onPress={ this.handleTermsModal }>
                            sąlygomis
                        </Text>
                        <Text> ir </Text>
                        <Text style={ styles.links } onPress={ this.handlePolicyModal }>
                            privatumo politika
                        </Text>
                    </Text>
                </Text>
                <Modal style={ styles.modal } transparent={ true } visible={ this.state.termsModalVisible }>
                    <View style={{ backgroundColor: '#000000aa' }}>
                        <ScrollView style={styles.scrollView}>
                            <View style={ styles.closeButton }>
                                <Text style={styles.closeButtonX} onPress={ this.handleTermsModal }>X</Text>
                            </View>
                            <ConditionsTexts />
                        </ScrollView>
                    </View>
                </Modal>
                <Modal style={ styles.modal } transparent={ true } visible={ this.state.policyModalVisible }>
                    <View style={{ backgroundColor: '#000000aa' }}>
                        <ScrollView style={styles.scrollView}>
                            <View style={ styles.closeButton }>
                                <Text style={styles.closeButtonX} onPress={ this.handlePolicyModal }>X</Text>
                            </View>
                            <PrivacyTexts />
                        </ScrollView>
                    </View>
                </Modal>
                <TouchableOpacity style={ styles.buttonOnPress } onPress={ this.handleSetCurrentStepZero }>
                    <View style={ styles.button}>
                        <Text style={ styles.buttonText }>{ this.state.buttonText }</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
