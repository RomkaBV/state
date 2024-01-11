import { Component } from 'react';
import { QuizList } from './components/List/QuizList';
import { GlobalStyle } from './GlobalStyle';
import initialQuizItems from './quiz-items.json';
import { Layout } from './Layout';

class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };

  render() {
    return (
      <Layout>
        <QuizList items={initialQuizItems} />
        <GlobalStyle />
      </Layout>
    );
  }
}
export default App;
// function App() {
//   return (
//     <div>
//       <QuizList />
//     </div>
//   );
// }

// export default App;
