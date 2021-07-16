import Accomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      {/* <Section grid>
        <Hero />
        <BgAnimation />
      </Section> */}
      {/* <Projects /> */}
      {/* <Technologies />
      <Timeline />
      <Accomplishments /> */}
      {/* <iframe
        title="React-i-flux"
        src="https://discord.com/channels/102860784329052160/377580704722190347"
      /> */}
      <iframe
        title="discord channel"
        src="http://discord.com/widget?id=865431716839030844&theme=dark"
        width="600"
        height="600"
        // allowtransparency="true"
        // frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>

      {/* <iframe
        src="https://discord.com/api/webhooks/865436437134049301/GdVnQiXUU2MpgLrBH5YINrgfz4mDBCopt_V3ya0v1jYnPEayuUArMLjCIbtZRTxAbvCI"
        title="ra"
      /> */}
    </Layout>
  );
};

export default Home;
