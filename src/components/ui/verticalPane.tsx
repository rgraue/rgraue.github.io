import React from "react";
import { Project } from "../../content/projects-content";
import { Badge, Button, Card, Flex, Image, Text, Wrap } from "@chakra-ui/react";

export const VerticalPane = ({project}: {project: Project}) => {

    return (
        <Card.Root maxW="sm" overflow="hidden">
        <Image
            src={project.img}
            alt={project.title}
        />
        <Card.Body gap="2">
            <Card.Title>{project.title}</Card.Title>
            <Card.Description>{project.description}</Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
            <Flex gap={'5px'} direction={'column'} justify="flex-end" h={'100%'}>
                <Wrap align="center" maxW={'24vh'}>
                    {project.badges.map(value => <Badge colorPalette="purple">{value}</Badge>)}
                </Wrap>
                <Button asChild w={'10vh'}>
                    <a href={project.link} target="_blank">visit repo</a>
                </Button>
            </Flex>
        </Card.Footer>
        </Card.Root>
  )
}