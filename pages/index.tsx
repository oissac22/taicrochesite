import Head from 'next/head'
import Image from 'next/image'
import BannerStart from '../components/banner'
import Photos from '../components/photos'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <div className='container'>
            <style jsx>
                {`
                    .container{
                    }
                `}
            </style>
            <BannerStart />
            <Photos />
        </div>
    )
}
