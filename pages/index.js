import * as React from "react";
import Container from "../components/container";
import Header from "../components/header";
import Intro from "../components/intro";
import CourseIntro from "../components/courseIntro";
import Course from "../components/course";
import GlobalState from "../state/context";

import VideoControls from "../components/videoControls";

import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts }) {
  const [state, setState] = React.useState({});

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Intro />
          <CourseIntro></CourseIntro>
          {/* <VideoControls></VideoControls> */}
          <GlobalState.Provider value={[state, setState]}>
            <Course></Course>
          </GlobalState.Provider>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
