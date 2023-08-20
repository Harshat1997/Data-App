import React from 'react'
import {
    AiOutlineWhatsApp,
   AiOutlineFacebook,
   AiOutlineGithub,
   AiOutlineInstagram,
   AiOutlineTwitter,

} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1240px mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Analytics is the "extensive use of data, statistical and quantitative analysis, explanatory and predictive models, and fact-based management to drive decisions and actions." It is a subset of business intelligence, which is a set of technologies and processes that uses data to understand and analyze business performance to drive decision-making .</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <AiOutlineFacebook size={30}/>
            <AiOutlineInstagram size={30}/>
            <AiOutlineTwitter size={30}/>
            <AiOutlineGithub size={30}/>
            <AiOutlineWhatsApp size={30}/>
        </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Careers</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
      

    </div>
    </div>
  )
}

export default Footer