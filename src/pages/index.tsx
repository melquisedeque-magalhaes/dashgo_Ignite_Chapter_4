import { Flex, Input, Button, Stack, FormLabel } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      w="100vw"
      height="100vh"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">

          <div>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email" 
              bg="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                bg: "gray.900"
              }}
              size="lg"
            />
          </div>
        
          <div>
            <FormLabel htmlFor="password">E-mail</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              bg="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                bg: "gray.900"
              }}
              size="lg"
            />
          </div>
          
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
