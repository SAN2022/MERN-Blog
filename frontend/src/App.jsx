import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import CategoryPosts from './pages/CategoryPosts';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <Header />
        {/* Make main content grow to push footer down */}
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<PostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/posts/category/:id' element={<CategoryPosts />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
    </Router>
    </div>

    // <div className="App">
    //       <Router>
    //         <Header/>
    //           <Routes>
    //               <Route path='/' element={<PostList/>} />
    //               <Route path='/posts/:id' element={<PostDetail/>} />
    //               <Route path='/posts/category/:id' element={<CategoryPosts/>} />
    //               <Route path='/about' element={<About />} />
    //           </Routes>
    //         <Footer/>
    //       </Router>
    // </div>
  );
}

export default App;
