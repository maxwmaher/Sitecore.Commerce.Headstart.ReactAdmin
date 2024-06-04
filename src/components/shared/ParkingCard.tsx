import {CheckCircleIcon, InfoIcon} from "@chakra-ui/icons"
import {Box, Button, Text, Card, Flex, Icon, VStack} from "@chakra-ui/react"
import {FaParking, FaPlane, FaStar, FaGem, FaClock, FaLock, FaWalking} from "react-icons/fa"

const ParkingCard = () => {
  return (
    <Card borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="full" maxW="container.xl">
      <Flex>
        <Box flex="1" bg="gray.700" color="white" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            P1
          </Text>
          <Box mt={2} mb={2}>
            <CheckCircleIcon boxSize="24px" color="green.400" />
            <Text mt={2}>Available</Text>
          </Box>
        </Box>

        <Box flex="2" p={4}>
          <Text fontSize="lg" fontWeight="bold">
            RESAPARK PREMIUM
          </Text>
          <VStack align="start" mt={4} spacing={2}>
            <Flex align="center">
              <Icon as={FaParking} mr={2} />
              <Text>Parking zone located on level -2 of P1.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPlane} mr={2} />
              <Text>Direct access to the main terminal</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaStar} mr={2} />
              <Text>Premium parking</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaGem} mr={2} />
              <Text>Most convenient</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaClock} mr={2} />
              <Text>Parking open 24/24</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaLock} mr={2} />
              <Text>Reservation capacity: 459 spots</Text>
            </Flex>
            <Flex align="center">
              <CheckCircleIcon mr={2} color="green.400" />
              <Text>Free modification and cancellation up until the day before arrival</Text>
            </Flex>
          </VStack>
        </Box>

        <Box flex="1" p={4} textAlign="center">
          <Icon as={FaWalking} boxSize="48px" color="blue.400" />
          <Text mt={2}>3 min</Text>
        </Box>

        <Box flex="1" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            20 CHF
          </Text>
          <Text mt={2}>
            To be paid today <InfoIcon ml={1} />
          </Text>
          <Text mt={2}>+ 53 CHF</Text>
          <Text>To be paid at the automatic cash registers (estimate)</Text>
          <Button colorScheme="blue" mt={4}>
            BOOK
          </Button>
        </Box>
      </Flex>
    </Card>
  )
}

export default ParkingCard
