
import { useState } from "react";


function Calculate(){

    

    var [Value,setValue]=useState(0);

    var [Value1,setValue1]=useState(0);

    var [Value2,setValue2]=useState(0);

    var [Back,setBack]=useState(true);

    const [Text,setText]=useState("");
    

    const num1=parseInt(Value1);
    const num2=parseInt(Value2);
    var sum =(num2 / ((num1 * num1)/10000)).toFixed(2);

    function button(){
        
        if(sum <= 18.50 ){
            setText("You are slim");
            setValue(sum);

        }

        else if(18.50 < sum && sum < 24.9){
            setText("You are Normal");
            setValue(sum);

        }

        else if(25 < sum && sum <29.9){
            setText("You are overweight");
            setValue(sum);
        }

        else if(30 < sum && sum < 34.9){
            setText("You are Fat obese 1");
            setValue(sum);

        }

        else if(35 < sum && sum < 39.9){
            setText("You are so fat obese 2");
            setValue(sum);
        }
        else if(40 <= sum ){
            setText("Obese 3 ");
            setValue(sum);
            
        }

        else {

            setText("something went wrong");

        }
        
    }


    function Mouseout(){
        setBack(true);

    }

    function Mouseover(){
        console.log("mouse over");
        setBack(false);

    }

    function label1Change(event){
        setValue1(event.target.value)
    
    }
    function label2Change(event){
        setValue2(event.target.value);
    }

    


    return(
        <div className="Calculate">


            
         

                <label className="Label lab1" htmlFor="">Enter Your Height </label>
                <input placeholder="Meter" onChange={label1Change} type="number" name=""  />
                
                <br />
                <label className="Label lab2" htmlFor="" >Enter Your weight  </label>
                <input onChange={label2Change} type="number" name=" "  />

                <br />

                <button style={{backgroundColor : Back ? "#97cba9" : "white"}} onClick={button} onMouseOut={Mouseout} onMouseOver={Mouseover}>Calculate</button>
            

            <h2 style={{color:"#97cba9", fontSize:"30px"}}>{Value}</h2>
            <h3 style={{color:"#97cba9", height:"100px", fontSize:"30px"}}>{Text}</h3>
            
            

        </div>
    )
    

}


export default Calculate;