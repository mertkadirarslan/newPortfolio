import {Heading} from "./Heading";
import {LinkTag} from "./LinkTag";
import {Text} from "./Text";

export const About = () => {
    const TEXT_MARGIN_BOTTOM = 1.5;

    return (
        <section className="flex flex-col mb-12">
            <Heading>About 💭</Heading>
            <Text style={{marginBottom: `${TEXT_MARGIN_BOTTOM}rem`}}>
                I&apos;m  {new Date().getFullYear() - 2004} year old. software lover living in TC,
                I am an expert in mobile application development.
            </Text>
            <Text style={{marginBottom: `${TEXT_MARGIN_BOTTOM}rem`}}>
            Hey, Welcome to Mert's Digital Environment. 
          A place to share what I've learned and what I've done.{" "}
                
            </Text>
           
        </section>
    );
};
