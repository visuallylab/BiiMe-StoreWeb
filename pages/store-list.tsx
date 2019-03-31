import CardLayout from '../layouts/Card';

import { discounts } from '../fakeData';

export default function StoreList() {
  return (
    <CardLayout>
      {discounts.map((data, idx) => (
        <div key={`${idx}: ${data.storeName}`} className="container">
          <h3 className="title">{data.storeName}</h3>
          <img src={data.qrcode} className="qrcode" />
          <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              align-items: center;
              color: #7f7f7f9d;
              border-bottom: solid 0.5px;

              margin: 32px 0;
              padding: 32px 16px;
              border-radius: 10px;
              background-color: white;
            }

            .title {
              color: rgba(0, 0, 0, 0.85);
              font-weight: 500;
              font-size: 16px;
              margin-bottom: 0.3em;
            }

            .qrcode {
              width: 150px;
              height: 150px;
            }
          `}</style>
        </div>
      ))}
    </CardLayout>
  );
}
