import React from 'react';
import {Icon, Card, Button} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css';
import './MessageStyle.css'

export default () => (
    <Card className={'message__wrap'}>
        <div className={'message__title'}>
            <div className={'message__title_left'}>
                <Icon className={'message__icon'}>error</Icon>
                <span>Уведомление</span>
            </div>
            <span>10:15</span>
        </div>
        <div className={'message__text'}>Поступила новая рекомендация</div>
        <div className={'message__bt-block'}>
            <Button small className={'button__ok'}>Ok</Button>
        </div>
    </Card>
)