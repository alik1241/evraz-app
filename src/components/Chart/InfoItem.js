import React from 'react';
import './ChartStyle.css'

export default ({value, mark, subtitle}) => (
    <div className={`chart__info-item ${mark}`}>
        <div>{value}</div>
        <div className={'subtitle'}>{subtitle}</div>
    </div>
)