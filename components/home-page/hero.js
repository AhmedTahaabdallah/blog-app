/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import cssClasses from './hero.module.css';

const Hero = () => {
    return (
      <section className={cssClasses.hero}>
          <div className={cssClasses.image}>
            <Image 
                src='/images/site/ahmed.jpeg'
                alt="An image showing ahmed"
                width={300}
                height={300}
                layout='responsive'
            />
          </div>
          <h1>Hi, I'm Ahmed</h1>
          <p>
              I blog about web development - especially frontend framework like react.js
          </p>
      </section>
    )
};
  
export default Hero;