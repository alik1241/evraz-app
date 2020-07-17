import React from 'react';

export default ({title, subtitle}) => (
    <td>
        <div className={'table__my-title'}>{title}</div>
        <div className={'table__my-subtitle'}>{subtitle}</div>
    </td>
)