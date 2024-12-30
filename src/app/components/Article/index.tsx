"use client";

import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";

type Author = {
  name: string;
  position: string;
  image: string;
};

type Section = {
  title: string;
  content: string;
};

type ArticleLayoutProps = {
  title: string;
  introduction: string;
  date: string;
  tags: string[];
  author: Author;
  sections: Section[];
};

export default function ArticleLayout({
  title,
  introduction,
  date,
  tags,
  author,
  sections,
}: ArticleLayoutProps) {
  return (
    <Box className="article-layout" p="5">
      {/* Title */}
      <Heading size="8" mb="4">
        {title}
      </Heading>

      {/* Introduction */}
      <Text size="4" mb="4">
        {introduction}
      </Text>

      {/* Metadata (date and tags) */}
      <Flex mb="4" justify="between" align="center">
        <Text size="2" color="gray" mt="2">
          {date}
        </Text>
        <Flex gap="2">
          {tags.map((tag, index) => (
            <Badge key={index} size="2" variant="outline">
              {tag}
            </Badge>
          ))}
        </Flex>
      </Flex>

      <Separator size="2" mb="4" />

      {/* Author */}
      <Flex align="center" mb="6">
        <Avatar
          size="9"
          src={author.image}
          alt={`${author.name}, ${author.position}`}
          mr="3"
          fallback="A"
          radius="full"
        />
        <Box>
          <Flex direction="column">
            <Text size="3" weight="bold">
              {author.name}
            </Text>
            <Text size="2" color="gray">
              {author.position}
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Separator size="2" mb="4" />

      {/* Sections */}
      {sections.map((section, index) => (
        <Box key={index} mb="6">
          <Heading size="5" mb="3">
            {section.title}
          </Heading>
          <Text size="3">{section.content}</Text>
        </Box>
      ))}
    </Box>
  );
}
