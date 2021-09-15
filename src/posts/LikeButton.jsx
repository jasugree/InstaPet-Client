import { Button } from 'reactstrap';
import { useState } from 'react';


const LikeButton = () => {
    const [liked, setLiked] = useState(null);
    // console.log('pic likes')
    console.log({liked})
    

    
    return (
        
        <div>
            <Button onClick={() => setLiked(!liked)}> Like Me </Button>
            <p>{liked}</p>
            
        </div>
    )
}

export default LikeButton
