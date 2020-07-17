import React from 'react';
import {Card, Range} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css';
import './InfoStyle.css'

export default () => (
    <Card className='info__card'>
        <div className={'info__wrap'}>
            <div className={'info__left-side'}>
                <div className={'title1'}>Руда</div>
                <div className={'title2'}>250 т/ч</div>
            </div>
            <div className={'info__right-side'}>
                <div className="info__badge white-text">-5</div>
                <div className='info__label red-text'>255 план час</div>
            </div>
        </div>
        <div className={'info__range'}>
            <Range
                max="100"
                min="0"
                name="points"
                step="0.5"
            />
        </div>
        <div className={'info__wrap'}>
            <div className='info__label'>45 900 план смены</div>
            <div className='info__label red-text'>98% прогноз</div>
        </div>
    </Card>
)