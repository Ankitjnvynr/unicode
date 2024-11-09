"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Add signup logic here
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
        },
        input: {
            width: '100%',
            maxWidth: '300px',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
        },
        button: {
            width: '100%',
            maxWidth: '300px',
            padding: '10px',
            margin: '10px 0',
            backgroundColor: '#6a0dad',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        socialButtons: {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px',
        },
        socialButton: {
            padding: '10px',
            borderRadius: '50%',
            backgroundColor: '#333',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            width: '40px',
            height: '40px',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Sign up</h2>
            <p>Please fill the details and create an account</p>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Submit</button>
            </form>
            <div style={styles.socialButtons}>
                <button style={styles.socialButton}>F</button>
                <button style={styles.socialButton}>G</button>
            </div>
            <p>
                Already have an account? <Link href="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
