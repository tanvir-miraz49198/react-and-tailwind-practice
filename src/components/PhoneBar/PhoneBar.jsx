import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from 'axios';
const PhoneBar = () => {
    const [phones,setPhones] = useState([])

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            console.log(loadedData)
            const phonData = loadedData.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const phoneInfo = {
                    name : phone.phone_name,
                    price : price
                }
                return phoneInfo;
            })
            console.log(phonData)
            setPhones(phonData)
        })

    },[])

    return (
        <div>
            <BarChart
            width={1000}
            height={500}
            data={phones}

            >
                <Bar dataKey="price" fill="purple" />
                <XAxis dataKey= "name" ></XAxis>
            </BarChart>
        </div>
    );
};

export default PhoneBar;