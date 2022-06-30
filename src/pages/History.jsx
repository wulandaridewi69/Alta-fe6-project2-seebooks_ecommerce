import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Photo from '../assets/profile.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const History = (props) => {

    const [edit, setEdit] = useState({
        id: '',
        value: ''
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        if (props.edit) {
            inputRef.current.focus();
        } else {
            inputRef.current.blur();
        }
    })

    const handleChange = (e, type) => {
        setUsername(e.target.value);
        setEmail(e.target.value);
        setPassword(e.target.value);
        setPhone(e.target.value);
        setAddress(e.target.value);
        console.log(e.target.value);
    }

    const complete = () => {
        setEdit({
            id: '',
            value: ''
        });
        props.setEdit(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: props.edit ? props.edit.id : null,
        });
        setUsername('');
        setEmail('');
        setPassword('');
        setPhone('');
        setAddress('');
    }

    const submitUpdate = (value) => {
        // updateProfile(edit.id, value);
        setEdit({
            id: '',
            value: ''
        })
    };

    return (
        <Layout>

        </Layout>
    )
}

export default History;