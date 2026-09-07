import React from "react";
import { projects } from '../content/projects-content';
import { Accordion, Flex, Marquee, Span } from "@chakra-ui/react";
import { HorizontalPane } from "./ui/horizontalPane";
import { useDevice } from "../hooks/device";
import { VerticalPane } from "./ui/verticalPane";

export const Projects = () => {
    const device = useDevice();

    const browserView = () => (
        <Flex direction={'column'}>
            <Marquee.Root pauseOnInteraction py="10" speed={30}>
                <Marquee.Edge side="start" />
                <Marquee.Viewport>
                <Marquee.Content>
                    {projects.map((item, i) => (
                    <Marquee.Item key={i} px="1rem">
                        <HorizontalPane project={item}/>
                    </Marquee.Item>
                    ))}
                </Marquee.Content>
                </Marquee.Viewport>
                <Marquee.Edge side="end" />
            </Marquee.Root>
        </Flex>
    );

    const mobileView = () => (
        <Flex margin={'2vh'}>
            <Accordion.Root collapsible defaultValue={[projects[0]!.title]}>
                {projects.map((item, i) => (
                    <Accordion.Item key={i} value={item.title}>
                    <Accordion.ItemTrigger>
                        <Span flex="1">{item.title}</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <VerticalPane project={item}/>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </Flex>
    )

    return device == 'BROWSER' ? browserView() : mobileView();
}