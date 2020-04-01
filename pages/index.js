import styled from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import Card from '../components/Card';

const SpacedCard = styled(Card)`
  margin: 8px;
`;

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <SpacedCard>
        <p>Hello Next</p>
      </SpacedCard>
    </>
  )
}