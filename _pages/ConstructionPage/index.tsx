import { Box, Group, Text, Title } from "@mantine/core";
import { Backhoe } from "tabler-icons-react";

export default function ConstructionPage() {
    return (
        <Box py="xl">
            <Title align="center" order={2}>
                Under Construction
            </Title>
            <Text align="center" size="lg">
                This page is still under construction. Come back soon!
            </Text>
            <Group position="center" mt="xl">
                <Backhoe size={200} />
            </Group>
        </Box>
    );
}