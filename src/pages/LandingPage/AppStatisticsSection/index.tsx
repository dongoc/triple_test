import {
  Section,
  SectionLayout,
  FlexBox,
  LogoContainer,
  StatisticContainer,
  AwardContainer,
  StatisticItem,
  AwardItem,
} from './styled'

import CountUp from '@components/CountUp'
import TripleLogo from '@assets/triple2x.png'
import PlayStoreLogo from '@assets/play-store2x.png'
import AppStoreLogo from '@assets/badge-apple4x.png'

const AppStatisticsSection = () => {
  return (
    <Section>
      <SectionLayout>
        <LogoContainer duration={700} delay={0}>
          <img src={TripleLogo} alt="triple app logo" />
          <figcaption>2021년 12월 기준</figcaption>
        </LogoContainer>
        <FlexBox>
          <StatisticContainer duration={700} delay={100}>
            <StatisticItem>
              <strong>
                <CountUp end={700} duration={2000} />만 명
              </strong>
              의 여행자
            </StatisticItem>
            <StatisticItem>
              <strong>
                <CountUp end={100} duration={2000} />만 개
              </strong>
              의 여행 리뷰
            </StatisticItem>
            <StatisticItem>
              <strong>
                <CountUp end={470} duration={2000} />만 개
              </strong>
              의 여행 일정
            </StatisticItem>
          </StatisticContainer>
          <AwardContainer duration={700} delay={200}>
            <AwardItem>
              <img src={PlayStoreLogo} alt="triple playstore icon" />
              <div>
                <p>2018 구글 플레이스토어</p>
                <p>올해의 앱 최우수상 수상</p>
              </div>
            </AwardItem>
            <AwardItem>
              <img src={AppStoreLogo} alt="triple app store icon" />
              <div>
                <p>2018 애플 앱스토어</p>
                <p>오늘의 여행앱 선정</p>
              </div>
            </AwardItem>
          </AwardContainer>
        </FlexBox>
      </SectionLayout>
    </Section>
  )
}

export default AppStatisticsSection
