import React from 'react';
import {Card, Select} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css';
import ReactApexChart from 'react-apexcharts'
import './ChartStyle.css'
import InfoItem from "./InfoItem";

const series = [
    {
        // name: "Cases",
        data: [
            61.9,
            61.1,
            61.4,
            61.71,
            61.21,
            61.42,
            61.33,
            61.23,
            61.73,
            61.65,
            61.45,
            61.25,
        ],
    }
];

const options = {
    chart: {
        height: 350,
        type: 'line',
        id: 'areachart-2'
    },

    annotations: {
        yaxis: [{
            y: 61,
            y2: 62,
            borderColor: '#000',
            fillColor: '#e3a0a1',
            opacity: 0.2,
            label: {
                borderColor: '#333',
                style: {
                    fontSize: '10px',
                    color: '#333',
                    background: '#e3a0a1',
                },
                // text: 'Y-axis range',
            }
        }, {
            y: 61.2,
            y2: 61.6,
            borderColor: '#000',
            fillColor: '#00E396',
            opacity: 0.2,
            label: {
                borderColor: '#333',
                style: {
                    fontSize: '10px',
                    color: '#333',
                    background: '#00E396',
                },
                // text: 'Y-axis range',
            }
        }],
        xaxis: [{
            x: 8,
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
                borderColor: '#775DD0',
                style: {
                    color: '#fff',
                    background: '#775DD0',
                },
                // text: 'Anno Test',
            }
        },
        // {
        //     x: 2,
        //     x2: 4,
        //     fillColor: '#B3F7CA',
        //     opacity: 0.4,
        //     label: {
        //         borderColor: '#B3F7CA',
        //         style: {
        //             fontSize: '10px',
        //             color: '#fff',
        //             background: '#00E396',
        //         },
        //         offsetY: -10,
        //         text: 'X-axis range',
        //     }
        // }
        ],
        points: [{
            x: 4,
            y: 61.71,
            marker: {
                size: 4,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 1,
                cssClass: 'apexcharts-custom-class'
            },
            label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#FF4560',
                },

                // text: 'Point Annotation',
            }
        }, {
            x: 2,
            y: 61.1,
            marker: {
                size: 4,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 2,
                cssClass: 'apexcharts-custom-class'
            },
            // image: {
            //     path: '../../assets/images/ico-instagram.png'
            // }
        }, {
            x: 5,
            y: 61.21,
            marker: {
                size: 4,
                fillColor: '#fff',
                strokeColor: 'green',
                radius: 2,
                cssClass: 'apexcharts-custom-class'
            },
            // image: {
            //     path: '../../assets/images/ico-instagram.png'
            // }
        }]
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    grid: {
        padding: {
            right: 30,
            left: 20
        }
    },
    title: {
        // text: 'Line with Annotations',
        // align: 'left'
    },
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    xaxis: {
        type: 'number',
    },
};

const info = [
    {value: 61.1, mark: 'err', note: 'факт 9:00'},
    {value: 61.8, mark: 'pass', note: 'прогноз'},
    {value: 61.0, mark: 'pass', note: 'прогноз'},
    {value: 61.5, mark: 'pass', note: 'прогноз'},
    {value: 61.4, mark: 'pass', note: 'среднее'},
];

export default () => (
    <Card>
        <div className={'chart__title-wrap'}>
            <div className={'chart__title'}>Содержание металла в концентрате, %</div>
            <div className={'chart__select'}>
                <Select
                    className={'chart__select'}
                    id="Select-9"
                    multiple={false}
                    onChange={function noRefCheck(val){console.log(val.target.value)}}
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
                    <option value="1">Fe (общ)</option>
                    <option value="2">Cu (общ)</option>
                    <option value="3">Zn (общ)</option>
                </Select>
            </div>
        </div>
        <div className={'chart__info'}>
            {
                info.map(item => {
                    return (
                        <InfoItem value={item.value} mark={item.mark} subtitle={item.note} />
                    )
                })
            }
        </div>
        <ReactApexChart options={options} series={series} type="line" height={250} />
    </Card>
)