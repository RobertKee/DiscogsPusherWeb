import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Home() {
    return(
<div className="App">
  <div className="Header">
    <h1>Add to List</h1>
  </div>
  <Link to={`/add`}><button>Add</button></Link>


<div className="Header">
  <h1>Edit List</h1>
</div>
<Link to={`/edit`}><button>Edit</button></Link>


<div className="Header">
  <h1>Frequency</h1>
</div>
<label>
          <p>How often do we check?</p>
          <select 
            // value={this.state.value} 
            // onChange={this.handleChange}
          >
            <option value="week">Weekly</option>
            <option value="day">Daily</option>
            <option value="halfDay">Every 12 Hours</option>
            <option value="quarterDay">Every 6 Hours</option>
            <option value="eighthDay">Every 3 Hours</option>
            <option value="eighthDay">Every 2 Hours</option>
            <option value="hour">Every Hour</option>
            <option value="30min">Every 30 Minutes</option>
            <option value="15min">Every 15 Minutes</option>
          </select>
        </label>
        <input type="submit" value="Submit" />

</div>
)
  }

export default Home