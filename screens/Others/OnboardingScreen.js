import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../../utils/only-token';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Login');
        setItem('onboarded', '1');
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )

    }
    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                titleStyles={{ color: '#fff' }}
                subTitleStyles={{ color: '#fff' }}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#17b8ff',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    autoPlay
                                    loop
                                    source={require('../../assets/animations/boost.json')}
                                />

                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe this channel to boost your productivity level',
                    },
                    {
                        backgroundColor: '#42f5dd',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../../assets/animations/work.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../../assets/animations/achieve.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By boosting your productivity we help you to achieve higher goals',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width,
        alignItems: "center"
    },
    doneButton: {
        padding: 20,
        fontFamily: 'Roboto-Regular',
        color: 'white'
    }
})