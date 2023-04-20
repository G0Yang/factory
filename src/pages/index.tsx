import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import {get} from '../axios/axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [result, setResult] = useState({});


  get('https://api.bithumb.com/public/ticker/ALL_KRW').then(({data}) => {
    if(data){
      console.log(data?.data);
    }
  });

  return (
    <>
    balance: {balance}
    {Object.keys(result)}
    </>
  )
}
