import React from "react";
import { Project } from "../../content/projects-content";
import { Badge, Box, Button, Card, Image, Flex, Wrap } from "@chakra-ui/react";


export const HorizontalPane = ({project}: {project: Project}) => {

    return (
        <Card.Root flexDirection="row" overflow="hidden" h={'100%'}>
            <Image
                objectFit="cover"
                maxW="600px"
                src={project.img}
                alt={project.title}
            />
            <Box>
            <Card.Body maxW={'30vh'} h={'75%'}>
                <Card.Title mb="2">{project.title}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
            </Card.Body>
            <Card.Footer gap={'5vh'} h={'25%'}>
                <Flex gap={'5px'} direction={'column'} justify="flex-end" h={'100%'}>
                    <Wrap align="center" maxW={'24vh'}>
                        {project.badges.map(value => <Badge colorPalette="purple">{value}</Badge>)}
                    </Wrap>
                    <Button asChild w={'10vh'}>
                        <a href={project.link} target="_blank">visit repo</a>
                    </Button>
                </Flex>
            </Card.Footer>
            </Box>
        </Card.Root>
    )
}