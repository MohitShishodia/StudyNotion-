import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from '../assets/Images/FoundingStory.png'
import StatsComponent from "../components/core/AboutPage/Stats"
import LearningGrid from '../components/core/AboutPage/LearningGrid'

const About = () => {
  return (
    <div>
        {/* Section 1 */}
        <section>
            <div className='mt-[100px] text-white'>
                <header>
                    Driving Innovation in Online Education for a
                    <HighlightText text={"Brighter Future"}/>   
                    <p>
                        Long para copy from the code
                    </p>

                </header>

                
                <div className='flex gap-3 mx-auto '>
                    <img src={BannerImage1}/>
                    <img src={BannerImage2}/>
                    <img src={BannerImage3}/>
                </div>
            </div>
        </section>

        {/* Section 2 */}
        <section>
            <div>
                <Quote />
            </div>
        </section>


        {/* Section 3 */}

        <section>
            <div>
                {/* Founding Story  div */}
                <div>
                    {/* Founding story left box */}
                    <div>
                        <h1>Our founding Story</h1>

                        <p>
                            Copy karna hai
                        </p>

                        <p>
                            Copy karna hai
                        </p>
                    </div>
                    {/* Founding Story  right boc */}

                    <div>
                        <img src={FoundingStory}/>
                    </div>
                    
                </div>

                {/* vision and mission parent div */}
                <div>
                    {/* left box */}
                    <div>

                    </div>

                    {/* rightbox */}
                </div>
                
            </div>
        </section>

        {/* SECTION 4 */}

        <StatsComponent/>

        {/* section 5 */}

        <section>
            <LearningGrid/> 
        </section> 


    </div>
  )
}


export default About