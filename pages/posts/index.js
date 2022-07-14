import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

const PostsPage = (props) => {
    return (
      <Fragment>
        <Head>
        <title>All Posts</title>
        <meta 
        name="description"
        content="A list of all programing-related posts"
        />
        </Head>
        <AllPosts posts={props.posts}/>
      </Fragment>      
    )
};
  
export default PostsPage;

export const getStaticProps = () => {
    const allPosts = getAllPosts();
  
    return {
      props: {
        posts: allPosts
      },
      revalidate: 1800
    };
  };