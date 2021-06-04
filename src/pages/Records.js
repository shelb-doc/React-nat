import { Text } from '@chakra-ui/react';
import api from 'api';
import Table from 'components/RecordsTable';
import { useQuery } from 'react-query';

const fetchRecords = async () => await api.index();

function Records() {
  const { status, data, error } = useQuery('records', fetchRecords);
  switch (status) {
    case 'loading':
      return <Text>Loading...</Text>;
    case 'error':
      return <Text color="tomato">{error.message}</Text>;
    default:
      return (
        <main className="container mx-auto">
          <Table records={data} />
        </main>
      );
  }
}
export default Records;
