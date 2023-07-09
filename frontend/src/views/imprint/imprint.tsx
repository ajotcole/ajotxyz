import { GET_IMPRINT } from '../../models/graphQLrequests';
import { ImprintEntityResponse } from '../../models/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Heading, Spinner, Stack } from '@chakra-ui/react';
import { ContentRenderer } from '../../components/contentRenderer/contentRenderer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface ImprintGQLResponse {
  imprint: ImprintEntityResponse;
}

export const Imprint = () => {
  const { loading, error, data } = useQuery<ImprintGQLResponse>(GET_IMPRINT);
  return (
    <>
      {loading && <Spinner />}
      {error && <p>TODO error message</p>}
      {data && (
        <Stack padding={{ base: '0', sm: '0 30%' }}>
          <Heading>{data.imprint.data?.attributes?.title}</Heading>
          <ReactMarkdown children={data.imprint.data?.attributes?.content} />
        </Stack>
      )}
    </>
  );
};
