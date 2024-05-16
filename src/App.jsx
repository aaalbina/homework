import PostCard from "./PostCard";
import  {USER_INFO} from "./data.js";

function App() {
    return (
      <main>
        <section id="postcard">
          <ul>
            <PostCard
              image={USER_INFO.grandad.image}
              username={USER_INFO.grandad.username}
              post={USER_INFO.grandad.post}
              description={USER_INFO.grandad.description}
              message={USER_INFO.grandad.message}
            />
            <PostCard
              image={USER_INFO.dad.image}
              username={USER_INFO.dad.username}
              post={USER_INFO.dad.post}
              description={USER_INFO.dad.description}
              message={USER_INFO.dad.message}
            />
          </ul>
        </section>
      </main>
    );
  }

export default App;