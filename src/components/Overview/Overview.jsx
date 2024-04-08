/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chart from 'react-apexcharts'

const Overview = () => {
    const [state,setState] = useState({
          
        series: [{
          name: 'forward',
          data: [500, 150, 170, 280, 230, 210, 260,205, 110, 110, 170, 130]
        }, {
          name: 'backward',
          data: [11, 32, 45, 32, 34, 52, 41,28, 51, 42, 109, 100]
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
            margin:{
                top:5,
                right:5,
                bottom:5,
                left:5
            } 
        },
        legend:{
            show:false
        },
          chart: {
            toolbar: {
                show: false
              },
            // height: '100%',
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show:true,
            curve: 'smooth',
            colors:['#3182CE','#fff'],
            width:3
          },
          fill: {
            colors: ['rgba(49, 130, 206, 0.36)','rgba(255, 255, 255, 0.54)'],
            opacity: 0.9,
            type: 'solid',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
            },
        },
          xaxis: {
            show:false,
            type: 'string',
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
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
            max: 500,
            stepSize:100,
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
            // paddingRight:'2rem',
            borderRadius:'20px'
        }}
        >

        <Box
        sx={{
            padding:'1rem 2rem 0 1rem'
        }}
        >
        <Typography
        sx={{
            fontSize:'18px',
            color:'white',
            fontWeight:'600'
        }}
        >
            Sales Overview
        </Typography>

        <Typography style={{fontWeight:'500',color:'#fff'}}>
            <span style={{fontWeight:'500',color:'#48BB78'}}>(+5 more) </span>in 2021
        </Typography>
        </Box>
        <Chart options={state.options} series={state.series} type="area" />

        </Paper>
  )
}

export default Overview
