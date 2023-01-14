import Link from 'next/link';


const Post = ({post}) => {

    return (
        <div className="card mt-5 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">

      <Link href ={`/posts/${post?.id}`}><button className="btn btn-primary"> See Details</button>
     </Link>

     
      
        
      
     
    </div>
  </div>
</div>
    );
};

export default Post;