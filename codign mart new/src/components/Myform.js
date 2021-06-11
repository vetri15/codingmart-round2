import React , {Component} from 'react';
 
const roleoptions = [
  {
    label: "Data Analyst",
    value: "Data Analyst",
  },
  {
    label: "Engineer",
    value: "Engineer",
  },
  {
    label: "UI",
    value: "UI",
  }
];

const leadoptions = [
  {
    label: "arjun",
    value: "arjun",
  },
  {
    label: "alex",
    value: "alex",
  },
  {
    label: "arun",
    value: "arun",
  }
];


class Myform extends Component {
  submitform(){
      console.log("HII")
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitform}>
        <table> 
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Role</label>
            </td>
            <td>
            <select>
            {roleoptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
              
            </td>
          </tr>
          <tr>
            <td>
              <label>Lead</label>
            </td>
            <td>
            <select>
              {leadoptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <input type="submit" value="submit"/>
            </td>
          </tr>
        </table>
        </form>
      </div>        
    );
  }
}
 
export default Myform;
