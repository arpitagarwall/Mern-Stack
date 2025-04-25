import "./App.css";
import {useState} from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications:"",


  })

  function changehandler(event){
    const {name,value,type,checked} = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:type === "checkbox" ? checked : value
    }))

  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler} className="shadow-md w-[540px] px-6 py-2">
        <label htmlFor="firstName" className="font-medium text-sm">First Name</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="firstName" id="firstName" placeholder="Arpit" value={formData.firstName} onChange={changehandler}></input>
        
        <br></br>
        <label htmlFor="lastName" className="font-medium text-sm">Last Name</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="lastName" id="lastName" placeholder="Agarwal" value={formData.lastName} onChange={changehandler}></input>
        
        <br></br>
        <label htmlFor="email" className="font-medium text-sm">Email</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="email" id="email" placeholder="arpitgrwl9@gmail.com" value={formData.email} onChange={changehandler}></input>

        <br></br>
        <label htmlFor="country" className="font-medium text-sm">Country</label>
        <br></br>
        <select className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" id="country" name="country" value={formData.country} onChange={changehandler}>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br></br>
        <label htmlFor="streetAddress" className="font-medium text-sm">Street Address</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="streetAddress" id="streetAddress" placeholder="Akbar Road" value={formData.streetAddress} onChange={changehandler}></input>

        <br></br>
        <label htmlFor="city" className="font-medium text-sm">City</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="city" id="city" placeholder="Delhi" value={formData.city} onChange={changehandler}></input>

        <br></br>
        <label htmlFor="state" className="font-medium text-sm">State / Province</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="state" id="state" placeholder="Haryana" value={formData.state} onChange={changehandler}></input>

        <br></br>
        <label htmlFor="postalCode" className="font-medium text-sm">Postal Code / Zip Code</label>
        <br></br>
        <input className="w-full border px-2 border-b-blue-400 rounded-md focus:outline-none" type="text" name="postalCode" id="postalCode" placeholder="110059" value={formData.postalCode} onChange={changehandler}></input>

        <br></br>

        <fieldset className="mt-2">
        
          <legend className="font-medium text-sm">By Email</legend>

          <div className="flex">

            <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changehandler}></input>

            <div className="font-medium text-sm px-2 mt-5">
              <label htmlFor="comments">Comments</label>
              <p className="text-gray-500">Get notified when someone posts a comment on posting.</p>
            </div>

          </div>

          <div className="flex">

            <input className="-mt-2" type="checkbox" id="candidates" name="candidates" checked={formData.candidates} onChange={changehandler}></input>

            <div className="font-medium text-sm px-2 mt-2">
              <label htmlFor="candidates">Candidates</label>
              <p className="text-gray-500">Get notified when candidate applies for a job.</p>
            </div>

          </div>

          <div className="flex">

            <input className="-mt-2" type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changehandler}></input>

            <div className="font-medium text-sm px-2 mt-2">
              <label htmlFor="offers">Offers</label>
              <p className="text-gray-500">Get notified when candidate accept or rejects a job.</p>
            </div>

          </div>
          
        </fieldset>

        <fieldset className="mt-2">

          <legend className="font-medium text-sm">Push notifications</legend>
          <p className="text-gray-500 font-medium text-sm pb-2">These are delivered by a SMS to your mobile.</p>

          <input type="radio" name="pushNotifications" id="pushNotifications" value="Everything" onChange={changehandler}></input>
          <label htmlFor="pushNotifications" className="font-medium text-sm px-2">Everything</label>

          <br></br>
          <input type="radio" name="pushEmail" id="pushEmail" value="Same as email" onChange={changehandler}></input>
          <label htmlFor="pushEmail" className="font-medium text-sm px-2">Same as email</label>

          <br></br>
          <input type="radio" name="pushNothing" id="pushNothing" value="No push notifications" onChange={changehandler}></input>
          <label htmlFor="pushNothing" className="font-medium text-sm px-2">No push notifications</label>

        </fieldset>

        <br></br>
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
