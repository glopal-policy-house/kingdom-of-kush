import React from 'react'

export default function Button({ children, variant='primary', ...props }){
  const base = 'px-4 py-2 rounded-md font-medium transition transform';
  const styles = variant === 'primary' ? `${base} bg-sand-gold text-black-stone` : `${base} border border-bronze text-black-stone bg-white-marble/5`;
  return <button className={styles} {...props}>{children}</button>
}
