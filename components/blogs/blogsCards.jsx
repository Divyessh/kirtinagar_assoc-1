import React from 'react';

const Card = ({ blogTitle }) => (
  <div
    className="card w-[300px] mx-auto md:mx-[0px] md:w-[350px] bg-[#E5DFCF] shadow-2xl rounded-xl"
    style={{ padding: 0, border: 'none' }}
  >
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`https://www.instagram.com/p/${blogTitle}/?utm_source=ig_embed&amp;utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        maxHeight: '30vh',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        WebkitWidth: 'calc(100% - 2px)',
        width: 'calc(100% - 2px)',
      }}
    />
    <script async src="//www.instagram.com/embed.js" />
  </div>
);

export default Card;
