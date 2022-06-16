import {
  Section,
  SectionLayout,
  LogoContainer,
  StatisticContainer,
  AwardContainer,
  Typography1,
} from './styled'
import CountUp from '@components/LandingPage/CountUp'
import AwardItem from '@components/LandingPage/AwardItem'
import TripleLogo from '@assets/triple2x.png'
import PlayStoreLogo from '@assets/play-store2x.png'
import AppStoreLogo from '@assets/badge-apple4x.png'
import useScrollFadeIn from '@/hooks/useScrollFadeIn'

const AppStatisticsSection = () => {
  const logoProps = useScrollFadeIn(700, 0)
  const statisticProps = useScrollFadeIn(700, 100)
  const awardProps = useScrollFadeIn(700, 200)

  return (
    <Section>
      <SectionLayout>
        <LogoContainer {...logoProps}>
          <img src={TripleLogo} alt="triple app logo" />
          <figcaption>2021년 12월 기준</figcaption>
        </LogoContainer>
        <StatisticContainer {...statisticProps}>
          <Typography1>
            <strong>
              <CountUp end={700} duration={2000} />만 명
            </strong>
            의 여행자
          </Typography1>
          <Typography1>
            <strong>
              <CountUp end={100} duration={2000} />만 개
            </strong>
            의 여행 리뷰
          </Typography1>
          <Typography1>
            <strong>
              <CountUp end={470} duration={2000} />만 개
            </strong>
            의 여행 일정
          </Typography1>
        </StatisticContainer>
        <AwardContainer {...awardProps}>
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
}

export default AppStatisticsSection
