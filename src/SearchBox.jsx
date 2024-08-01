import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function SearchBox({updateInformation}){

    let [searchCity,setSearchCity]=useState("");
    let[error,setError]=useState(false);

    let API_KEY="&appid=26de8bbe96edf496f3de1af295fabd49";
    let API_URL="https://api.openweathermap.org/data/2.5/weather?q=";
    let metric="&units=metric";
    
    let getWeather = async ()=>{

        try{
        let response = await fetch(API_URL+searchCity+API_KEY+metric);
        let jsonResp= await response.json();
        let result = {
            city : jsonResp.name,
            temperature : jsonResp.main.temp,
            minTemperature : jsonResp.main.temp_min,
            maxTemperature : jsonResp.main.temp_max,
            weather : jsonResp.weather[0].description,
            humidity : jsonResp.main.humidity,
            feelsLike : jsonResp.main.feels_like,
        };
              return result;
        }catch(err){
           throw err;
        }
    }
    
    let handleInputChange = (event)=>{
        setSearchCity(event.target.value);
    } 

    let handleSubmitButton = async (event)=>{
        try{
            event.preventDefault();
        setSearchCity("");
      let newInformation= await getWeather();
      updateInformation(newInformation);
    
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form>
            <TextField id="city" label="City Name" variant="filled" value={searchCity} onChange={handleInputChange} required />
            <br />
            <br />
            <Button variant="contained" type="submit" onClick={handleSubmitButton} >Search <SearchIcon className='SearchIcon'/></Button>
            </form>
            {error &&  <Alert severity="error" className='Alert'>
                 <AlertTitle className='alertTitle'>Error</AlertTitle>
                    No location found in the API.      
                 </Alert>}
        </div>
    )
}