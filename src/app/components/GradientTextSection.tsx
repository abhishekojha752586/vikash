'use client';

import React from 'react';
import styles from '@/app/styles/GradientTextSection.module.css';

const GradientTextSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.gradientText}>
        Expand your mind with our diverse courses!
      </h1>
    </div>
  );
};

export default GradientTextSection;
