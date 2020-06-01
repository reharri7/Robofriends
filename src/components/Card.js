import React from 'react';


const Card = ({name, email, id}) => {
    return(
        <div className ='tc bg-light-green dib br3 pa3 ba2 grow bw5 shadow-5 ma2'>
            <img src ={`https://robohash.org/${name}?100x100`} alt="robots"/>
            <div className = 'tc'>
                <h2>{name}</h2>
                <p className='ttl'>{email}</p>
            </div>
        </div>
    );
}

export default Card;