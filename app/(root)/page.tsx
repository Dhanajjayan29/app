import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import CountUp from 'react-countup/build/CountUp'
import AnimatedCounter from '@/components/AnimatedCounter'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
//import RightSidebar from '@/components/RightSidebar'
const Home = () => {
  const loggedIn = { firstName: 'Dhanajjayan',lastName:" ",email: 'dhanajjayan@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'guest'}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox

            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1253}
          />


        </header>
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:2000},{currentBalance:1500}]} />
      
    </section>
  )
}

export default Home