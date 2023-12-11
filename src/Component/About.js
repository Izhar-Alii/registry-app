import React, {useState} from 'react'

export default function About() {
    let myButton = {
      backgroundColor: "blue",
      color: "white"  
    }

    const [btnText, setBtnText] = useState("enable dark mode");

    const [colorFill, setColorFill] = useState({
        backgroundColor: "white",
        color: "black"
    });

    const toggleHandler = ()=>{
        if(colorFill.backgroundColor==="white"){
            setColorFill({
                backgroundColor: "black",
                color: "white"
            })
            setBtnText("enable light mode");
        }
        else{
            setColorFill({
                backgroundColor: "white",
                color: "black"
            })
            setBtnText("enable dark mode")
        }
    }
  return (
    <>
    <div style={colorFill}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ut voluptatibus ullam culpa, est iure numquam nihil omnis ducimus nulla adipisci modi magnam minus recusandae fuga incidunt sunt sapiente nostrum rem voluptas expedita quod quis placeat. Voluptatem inventore rerum cumque veritatis odio ut voluptate quibusdam magnam tempora quidem, quis, at laudantium ipsum. Ratione amet repudiandae architecto fugiat enim ad quas numquam iusto modi animi assumenda aspernatur, error unde nemo aperiam dolores fugit veniam voluptatibus. Itaque consequatur, repellendus natus atque voluptatem ut ab sequi vel voluptates inventore optio? Sequi voluptatem tempora odit consequuntur unde? Dolorem, ullam praesentium. Voluptatum iusto quaerat velit?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ut voluptatibus ullam culpa, est iure numquam nihil omnis ducimus nulla adipisci modi magnam minus recusandae fuga incidunt sunt sapiente nostrum rem voluptas expedita quod quis placeat. Voluptatem inventore rerum cumque veritatis odio ut voluptate quibusdam magnam tempora quidem, quis, at laudantium ipsum. Ratione amet repudiandae architecto fugiat enim ad quas numquam iusto modi animi assumenda aspernatur, error unde nemo aperiam dolores fugit veniam voluptatibus. Itaque consequatur, repellendus natus atque voluptatem ut ab sequi vel voluptates inventore optio? Sequi voluptatem tempora odit consequuntur unde? Dolorem, ullam praesentium. Voluptatum iusto quaerat velit?</p>
    </div>
    <div>
        <button onClick={toggleHandler} style={myButton}>{btnText}</button>
    </div>
    </>
  )
}
