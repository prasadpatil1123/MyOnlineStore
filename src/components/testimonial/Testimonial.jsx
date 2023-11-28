import { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://avatars.githubusercontent.com/u/122286888?v=4" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">
                                I can't believe the level of customer service I received! From the moment I reached out with a question to the resolution of my issue, the support team was prompt, friendly, and incredibly helpful. It's rare to find a company that genuinely cares about its customers, but this one goes above and beyond. I'm a customer for life!
                                    </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kashiprasad Patil</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">
                                    Full Stack Developer
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                 src="https://www.startupinsider.in/wp-content/uploads/2022/06/Steve-Jobs.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">
                                The product exceeded my expectations! Not only is it high-quality and well-designed, but it also arrived much faster than I anticipated. This company clearly values efficiency without compromising on excellence. I've already recommended their products to all my friends and family
                                    </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                src="https://static01.nyt.com/images/2023/03/15/multimedia/17ALTMAN-Top/17ALTMAN-Top-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">
                                I've been a loyal customer for years, and this company never disappoints. The consistency in the quality of their products is impressive. What sets them apart, though, is their commitment to innovation. I always feel like I'm getting the latest and greatest, and it keeps me coming back for more. Kudos to the team for their dedication to excellence!
                                    </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial