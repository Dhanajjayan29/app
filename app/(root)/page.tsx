import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import CountUp from 'react-countup/build/CountUp'
import AnimatedCounter from '@/components/AnimatedCounter'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home = () => {
  const loggedIn = {firstname:'user'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstname || 'guest'}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox
  
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1253.45}
            />

            
        </header>
      </div>
    </section>
  )
}

export default Home