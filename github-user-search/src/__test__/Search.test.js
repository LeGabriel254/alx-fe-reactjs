import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search';
import useGitHubStore from '../store/useGitHubStore';
import '@testing-library/jest-dom';

jest.mock('../store/useGitHubStore', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Search Component', () => {
  let setUsernameMock;
  let searchUserMock;

  beforeEach(() => {
    setUsernameMock = jest.fn();
    searchUserMock = jest.fn();

    useGitHubStore.mockReturnValue({
      username: '',
      setUsername: setUsernameMock,
      searchUser: searchUserMock,
      userData: null,
      loading: false,
      error: null,
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Ensure no test affects another
  });

  it('renders search input and button', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText('Enter GitHub username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Enter GitHub username'), {
      target: { value: 'testuser' },
    });

    expect(setUsernameMock).toHaveBeenCalledWith('testuser');
  });

  it('calls searchUser on form submit', () => {
    render(<Search />);

    fireEvent.submit(screen.getByRole('form'));

    expect(searchUserMock).toHaveBeenCalled();
  });
});
