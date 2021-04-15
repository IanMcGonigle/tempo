import { fireEvent, render, screen } from '@testing-library/react';
import FilteredList from './FilteredList';

const simpsons = [
  { name: 'Homer' },
  { name: 'Marge' },
  { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' },
];

const renderItem = (item) => {
  return <div key={item.name}>{item.name}</div>;
};

const filterSimpsons = ({ item, value }) => {
  const haystack = `${item?.name}`;
  const filterd = haystack.includes(value);
  return filterd;
};

const props = {
  data: simpsons,
  itemRenderer: renderItem,
  onFilter: filterSimpsons,
};

describe('<FilteredList/>', () => {
  it('renders items correctly', () => {
    render(<FilteredList {...props} />);
    const homer = screen.queryByText('Homer');
    const marge = screen.queryByText('Marge');
    const bart = screen.queryByText('Bart');
    const lisa = screen.queryByText('Lisa');
    const maggie = screen.queryByText('Maggie');

    expect(homer).toBeInTheDocument();
    expect(marge).toBeInTheDocument();
    expect(bart).toBeInTheDocument();
    expect(lisa).toBeInTheDocument();
    expect(maggie).toBeInTheDocument();
  });

  it('filters items correctly', () => {
    const { container } = render(<FilteredList {...props} />);
    const input = container.querySelector('#filterInput');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'g' } });
    const homer = screen.queryByText('Homer');
    const marge = screen.queryByText('Marge');
    const bart = screen.queryByText('Bart');
    const lisa = screen.queryByText('Lisa');
    const maggie = screen.queryByText('Maggie');

    expect(homer).toBeNull();
    expect(marge).toBeInTheDocument();
    expect(bart).toBeNull();
    expect(lisa).toBeNull();
    expect(maggie).toBeInTheDocument();
  });

  it('displays no results correctly', () => {
    const { container } = render(<FilteredList {...props} />);
    const input = container.querySelector('#filterInput');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Abe' } });
    const homer = screen.queryByText('Homer');
    const marge = screen.queryByText('Marge');
    const bart = screen.queryByText('Bart');
    const lisa = screen.queryByText('Lisa');
    const maggie = screen.queryByText('Maggie');
    const noResult = screen.queryByText('No results for Abe');


    expect(homer).toBeNull();
    expect(marge).toBeNull();
    expect(bart).toBeNull();
    expect(lisa).toBeNull();
    expect(maggie).toBeNull();
    expect(noResult).toBeInTheDocument();
  });
});
