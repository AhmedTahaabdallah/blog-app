import cssClasses from './posts-grid.module.css';
import PostItem from './post-item'

const PostsGrid = (props) => {
    const { posts } = props;
    return (
      <ul className={cssClasses.grid}>
          {
              posts.map(post => (
                <PostItem 
                    key={post.slug}
                    post={post}
                />
              ))
          }
      </ul>
    )
};
  
export default PostsGrid;