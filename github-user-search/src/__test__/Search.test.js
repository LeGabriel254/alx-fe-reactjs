import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search';
import useGitHubStore from '../store/useGitHubStore';
import '@testing-library/jest-dom';

jest.mock('../store/useGitHubStore', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Search Component', () => {
  it('renders search input and button', () => {
    useGitHubStore.mockReturnValue({
      username: '',
      setUsername: jest.fn(),
      searchUser: jest.fn(),
      userData: null,
      loading: false,
      error: null,
    });

    render(<Search />);

    expect(screen.getByPlaceholderText('Enter GitHub username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    const setUsernameMock = jest.fn();
    useGitHubStore.mockReturnValue({
      username: '',
      setUsername: setUsernameMock,
      searchUser: jest.fn(),
      userData: null,
      loading: false,
      error: null,
    });

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Enter GitHub username'), {
      target: { value: 'testuser' },
    });

    expect(setUsernameMock).toHaveBeenCalledWith('testuser');
  });
});
