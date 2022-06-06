import { Header } from "./components/Header";

export function Post(props) {
  return (
    <div>
      <Header />
      <h2>{props.author}</h2>
      <p>{props.content}</p>
    </div>
  );
}