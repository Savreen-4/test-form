import React, { useState, useEffect } from 'react';

const Home = props => {
    
    const [data, setData] = useState({});
    const [city, setCity] = useState([]);
    const [alldata, setAlldata] = useState([]);
 
    const handleSubmit = (e) => {
        data['city']= city;
        alldata.splice(0,1,data)
        localStorage.setItem('array',JSON.stringify(alldata))
        alert(' SAVED ')
        props.history.push('/listing')
    }

    const handleCity = (e) => {
        if(city.includes(e.target.value)){
            let idx = city.indexOf(e.target.value)
            city.splice(idx,1)
            return;
        }else 
        {
            setCity([...city, e.target.value])
        }
    }

    return (
        <div>
            <h1>Form</h1>
            <label>Name</label>
            <input type="text" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}></input><br/>
           
            <label>Age: </label>
            
            <select name="age"  onChange={(e)=>setData({...data, age: e.target.value})} >
                <option value="5">Age </option>
                <option value="5">5 </option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="10">30</option>
                <option value="15">35</option>
                <option value="20">40</option>
                <option value="25">45</option>
                <option value="5">50</option>
                <option value="10">55</option>
                <option value="15">60</option>
                <option value="20">65</option>
                <option value="25">70</option>
            </select><br/>

            <label>Gender: </label>
            
            <input type="radio" value="male" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})} />Male
            <input type="radio" value="female" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})}  />Female
            <br />



            <label>City :</label>
            <br/>
            <label>Chandigarh</label>
            <input type="checkbox" name="city" value="chandigarh" onChange={handleCity} />
            <label>Panchkula</label>
            <input type="checkbox" name="city" value="panchkula" onChange={handleCity} />
            <label>Mohali</label>
            <input type="checkbox" name="city" value="mohali" onChange={handleCity} />
            <br />


        <br/>
            <button type="submit" onClick={handleSubmit} style={{marginTop:70}}>Submit</button>
        </div>
    );
}

export default Home;