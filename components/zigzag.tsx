"use client";


import Image from 'next/image'
import staff from '@/public/images/dutchstaff.jpg'
import fund from '@/public/images/dutchfund.jpg'
import idea from '@/public/images/dutchideation.jpg'
import nft from '@/public/videos/dutch-uncle-nft.gif'
import React from 'react';
import { useRouter } from 'next/navigation';


// Import images or other assets as needed



export default function Zigzag() {
  const router = useRouter();

  // Define the handleCheckout function here
  const handleCheckout = async () => {

    window.location.href = 'https://buy.stripe.com/test_aEUcQ43ZC7rf6qIfYY';
    // Call your API endpoint to create a checkout session
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: [{ id: 'STRIPE_SECRET_KEY', quantity: 1 }] }), // Replace 'prod_XXX' with your product id
    });

    const session = await response.json();

    // Redirect the customer to Stripe Checkout
    if (session.url) {
      window.location.href = session.url;
    } else {
      console.error('Failed to redirect to Stripe Checkout.');
    }
  };

  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">

        {/* Section header */}
        {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-[#1bee70] bg-green-200 rounded-full mb-4">Reach goals that matter</div>
          <Image className="max-w-full mx-auto md:max-w-none h-auto" src={nft} width={400} height={200} alt="Features 01" />
          <h1 className="h2 mb-4">One product, unlimited solutions</h1>
          <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
        </div> */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 flex flex-col md:flex-row items-center">
<a href="https://opensea.io/collection/growth-now/overview">
<Image className="max-w-full mx-auto md:max-w-none h-auto md:mr-8 rounded-full" src={nft} width={400} height={200} alt="Features 01" />
 </a>
    
    <div className="text-left">
      <h1 className="h2 mb-4">One product, unlimited solutions</h1>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-[#1bee70] font-bold py-2 px-4 rounded"
        onClick={handleCheckout}
      >
        Purchase the NFT Package Here
      </button>

     </div>
     </div> 

       {/* Items */}
        <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={staff} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-center">Staffing</h3>
                  <p className="text-xl text-white mb-4">We are always recruiting and belong to organizations filled with 100s of top talent in respective fields</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-[#1bee70] mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-white font-bold">We can Define roles, Train and Advise</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-[#1bee70] mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-white font-bold">Place Staff through Augmentation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-[#1bee70] mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-white font-bold">Step in, lead teams and be responsible for KPI's and OKR's
                      </span>
                      
                    </li>
                    <li className="flex items-center">
                     <span>  <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-[#1bee70] mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-white font-bold">Whatever needs done to get production going we do quickly.Period.</span>
                     </li>
                      </span>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={fund} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-center">Fundraising</h3>
                  <p className="text-xl text-white mb-4">We have success in 2M+ fundraising</p>
                  <ul className="text-lg text-white font-bold -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Fundraising extends through operations</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>we have 10k+ VC's and Family Offices Catalogued. 
                        <p>We reach out into the network daily and have developed key relationships with active funds</p></span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pitching VC's, Filling Grants. Registered tech into Hackathon, Participating in Accelerator Events can be time consuming and burdensome</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={idea} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Ideation/Research/Development/POC</h3>
                  <p className="text-xl text-white mb-4">Understanding where to start can be time consuming</p>
                  <p className="text-xl text-white mb-4">We get the idea in front of industry KOL's fast so it can be molded into what can work</p>
                  <ul className="text-lg text-white -mb-2 font-bold">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Research is time consuming. We have researched 250+ of the top protocols discovering what works. Know what to implement and when. A clear path forward can be developed inside of 30 days ready to be battle tested with Blitz Scaling</span>
                      
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Development Staffing developers through done for you or with augmentation can be vital early on We know how to ship clean code fast!</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>POC We can define whta an initial POC can be and should look like</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
         
         </div>
        </div>
      </section> 
    
  );
 };




