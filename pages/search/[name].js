import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { api } from "../../api/api";
import { useState, useEffect } from "react";
import ListMovies from '../../components/pages/list-movies'
import {helper} from '../../helper/helper'
import Search from '../../components/pages/search'
export default function Home() {
  
  return (
    <Layout>
      <div className="block container-fluid" style={{ marginTop: "30px" }}>
        <div className="titleHolder ">
          <Search></Search>
        </div>
      </div>
    </Layout>
  );
}
