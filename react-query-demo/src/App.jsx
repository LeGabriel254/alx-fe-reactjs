import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './component/PostsComponent.jsx';


  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }