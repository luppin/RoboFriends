import React from 'react';
import Card from './Card';



const CardList = ({robots}) => {
    
    return (
        <div>
            {
                robots.map((user,index) =>{
                    return (
                    <Card 
                    key ={index} 
                    id = {robots[index].id} 
                    name ={robots[index].name} 
                    email= {robots[index].email}
                    zipcode = {robots[index].address.zipcode}
                    />)
                })
            }
        </div>
    )
}

export default CardList; 