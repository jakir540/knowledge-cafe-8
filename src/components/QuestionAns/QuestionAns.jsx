import React from "react";
import "./QuestionAns.css";

const QuestionAns = () => {
  return (
    <div className="questionBlog mt-5 ">
      <h1 className="text-primary text-capitalize my-5 fw-bold">
        answers of the following questions:
      </h1>
      <div>
        <h2>Props vs state</h2>
        <p>
          Ans:Any React project has a lot of components.Props means like HTML
          property. one component to the other component send to any data using
          the props.these data transfer like object (props) usally we use the
          props item like any object{" "}
        </p>
      </div>
      <div>
        <h2>How does useState work?</h2>
        <p>
          Ans: useState is a function.this give two different kind of thinks.one
          kind of value, another thinks is setter function. The useState hook is
          a special function that takes the initial state as an argument and
          returns an array of two entries.any state change the dom file
          automatic render the file but any value become change not render
          automatically dom file{" "}
        </p>
      </div>
      <div>
        <h2>Purpose of useEffect other than fetching data.</h2>
        <p>
          Ans: the useEffect in react js allows we to perform side effects in
          your components.The react useEffect examples of side effects include
          retrieving data, direct DOM updates, and timers,thats second argument
          is optional thats it dependenci . useEffect hook rendering depend on
          dependenci argument
        </p>
      </div>
      <div>
        <h2>How Does React work?</h2>
        <p>
          Ans: ReactJS divides the UI into reusable pieces of code known as
          components.React components work similarly to JavaScript functions
          react internally maintained a virtual Dom .If Change the any state Virtual dom and real dom compare between them and react use a diff algorithm and understand the which state change then ract only change that state which the different the between.finally actual dom update it . 
        </p>
      </div>
    </div>
  );
};

export default QuestionAns;
