'use client';
import React from 'react';
import styles from '@/app/styles/GradientTextSection.module.css';
import style from '@/app/styles/ImageTextSection.module.css';

const AboutUsSection: React.FC = () => {
  return (
    <div id='aboutus' className={styles.container_aboutUs}>
      <h2 className={styles.title_aboutUs}>About Us</h2>
      <div className={styles.underline}></div>
      <section className={style.container}>
      <div className={styles.imageContainer}>
        <div className={style.imagePlaceholder}><img src="https://ik.imagekit.io/abhishekojha/vikashCyber/WhatsApp%20Image%202024-12-20%20at%2010.47.16.jpeg?updatedAt=1737220461105" alt="" className='rounded-2xl'/></div>
      </div>
      <div className={style.textContainer}>
        <p className={style.bodyText}>
        Shape Your Future with RS Computer Institute: Learn, Grow, Succeed with RS Computer Institute
        </p>
        <p className={style.paragraph}>
        At RS Computer Institute, we are committed to empowering individuals with essential computer skills through our wide range of courses, including CCC, DCA, ADCA, C Language, DFA, DTP, and CFA. Our mission is to provide quality education in a supportive environment, helping students build confidence and unlock their potential in the ever-evolving digital world. With experienced faculty and practical training, we aim to equip you with the tools needed for success in your career or personal growth. Join us and take the first step toward a brighter future!.
        </p>
      </div>
    </section>
    
    </div>
  );
};

export default AboutUsSection;
