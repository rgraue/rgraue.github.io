import { List } from "@chakra-ui/react"
import React from "react"

export interface Project {
    title: string,
    link: string,
    description: string | React.ReactNode,
    badges: string[],
    img: string
}

export const projects: Project[] = [
    {
        title: 'Build-A-Git',
        link: 'https://github.com/rgraue/build-a-git',
        
        description: <>
            <p>An intuitive and fun way to interact with your git repos.</p>
            <br/>
            <p>Ran as an electron application paired to a local python (FastApi) server.</p>
        </>,
        badges: ['Python', 'React'],
        img: './dist/imgs/buildAGit.png'
    },
    {
        title: 'Wedding Application',
        link: 'https://github.com/rgraue/wedding-api',
        description: <>
            <p>Our wedding application, we used for our actual wedding!</p>
            <p>A react web app supported by a serverless REST backend.</p>
            <br/>
            <List.Root>
                <List.Item>Public site to distribute info to our guests</List.Item>
                <List.Item>Authenticated features for secure party management</List.Item>
                <List.Item>S3 Hosted site, using R53 + cloudfront. Deployment pipeline uses GitHub Actions + terraform</List.Item>
            </List.Root>
            <br/>
            <em>UI repo is private</em>
        </>,
        badges: ['DynamoDB', 'Lambda', 'Terraform', 'GH Actions', 'Node', 'React'],
        img: './dist/imgs/wedding.png'
    },
    {
        title: 'Chat App',
        link: 'https://github.com/rgraue/chat-app',
        description: <>
            <p>A conversational chat application made in react for use with local ollama llm.</p>
            <br/>
            <List.Root>
                <List.Item>Choose from available models on local ollama server</List.Item>
                <List.Item>Workspace ability for swapping between conversations</List.Item>
                <List.Item>Developed against personal nvidia orin dev board running llm on local network</List.Item>
            </List.Root>

        </>,
        badges: ['AI', 'Python', 'React'],
        img: './dist/imgs/chatApp.png'
    },
    {
        title: 'Rusty PStore',
        link: 'https://github.com/rgraue/rusty-pstore',
        description: <>
            <p>A simple command line tool to store and retrieve passwords</p>
            <br/>
            <p>Created with rust and published on homebrew</p>
        </>,
        badges: ['Rust'],
        img: './dist/imgs/rustyPStore.png'
    },
    {
        title: 'Interests',
        link: 'https://github.com/rgraue',
        description: <>
            <p>I'm constantly playing with and learning new technologies. Some of my many interests are...</p>
            <br/>
            <List.Root>
                <List.Item>OpenSearch - particularly its intrgations with LLM's and vector searching capabilities</List.Item>
                <List.Item>AI agents - curriating cool agents and stitiching them into the backend of my chat-app</List.Item>
                <List.Item>Eventful Systems - architecting, to building, to the problems solved by nature to these systems is fascinating</List.Item>
                <List.Item>Performance computing - I love to go fast, and love to squeeze all the horsepower I can get out of hardware</List.Item>
            </List.Root>
        </>,
        badges: [],
        img: './dist/imgs/justCool.png'
    },
]