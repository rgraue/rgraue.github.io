import React from "react";
import { projects } from '../content/projects-content';
import { Flex, Marquee } from "@chakra-ui/react";
import { Pane } from "./ui/pane";

export const Projects = () => {

    return (
        <Flex direction={'column'}>
            <Marquee.Root pauseOnInteraction py="10" speed={20}>
                <Marquee.Edge side="start" />
                <Marquee.Viewport>
                <Marquee.Content>
                    {projects.map((item, i) => (
                    <Marquee.Item key={i} px="1rem">
                        <Pane project={item}/>
                    </Marquee.Item>
                    ))}
                </Marquee.Content>
                </Marquee.Viewport>
                <Marquee.Edge side="end" />
            </Marquee.Root>
        </Flex>
    )
}