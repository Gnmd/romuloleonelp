import React from 'react';

function SectionHeading({ eyebrow, title, id, align = 'left', tone = 'light' }) {
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <div className={centered ? 'text-center' : undefined}>
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? 'text-star' : 'text-ocean'}`}>
        {eyebrow}
      </p>
      <h2 id={id} className={`text-3xl md:text-4xl font-semibold leading-tight ${dark ? 'text-white' : ''}`}>
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
