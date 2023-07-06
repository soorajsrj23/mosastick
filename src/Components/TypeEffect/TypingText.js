import React, { useState, useEffect } from 'react';
import './TypingText.css'

const TypingText = ({ text, speed }) => {
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

  return <h1 className='floatingText'>{displayText}</h1>;
};

export default TypingText;
