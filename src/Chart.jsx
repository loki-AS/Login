import React,{useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'
import { easeLinear} from 'd3'
import { Button, Container, Col, Row } from 'react-bootstrap'
import './Chart.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    [170, 250, 60, 150, 85, 120],
    [100, 230, 20, 60, 180, 103],
    [120, 100, 80, 170, 165, 190],
    [80, 20, 75, 90, 160, 220],
    [192, 70, 90, 140, 160, 180]
]

var i = 0;


const Chart = () => {
    
    const svgRef = useRef()
    

    const [newData, setNewData] = useState([])

    useEffect(() => {
        handleChange();
    }, []);

    const handleChange = () => {
        setNewData(data[i++]);
        if(i == data.length) i = 0;
    }

    useEffect(() => {
        draw();
    }, [newData])

   
    const draw = () => {
        const w = 400;
        const h = 300;
        const svg = d3.select(svgRef.current).attr('width', w).attr('height', h).style('overflow', 'visible')
        .style('margin-left', '100px')
        .style('margin-top', '100px')
        .style('margin-bottom', '100px')

        const xScale = d3.scaleBand()
        .domain(newData.map((val, i) => i))
        .range([0, w])
        .padding(0.5)
        const yScale = d3.scaleLinear()
        .domain([0, h])
        .range([h, 0])

        const xAxis = d3.axisBottom(xScale)
        .ticks(newData.length)
        const yAxis = d3.axisLeft(yScale)
        .ticks(5)
        svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${h})`)
        svg.append('g')
        .call(yAxis)
        .transition()
        .duration(5000)
        .ease(easeLinear)

        svg.selectAll('.bar')
        .data(newData)
        .join('rect')
        .attr('x', (v, i) => xScale(i))
        .attr('text-anchor', 'middle')
        .text('my axis')
        .attr('y', yScale)
        .attr('width', xScale.bandwidth())
        .attr('height', val => h - yScale(val))
        

    }

    return(
        <Container>
        <h1 className="heading">Graph</h1>
        <div className="text__algin">
         <h2>Click to view different data</h2>
               <Button className="my-button" variant="primary btn-block" onClick={handleChange}>Click</Button> 
            </div>
            <div className="algin__chart">
            <svg className="chart_bar" ref={svgRef}></svg>
            </div>
        </Container>
    )
}

export default Chart