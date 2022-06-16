import styled from 'styled-components'

export const Section = styled.section`
  background-color: var(--color-white);
  min-width: var(--desktop-min-width);
`

export const SectionLayout = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--layout-max-width);
  height: 552px;
  margin: 0 auto;
  padding-top: 150px;
`

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const FadeInContainer = styled.div<{ duration: number; delay: number }>`
  animation: ${(p) => `fadeIn ${p.duration}ms ease-in-out ${p.delay}ms`};
`

export const LogoContainer = styled(FadeInContainer)`
  grid-area: logo;

  & > img {
    width: 400px;
  }

  & > figcaption {
    font-size: 15px;
    color: var(--color-gray700);
    margin-top: -58px;
    text-align: center;
  }
`

export const StatisticContainer = styled(FadeInContainer)`
  grid-area: statistic;
  display: grid;
  grid-row-gap: 20px;
`

export const AwardContainer = styled(FadeInContainer)`
  grid-area: award;
  display: flex;
  gap: 40px;
`

export const StatisticItem = styled.div`
  height: 36px;
  font-size: 36px;
  color: var(--color-gray);

  strong {
    font-weight: bold;
  }
`

export const AwardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;

  & > img {
    width: 54px;
    height: 54px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > p {
      font-size: 14px;
      font-weight: bold;
      color: var(--color-gray800);
    }
  }
`
