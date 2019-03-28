import { Card } from 'antd';
import Status from './Status';

type TCard = {
  name: string;
  coverSrc: string;
  description: string;
};

type TProps = {
  card: TCard;
};

export default function ClaimCard({ card }: TProps) {
  return (
    <Card
      style={{ width: '100%', borderRadius: '10px', border: 'none' }}
      cover={<img alt={card.name} src={card.coverSrc} />}
    >
      <Card.Meta title={card.name} description={card.description} />
      <Status status="PASS" />
    </Card>
  );
}
