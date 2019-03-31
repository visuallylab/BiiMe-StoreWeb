import { Avatar } from 'antd';

export type TUser = {
  did: string;
  name: string;
  certificationName: string;
  certificatedAt: string;
  expiredAt: string;
  issuerName: string;
  transactionHash: string;
};

type TProps = {
  user: TUser;
};

export default function Profile({ user }: TProps) {
  return (
    <div className="container">
      <div className="avatar-container">
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={80}
        />
      </div>
      <div className="item">
        <span className="title">Did:&nbsp;</span>
        <span>{user.did}</span>
      </div>
      <div className="item">
        <span className="title">Name:&nbsp;</span>
        <span>{user.name}</span>
      </div>
      <div className="item">
        <span className="title">Certification Name:&nbsp;</span>
        <span>{user.certificationName}</span>
      </div>
      <div className="item">
        <span className="title">Certificated At:&nbsp;</span>
        <span>{user.certificatedAt}</span>
      </div>
      <div className="item">
        <span className="title">Expired At:&nbsp;</span>
        <span>{user.expiredAt}</span>
      </div>
      <div className="item">
        <span className="title">Issuer Name:&nbsp;</span>
        <span>{user.issuerName}</span>
      </div>
      <div className="item">
        <span className="title">Transaction Hash:&nbsp;</span>
        <span>{user.transactionHash}</span>
      </div>
      <style jsx>{`
        .container {
          margin: 0 0 16px;
          padding: 16px;
          border-radius: 10px;
          background-color: white;
        }

        .title {
          font-weight: 500;
          font-size: 16px;
        }

        .item {
          display: flex;
          align-items: center;
          color: #7f7f7f;
          padding: 12px 0;
          font-size: 14px;
          border-bottom: solid 0.5px;
        }

        .item:last-child {
          border-bottom: none;
        }

        .avatar-container {
          display: flex;
          justify-content: center;
          margin: 0.5em 0;
        }
      `}</style>
    </div>
  );
}
