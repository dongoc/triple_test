import styled from 'styled-components'

const AwardItemLayout = styled.div`
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
      height: 14px;
      font-size: 14px;
      font-weight: bold;
      color: var(--color-gray800);
    }
  }
`

interface AwardItemProps {
  imageSrc: string
  imageAlt: string
  line1: string
  line2: string
}

const AwardItem = (props: AwardItemProps) => {
  const { imageSrc, imageAlt, line1, line2 } = props

  return (
    <AwardItemLayout>
      <img src={imageSrc} alt={imageAlt} />
      <div>
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </AwardItemLayout>
  )
}

export default AwardItem
