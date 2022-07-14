import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Ahmed Taha Blog</title>
        <meta 
        name="description"
        content="I post about programing and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
};

export default HomePage;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1800
  };
};
