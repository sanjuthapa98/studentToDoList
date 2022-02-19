import './homepage.css'
import {useState} from "react"


const Homepage=()=>{
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("")
    const[student,setStudent]=useState([])
    const nepal={
		color: "red",
		value: "#f00"
	}
    console.log("firstName",firstName)
    console.log("lastName",lastName)
    console.log("phone",phone)
    console.log("address",address)
    console.log("student",student)
    const addStudent=()=>{
        setStudent([...student,{

            firstname:firstName,lastName:lastName,phone:phone,address:address


        }])
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhone("")
        
    }


    

    return(
        <div>
            <form>
                <label>Name</label>
                <input value={firstName} onChange={(e)=>{
                    setFirstName(e.target.value)
                }} type="text" name="FirstName"/>
                <br />
                <label>Lastname</label>
                <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} type="text" name="Lastname"/>
                <br />
                <label>Phone</label>
                <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="number" name="Phone"/>
                <br />
                <label>Address</label>
                <input value={address}onChange={(e)=>{setAddress(e.target.value)}} type="text" name="Address" />
                <br />
                <button onClick={()=>{addStudent()}} type="button" disabled={!firstName || !lastName||!phone||!address}>submit</button>
                
            </form>
            <table>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Phone</th>
                <tbody>
                    {student.map((each,index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                  {each.firstname}
                                </td>
                                <td>
                                    {each.lastName}
                                </td>
                                <td>
                                    {each.phone}
                                </td>
                                <td>
                                    {each.address}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        
        </div>
    )

}
export default Homepage