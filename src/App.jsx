import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import Notfound from "./pages/404";

function App() {

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/create" element={<CreateBlog />}></Route>
						<Route path="/blogs/:id" element={<BlogDetails/>}></Route>
						<Route path="*" element={<Notfound />}></Route>
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App;
