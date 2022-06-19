import React, { useState , useEffect} from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css"



/*const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];*/



function App() {
  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const [ description , setDescription] = useState("");
  const [volumen, setVolumen] = useState (0.3);
  

  useEffect(()=>{    
    document.addEventListener("keydown", (ev)=>{
    const filterArray = bankOne.filter ((prop)=>prop.keyTrigger===ev.key.toUpperCase());
    //console.log(filterArray);

    const pad=document.getElementById(filterArray[0].id);
    //console.log(pad)
    pad.classList.add("pressed");  
    
    suena(ev.key.toUpperCase(), filterArray[0].id);  
    });
  }, []);

  document.addEventListener("keyup", (ev)=>{
    const filterArray = bankOne.filter ((prop)=>prop.keyTrigger===ev.key.toUpperCase());
    //console.log(filterArray);

    const pad=document.getElementById(filterArray[0].id);
    //console.log(pad)
    pad.classList.remove("pressed");  
  
  });

 

  function suena(tecla, descrip){
    const clip = document.getElementById(tecla);
    const barra = document.getElementById("mySlider");
        //console.log(`barra= ${barra}`);
        //console.log(barra);
    clip.play();
    barra.addEventListener("change", (ev)=>{
      //console.log(ev);
      clip.volume=ev.target.value;
    })
       
    setDescription(descrip);
  }

  function adjustVolumen(variable) {
    setVolumen(variable.target.value)
  }


  
  
  return (
    <div className='App' >
      <div id="drum-machine">
        
        <div id="display">

          <div className='keyboard'>
            {bankOne.map ((drumPad) => (
              <div 
              key={drumPad.url}
              onClick={()=> {suena(drumPad.keyTrigger, drumPad.id)}}
              className='drum-pad' 
              id={drumPad.id}
              >
                {drumPad.keyTrigger}
                <audio className='clip' id={drumPad.keyTrigger} src={drumPad.url}></audio>
                
              </div>
            ))}
          </div>

          <div id="controles">
            <p>Volumen {volumen*100} %</p> 
            <input 
              type="range" 
              min="0" 
              max="1" 
              value={volumen} 
              step="0.1" 
              id="mySlider"
              onChange={adjustVolumen}
            ></input>
            <p>Description Clip:</p>
            <p id="text">{description}</p>
          </div>
          
        </div>
        
      </div>
       
    </div>
  );
}



export default App;
