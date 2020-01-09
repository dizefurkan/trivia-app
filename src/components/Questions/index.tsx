import React from 'react';
import Button from 'src/theme/Button';

const Questions: React.FC = () => {
  const buttonProps = {
    text: 'GO BACK TO HOME',
    textColor: '#231900',
    bgColor: '#FFCC00',
    to: '/',
  };

  return (
    <div>
      Questions
      <Button
        {...buttonProps}
      />
    </div>
  );
}

export default Questions;