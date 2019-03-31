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
        <div className="title">Did:&nbsp;</div>
        <div>{user.did}</div>
      </div>
      <div className="item">
        <div className="title">Name:&nbsp;</div>
        <div>{user.name}</div>
      </div>
      <div className="item">
        <div className="title">Certification Name:&nbsp;</div>
        <div>{user.certificationName}</div>
      </div>
      <div className="item">
        <div className="title">Certificated At:&nbsp;</div>
        <div>{user.certificatedAt}</div>
      </div>
      <div className="item">
        <div className="title">Expired At:&nbsp;</div>
        <div>{user.expiredAt}</div>
      </div>
      <div className="item">
        <div className="title">Issuer Name:&nbsp;</div>
        <div>{user.issuerName}</div>
      </div>
      <div className="item">
        <div className="title">Transaction Hash:&nbsp;</div>
        <div>{user.transactionHash}</div>
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
          flex-wrap: wrap;
          color: #7f7f7f;
          padding: 12px 0;
          font-size: 14px;
          line-height: 1.2;
          border-bottom: solid 0.5px;
        }

        .item > div {
          max-width: 100%;
          word-wrap: break-word;
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
