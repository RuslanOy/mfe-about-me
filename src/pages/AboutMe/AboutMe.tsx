import { Flex, Skeleton } from '@chakra-ui/react';
import React, { Suspense } from 'react';

const CardWidget = React.lazy(() =>
  import('@/widgets/Card').then((module) => ({ default: module.CardWidget }))
);
const ExperienceWidget = React.lazy(() =>
  import('@/widgets/Experience').then((module) => ({ default: module.ExperienceWidget }))
);
const MiniHeader = React.lazy(() =>
  import('@/widgets/MiniHeader').then((module) => ({ default: module.MiniHeader }))
);

export const AboutMe = (): React.ReactElement => {
  return (
    <Flex direction="column" padding="1rem" gap="10" alignItems="center">
      <Suspense fallback={<Skeleton height="40px" />}>
        <MiniHeader />
      </Suspense>
      <Suspense fallback={<Skeleton height="200px" />}>
        <CardWidget />
      </Suspense>
      <Suspense fallback={<Skeleton height="200px" />}>
        <ExperienceWidget />
      </Suspense>
    </Flex>
  );
};
