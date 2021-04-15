import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('<UserCard/>', () => {
  it('renders user correctly', () => {
    const props = {
      avatarUrl:
        'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
      firstName: 'Homer',
      lastName: 'Simpson',
      location: 'Springfield',
      teamLead: false,
    };

    render(<UserCard {...props} />);

    const img = screen.getByAltText("Homer's avatar");
    const name = screen.queryByText('Homer Simpson');
    const location = screen.queryByText('From: Springfield');
    const lead = screen.queryByText('Team Lead');

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(lead).toBeNull();
  });

  it('renders team lead correctly', () => {
    const props = {
      avatarUrl:
        'https://upload.wikimedia.org/wikipedia/en/a/ad/Fred_Flintstone.png',
      firstName: 'Fred',
      lastName: 'Flintstone',
      location: 'Bedrock',
      teamLead: true,
    };

    render(<UserCard {...props} />);

    const img = screen.getByAltText("Fred's avatar");
    const name = screen.queryByText('Fred Flintstone');
    const location = screen.queryByText(/From: Bedrock/i);
    const lead = screen.queryByText('Team Lead');
    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(lead).toBeInTheDocument();
  });
});
