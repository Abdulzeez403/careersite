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
    categoryData: any,
    signIn: (payload: any) => void;
    signUp: (values: any) => void;
    getCategoryData: (values: any) => void;
    currentUser: (userId: any) => void;
    signOut: () => void;
}
const AuthContext = createContext<IProp | undefined>(undefined);
// const AuthContext = createContext<IProp>({
//     loading: false,
//     user: null || {},
//     signIn: (payload) => {
//         return null
//     },
//     signUp: (values) => { },
//     getCategoryData: (values) => { },
//     currentUser: (userId) => { },
//     signOut: () => { },
// });

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
    const [categoryData, setCategoryData] = useState([])
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
            notify.success(response.data.message);
        } catch (error: any) {
            setLoading(false);
            notify.error(error.response.data.message);

            throw error;
        }
    };



    const signUp = async (userData: any) => {
        setLoading(true);
        try {
            const response = await axios.post(`${port}/auth/signup`, userData);
            notify.success(response.data.message);
            window.location.reload();
            setLoading(false);
        } catch (error: any) {
            notify.error(error.response.data.message);
            throw error;
        }
    };

    const getCategoryData = async (values: any) => {
        try {
            const response = await axios.get(`${port}/info/${values}`,);
            setCategoryData(response?.data?.data)
            console.log(response)

            setLoading(false);
        } catch (error: any) {
            // notify.error(error.response.data.message);
            console.log(error)

            throw error;
        }

    }

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
            value={{ loading, user, categoryData, signIn, signUp, currentUser, signOut, getCategoryData }}>
            {children}

        </AuthContext.Provider>
    )
}