import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='homePage'>
            <h1 className='text-white'>YOUR <span style={{color:'#E76C2E'}}>PARTNER</span> FOR
                COMPRENHESIVE <span style={{color:'#E76C2E'}}>IT </span> 
                SOLUTIONS
            </h1>
            <p className='text-white'>We provide cutting-edge solutions using the latest technologies,tailored to your needs.
                Our expert consultation and custom software development streamline operations and
                boost productivity. Comprehensive cloud services ensure scalability, flexibility, and
                security.
            </p>
            <button className=' bg-blue-500 text-white font-bold py-2 px-4 rounded'>Get In Touch</button>
        </div>
    )
}

export default Home