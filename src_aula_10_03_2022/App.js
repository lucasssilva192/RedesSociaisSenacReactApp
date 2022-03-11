import React from 'react';

const actions = {
    SUBTRAI: 'SUBTRAI',
    SOMA: 'SOMA',
    DOBRA: 'DOBRA',
    METADE: 'METADE',
    ZERAR: 'ZERAR'
}

function reduce(state, action){
    switch(action.type){
        case 'SUBTRAI':
            return {...state, count: state.count - 1};
            break;
        case 'SOMA':
            return {...state, count: state.count + 1};
            break;
        case 'DOBRA':
            return {...state, count: state.count * 2};
            break;
        case 'METADE':
            return {...state, count: state.count / 2};
            break;
        case 'ZERAR':
            return {...state, count: state.count = 0};
            break;
        default:
            break;
    }
}

function App(){
    const initialValue = {count : 0, nome: 'Lucas'}
    const [state, dispatch] = React.useReducer(reduce, initialValue);

    return (
        <>
            <h1>Contador</h1>
            <div>   
                <span style={{marginLeft: '10px', padding: '10px'}}>{state.count}</span>
                <button style={{marginLeft: '10px', padding: '10px'}} onClick={()=>dispatch({type: actions.SOMA})}>+</button>
                <button  style={{marginLeft: '10px', padding: '10px'}} onClick={()=>dispatch({type: actions.SUBTRAI})}>-</button>
            </div> 
            <br/>
            <br/>
            <button onClick={()=>dispatch({type: actions.DOBRA})}>Dobro</button>
            <button onClick={()=>dispatch({type: actions.METADE})}>Metade</button>
            <br/>
            <br/>
            <button onClick={()=>dispatch({type: actions.ZERAR})}>Zerar</button>
        </>
    )
}

export default App;