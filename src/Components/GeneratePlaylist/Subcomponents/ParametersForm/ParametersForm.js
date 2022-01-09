import React, {useState} from 'react';
import Slider from '@mui/material/Slider';
import {Radio} from 'antd';

import './ParametersForm.css'
import './RadioGroup.css'
import CircularSlider from '@fseehawer/react-circular-slider';

import micro from '../../../../img/GeneratePlaylist/mic.svg'
import piano from '../../../../img/GeneratePlaylist/piano.svg';
import guitar from '../../../../img/GeneratePlaylist/guitar.svg';
import guitar1 from '../../../../img/GeneratePlaylist/guitar1.svg';

import popularityTitle from '../../../../img/GeneratePlaylist/popularity.svg'
import livenessTitle from '../../../../img/GeneratePlaylist/liveness.svg'
import instrumentalnessTitle from '../../../../img/GeneratePlaylist/instrumentalness.svg'

function ParametersForm(props){

   
    let orientation;
    let slidersize;
    let frstH3;
    let scndH3;
    

    if(window.innerWidth>window.innerHeight){
        slidersize = window.innerWidth/4 *0.6
        orientation='vertical'
        frstH3='High'
        scndH3='Low'
    }else{
        slidersize=window.innerHeight/3*0.8
        orientation='horizontal'
        frstH3='Low'
        scndH3='High'
    }

    const [size,setSize] = useState(slidersize)
    const [sliderOrientation, setSliderOrientation]= useState(orientation)

    
    
    window.addEventListener('resize', ()=>{
        if(window.innerWidth>window.innerHeight){
            slidersize = window.innerWidth/4 *0.6
            orientation='vertical'
            frstH3='High'
            scndH3='Low'
        }else{
            slidersize=window.innerHeight/3*0.8
            orientation='horizontal'
            frstH3='Low'
            scndH3='High'
        }
        setSize(slidersize)
        setSliderOrientation(orientation)
    })  

    let livenessValue;
    const [livenessAmount,setLivenessAmount] = useState(0.7)
    livenessValue=livenessAmount

    let livenessDown = ()=>{
        
        if(livenessValue>0){
            livenessValue-=0.1
            livenessValue=Math.round(livenessValue*100)/100
            setLivenessAmount(livenessValue) 
            props.changeLiveness(livenessValue)          
        }
        
    }

    let livenessUp = ()=>{
        if(livenessValue<1){
            livenessValue+=0.1
            livenessValue=Math.round(livenessValue*100)/100
            setLivenessAmount(livenessValue)
            props.changeLiveness(livenessValue)
        }
    }

    let energyConvertor=0.25;
    
    

    let changeEnergy = (e)=>{
            if(e==='Low music'){
                energyConvertor=25
            }else if(e==='Normal'){
                energyConvertor=50
            }else if(e==='SHEEEEEEESH'){
                energyConvertor=75
            }else if(e==='BANGER MA BOII'){
                energyConvertor=100
            }
            
            props.changeEnergy(energyConvertor)
    }

    let changePopularity = (e)=>{
        props.changePopularity(e.target.value)
    }

    let changeTempo = (e)=>{
        props.changeTempo(e)
    }

    let changeInstrumentalness = (e)=>{
        props.changeInstrumentalness(e.target.value)
    }
     


    return(
        <div className='parameters-container'>
            
            <div className='energy-popularity-tempo'>

                <div className='energy'>

                    <CircularSlider
                        knobColor='#4CB5AA'
                        knobPosition='left'
                        label='Energy'
                        data={["Low music","Normal","SHEEEEEEESH","BANGER MA BOII"]}
                        labelColor="#ffffff"
                        trackColor='#92D1CB'
                        progressColorFrom='#4CB5AA'
                        progressColorTo='#4CB5AA'
                        trackSize={0}
                        progressSize={15}
                        valueFontSize="2vh"
                        width={size}
                        onChange={changeEnergy}
                    />

                </div>
                <div className='popularity'>
                    <img src={popularityTitle}/>
                    <div className='popularity-container'>
                        <h3>{frstH3}</h3>
                        <Slider
                            size="medium"
                            defaultValue={30}
                            min={1}
                            max={60} 
                            orientation={sliderOrientation} 
                            color='primary'
                            name='popularity'   
                            valueLabelDisplay='on'
                            onChange={changePopularity}            
                        />
                        <h3>{scndH3}</h3>
                    </div>
                </div>
                <div className='tempo'>
                    <CircularSlider
                        min={0}
                        max={250}
                        knobColor='#4CB5AA'
                        knobPosition='left'
                        label='Tempo'
                        dataIndex={120}
                        labelColor="#ffffff"
                        trackColor='#92D1CB'
                        progressColorFrom='#4CB5AA'
                        progressColorTo='#4CB5AA'
                        trackSize={0}
                        progressSize={15}
                        valueFontSize="2vh"
                        width={slidersize}
                        onChange={changeTempo}
                    />
                </div>

            </div>

            <div className='instrumentalness-liveness'>

                <div className='instrumentalness'>

                    <img src={instrumentalnessTitle}/>

                    <Radio.Group
                        optionType="button"
                        size='middle'
                        defaultValue="0.5"
                        onChange={changeInstrumentalness}
                    >
                        <Radio.Button value="0.25">
                            <img src={micro}/>
                        </Radio.Button>
                        <Radio.Button value="0.5">
                            <img src={micro}/>
                            <img src={guitar}/>
                        </Radio.Button>
                        <Radio.Button value="0.75">
                            <img src={micro}/>
                            <img src={guitar}/>
                            <img src={piano}/>
                        </Radio.Button>
                        <Radio.Button value="1">
                            <img src={guitar}/>
                            <img src={piano}/>
                            <img src={guitar1}/>  
                        </Radio.Button>
                        
                    </Radio.Group>
                
                </div>
                <div className='liveness'>

                    <img src={livenessTitle} />
                    <div className='liveness-container'>

                        <div className='liveness-button-container'>
                            <div onClick={livenessDown}><span>-</span></div>
                            <span>Studio</span>
                        </div>

                        <div className='liveness-value-container'>
                            <span>{livenessAmount}</span>
                        </div>

                        <div className='liveness-button-container'>
                            <div onClick={livenessUp}><span>+</span></div>
                            <span>Concert</span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ParametersForm;