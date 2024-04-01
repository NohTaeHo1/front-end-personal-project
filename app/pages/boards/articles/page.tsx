"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { fetchAllArticles } from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice";
import { IArticle } from "@/redux/features/articles/article.model";
//import React from "react";


const ArticlesPage: NextPage = () => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticles);

  if (allArticles !== undefined) {
    console.log("allArticles is not undefined");

    console.log("length is " + allArticles.length);
    for (let i = 0; i < allArticles.length; i++) {
      console.log(JSON.stringify(allArticles[i]));
    }
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(fetchAllArticles(1));
  }, []);

  return (
    <>
      <h2>개인페이지 Article</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>registerDate</th>
          </tr>
        </thead>
        <tbody>
          {allArticles?.map((props: IArticle) => (
            <tr key={props.id}>
              <td>{props.title}</td>
              <td>{props.content}</td>
              <td>{props.writer}</td>
              <td>{props.register_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ArticlesPage;
