import React from 'react'
import './CardComponent.scss';

export default function CardComponent({children , style}) {
    return <div className="card" style={style}>{children}</div>;
}
