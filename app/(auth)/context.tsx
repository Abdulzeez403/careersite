"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { UseSetCookie } from '../components/hooks/cookie';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import { IUser } from '../constant/model';
import { notify } from '../components/toast';

interface IProp {
    loading: boolean;
    user: IUser,
    signIn: (payload: any) => void;
    signUp: (values: any) => void;
    currentUser: (userId: any) => void;
    signOut: () => void;
}
const AuthContext = createContext<IProp>({
    loading: false,
    user: null || {},
    signIn: (payload) => {
        return null
    },
    signUp: (values) => { },
    currentUser: (userId) => { },
    signOut: () => { },
});

export const useAuthContext = () => {
    let context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState({} as any);
    const cookies = new Cookies()
    const router = useRouter();

    const port = 'https://career-guidance-be.onrender.com'


    const signIn = async (payload: any) => {
        setLoading(true)
        try {
            const response = await axios.post(`${port}/auth/login`, payload);
            // let decoded: DecodedToken = jwtDecode<DecodedToken>(response.data.token);
            // UseSetCookie("user", decoded)
            // UseSetCookie("token", response.data)
            setUser(response.data);
            setLoading(false)
            window.location.reload();
            notify.success(response.data.msg);
        } catch (error: any) {
            setLoading(false);
            notify.error(error.response.data.msg);
        
            throw error;
        }
    };



    const signUp = async (userData: any) => {
        setLoading(true);
        try {
            const response = await axios.post(`${port}/auth/register`, userData);
            notify.success('Sign up successful');
            setLoading(false);
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.msg) {
                notify.error(error.response.data.msg);
            } else {
                notify.error("An unknown error occurred.");
            }
            throw error;
        }
    };

    const currentUser = async (userId: any) => {
        try {
            const { token } = cookies.get("token");
            const response = await axios.get(`${port}/user/${userId}`, {
                headers: {
                    'x-auth-token': token
                }
            });
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching current user:', error);
            throw error;
        }
    };



    const signOut = async () => {
        cookies.remove('user');
        cookies.remove('token');
        router.push('/')
        // window.location.reload();

    };


    return (
        <AuthContext.Provider
            value={{ loading, user, signIn, signUp, currentUser, signOut }}>
            {children}

        </AuthContext.Provider>
    )
}