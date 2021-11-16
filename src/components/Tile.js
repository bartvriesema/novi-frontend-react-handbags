import React from 'react';

function Tile(props) {
    if (props.imgLocation) {
        return (
            <section>
                <img src={props.imgLocation} alt={""}/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{props.title}</h2>
                {props.children}
            </section>
        )

    }
}

export default Tile;