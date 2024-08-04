import classNames from "classnames";
import { connect } from "react-redux";
import Counter from "./components/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher";
import styles from "./App.module.css";
import CONSTANTS from "./constants";

const { LIGHT, DARK, BLUE } = CONSTANTS.THEMES;

function App({ theme }) {
  const appClassName = classNames(styles.container, {
    [styles.light]: theme === LIGHT,
    [styles.dark]: theme === DARK,
    [styles.blue]: theme === BLUE,
  });

  return (
    <div className={appClassName}>
      <Counter />
      <ThemeSwitcher />
    </div>
  );
}

const mapStateToProps = ({ themeData }) => themeData;

export default connect(mapStateToProps)(App);
