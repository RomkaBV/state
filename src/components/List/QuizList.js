import { List, ListItem } from './QuizList.styled';
import { QuizCard } from '../Card/QuizCard';

export const QuizList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <QuizCard quiz={item} />
        </ListItem>
      ))}
    </List>
  );
};
