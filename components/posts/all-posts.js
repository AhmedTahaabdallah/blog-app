import PostsGrid from "./posts-grid";;
import cssClasses from './all-posts.module.css';

const AllPosts = (props) => {
    return (
      <section className={cssClasses.posts}>
          <h1>All Posts</h1>
          <PostsGrid posts={props.posts}/>
      </section>
    )
};
  
export default AllPosts;