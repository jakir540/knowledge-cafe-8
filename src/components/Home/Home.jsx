import Blogs from "../Blogs/Blogs";
import QuestionAns from "../QuestionAns/QuestionAns";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between row container mx-auto">
        <div className="col-lg-8 border border-primary">
          <Blogs></Blogs>
        </div>

        <div className="col-lg-4 border border-info">
          <SideBar></SideBar>
        </div>
      </div>
      <QuestionAns></QuestionAns>
    </div>
  );
};

export default Home;
