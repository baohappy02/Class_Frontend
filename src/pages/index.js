// import { useIntl } from "gatsby-plugin-react-intl";
// import { SEO } from "../components/common";
// import { seo_keywords } from "../utils";
import React, { useContext } from "react";
import { Layout } from "../components/layout/";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "./../context/GlobalContextProvider";
import { TOGGLE_THEME } from "../context/types";

// markup
const IndexPage = () => {
  // const intl = useIntl();

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const _onChangeTheme = () => {
    dispatch({
      type : TOGGLE_THEME
    })
  }

  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        Home <div>{state.theme}</div>
        <button onClick={() => _onChangeTheme()} className={'border-gray-500 ml-5'}>Change Theme Demo</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
