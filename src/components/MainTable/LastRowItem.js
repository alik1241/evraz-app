import React from 'react';

export default ({title, values, classes}) => (
    <td colSpan={3}>
        <div className={`item__wrap ${classes}`}>
            <div className={'item__title'}>{title}</div>
            <div>
                {
                    values.map(item => <div className={typeof(item) == 'string' ? 'item__label' : 'item__selection'}>{item}</div>)
                }
            </div>
        </div>
    </td>
)