import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Mumbarra</Text>
          <Text color="gray.300" fontSize="small">
            lucassantosm.2014@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Mumbarra" src="https://github.com/lucasmumbarra.png" />
    </Flex>
  )
}