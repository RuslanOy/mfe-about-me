import React, { Suspense } from 'react';
import { Center, Flex, Skeleton } from '@chakra-ui/react';
import '@shared/i18n';
const AboutMe = React.lazy(() =>
  import('@/pages/AboutMe').then((module) => ({ default: module.AboutMe }))
);

const App = (): React.ReactElement => {
  return (
    <Flex direction="column">
      <Center>
        <Suspense fallback={<Skeleton />}>
          <AboutMe />
        </Suspense>
      </Center>
    </Flex>
  );
};

export default App