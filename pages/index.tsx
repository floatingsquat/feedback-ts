import type { NextPage } from 'next'
import FeedbackList from '../components/FeedbackList'
import Navbar from '../components/Navbar'

import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <FeedbackList />
    </MainLayout>
  )
}

export default Home
