import React, { useContext } from "react";
import { Layout } from "../components/layout/";
import { TOGGLE_THEME } from "../context/types";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "./../context/GlobalContextProvider";

function About() {
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
        About <div className='text-custom-text-black'>{state.theme}</div>
        <button onClick={() => _onChangeTheme()} className={'border-gray-500 ml-5'}>Change Theme Demo</button>
      </div>
    </Layout>
  );
}

export default About;
