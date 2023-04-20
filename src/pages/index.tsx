import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [balance, setBalance] = useState(0);

  const get = () => {
    const sdk = require('api')('@bithumb-api-docs/v1.0.0#jfa3gjl1wz0f2l');

    sdk.all({payment_currency: 'KRW'})
      .then(({ data }) => setBalance(data))
      .catch(err => console.error(err));
  };

  return (
    <>
    balance: {balance}
    </>
  )
}
