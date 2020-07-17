import React from 'react';
import {Table, Icon, Card, Select} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css';
import './MainTableStyle.css'
import Title from "./Title";
import LastRowItem from "./LastRowItem";

const renderHeader = () => {
    let res = [];

    for (let i = 0; i < 15; i++) {
        res.push(<th>{i + 1}</th>);
    }

    return res;
};

export default () => {
    const data = [193, 193, 193, 193, 193, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197];
    const recomend = [13, 13, 19, 19, 13, 17, 17, 1, 17, 1, 197, 197, 197, 17, 17, 17, 197];

    return (<Card className={'table__my-wrap'}>
        <Table className={'table__my'}>
            <thead>
            <tr>
                <th data-field="id">
                    Секции
                </th>
                <th data-field="name">
                    Бедный
                </th>
                <th data-field="price">
                    Богатый
                </th>
                {
                    renderHeader()
                }
            </tr>
            </thead>
            <tbody>
            <tr>
                <Title title={'Нагрузка на МСЦ'} subtitle={'рекомендация'}/>
                {
                    data.map((item, i) => {
                        return (
                            <td className={ i === 1 ? 'selected' : ''}>
                                <div className={'value'}>{item}</div>
                                <div className={'recommend-value'}>{recomend[i]}</div>
                            </td>
                        )
                    })
                }
            </tr>
            <tr>
                <Title title={'Руда/вода'} subtitle={'рекомендация'}/>
                {
                    data.map((item, i) => {
                        return (
                            <td className={ i === 1 ? 'selected' : ''}>
                                <div className={i === 0 ? 'value warn' : 'value'}>{item}</div>
                                <div className={i === 0 ? 'recommend-value info' : 'recommend-value'}>{recomend[i]}</div>
                            </td>
                        )
                    })
                }
            </tr>
            <tr>
                <Title title={'Работа доп. МШ'} subtitle={'рекомендация'}/>
                {
                    data.map((item, i) => {
                        return (
                            <td className={ i === 1 ? 'selected' : ''}>
                                <div className={'value'}>{item}</div>
                                <div className={'recommend-value'}>{recomend[i]}</div>
                            </td>
                        )
                    })
                }
            </tr>
            <tr>
                <Title title={'Доп. режимы'} subtitle={'рекомендация'}/>
                <td></td>
                <td></td>
                { <LastRowItem title={'Насос 802'} values={['да', 'нет']} /> }

                <td></td>
                { <LastRowItem title={'Насос 163'} values={['нет', 'нет']} /> }

                <td></td>
                { <LastRowItem title={'Насос 13'} values={['нет', 'нет']} /> }

                <td></td>
                { <LastRowItem classes={'selection'} title={'Насос 105'} values={[
                    <Select
                        id="Select-9"
                        multiple={false}
                        onChange={function noRefCheck(){}}
                        options={{
                            classes: '',
                            dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }
                        }}
                        value="1"
                    >
                        <option value="1">на 3-97</option>
                        <option value="2">на 6-103</option>
                        <option value="3">на 9-106</option>
                    </Select>
                ]} /> }
            </tr>
            </tbody>
        </Table>
        <div className={'table__bottom'}>
            <div className={'table__bottom-left'}>
                <span>10:15</span>
                <span>Рекомендация обновлена</span>
            </div>
            <div className={'table__bottom-right'}>
                <span>Посмотреть историю</span>
                <Icon>play_circle_outline</Icon>
            </div>
        </div>
    </Card>)
}