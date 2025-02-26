import { fetchUserData } from '../services/githubService';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('GitHub API Service', () => {
  it('fetches user data successfully', async () => {
    const mockUserData = {
      login: 'testuser',
      public_repos: 10,
      avatar_url: 'https://example.com/avatar.png',
      html_url: 'https://github.com/testuser',
    };

    const mockRepoData = [
      { name: 'test-repo', updated_at: '2024-02-25T12:34:56Z', language: 'JavaScript' },
      { name: 'another-repo', updated_at: '2024-02-20T10:00:00Z', language: 'Python' }
    ];

    axios.get.mockResolvedValueOnce({ data: mockUserData }); // ✅ User data
    axios.get.mockResolvedValueOnce({ data: mockRepoData }); // ✅ Repo data

    const result = await fetchUserData('testuser');

    expect(result).toEqual({
      ...mockUserData,
      recentRepo: 'test-repo',
      lastUpdated: '2024-02-25T12:34:56Z',
      totalRepos: 10,
      topLanguages: 'JavaScript', // Only one top language is returned
    });
  });

  it('handles errors correctly', async () => {
    axios.get.mockRejectedValue(new Error('User not found'));

    await expect(fetchUserData('unknownuser')).rejects.toThrow('Failed to fetch data for user: unknownuser');
  });
});
