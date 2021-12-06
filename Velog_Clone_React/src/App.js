import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Write from './pages/Write';
import SeriesCategory from './pages/SeriesCategory';
import ArticlesContainer from './components/home/ArticlesContainer';
import Article from './pages/Article';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<Home />} />
                    <Route path='/' element={<ArticlesContainer />} />
                    <Route path='/series' element={<SeriesCategory />} />
                    <Route path='/article/:id' element={<Article />} />
                    <Route path='/article/edit/:id' element={<Write />} />
                    <Route path='/write' element={<Write />} />
                    <Route element={() => <div>Page Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
