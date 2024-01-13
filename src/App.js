import { Component } from 'react';
import { QuizList } from './components/List/QuizList';
import { GlobalStyle } from './GlobalStyle';
import { Search } from './components/SearchBar/SearchBar';
import initialQuizItems from './quiz-items.json';
import { Layout } from './Layout';

class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };
  updateTopicFilter = newTopic => {
    this.setState(prevState => {
      console.log(newTopic);

      return {
        filters: {
          ...prevState.filters,
          topic: newTopic,
        },
      };
    });
  };
  updateLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };
  render() {
    const { quizItems, filters } = this.state;

    const visibleQuizItems = quizItems.filter(item => {
      const hasTopic = item.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());
      console.log(hasTopic);

      if (filters.level === 'all') {
        return hasTopic;
      }

      const matchesLevel = item.level === filters.level;
      return hasTopic && matchesLevel;
    });
    return (
      <Layout>
        <Search
          filters={filters}
          onUpdateLevel={this.updateLevelFilter}
          onUpdateTopic={this.updateTopicFilter}
        />
        {visibleQuizItems.length > 0 && <QuizList items={visibleQuizItems} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
export default App;
