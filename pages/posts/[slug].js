import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";;
import { getPostsData, getPostsFiles } from "../../lib/post-util";
const PostDetailsPage = (props) => {
    return (
      <Fragment>
        <Head>
        <title>{props.post.title}</title>
        <meta 
        name="description"
        content={props.post.excerpt}
        />
        </Head>
        <PostContent post={props.post}/>
      </Fragment>       
    )
};
  
export default PostDetailsPage;

export const getStaticProps = (context) => {
    const { params } = context;
    const { slug } = params;

    const postData = getPostsData(slug);
  
    return {
      props: {
        post: postData
      },
      revalidate: 600
    };
};

export const getStaticPaths = () => {
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));
  
    return {
      paths: slugs.map(slug => ({ params: { slug: slug }})),
      fallback: false
    };
};

