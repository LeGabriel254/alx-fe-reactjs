import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent.JSX';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}