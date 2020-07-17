import React from 'react';
import {Table, Card} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css';
import './TableStyle.css'

export default () => {
    const data = [
        {cell1: 'Г', cell2: 20, cell3: 20},
        {cell1: 'Ю', cell2: 10, cell3: 15},
        {cell1: 'З', cell2: 25, cell3: 35},
        {cell1: 'С', cell2: 40, cell3: 25},
        {cell1: 'Э 48', cell2: 5, cell3: 5}
    ];

    return (<Card className={'table__card'}>
        <div className={'table__title'}>Характеристики руды, %</div>
        <Table className={'table__main'}>
            <thead>
            <tr>
                <th data-field="id" width={100}>ПО</th>
                <th data-field="name" width={100}>
                    <div className={'table__head-label'}>текущее</div>
                    <div>63,97</div>
                </th>
                <th data-field="price" width={100}>
                    <div className={'table__head-label'}>через 1 час</div>
                    <div>64,23</div>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((item) => {
                    return (
                        <tr>
                            <td>
                                { item.cell1 }
                            </td>
                            <td>
                                { item.cell2 }
                            </td>
                            <td>
                                { item.cell3 }
                            </td>
                        </tr>
                    )
                })
            }

            <tr>
                <td>...</td>
                <td>-</td>
                <td>-</td>
            </tr>
            </tbody>
        </Table>
    </Card>)
}