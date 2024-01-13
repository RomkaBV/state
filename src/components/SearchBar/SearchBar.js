import { FaSearch } from 'react-icons/fa';
import {
  Conteiner,
  SearchBar,
  SearchInput,
  SearchSelect,
} from './SearchBar.style';

export const Search = ({ topic, level, onUpdateTopic, onUpdateLevel }) => {
  return (
    <Conteiner>
      <SearchBar>
        <FaSearch fill="royalblue" />
        <SearchInput
          value={topic}
          type="text"
          placeholder="Topic filter..."
          onChange={e => onUpdateTopic(e.target.value)}
        />
      </SearchBar>
      <SearchSelect value={level} onChange={e => onUpdateLevel(e.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </SearchSelect>
    </Conteiner>
  );
};
