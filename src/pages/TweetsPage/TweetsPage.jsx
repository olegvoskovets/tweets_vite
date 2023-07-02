import Tweet from "../../components/Tweet/Tweet";
import css from "./TweetsPage.module.css";

const TweetsPage = () => {
  return (
    <div className={css.tweets_list}>
      <Tweet />
      {/* <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet /> */}
    </div>
  );
};

export default TweetsPage;
