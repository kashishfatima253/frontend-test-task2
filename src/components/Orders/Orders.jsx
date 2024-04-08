/* eslint-disable no-unused-vars */
import {Paper,Box,Typography} from '@mui/material'
import { useState } from 'react'

import Chart from 'react-apexcharts'


const Orders = () => {
    const [state,setState] = useState({
          
        series: [{
          name: 'forward',
          data: [25,20,30,21,17,28]
        }],
        options: {
        grid: {
            show: true,
            borderColor: '#4A5568',
            strokeDashArray: 3,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.5
            },  
            column: {
                colors: undefined,
                opacity: 0.5
            },  
            padding: {
                top: 0,
                right: 0,
                bottom: 10,
                left: 5
            }, 
            // margin:{
            //     top:5,
            //     right:5,
            //     bottom:5,
            //     left:5
            // } 
        },
        legend:{
            show:false
        },
          chart: {
            toolbar: {
                show: false
              },
              height:'auto',
            type: 'bar'
          },
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
              columnWidth:11
            }
          },
          fill: {
            colors: ['#ED8936'],
            opacity: 1,
            type: 'solid',
            // gradient: {
            //     shade: 'dark',
            //     type: "horizontal",
            //     shadeIntensity: 0.5,
            //     gradientToColors: undefined,
            //     inverseColors: true,
            //     opacityFrom: 1,
            //     opacityTo: 1,
            //     stops: [0, 50, 100],
            //     colorStops: []
            // },
        },
          xaxis: {
            show:false,
            type: 'string',
            categories: ["Jul","Aug","Sep","Oct","Nov","Dec"],
            tooltip: {
                enabled: false
              },
            axisTicks: {
            show: false,
            },
            axisBorder: {
                show: false,
                
            },
            labels:{
                style: {
                    colors: 'white',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
          },
          yaxis: {
            min: 0,
            max: 30,
            stepSize:10,
            labels: {
              style:{
                colors:['white']
              }
            },
          },
        //   tooltip: {
        //     x: {
        //       format: 'dd/MM/yy HH:mm'
        //     },
        //   },
        },
      
      
      })
  return (
    <Paper elevation={3}
    sx={{
        width: '100%',
        height: '500px',
        backgroundColor: '#111C44',
        borderRadius:'20px'
      }}
    >

<Box
        sx={{
            padding:'1rem 2rem 0 1rem'
        }}
        >
            <Typography style={{fontWeight:'600',color:'#A0AEC0',textTransform:'uppercase',fontSize:'12px'}}>
            Performance
        </Typography>
        <Typography
        sx={{
            fontSize:'18px',
            color:'white',
            fontWeight:'600'
        }}
        >
            Total orders
        </Typography>

        
        </Box>
        <Chart options={state.options} series={state.series} height={440} type="bar" />
    </Paper>
  )
}

export default Orders
