import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<ButtonComponent
					content={"Cliccami !!"}
					buttonStyle={{
						marginBottom: "2rem",
						marginTop: "2rem",
						backgroundColor: "teal",
						color: "white",
						padding: "2rem 4rem",
						border: "none",
						fontSize: "2rem",
					}}
				/>
				<ButtonComponent />
				<ButtonComponent
					content={"Terzo tasto con solo un po' di margin!"}
					buttonStyle={{
						marginBottom: "2rem",
						marginTop: "2rem",
					}}
				/>
				<ImageComponent
					src={
						"https://www.mediakey.tv/fileadmin/user_upload/EPICODE.png"
					}
					alt={"logo epicode"}
				/>
			</header>
		</div>
	);
}

export default App;
