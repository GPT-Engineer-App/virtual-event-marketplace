import { Box, Container, Heading, SimpleGrid, Text, Button, Image, useToast, Input, Textarea, FormLabel, FormControl } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaRegBuilding } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate sending data to a server
    console.log({ name, email, message });
    toast({
      title: "Request Submitted",
      description: "We've received your request and will get back to you shortly!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Welcome to the Virtual Event Metaverse
      </Heading>
      <Text fontSize="xl" mb={10} textAlign="center">
        Explore and rent booths for your business in our immersive virtual event space!
      </Text>

      <Box as="section" mb={10}>
        <Heading as="h2" size="lg" mb={4}>
          Available Booths
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box boxShadow="md" p={5} rounded="md">
            <Image src="https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYm9vdGh8ZW58MHx8fHwxNzE0NTEwNzM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Virtual Booth 1" />
            <Text mt={2}>Booth A1</Text>
            <Button leftIcon={<FaRegBuilding />} colorScheme="teal" mt={3}>
              Rent Now
            </Button>
          </Box>
          <Box boxShadow="md" p={5} rounded="md">
            <Image src="https://images.unsplash.com/photo-1649573651096-c6e256708ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx2aXJ0dWFsJTIwYm9vdGh8ZW58MHx8fHwxNzE0NTEwNzM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Virtual Booth 2" />
            <Text mt={2}>Booth A2</Text>
            <Button leftIcon={<FaRegBuilding />} colorScheme="teal" mt={3}>
              Rent Now
            </Button>
          </Box>
          <Box boxShadow="md" p={5} rounded="md">
            <Image src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx2aXJ0dWFsJTIwYm9vdGh8ZW58MHx8fHwxNzE0NTEwNzM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Virtual Booth 3" />
            <Text mt={2}>Booth A3</Text>
            <Button leftIcon={<FaRegBuilding />} colorScheme="teal" mt={3}>
              Rent Now
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" mb={10}>
        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" name="name" placeholder="Your Name" />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" name="message" placeholder="Your Message" />
          </FormControl>
          <Button type="submit" colorScheme="blue" leftIcon={<FaEnvelope />}>
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Index;
