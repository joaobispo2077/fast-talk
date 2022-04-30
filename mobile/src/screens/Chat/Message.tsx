import { Avatar, Box, Flex, Text } from 'native-base';

type ChatMessageProps = {
  isMyMessage: boolean;
  message: string;
  createdAt?: Date;
  avatar?: string;
};

export const Message = ({
  isMyMessage,
  message,
  avatar,
  createdAt,
}: ChatMessageProps) => {
  return (
    <Flex
      width="100%"
      direction={isMyMessage ? 'row-reverse' : 'row'}
      alignItems={'flex-end'}
      marginTop={2}
    >
      <Avatar
        size="48px"
        source={{
          uri: avatar,
        }}
        marginRight={isMyMessage ? '0' : '10px'}
        marginLeft={isMyMessage ? '10px' : '0'}
      />
      <Box
        backgroundColor={isMyMessage ? 'blue.100' : 'blue.300'}
        height="auto"
        borderRadius={10}
        borderWidth={1}
        borderBottomLeftRadius={isMyMessage ? 10 : 0}
        borderBottomRightRadius={isMyMessage ? 0 : 10}
        borderColor="gray.200"
        p={4}
        mb={4}
        display="flex"
        alignItems="flex-start"
        flexWrap={'wrap'}
        width="auto"
      >
        <Text
          maxWidth="250px"
          fontSize={16}
          color="gray.700"
          textAlign={isMyMessage ? 'right' : 'left'}
          lineBreakMode={'tail'}
          textBreakStrategy="balanced"
        >
          {message}
        </Text>
        <Text
          fontSize={12}
          color="gray.500"
          textAlign={isMyMessage ? 'right' : 'left'}
          mt={2}
        >
          {createdAt ? createdAt.toLocaleString() : ''}
        </Text>
      </Box>
    </Flex>
  );
};
