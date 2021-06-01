import React from 'react';

export default () => {
  const { open, ref } = useMenu(
    ({ components: { Container, Item } }) => (
      <Container>
        <Item>Start</Item>
        <Item>Cancel</Item>
      </Container>
    ),
    []
  );
  const { open } = useModal(
    ({ components: { Container, Title, Content, Actions }, close }) => (
      <Container>
        <Title>This is a test recording</Title>
        <Content>Lorem ipsum...</Content>
        <Actions>
          <button onClick={close}>Close</button>
        </Actions>
      </Container>
    ),
    []
  );
};
