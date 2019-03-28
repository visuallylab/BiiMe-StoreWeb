type TDiscount = {
  cover: string;
  storeName: string;
  discountText: string;
};

type TProps = {
  discounts: TDiscount[];
};

export default function Discounts({ discounts }: TProps) {
  return (
    <div className="container">
      <h3>Discounts</h3>
      {discounts.map((discount, idx) => (
        <Discount key={`${idx}: ${discount.storeName}`} data={discount} />
      ))}
      <style jsx>{`
        .container {
          margin: 16px 0;
          padding: 16px;
          border-radius: 10px;
          background-color: white;
        }
      `}</style>
    </div>
  );
}

export function Discount({ data }: { data: TDiscount }) {
  return (
    <div className="container">
      <div className="cover" />
      <div>
        <h3 className="title">{data.storeName}</h3>
        <div className="description">{data.discountText}</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          color: #7f7f7f;
          padding: 12px 0;
          border-bottom: solid 0.5px;
        }
        .container:last-child {
          border-bottom: none;
        }

        .title {
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 0.3em;
        }

        .description {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }

        .cover {
          background: white url(${data.cover}) no-repeat center / contain;
          border: solid 1px rgba(127, 127, 127, 0.22);
          margin-right: 0.5em;
          width: 80px;
          height: 50px;
        }
      `}</style>
    </div>
  );
}
