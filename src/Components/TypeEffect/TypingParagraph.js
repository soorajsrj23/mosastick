import React, { useState, useEffect } from 'react';
import './TypingParagraph.css'

const TypingParagraph = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
        return;
      }

      currentText += text[currentIndex];
      setDisplayText(currentText);
      currentIndex++;
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return <p className='verity'>{displayText}</p>;
};

export default TypingParagraph;
