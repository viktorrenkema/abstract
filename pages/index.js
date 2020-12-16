import * as React from "react";

// Components
import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";
import Intro from "../components/intro";
import CourseIntro from "../components/courseIntro";
import CountCurrentTime from "../components/countCurrentTime";
import Course from "../components/course";

// Context states
import { VideoID } from "../state/context";
import { isVideoPlaying } from "../state/context";
import { CurrentVideoTime } from "../state/context";

import { GlobalState } from "../state/context";

// Constants
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts }) {
  const [stateVideoID, setStateVideoID] = React.useState("none");
  const [stateVideoPlaying, setStateVideoPlaying] = React.useState(false);
  const [stateCurrentVideoTime, setStateCurrentVideoTime] = React.useState(0);
  const [time, setTime] = React.useState(0);

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <GlobalState.Provider value={[time, setTime]}>
          <Container>
            <Header />
            <Intro />
            <CourseIntro></CourseIntro>
            <CurrentVideoTime.Provider
              value={[stateCurrentVideoTime, setStateCurrentVideoTime]}
            >
              <CountCurrentTime />
              <VideoID.Provider value={[stateVideoID, setStateVideoID]}>
                <isVideoPlaying.Provider
                  value={[stateVideoPlaying, setStateVideoPlaying]}
                >
                  <Course></Course>
                </isVideoPlaying.Provider>
              </VideoID.Provider>
            </CurrentVideoTime.Provider>
          </Container>
        </GlobalState.Provider>
      </Layout>
    </>
  );
}
