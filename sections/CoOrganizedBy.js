import styled, { css } from 'styled-components'

import { mobile } from '../utils/media'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import SectionContent from '../components/SectionContent'
import OrganizersLogos from '../components/OrganizersLogos'

const CoOrganizedBy = ({ noPaddingTop = true, noPaddingBottom = false }) => (
  <Wrapper>
    <Container>
      <SectionContent
        noPaddingTop={noPaddingTop}
        noPaddingBottom={noPaddingBottom}
      >
        <SectionTitle spacing="medium">Co-Organized by</SectionTitle>
        <OrganizersLogos />
      </SectionContent>
    </Container>
  </Wrapper>
)

export default CoOrganizedBy

const Wrapper = styled.section`
  text-align: center;

  ${mobile(css`
    text-align: left;
  `)};
`
