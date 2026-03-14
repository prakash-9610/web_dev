import React,  from 'react' {}
import {Containor, PostCard} from '../components'
import appwriteService from '../appwrite/config';
 function AllPost() {
  const [posts, setPosts] = useState([])
  useEffect(() =>{}, [])
  appwriteService.getPosts([]).then((posts) => {
    if(posts) {
        setPosts(posts);
    }
  })
  
    return (
    <div className = 'w-full py-8'>
        <Containor>
            <div className = 'flex flex-wrap'>
                {posts.map((post) =>(
                    div
                    
                ))}
            </div>
            </Containor>
        </div>
  )
}

export default AllPost