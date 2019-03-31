type TProps = {
  status: string;
};

export default function Status(props: TProps) {
  return (
    <div className="container">
      <h1 className="status">{props.status}</h1>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 16px 0;
          border: dashed 3px #52c41a;
          opacity: 0.5;
        }

        .status {
          color: #52c41a;
        }

        .status:before {
          content: '✔︎';
          margin-right: 0.3em;
        }
      `}</style>
    </div>
  );
}
