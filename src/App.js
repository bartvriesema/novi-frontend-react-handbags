import React, {Fragment} from 'react';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import './App.css';
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'


function App() {
    return (
        <Fragment>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button consoleText="to the collection" buttonText="to the collection"/>
                <Button consoleText="shop all bags" buttonText="shop all bags"/>
                <Button consoleText="pre-orders" buttonText="pre-orders" disabled/>
            </nav>
            <main>
                <Product label="Best seller" productName="The handy bag" price="$400,-" imageLocation={bag1}/>
                <Product label="Best seller" productName="The stylish bag" price="$250,-" imageLocation={bag2}/>
                <Product label="New collection" productName="The simple bag" price="$300,-" imageLocation={bag3}/>
                <Product label="New collection" productName="The trendy bag" price="$150,-" imageLocation={bag4}/>
            </main>
            <footer>
                <Tile title={"Our brand"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, veritatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, necessitatibus!</p>
                </Tile>
                <Tile imgLocation={brand}/>
                <Tile imgLocation={ourStory}/>
                <Tile title={"Our story"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse obcaecati placeat quo sapiente.
                        Aut commodi obcaecati porro sed unde voluptate?</p>
                </Tile>
            </footer>
        </Fragment>
    );
}

export default App;



