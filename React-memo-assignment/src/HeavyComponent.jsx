import React from "react";

function HeavyComponent(){
    console.log("HeavyComponent rendered");
    let items = [];
  for (let i = 0; i < 5000; i++) {
    items.push(<li key={i}>Heavy Item {i}</li>);
  }

    return(
        <div>
            <h3>Heavy Component</h3>
            <ul>{items}</ul>
        </div>
    )

}

export default React.memo(HeavyComponent);