import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import {Link} from "react-router-dom"

const Listing = () => {

    const [submitteddata,setSubmittedata] = useState([])
    const cities = ['mohali','chandigarh','panchkula'];
    const [isopen,setIsopen]= useState(false)
    let [arr,setArr] = useState([]);
    const [data,setData] = useState({
        name:'',
        gender: '',
        age: '',
        city: []
    })
    const[idx,setIdx] = useState(null)
    
    useEffect(()=>{
        getAllData();
    },[submitteddata])

    const getAllData = () => {
        let items = JSON.parse(localStorage.getItem('array'));
        setSubmittedata(items)
    }

    const handleDelete = index => {
        setSubmittedata(submitteddata.splice(index,1));
        localStorage.setItem('array',JSON.stringify(submitteddata))
    }

    const handleUpdate = () => {
          let val = JSON.parse(localStorage.getItem('array'))
          val.splice(idx,1,data) // push new data from modal
          localStorage.setItem('array',JSON.stringify(val));
        //   console.log(val);
        //   setArr(val);
          alert(' updated ')
          setIsopen(false)
    }

    const handleEdit = (value,index) => {
        setData({...value})
        console.log(data);
        // console.log(value)
        setIsopen(true)
        arr.splice(0,1,value)  //set new values in var arr 
    }

    const handleCity = (e) => {
        if(data.city.includes(e.target.value)){
            let idx = data.city.indexOf(e.target.value)
            data.city.splice(idx,1)
            return;
        }else 
        {
           data.city.push( e.target.value)
            
        }
    }

    return (
    
            <div>
            <h1>DATA</h1>
            <table style={{marginLeft:220}}>
            <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {
                submitteddata.map((value,index)=>{
                    return( 
                          <tr key={index}>
                          <td>{value.name}</td>
                          <td>{value.age}</td>
                          <td>{value.gender}</td>
                          <td>{value.city.join('-')}</td>
                          <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                          <td><button onClick={()=>handleEdit(value,index)}>Edit</button></td>
                          </tr>
                    )
                })
            }
            </tbody>  
            </table>

            <Modal isOpen={isopen}>
                {arr.map((value,index)=>{
                    return(
                        <div>
                          <label>Name</label>
                          <input type="text" defaultValue={data.name} onChange={(e)=>setData({...data, name:e.target.value})}></input><br/>
                          <label>Gender: </label>
                          <input type="radio" value='male' name="gender" defaultChecked={value.gender ==='male'}  onChange={(e)=> setData({...data, gender: e.target.value})} />Male
                          <input type="radio" value='female' name="gender" defaultChecked={value.gender ==='female'} onChange={(e)=> setData({...data, gender: e.target.value})} />Female
                          <br />   
                          <label>Age: </label>
                          <select name="rating" defaultValue={value.age}  onChange={(e)=>setData({...data, age: e.target.value})} >
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
                          </select>
                          <br />
                         {
                          cities.map((city, key) => (<div>
                          <span><label key={key}>
                          {city}:</label>
                          <input
                            type="checkbox"
                            value={city}
                            defaultChecked={value.city.includes(city)}
                            onChange={handleCity}
                          /></span>
                        </div>
                      ))}
                         <button onClick={()=>handleUpdate(value)}>Update</button>
                        </div>
                    )
                })}
            
            </Modal>
            <Link to ={"./"}><button style={{marginTop:70}}>black</button></Link>
        
        </div>
    );
}

export default Listing;


// setData([...data.city, e.target.value]) 