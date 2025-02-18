import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ImageBackground, KeyboardAvoidingView, Image, ActivityIndicator, Modal } from "react-native";
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './../style'
import { LinearGradient } from 'expo-linear-gradient'; //for expo
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Index() {
    const [modalVisible, setModalVisible] = useState(false);
    const radioOptions = ['WFH', 'WFO', 'WFR'];
    const [selectedOption, setSelectedOption] = useState('');
    const items = [
        { title: 'Profile', subtitle: 'View Profile', icon: 'address-book-o', color: '#6B5AED' },
        { title: 'Leaves', subtitle: 'Leave Charts', icon: 'bed', color: '#E94E77' },
        { title: 'Attendance', subtitle: 'Attendance', icon: 'calendar-o', color: '#FF5A5F' },
        { title: 'Announcement', subtitle: 'View Events', icon: 'bullhorn', color: '#FFA500' },
        { title: 'Payslips', subtitle: 'Salary Slips', icon: 'file-text', color: '#17A589' },
        { title: 'Holidays', subtitle: 'Holidays', icon: 'plane', color: '#8E44AD' },
    ];
    const openModal = ( ) => {
        setModalVisible(true);
    };
    const router = useRouter();
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
                        <TouchableOpacity style={commonStyles.CheckINButton} onPress={() => openModal()} >
                            <Text style={commonStyles.CheckINbuttonText}>Check Out</Text>
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
                <View style={commonStyles.container2}>
                    {items.map((item, index) => (
                        <TouchableOpacity key={index} style={commonStyles.card}>
                            <View style={commonStyles.iconContainer2}>
                                <Icon name={item.icon} size={24} color={item.color} />
                                <Text style={[commonStyles.title2, { color: item.color }]}>{item.title}</Text>
                            </View>
                            <Text style={commonStyles.subtitle}>{item.subtitle}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <Modal transparent={true} visible={modalVisible} animationType="slide">
                <View style={commonStyles.modalOverlay}>
                    <View style={commonStyles.modalContainer}>

                        <>

                            <Text style={[commonStyles.modalTitle]}>Choose Your Work Location</Text>
                            <Text style={[commonStyles.modalTitle2]}>Please select your work location for today's check-in.</Text>
                            <Text style={[commonStyles.modalTitle2]}>Thursday, 21 2024. Shift : 4:00 pm - 1:00 am</Text>
                            <Text style={commonStyles.modalTitle3}>Your current working location is Work From Office. If you wish to continue with the same location, please click the "Continue" button. If you want to change your working location, please select one of the options below</Text>
                            <RadioButton.Group onValueChange={(value) => setSelectedOption(value)} value={selectedOption}>
                                <View style={commonStyles.radioContainer}>
                                    {radioOptions.map((option, index) => (
                                        <TouchableOpacity key={index} style={commonStyles.radioItem} onPress={() => setSelectedOption(option)}>
                                            <RadioButton value={option} />
                                            <Text style={commonStyles.radioText}>{option}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </RadioButton.Group>

                            <TouchableOpacity style={commonStyles.Commonbutton} onPress={() => setModalVisible(false)}>
                                <Text style={commonStyles.closeText}>Continue</Text>
                            </TouchableOpacity>
                        </>

                    </View>
                </View>
            </Modal>
        </LinearGradient>
    )
}