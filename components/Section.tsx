import React from 'react';

interface IProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  title?: string;
  desc?: string[];
}

const Section: React.FunctionComponent<IProps> = ({
  children,
  title = '',
  textAlign = 'left',
  fullscreen = false,
  alignItems = 'center',
}) => (
  <section className={`py align w-100 ${fullscreen ? 'h-100' : ''}`}>
    <h1>{title}</h1>
    {children}
    <style jsx>{`
      .h-100 {
        min-height: 100vh;
        box-sizing: border-box;
      }
      .w-100 {
        width: 100%;
      }
      .py {
        padding-top: 4vh;
        padding-bottom: 4vh;
      }
      .align {
        display: flex;
        justify-content: center;
        align-items: ${alignItems};
        text-align: ${textAlign};
      }
    `}</style>
  </section>
);

export default Section;
