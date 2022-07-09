import type { NextPage } from 'next'
import FeedbackList from '../components/FeedbackList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <FeedbackList />
      <Footer />
    </MainLayout>
  )
}

export default Home
