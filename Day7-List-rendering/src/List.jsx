import mobiles from'./mobiles.json';
function List(){

// const mobiles ["vivo", "iphone", "oneplus", "sumsung");



const ListIteams = mobiles.map(mobile=> <li key ={mobile.id}>{mobile.name}</li>);

return(<ol>{ListIteams}</ol>);
}

export default List