import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

function Counter() {

    const [value, setValue] = useState(0)

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
       
        setValue(value - 1);
    }

    return (
        <div>
            <Segment.Group >
                <Segment textAlign='center'>Counter App</Segment>
                <Segment textAlign='center'>{value}</Segment>
                <Segment.Group horizontal>
                    <Segment textAlign='right'>{value !== 0 ? (<Button negative onClick={decrement} >-</Button>) : (<Button negative disabled onClick={decrement} >-</Button>)}</Segment>
                    <Segment><Button positive onClick={increment}>+</Button></Segment>
                </Segment.Group>
            </Segment.Group>
            <p>Ashi Varshney - 12012748</p>
        </div>
    );
}

export default Counter;
