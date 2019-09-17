import React, {useState, useEffect} from 'react';
import './Pies.css';
import Pie from './Pie/Pie';

/*
const testData = [
    {
      nameOfPie : 'Apple',
      baseOfPie : 'Delicious Apples',
      crust : 'Pastry',
      timeToBake : '45 Minutes',
      servings : '12',
      rating : 4
    },
    {
      nameOfPie: 'Cherry',
      baseOfPie: 'Fruit Filling',
      crust: 'Pastry',
      timeToBake: '30 mins',
      servings: 97,
      rating: 5
    },
    {
      nameOfPie: 'Pecan',
      baseOfPie: 'Sugary Goodness',
      crust: 'Graham Cracker',
      timeToBake: '40 mins',
      servings: 2,
      rating: 3
    }
  ];


*/

const Pies = () => {
    let [pie, setPie] = useState([])

    useEffect (() => {
        fetchPies()

    },[])

let fetchPies = () => {
    let url='http://localhost:3000/pies';

    fetch(url)
    .then(res => res.json())
    .then(data => setPie(data))
    .catch(err => console.error({message:err}))

    }
    return(
        <table>
            <thead>
                <tr>
                    <td>Name of Pie</td>
                    <td>Base of Pie</td>
                    <td>Crust</td>
                    <td>Time to Bake</td>
                    <td>Servings</td>
                    <td>Rating</td>
                </tr>
            </thead>
            <tbody>
                {pie.map((pie,index)=>{
                    return(
                        <Pie pie={pie} key={index} index={index} />
                    )
                })}
            </tbody>
        </table>
    )
}
export default Pies;