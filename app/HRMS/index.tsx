import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ImageBackground, KeyboardAvoidingView, Image, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './../style'
import { LinearGradient } from 'expo-linear-gradient'; //for expo

import Icon from 'react-native-vector-icons/FontAwesome';
export default function Index() {
    return (
        <LinearGradient colors={['#FF9933', '#FFFFFF', '#138808']} start={{ x: 0.84, y: 0.01 }} end={{ x: 0.0, y: 1.0 }} style={commonStyles.gradient} >
            <View style={commonStyles.flexcontainer}>
                {/* Left Section */}
                <View style={commonStyles.left}>
                    <Image source={require('./../../assets/images/tradition.jpg')} style={commonStyles.imagelogo3} />
                </View>

                {/* Middle Section */}
                <View style={commonStyles.middle}>
                    <Image source={require('./../../assets/images/bplogo.png')} style={commonStyles.imagelogo4} />
                </View>

                {/* Right Section */}
                <View style={commonStyles.right}>
                    <Icon name="bell-o" size={20} color="#000" />
                </View>
            </View>
            <View style={commonStyles.checkInHolder} >

                <View style={commonStyles.flexcontainer}>
                    <View style={[commonStyles.left2,]}>
                        <View style={commonStyles.iconContainer}>
                            <Icon name="compass" size={20} color="#000" />
                        </View>
                        <View style={commonStyles.textContainer}>
                            <Text >WFH</Text>
                            <Text >Hyderabad</Text>
                        </View>
                    </View>
                    <View style={commonStyles.right}>
                        <TouchableOpacity style={commonStyles.CheckINButton}  >
                            <Text style={commonStyles.buttonText}>Check Out</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={[commonStyles.flexcontainer, commonStyles.marginTop50]}>
                    {/* Left Section */}
                    <View style={[commonStyles.left, commonStyles.borderwithOne]}>
                        <Text style={commonStyles.checkintext}>Check In</Text>
                        <Text style={commonStyles.checkintextSub}>04:32 PM</Text>

                    </View>

                    {/* Middle Section */}
                    <View style={[commonStyles.middle, commonStyles.borderwithOne]}>
                        <Text style={commonStyles.checkintext}>Check Out</Text>
                        <Text style={commonStyles.checkintextSub}>04:32 PM</Text>


                    </View>

                    {/* Right Section */}
                    <View style={commonStyles.right}>
                        <Text style={commonStyles.checkintext}>Work Location</Text>
                        <Text style={commonStyles.checkintextSub}>Hyderabad</Text>

                    </View>
                </View>
                <View>
                    <Text style={commonStyles.welcometext}>Welcome back, Bruce Lee!</Text>
                </View>
                <View style={commonStyles.flexcontainer}>
                    <View style={commonStyles.left3}>
                        <View style={commonStyles.modules}>
                            <Text>Profile</Text>
                            <Text>View Details</Text>
                        </View>
                        <View style={commonStyles.modules}>
                            <Text>Profile</Text>
                            <Text>View Details</Text>
                        </View>
                    </View>
                    <View style={commonStyles.right2}>
                        <View style={commonStyles.modules}>
                            <Text>Attendance</Text>
                            <Text>View Details</Text>
                        </View>
                        <View style={commonStyles.modules}>
                            <Text>Profile</Text>
                            <Text>View Details</Text>
                        </View>
                    </View>
                </View>
            </View>


        </LinearGradient>
    )
}