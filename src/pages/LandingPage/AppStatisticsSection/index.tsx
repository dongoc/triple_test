import {
  Section,
  SectionLayout,
  LogoContainer,
  StatisticContainer,
  AwardContainer,
  Typography1,
} from './styled'

import AwardItem from '@components/LandingPage/AwardItem'
import TripleLogo from '@assets/triple2x.png'
import PlayStoreLogo from '@assets/play-store2x.png'
import AppStoreLogo from '@assets/badge-apple4x.png'

const AppStatisticsSection = () => (
  <Section>
    <SectionLayout>
      <LogoContainer>
        <img src={TripleLogo} alt="triple app logo" />
        <figcaption>2021년 12월 기준</figcaption>
      </LogoContainer>
      <StatisticContainer>
        <Typography1>
          <strong>700만 명</strong>의 여행자
        </Typography1>
        <Typography1>
          <strong>100만 개</strong>의 여행 리뷰
        </Typography1>
        <Typography1>
          <strong>470만 개</strong>의 여행 일정
        </Typography1>
      </StatisticContainer>
      <AwardContainer>
        <AwardItem
          imageSrc={PlayStoreLogo}
          imageAlt="triple playstore icon"
          line1="2018 구글 플레이스토어"
          line2="올해의 앱 최우수상 수상"
        />
        <AwardItem
          imageSrc={AppStoreLogo}
          imageAlt="triple app store icon"
          line1="2018 애플 앱스토어"
          line2="오늘의 여행앱 선정"
        />
      </AwardContainer>
    </SectionLayout>
  </Section>
)

export default AppStatisticsSection
