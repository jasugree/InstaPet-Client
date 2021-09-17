import { Button } from 'reactstrap';
import { useState } from 'react';


const LikeButton = () => {
    const [count, setCount] = useState(null);
    // console.log('pic likes')
    console.log({count})
    

    
    return (
        
        <div>
            <Button onClick={() => setCount(count + 1)}> Like Me </Button>
            <p>{count}</p>
            
        </div>
    )
}

export default LikeButton
