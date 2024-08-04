import { connect } from "react-redux";
import CONSTANTS from "./../../constants";
import { updateTheme } from "./../../store/slices/themeSlice";

const { THEMES } = CONSTANTS;

function ThemeSwitcher({ theme, setTheme }) {
  const changeTheme = ({ target: { value } }) => setTheme(value);

  return (
    <div>
      <select value={theme} onChange={changeTheme}>
        {Object.keys(THEMES).map(t => (
          <option value={THEMES[t]}>{t}</option>
        ))}
      </select>
    </div>
  );
}

// const mapStateToProps=(state)=>state.themeData
const mapStateToProps = ({ themeData }) => themeData;

const mapDispatchToProps = dispatch => ({
  setTheme: v => dispatch(updateTheme(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
