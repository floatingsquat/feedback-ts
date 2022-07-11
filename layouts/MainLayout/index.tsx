import styles from './style.module.scss'
import React, { ReactNode } from "react";
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Modal from '../../components/Modal';


interface Props {
  children?: ReactNode

}

function MainLayout ({ children }: Props) {
  return (
 
    <div className={styles.mainLayout}>
      <Head>
        <title>Feedback APP</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Sidebar />
      <main>{children}</main>
      
    </div>
    
  )
  
}

export default MainLayout