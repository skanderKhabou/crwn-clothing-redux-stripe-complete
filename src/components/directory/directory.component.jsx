import React from "react";
import MenuItem from "../menu-item/menu-item.component";
// import SECTIONS_DATA from "./sections.data.js";
import { connect } from "react-redux"; // import { Route, Switch, Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
// classic mapstatetoprops
// const mapStateToProps = (state) => ({
//   sections: state.directory.sections,
// });

export default connect(mapStateToProps)(Directory);
