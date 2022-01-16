import React from 'react';
import Button from '@bit/semantic-org.semantic-ui-react.button';
import StyleLinks from '@bit/semantic-org.semantic-ui-react.internal.style-links';

const MultiButton = ({
  onClickOne, onClickTwo, selected,
}) => (
  <div className="mbutton">
    <Button.Group>
      <Button className={selected === 1 ? 'mbutton--selected' : ''} onClick={onClickOne}>Alessandro</Button>
      <Button.Or />
      <Button className={selected === 2 ? 'mbutton--selected' : ''} onClick={onClickTwo}>Luca</Button>
    </Button.Group>
    <StyleLinks />
  </div>
);

export default React.memo(MultiButton);
