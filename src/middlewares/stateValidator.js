import stateSchema from "./stateSchema";
//import tv4 from 'tv4';

export default ({dispatch, getState})=> next => action =>{
    next(action);

    // var valid = tv4.validate(getState(),stateSchema);
    // console.log(valid);

}