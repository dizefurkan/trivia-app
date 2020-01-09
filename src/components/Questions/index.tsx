import React from 'react';
import Button from 'src/theme/Button';
import Container from 'src/theme/Container';

const Questions: React.FC = () => {
  const buttonProps = {
    text: 'GO BACK TO HOME',
    textColor: '#231900',
    bgColor: '#FFCC00',
    to: '/',
  };

  return (
    <Container>
      Questions
      <Button
        {...buttonProps}
      />
    </Container>
  );
}

export default Questions;