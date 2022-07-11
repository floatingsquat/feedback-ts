import type { NextPage } from 'next'
import FeedbackList from '../components/FeedbackList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FeedbackContextProvider } from '../context/FeedbackContext'

import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <FeedbackContextProvider>
      <MainLayout>
        <Navbar />
        <FeedbackList />
        <Footer />
    </MainLayout>
    </FeedbackContextProvider>
   
  )
}

export default Home
