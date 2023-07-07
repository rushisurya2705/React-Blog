import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/12403599/pexels-photo-12403599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Post img="https://images.pexels.com/photos/10276927/pexels-photo-10276927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Post img="https://images.pexels.com/photos/16681314/pexels-photo-16681314/free-photo-of-pasta-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/5377786/pexels-photo-5377786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </div>
  );
}
